interface IPaginationProps {
  currentPage: number
  dataPerPage: number
  totalData: number
  paginate: (number: number) => void
  showLessText: string
  showMoreText: string
}

export const LoadMore = ({
  currentPage,
  dataPerPage,
  totalData,
  paginate,
  showLessText,
  showMoreText,
}: IPaginationProps) => {
  const pageNumber = Math.ceil(totalData / dataPerPage)

  return (
    <div className="text-center pt-6">
      <button
        className="font-semibold text-head-5 text-primary-copper border-solid border border-primary-copper rounded-md px-[17px] py-[13px]"
        onClick={currentPage !== pageNumber ? () => paginate(currentPage + 1) : () => paginate(1)}
      >
        {currentPage === pageNumber ? showLessText : showMoreText}
      </button>
    </div>
  )
}
