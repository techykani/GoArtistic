import { Button } from '@/components/ui'
import React, { Fragment, useEffect, useState } from 'react'
import { useInfiniteQuery, useQuery } from 'react-query'
import { useScroll } from '@/lib/hooks'
import { sanityClient } from '@/sanity'
import { ClinicListingItem } from './clinicListingItem'
import { groq } from 'next-sanity'

export const ClinicListingData: React.FC<any> = ({ clinicList, filters, getClinicCount }) => {
  // FOR SCROLLING TO THE LIST DIV TOP
  const [executeScroll, elRef] = useScroll()
  const [currentPage, setCurrentPage] = useState(1)
  const [showData, setShowData] = useState(clinicList)
  const countPerPage = 9

  const { data: docFetching, isFetching } = useQuery<any[], Error>(
    ['allDoc', filters],
    () => handlePageChange(1, 'initial'),
    {
      refetchOnWindowFocus: false,
    },
  )
  const buildZoneQuery = (zones: any) => {
    if (!zones || zones.length === 0) return ''
    return zones.map((zone: any) => `direction match "*${zone}*"`).join(' || ')
  }
  const { center, searchValues, sortBy } = filters
  const selectedTabs = center === 'All' ? '' : center
  const searchText = searchValues === undefined ? '' : searchValues
  const zoneQuery = buildZoneQuery(sortBy.zone)
  const zoneFilter = zoneQuery ? ` && (${zoneQuery})` : ''
  const alphaSort = sortBy?.alpha === 'A-Z' ? 'asc' : 'desc'

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
      window.scrollTo(0, 800)
    }
    const startIndex = (newPage - 1) * 9
    const endIndex = startIndex + 8

    let query = ''

    if (selectedTabs || center || searchText || zoneFilter) {
      query = groq`
        *[_type == "clinicLocations" && [name] match "*${searchText}*" ${zoneFilter}   && [services] match "*${selectedTabs}*" && isVisible == true] | order(lower(title) ${alphaSort}) [${startIndex}..${endIndex}] {
          ...,
          "locationImage": locationImage.asset->url,
            "doc_count": count(*[_type == "clinicLocations" && [name] match "*${searchText}*" ${zoneFilter}  && [services] match "*${selectedTabs}*" && isVisible == true])
        }
      `
    } else {
      query = groq`
          *[_type == "clinicLocations" && isVisible == true] | order(lower(title) ${alphaSort}) [${startIndex}..${endIndex}]  {
            ...,
            "locationImage": locationImage.asset->url,
             "doc_count": count(*[_type == "clinicLocations"])
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
  return (
    <>
      {totalPages ? (
        <div className="flex flex-col gap-8 md:gap-[36px]">
          {/* card */}
          <div className="w-full grid grid-cols-1 sm2:grid-cols-2 xl3:grid-cols-3 gap-6">
            {showData?.map((props: any, idx: any) => (
              <ClinicListingItem key={idx} props={props} />
            ))}
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
        <p></p>
      )}
    </>
  )
}
