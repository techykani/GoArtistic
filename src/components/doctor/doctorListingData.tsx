import React, { useEffect, useState } from 'react'
import { useQuery } from 'react-query'
import { useScroll } from '@/lib/hooks'
import { sanityClient } from '@/sanity'
import { DoctorListingItem } from './doctorListingItem'
import { groq } from 'next-sanity'

export const DoctorListingData: React.FC<any> = ({ doctorList, filters, getDocCount }) => {
  const [executeScroll, elRef] = useScroll()
  const [currentPage, setCurrentPage] = useState(1)
  const [showData, setShowData] = useState(doctorList)
  const countPerPage = 9

  const { data: docFetching, isFetching } = useQuery<any[], Error>(
    ['allDoc', filters],
    () => handlePageChange(1, 'initial'),
    {
      refetchOnWindowFocus: false,
    },
  )

  const buildSpecialityQuery = (spec: any) => {
    console.log(spec, 'spec')
    if (!spec || spec.length === 0) return ''
    return spec
      .map((speciality: any) => `specialist[]._ref match "*${speciality?._id ?? speciality}*"`)
      .join(' || ')
  }

  const buildLocationQuery = (loc: any) => {
    if (!loc || loc.length === 0) return ''
    return loc.map((location: any) => `center[]._ref match "*${location?._id}*"`).join(' || ')
  }

  const { searchValues, selectedValue, selectedType } = filters
  const searchText = searchValues === '' ? '' : searchValues
  const specialityQuery = buildSpecialityQuery(selectedValue?.speciality)
  const speciality = specialityQuery ? ` && (${specialityQuery})` : ''
  const alphaSort = selectedValue?.alpha === 'A-Z' ? 'asc' : 'desc'
  const practice = selectedType === 'All' ? '' : selectedType
  const locationQuery = buildLocationQuery(selectedValue?.location)
  const location = locationQuery ? ` && (${locationQuery})` : ''

  let totalPages = Math.ceil(doctorList?.length / countPerPage)
  if (docFetching) {
    totalPages = Math.ceil(docFetching[0]?.doc_count / countPerPage)
  } else {
    totalPages = Math.ceil(doctorList?.length / countPerPage)
  }

  let totalDoctors = doctorList?.length
  if (docFetching) {
    totalDoctors = docFetching[0]?.doc_count
  } else {
    totalDoctors = doctorList?.length
  }

  useEffect(() => {
    getDocCount(totalDoctors)
  }, [filters, getDocCount, totalDoctors])

  const handlePageChange = async (newPage: any, values: any): Promise<any> => {
    setCurrentPage(newPage)
    if (values === 'pagination') {
      window.scrollTo(0, 400)
    }
    const startIndex = (newPage - 1) * countPerPage
    const endIndex = startIndex + countPerPage - 1

    let query = ''

    if (speciality || location || searchText || practice) {
      query = groq`
        *[_type == "doctor" && [name, about.description] match "*${searchText}*" && [doctorpractice] match "*${practice}*" ${speciality} ${location}] {
           ...,
           "photo": photo.asset->url,
           "roleOrder": select(
             doctortype == "Resident" => 1,
              doctortype == "Sessional" => 2,
              doctortype == "GP" => 3,
              doctortype == "Visiting" => 4,
              5 // Default value if role is not matched
           ),
           name,
           specialist [] -> {
            _id,
            title
            },
            subSpeciality [] -> {
              _id,
              title
            },
          center [] -> {
            _id,
            name,
          },
            "doc_count": count(*[_type == "doctor" && [name, about.description] match "*${searchText}*" && [doctorpractice] match "*${practice}*" ${speciality} ${location}])
        } | order(roleOrder asc, name ${alphaSort}) [${startIndex}..${endIndex}]
      `
    } else {
      query = groq`
        *[_type == "doctor"] {
            ...,
            "photo": photo.asset->url,
            "roleOrder": select(
              doctortype == "Resident" => 1,
              doctortype == "Sessional" => 2,
              doctortype == "GP" => 3,
              doctortype == "Visiting" => 4,
              5 // Default value if role is not matched
            ),
            name,
            specialist [] -> {
              _id,
              title,
            },
            subSpeciality [] -> {
              _id,
              title
            },
            center [] -> {
              _id,
              name,
            },
            "doc_count": count(*[_type == "doctor"])
        } | order(roleOrder asc, name ${alphaSort}) [${startIndex}..${endIndex}]
      `
    }

    const result = await sanityClient('anonymous')?.fetch(query, {
      locale: 'en',
      defaultLocale: 'en',
    })

    setShowData(result)
    return result
  }

  const Pagination = ({ totalPages, currentPage, handlePageChange }: any) => {
    const pageNumbers = []

    const renderPageNumber = (pageNumber: any) => (
      <span
        key={pageNumber}
        className={`cursor-pointer w-8 h-8 text-sm rounded-full flex justify-center items-center ${
          pageNumber === currentPage ? 'text-off-white bg-black-700' : ''
        }`}
        onClick={() => handlePageChange(pageNumber, 'pagination')}
      >
        {pageNumber}
      </span>
    )

    pageNumbers.push(renderPageNumber(1))

    if (totalPages > 3 && totalPages - currentPage <= 5) {
      pageNumbers.push(<span key="ellipsis-start">...</span>)
    }

    for (let i = Math.max(2, currentPage - 1); i < currentPage; i++) {
      pageNumbers.push(renderPageNumber(i))
    }

    if (currentPage !== 1 && currentPage !== totalPages) {
      pageNumbers.push(renderPageNumber(currentPage))
    }

    for (let i = currentPage + 1; i < Math.min(totalPages, currentPage + 2); i++) {
      pageNumbers.push(renderPageNumber(i))
    }

    if (totalPages > 3 && totalPages - currentPage >= 3) {
      pageNumbers.push(<span key="ellipsis-end">...</span>)
    }

    if (totalPages > 1) {
      pageNumbers.push(renderPageNumber(totalPages))
    }

    return pageNumbers
  }

  return (
    <>
      {totalPages ? (
        <div className="flex flex-col gap-8 md:gap-8">
          <div className="w-full grid grid-cols-1 sm2:grid-cols-2 xl3:grid-cols-3 gap-6">
            {showData?.map((props: any, idx: any) => (
              <DoctorListingItem key={idx} props={props} />
            ))}
          </div>

          <div className="w-full flex justify-center items-center">
            <div className="flex gap-4 items-center">
              <button
                onClick={() => {
                  if (currentPage > 1) handlePageChange(currentPage - 1, 'pagination')
                }}
                disabled={currentPage === 1}
                aria-label="previous"
              >
                <span>
                  <img
                    src="/chevron-left.svg"
                    height={24}
                    width={24}
                    className="h-6 w-6"
                    alt="left"
                  />
                </span>
              </button>
              <div className="flex gap-3">
                {Pagination({ totalPages, currentPage, handlePageChange })}
              </div>
              <button
                onClick={() => {
                  if (currentPage < totalPages) handlePageChange(currentPage + 1, 'pagination')
                }}
                disabled={currentPage === totalPages}
                aria-label="next"
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
