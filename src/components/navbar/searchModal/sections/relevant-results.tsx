import { Fragment, useState } from 'react'
import { AllResult } from '../results/all-results'
import { AllDocProps, filterByDoc } from '../searchModal'

const ShowIndividualResultNumber = ({
  doc,
  searchText,
  searchResultText,
  noSearchResultText,
}: {
  doc: AllDocProps[]
  searchText: string | string[]
  searchResultText: string
  noSearchResultText: string
}) => {
  return doc.length === 0 ? (
    <div className="text-neutral-600 font-medium text-lg max-w-[818px] 2xl:max-w-4xl container h-[30vh]">
      {`${noSearchResultText} "${searchText}"`}
    </div>
  ) : (
    <></>
    // <span className="text-base text-grey-8">{doc.length} Results found</span>
    // <div className=" text-neutral-600 font-medium text-lg max-w-[818px] 2xl:max-w-4xl container">
    //   Showing {doc.length} results for {`"${searchText}"`}
    // </div>
  )
}

export const RelevantResults = ({
  selectedTab,
  allData,
  searchText,
  searchResultText,
  noSearchResultText,
  sortParametersByDate,
  sortParametersByText,
  tabParameters,
  seeMoreButtonText,
  seeLessButtonText,
  onClose,
}: any) => {
  const allRelevantResults = allData
  const articles = allData.filter(
    (data: any) => data._type === 'media' || data._type === 'insights',
  )
  const services = allData.filter(
    (data: any) => data._type === 'package' || data._type === 'specialtyList',
  )
  return (
    <section className="max-w-[1016px] mx-auto relative z-20 pt-6 px-6 lg2:px-0">
      <div>
        {tabParameters.indexOf(selectedTab) === 0 && (
          <Fragment>
            <ShowIndividualResultNumber
              doc={allData}
              searchText={searchText}
              searchResultText={searchResultText}
              noSearchResultText={noSearchResultText}
            />
            {allRelevantResults.length !== 0 && (
              <AllResult
                allData={allRelevantResults}
                seeLessButtonText={seeLessButtonText[0]}
                seeMoreButtonText={seeMoreButtonText[0]}
                onClose={onClose}
              />
            )}
          </Fragment>
        )}

        {tabParameters.indexOf(selectedTab) === 1 && (
          <Fragment>
            <ShowIndividualResultNumber
              doc={filterByDoc(allData, 'doctor')}
              searchText={searchText}
              searchResultText={searchResultText}
              noSearchResultText={noSearchResultText}
            />
            {filterByDoc(allData, 'doctor').length !== 0 && (
              <AllResult
                allData={filterByDoc(allRelevantResults, 'doctor')}
                seeMoreButtonText={seeMoreButtonText[1]}
                seeLessButtonText={seeLessButtonText[1]}
                onClose={onClose}
              />
            )}
          </Fragment>
        )}

        {tabParameters.indexOf(selectedTab) === 2 && (
          <Fragment>
            <ShowIndividualResultNumber
              doc={services}
              searchText={searchText}
              searchResultText={searchResultText}
              noSearchResultText={noSearchResultText}
            />
            {services.length !== 0 && (
              <AllResult
                allData={services}
                seeMoreButtonText={seeMoreButtonText[3]}
                seeLessButtonText={seeLessButtonText[3]}
                onClose={onClose}
              />
            )}
          </Fragment>
        )}

        {/* {tabParameters.indexOf(selectedTab) === 3 && (
          <Fragment>
            <ShowIndividualResultNumber
              doc={allRelevantResults}
              searchText={searchText}
              searchResultText={searchResultText}
              noSearchResultText={noSearchResultText}
            />
            {allRelevantResults.length !== 0 && (
              <AllResult
                allData={filterByDoc(allData, 'courses')}
                seeMoreButtonText={seeMoreButtonText[3]}
                seeLessButtonText={seeLessButtonText[3]}
              />
            )}
          </Fragment>
        )} */}

        {tabParameters.indexOf(selectedTab) === 3 && (
          <Fragment>
            <ShowIndividualResultNumber
              doc={articles}
              searchText={searchText}
              searchResultText={searchResultText}
              noSearchResultText={noSearchResultText}
            />
            {articles.length !== 0 && (
              <AllResult
                allData={articles}
                seeMoreButtonText={seeMoreButtonText[3]}
                seeLessButtonText={seeLessButtonText[3]}
                onClose={onClose}
              />
            )}
          </Fragment>
        )}
      </div>
      {/* {allData.length > 1 ? (
        
        <div className="w-full flex justify-center items-center">
        <div className="flex gap-4 items-center">
          <button
            onClick={() => {
              paginate(currentPage - 1)
            }}
            disabled={currentPage === 1}
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
    </section>
  )
}
