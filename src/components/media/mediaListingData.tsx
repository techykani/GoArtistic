import React, { useEffect, useState } from 'react'
import { useQuery } from 'react-query'
import { sanityClient } from '@/sanity'
import { MediaListingItem } from '../media/mediaListingItem'
import { groq } from 'next-sanity'
import { Paginator } from 'primereact/paginator'
import { classNames } from 'primereact/utils'

export const MediaListingData: React.FC<any> = ({ clinicList, filters, getClinicCount }) => {
  // FOR SCROLLING TO THE LIST DIV TOP
  const [showData, setShowData] = useState(clinicList)
  const [currentPage, setCurrentPage] = useState(1)
  const countPerPage = 9

  const { data: docFetching, isFetching } = useQuery<any[], Error>(
    ['allDoc', filters],
    () => handlePageChange(1, 'initial'),
    {
      refetchOnWindowFocus: false,
    },
  )
  const { selectedType, selectedValue, searchValues } = filters
  let selectedTabs: string
  const searchText = searchValues === '' ? '' : searchValues
  const center = selectedValue?.center === 'Select a center' ? '' : selectedValue?.center
  const year = selectedValue?.year === 'Select a year' ? '' : selectedValue?.year
  const month = selectedValue?.month === 'Select a month' ? '' : selectedValue?.month
  let totalPages = Math.ceil(clinicList?.length / countPerPage)
  if (docFetching) {
    totalPages = Math.ceil(docFetching[0]?.doc_count / countPerPage)
  } else {
    totalPages = Math.ceil(clinicList?.length / countPerPage)
  }

  let totalClinics = clinicList?.length
  if (docFetching) {
    totalClinics = docFetching[0]?.doc_count
  } else {
    totalClinics = clinicList?.length
  }

  useEffect(() => {
    if (docFetching) {
      setShowData(docFetching)
    }
  }, [docFetching])

  useEffect(() => {
    let totalClinics = clinicList?.length
    if (docFetching) {
      totalClinics = docFetching[0]?.doc_count
    }
    getClinicCount(totalClinics)
  }, [filters, getClinicCount, docFetching, clinicList])

  const handlePageChange = async (newPage: any, values: any): Promise<any> => {
    setCurrentPage(newPage)
    if (values === 'pagination') {
      window.scrollTo(0, 500)
    }
    const startIndex = (newPage - 1) * 9
    const endIndex = startIndex + 8

    let query = ''
    if (searchText) {
      query = groq`
        *[_type == "media" && [title] match "*${searchText}*"] | order(publishedAt desc)  [${startIndex}..${endIndex}] {
          ...,
          "primaryImg": primaryImg.asset->url,
            "doc_count": count(*[_type == "media" && [title] match "*${searchText}*"])
        }
      `
    } else {
      query = groq`
          *[_type == "media"] | order(publishedAt desc)  [${startIndex}..${endIndex}] {
            ...,
            "primaryImg": primaryImg.asset->url,
             "doc_count": count(*[_type == "media"])
         }
       `
    }

    const result = await sanityClient('anonymous').fetch(query, {
      locale: 'en',
      defaultLocale: 'en',
    })
    setShowData(result)
    return result
  }

  // const renderData = () => {
  //   const endIndex = first + rows
  //   return clinicList
  //     .slice(first, endIndex)
  //     .map((props: any, index: any) => <MediaListingItem key={index} props={props} />)
  // }

  // const template1 = {
  //   layout: 'PrevPageLink PageLinks NextPageLink',
  //   PrevPageLink: (options: any) => {
  //     return (
  //       <button
  //         type="button"
  //         className={classNames(options.className, 'border-round')}
  //         onClick={options.onClick}
  //         disabled={options.disabled}
  //       >
  //         <span>
  //           <img src="/chevron-left.svg" height={24} width={24} className="h-6 w-6" alt="left" />
  //         </span>
  //       </button>
  //     )
  //   },
  //   NextPageLink: (options: any) => {
  //     return (
  //       <button
  //         type="button"
  //         className={classNames(options.className, 'border-round')}
  //         onClick={options.onClick}
  //         disabled={options.disabled}
  //       >
  //         <svg
  //           xmlns="http://www.w3.org/2000/svg"
  //           width="24"
  //           height="24"
  //           viewBox="0 0 24 24"
  //           fill="none"
  //         >
  //           <path
  //             fill-rule="evenodd"
  //             clip-rule="evenodd"
  //             d="M9.87084 6.22279C10.3001 5.87529 10.9298 5.94157 11.2773 6.37084L14.3062 10.1124C15.1972 11.2131 15.1972 12.787 14.3062 13.8876L11.2773 17.6292C10.9298 18.0585 10.3001 18.1248 9.87084 17.7773C9.44157 17.4298 9.37529 16.8001 9.72279 16.3708L12.7517 12.6292C13.0487 12.2623 13.0487 11.7377 12.7517 11.3708L9.72279 7.62923C9.37529 7.19997 9.44157 6.57028 9.87084 6.22279Z"
  //             fill="#3C3C3C"
  //           />
  //         </svg>
  //       </button>
  //     )
  //   },
  //   PageLinks: (options: any) => {
  //     if (
  //       (options.view.startPage === options.page && options.view.startPage !== 0) ||
  //       (options.view.endPage === options.page && options.page + 1 !== options.totalPages)
  //     ) {
  //       const className = classNames(options.className, { 'p-disabled': true })

  //       return (
  //         <span className={className} style={{ userSelect: 'none' }}>
  //           ...
  //         </span>
  //       )
  //     }

  //     return (
  //       <button
  //         type="button"
  //         className={`cursor-pointer w-8 h-8 text-sm rounded-full flex justify-center items-center ${
  //           options.page + 1 === currentPage ? 'text-off-white bg-black-700' : ''
  //         }`}
  //         onClick={options.onClick}
  //       >
  //         {options.page + 1}
  //       </button>
  //     )
  //   },
  // }

  return (
    <>
      {totalPages ? (
        <div className="flex flex-col gap-8 md:gap-12">
          {/* card */}
          <div className="w-full grid grid-cols-1 sm2:grid-cols-2 xl3:grid-cols-3 gap-6">
            {showData?.map((props: any, idx: any) => (
              <MediaListingItem key={idx} props={props} />
            ))}
            {/* {renderData()} */}
          </div>

          <div className="w-full flex justify-center items-center">
            <div className="flex gap-4 items-center">
              <button
                onClick={() => {
                  handlePageChange(currentPage - 1, 'pagination')
                }}
                disabled={currentPage === 1}
              >
                <span>
                  <img src="/chevron-left.svg" className="h-6 w-6" alt="left" />
                </span>
              </button>
              <div className="flex gap-3 ">
                {[...Array(totalPages).keys()].map((page) => (
                  <span
                    key={page + 1}
                    className={`w-8 h-8 text-sm rounded-full flex justify-center cursor-pointer items-center ${
                      page + 1 === currentPage ? 'text-off-white bg-black-700' : ''
                    }`}
                    onClick={() => {
                      handlePageChange(page + 1, 'pagination')
                    }}
                  >
                    {page + 1}
                  </span>
                ))}
              </div>
              <button
                onClick={() => {
                  handlePageChange(currentPage + 1, 'pagination')
                }}
                disabled={currentPage === totalPages}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M9.87084 6.22279C10.3001 5.87529 10.9298 5.94157 11.2773 6.37084L14.3062 10.1124C15.1972 11.2131 15.1972 12.787 14.3062 13.8876L11.2773 17.6292C10.9298 18.0585 10.3001 18.1248 9.87084 17.7773C9.44157 17.4298 9.37529 16.8001 9.72279 16.3708L12.7517 12.6292C13.0487 12.2623 13.0487 11.7377 12.7517 11.3708L9.72279 7.62923C9.37529 7.19997 9.44157 6.57028 9.87084 6.22279Z"
                    fill="#3C3C3C"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      ) : (
        <p>No Data Found</p>
      )}
    </>
  )
}
