import { useEffect, useState } from 'react'

const PaginationComponent = ({ data, getDataList, itemsPerPage, cPage = 1 }: any) => {
  const [currentPage, setCurrentPage] = useState(cPage)

  const totalPages = Math.ceil(data.length / itemsPerPage)
  const startIndex = (currentPage - 1) * itemsPerPage
  const endIndex = startIndex + itemsPerPage

  const currentItems = data.slice(startIndex, endIndex)

  const handlePageChange = (newPage: any) => {
    setCurrentPage(newPage)
    window.scrollTo(0, 400)
  }

  useEffect(() => {
    getDataList(currentItems)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentPage])

  const Pagination = ({ totalPages, currentPage, handlePageChange }: any) => {
    const pageNumbers = []

    // Function to render page number
    const renderPageNumber = (pageNumber: any) => (
      <span
        key={pageNumber}
        className={`cursor-pointer w-8 h-8 text-sm rounded-full flex justify-center items-center ${
          pageNumber === currentPage ? 'text-off-white bg-black-700' : ''
        }`}
        onClick={() => handlePageChange(pageNumber)}
      >
        {pageNumber}
      </span>
    )

    // Always render first page
    pageNumbers.push(renderPageNumber(1))

    // If current page is not close to the beginning, render ellipsis
    if (currentPage > 3) {
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
    if (currentPage < totalPages - 2) {
      pageNumbers.push(<span key="ellipsis-end">...</span>)
    }

    // Always render last page
    if (totalPages > 1) {
      pageNumbers.push(renderPageNumber(totalPages))
    }

    return pageNumbers
  }

  return (
    <div>
      <div className="w-full flex justify-center items-center">
        <div className="flex gap-4 items-center">
          <button
            onClick={() => {
              handlePageChange(currentPage - 1)
            }}
            disabled={currentPage === 1}
            aria-label="previous"
          >
            <span>
              <img src="/chevron-left.svg" height={24} width={24} className="h-6 w-6" alt="left" />
            </span>
          </button>
          <div className="flex gap-3 ">
            {Pagination({ totalPages, currentPage, handlePageChange })}
          </div>
          <button
            onClick={() => {
              handlePageChange(currentPage + 1)
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
  )
}

export default PaginationComponent
