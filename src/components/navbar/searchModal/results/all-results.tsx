import { motion } from 'framer-motion'
import { LoadMore } from '@/components/common/listing-and-details'
import { useEffect, useState } from 'react'
import { staggerContainer } from 'src/animations/stagging-scale-up'
import { ResultCard } from '../resultCard/resultCard'
import { AllDocProps } from '../searchModal'

export const AllResult = ({
  allData,
  onClose,
  seeMoreButtonText,
  seeLessButtonText,
}: {
  allData: AllDocProps[]
  onClose: any
  seeMoreButtonText: string
  seeLessButtonText: string
}) => {
  const [currentPage, setCurrentPage] = useState(1)
  const dataPerpage = 6

  useEffect(() => {
    setCurrentPage(1)
  }, [allData])

  const indexOfLastData = currentPage * dataPerpage
  const paginatedData = allData.slice(0, indexOfLastData)

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber)

  return (
    <div className="max-w-[818px] 2xl:max-w-4xl container mb-[32px]">
      <span className="text-[#004E89] text-[14px] leading-[20px] font-semibold">Top results</span>

      <motion.div className="space-y-[1px]" variants={staggerContainer} initial="from" animate="to">
        {paginatedData.map((props) => (
          <ResultCard key={props._id} {...props} onClose={onClose} />
        ))}
      </motion.div>
      {/* 
      {allData.length > 1 ? (
        // <LoadMore
        //   currentPage={currentPage}
        //   paginate={paginate}
        //   dataPerPage={dataPerpage}
        //   totalData={allData.length}
        //   showLessText={seeLessButtonText}
        //   showMoreText={seeMoreButtonText}
        // />
        
        <div className="w-full flex justify-center items-center">
        <div className="flex gap-4 items-center">
          <button
            onClick={() => {
              paginate(currentPage - 1)
            }}
            disabled={currentPage === 1}
            aria-label="previous"
          >
            <span>
              <img src="/chevron-left.svg" className="h-6 w-6" alt="left" />
            </span>
          </button>
          <div className="flex gap-3 ">
            {[...Array(allData.length).keys()].map((page) => (
              <span
                key={page + 1}
                className={`w-8 h-8 text-sm rounded-full flex justify-center items-center ${
                  page + 1 === currentPage ? 'text-off-white bg-black-700' : ''
                }`}
                onClick={() => {
                  paginate(page + 1)
                }}
              >
                {page + 1}
              </span>
            ))}
          </div>
          <button
            onClick={() => {
              paginate(currentPage + 1)
            }}
            disabled={currentPage === allData.length}
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
      ) : (
        ''
      )} */}
    </div>
  )
}
