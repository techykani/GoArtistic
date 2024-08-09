import { Button } from '@/components/ui'
import React, { Fragment, useEffect, useState } from 'react'
import { useInfiniteQuery, useQuery } from 'react-query'
import { useScroll } from '@/lib/hooks'
import { sanityClient } from '@/sanity'
import { IDoctorsList } from '@/lib/types/doctorListingTypes'
import { DoctorFilters } from './screeningList'
import { PackageListItem } from './packageListItem'
import { groq } from 'next-sanity'
import { Comparison } from './comparison'
import PaginationComponent from '@/components/common/pagination'

interface DoctorListProps {
  doctorsList: IDoctorsList[]
  filters: DoctorFilters
  getDocCount: (docCount: number) => void
}

export const ScreeningListData: React.FC<any> = ({
  screeningList,
  filters,
  getDocCount,
  selectedIds,
  setSelectedIds,
  setShowComparisonModal,
  showComparisonModal,
  dataToCompare,
  category,
  setCategory,
}) => {
  const today = new Date()
  const month = ('0' + (today.getMonth() + 1)).slice(-2)
  const year = today.getFullYear()
  const date = today.getDate()
  const currentDate = year + '-' + month + '-' + date
  // FOR SCROLLING TO THE LIST DIV TOP
  const [executeScroll, elRef] = useScroll()
  const [currentPage, setCurrentPage] = useState(1)
  const [showData, setShowData] = useState(screeningList)
  // const [category, setCategory] = useState('')

  const itemsPerPage = 8

  const filterData = () => {
    // Filter by selectedType if it's not 'All'
    let filteredList = [...screeningList]

    // Filter the list based on search values
    const searchTerm = filters.searchValues.toLowerCase()
    filteredList = filteredList.filter((data: any) => data.title.toLowerCase().includes(searchTerm))

    // Filter the list based on selectedType
    if (filters.selectedType === 'General') {
      filteredList = filteredList.filter((item) => item.category === 'GP Screening')
    } else if (filters.selectedType === 'Specialist') {
      filteredList = filteredList.filter((item) => item.category === 'Specialist Screening')
    }
    // Sort the filtered list based on selectedSortBy
    // if (filters.selectedSortBy === 'Featured') {
    //   const gPfeatured = filteredList
    //     .filter((obj: any) => obj.featured === true && obj.category === 'GP Screening')
    //     .sort((a: any, b: any) => {
    //       return a.packageprice - b.packageprice
    //     })
    //   // const premium = filteredList.filter((obj: any) => obj.premium === true)
    //   const specfeatured = filteredList
    //     .filter((obj: any) => obj.featured === true && obj.category === 'Specialist Screening')
    //     .sort((a: any, b: any) => {
    //       return a.packageprice - b.packageprice
    //     })
    //   const nongpFeatured = filteredList
    //     .filter((obj: any) => !obj.premium && !obj.featured && obj.category === 'GP Screening')
    //     .sort((a: any, b: any) => {
    //       return a.packageprice - b.packageprice
    //     })
    //   const nonspecFeatured = filteredList
    //     .filter(
    //       (obj: any) => !obj.premium && !obj.featured && obj.category === 'Specialist Screening',
    //     )
    //     .sort((a: any, b: any) => {
    //       return a.packageprice - b.packageprice
    //     })
    //   filteredList = [
    //     ...gPfeatured,
    //     ...premium,
    //     ...specfeatured,
    //     ...nongpFeatured,
    //     ...nonspecFeatured,
    //   ]
    // }

    const sortListByPrice = (list: any[], isAscending: boolean) => {
      const featured = list.filter((obj: any) => obj.featured)
      const nongpFeatured = list
        .filter((obj: any) => !obj.premium && !obj.featured)
        .sort((a: any, b: any) =>
          isAscending ? a.packageprice - b.packageprice : b.packageprice - a.packageprice,
        )
      return [...featured, ...nongpFeatured]
    }

    if (filters.selectedSortBy === 'Price low to high') {
      filteredList = sortListByPrice(filteredList, true)
    } else if (filters.selectedSortBy === 'Price high to low') {
      filteredList = sortListByPrice(filteredList, false)
    }
    //Sort by filter gender
    if (filters.selectedGendersAndLanguages.gender === 'Any') {
      filteredList = filteredList.filter((item) => item.gender === 'Any')
    } else if (filters.selectedGendersAndLanguages.gender === 'Male') {
      filteredList = filteredList.filter((item) => item.gender === 'Male')
    } else if (filters.selectedGendersAndLanguages.gender === 'Female') {
      filteredList = filteredList.filter((item) => item.gender === 'Female')
    }

    //Sort by filter age
    if (
      Array.isArray(filters.selectedGendersAndLanguages.ageV) &&
      filters.selectedGendersAndLanguages.ageV.length > 0
    ) {
      filteredList = filteredList.filter((item) =>
        item?.ageV?.some((age: any) => filters.selectedGendersAndLanguages.ageV.includes(age)),
      )
    }

    //Sort by filter specific concern
    if (
      Array.isArray(filters.selectedGendersAndLanguages.specificConcerns) &&
      filters.selectedGendersAndLanguages.specificConcerns.length > 0
    ) {
      filteredList = filteredList.filter((item) =>
        item.specificconcern.some((concern: any) =>
          filters.selectedGendersAndLanguages.specificConcerns.includes(concern),
        ),
      )
    }

    // Sort by category: General first, then Specialist
    filteredList.sort((a, b) => {
      if (a.category === 'GP Screening' && b.category === 'Specialist Screening') {
        return -1 // General comes before Specialist
      } else if (a.category === 'Specialist Screening' && b.category === 'GP Screening') {
        return 1 // Specialist comes after General
      } else {
        return 0 // No change in order if both are of the same category
      }
    })

    return filteredList
  }

  const getPrice = (item: any) => {
    // Helper function to extract price
    if (!isNaN(item.packageprice)) {
      return parseFloat(item.packageprice)
    } else {
      // Handle 'Price on enquiry'
      return Number.MAX_VALUE // Place it at the end when sorting
    }
  }
  useEffect(() => {
    filterData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [screeningList, filters])

  const handlePageChange = (pageNumber: any, values: any) => {
    setCurrentPage(pageNumber)
    if (values === 'pagination') {
      window.scrollTo(0, 900)
    }
  }

  // Calculate total pages based on filtered and sorted list
  const totalPages = Math.ceil(filterData().length / itemsPerPage)

  // Slice the data array to get items for the current page
  const startIndex = (currentPage - 1) * itemsPerPage
  const endIndex = startIndex + itemsPerPage
  const currentItems = filterData().slice(startIndex, endIndex)

  const Pagination = ({ totalPages, currentPage, handlePageChange }: any) => {
    const pageNumbers = []

    // Function to render page number
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

    // Always render first page
    pageNumbers.push(renderPageNumber(1))

    // If current page is not close to the beginning, render ellipsis
    if (currentPage > 4) {
      pageNumbers.push(<span key="ellipsis-start">...</span>)
    }

    // Render up to 3 pages before the current page
    for (let i = currentPage - 2; i < currentPage; i++) {
      if (i > 1) {
        pageNumbers.push(renderPageNumber(i))
      }
    }

    // Render current page
    if (currentPage > 1 && currentPage < totalPages) {
      pageNumbers.push(renderPageNumber(currentPage))
    }

    // Render up to 3 pages after the current page
    for (let i = currentPage + 1; i <= currentPage + 2; i++) {
      if (i < totalPages) {
        pageNumbers.push(renderPageNumber(i))
      }
    }

    // If current page is not close to the end, render ellipsis
    if (currentPage < totalPages - 3) {
      pageNumbers.push(<span key="ellipsis-end">...</span>)
    }

    // Always render last page
    if (totalPages > 1) {
      pageNumbers.push(renderPageNumber(totalPages))
    }

    return pageNumbers
  }

  useEffect(() => {
    getDocCount(filterData().length)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentItems])

  return (
    <>
      {showComparisonModal && (
        <Comparison
          setShowComparisonModal={setShowComparisonModal}
          dataToCompare={dataToCompare}
          setSelectedIds={setSelectedIds}
          setCategory={setCategory}
        />
      )}
      {totalPages ? (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl2:grid-cols-4 gap-6">
            {/* card */}
            {currentItems?.map((props: any, idx: any) => (
              <PackageListItem
                key={idx}
                props={props}
                dataToCompare={dataToCompare}
                selectedIds={selectedIds}
                setSelectedIds={setSelectedIds}
                category={category}
                setCategory={setCategory}
              />
            ))}
          </div>
          <div className="w-full flex justify-center items-center">
            <div className="flex gap-4 items-center">
              <button
                onClick={() => {
                  handlePageChange(currentPage - 1, 'pagination')
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
              <div className="flex gap-3 ">
                {/* {[...Array(totalPages).keys()].map((page) => (
              <span
                key={page + 1}
                className={`w-8 h-8 text-sm rounded-full flex justify-center items-center cursor-pointer ${
                  page + 1 === currentPage ? 'text-off-white bg-black-700' : ''
                }`}
                onClick={() => {
                  handlePageChange(page + 1)
                }}
              >
                {page + 1}
              </span>
            ))} */}

                {Pagination({ totalPages, currentPage, handlePageChange })}
              </div>
              <button
                onClick={() => {
                  handlePageChange(currentPage + 1, 'pagination')
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
        </>
      ) : (
        <p></p>
      )}
    </>
  )
}
