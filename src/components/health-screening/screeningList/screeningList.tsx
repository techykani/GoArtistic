import { useEffect, useRef, useState } from 'react'
import { ScreeningTab } from './screeningTab'
import { ScreeningListData } from './ScreeningListData'
import { PopupFilter } from './popupFilter'
import Title from '@/components/widgets/shared/title'
import { useWindowSize } from '@/lib/hooks'
import { DoctorListSearchField } from '@/components/doctor/doctorListSearchField'
import { ConcernFilterDropdown } from './filters/concernFilter'
import { GenderFilter } from './filters/genderFilter'
import { AgeFilter } from './filters/ageFilter'
import { SortFilter } from './filters/sortFilter'

export interface DoctorFilters {
  searchValues: string
  selectedType?: string
  selectedSortBy?: string
  selectedGendersAndLanguages?: {
    gender: string
    ageV: string[]
    specificConcerns: string[]
  }
}

export const ScreeningList: React.FC<any> = ({
  options,
  optionsDropdown,
  specificConcern,
  title,
  packages,
  dataFromChilds,
}) => {
  const [selectedIndex, setSelectedIndex] = useState<number>(0)
  const [filters, setFilters] = useState<DoctorFilters>({
    searchValues: '',
    selectedType: options[0],
    selectedSortBy: 'Price low to high',
    selectedGendersAndLanguages: {
      gender: dataFromChilds.gender ? dataFromChilds.gender : '',
      ageV: dataFromChilds.age ? dataFromChilds.age : [],
      specificConcerns: dataFromChilds.specificConcern ? dataFromChilds.specificConcern : [],
    },
  })

  const [docCount, setDocCount] = useState(0)
  const [selectedIds, setSelectedIds] = useState([])
  const [showComparisonModal, setShowComparisonModal] = useState(false)
  const [dataToCompare, setDataToCompare] = useState([])
  const [category, setCategory] = useState('')

  const sortData = () => {
    // const data = packages?.filter(({ _id }) => selectedIds.includes(_id))
    const data: any = selectedIds?.map((id) => packages?.find((pack: any) => pack?._id === id))
    setDataToCompare(data)
  }

  useEffect(() => {
    sortData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedIds])

  const getFilteredDoctorsNumber = (docCount: number) => {
    setDocCount(docCount)
  }

  const compareData = () => {
    if (selectedIds.length >= 2 && selectedIds.length <= 4) {
      setShowComparisonModal(true)
    }
  }

  const stopCompare = () => {
    setSelectedIds([])
  }
  const [sliderPosition, setSliderPosition] = useState(0)
  const headingRef = useRef<HTMLHeadingElement>(null)
  const windowWidth = useWindowSize()?.width ?? 0
  useEffect(() => {
    if (headingRef.current) {
      const rect = headingRef.current.getBoundingClientRect()
      const leftPosition = rect.left
      setSliderPosition(leftPosition)
    }
  }, [windowWidth])

  const removeCheckbox = (tab: any) => {
    setFilters((prevFilters: any) => ({
      ...prevFilters,
      selectedGendersAndLanguages: {
        ...prevFilters.selectedGendersAndLanguages,
        specificConcerns: prevFilters?.selectedGendersAndLanguages?.specificConcerns?.filter(
          (item: any) => item !== tab,
        ),
      },
    }))
  }

  const removeAgeVCheckbox = (tab: any) => {
    setFilters((prevFilters: any) => ({
      ...prevFilters,
      selectedGendersAndLanguages: {
        ...prevFilters.selectedGendersAndLanguages,
        ageV: prevFilters?.selectedGendersAndLanguages?.ageV?.filter((item: any) => item !== tab),
      },
    }))
  }

  const clearSearch = () => {
    setFilters((prevFilters: any) => ({
      ...prevFilters,
      searchValues: '',
    }))
  }
  const clearAll = () => {
    setFilters((prevFilters: any) => ({
      ...prevFilters,
      selectedGendersAndLanguages: {
        gender: '',
        ageV: [],
        specificConcerns: [],
      },
    }))
  }
  return (
    <div className="relative">
      <div className="py-[48px] md:py-[80px] bg-[#F1F6FF]">
        <div className="px-6 md:px-[71px] pb-[24px] md:pb-[36px] flex flex-col">
          <div className="container mx-auto" ref={headingRef}>
            <div
              ref={headingRef}
              className="container mx-auto flex flex-col md:flex-row gap-6 md:justify-between "
            >
              {/* heading */}
              <Title tagline={'Health screening packages'} headingType={'h2'} theme="light" />
              <div className="w-full md:w-1/2 lg:max-w-[496px] md:flex md:items-end flex flex-row gap-4">
                <div className="w-full h-[40px] md:h-full flex gap-2 bg-off-white px-4 md:px-6 py-4 rounded-full md:rounded-lg shadow-level2 items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                  >
                    <path
                      d="M8.54167 2.5C5.21235 2.5 2.5 5.21235 2.5 8.54167C2.5 11.871 5.21235 14.5833 8.54167 14.5833C9.98182 14.5833 11.3057 14.0746 12.3454 13.2292L16.4331 17.3169C16.4907 17.3769 16.5597 17.4248 16.636 17.4578C16.7123 17.4907 16.7945 17.5082 16.8776 17.509C16.9608 17.5099 17.0433 17.4941 17.1202 17.4627C17.1972 17.4312 17.2672 17.3848 17.326 17.326C17.3848 17.2672 17.4312 17.1972 17.4627 17.1202C17.4941 17.0433 17.5099 16.9608 17.509 16.8776C17.5082 16.7945 17.4907 16.7123 17.4578 16.636C17.4248 16.5597 17.3769 16.4907 17.3169 16.4331L13.2292 12.3454C14.0746 11.3057 14.5833 9.98182 14.5833 8.54167C14.5833 5.21235 11.871 2.5 8.54167 2.5ZM8.54167 3.75C11.1954 3.75 13.3333 5.8879 13.3333 8.54167C13.3333 9.83442 12.8234 11.0024 11.9963 11.8628C11.9453 11.9003 11.9003 11.9453 11.8628 11.9963C11.0024 12.8234 9.83442 13.3333 8.54167 13.3333C5.8879 13.3333 3.75 11.1954 3.75 8.54167C3.75 5.8879 5.8879 3.75 8.54167 3.75Z"
                      fill="#6E6E6E"
                      stroke="#6E6E6E"
                      stroke-width="0.5"
                    />
                  </svg>
                  <DoctorListSearchField
                    searchInputPlaceholder="Search packages"
                    filters={filters}
                    setFilters={setFilters}
                  />
                  {filters.searchValues && (
                    <a className="cursor-pointer" onClick={() => clearSearch()}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="14"
                        height="14"
                        viewBox="0 0 14 14"
                        fill="none"
                      >
                        <path
                          d="M13 1L1 13M1 1L13 13"
                          stroke="#828282"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </a>
                  )}
                </div>
                <div className="md:hidden flex">
                  <PopupFilter
                    filters={filters}
                    setFilters={setFilters}
                    specificConcernDropdown={specificConcern}
                    consultationFilterVariables={optionsDropdown}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* tab */}
        <ScreeningTab
          position={sliderPosition}
          options={options}
          selectedIndex={selectedIndex}
          setSelectedIndex={setSelectedIndex}
          filters={filters}
          setFilters={setFilters}
        />
        <section className="px-6 md:px-[71px] pt-[24px] md:pt-[32px]">
          <div className="container mx-auto flex flex-col gap-[24px] md:gap-[36px]">
            {/* listing */}
            <div className="w-full flex flex-col gap-6 md:gap-8">
              {/* filter */}
              <div className="w-full flex flex-col md:flex md:flex-row-reverse md:gap-6 items-center">
                <div className="w-full flex flex-row-reverse md:flex-row md:gap-6 md:justify-end">
                  <div className="md:flex gap-2 items-center md:mb-0 md:justify-end hidden">
                    <span className="text-grey-dark text-base font-semibold leading-[20px]">
                      Filter by
                    </span>{' '}
                    <ConcernFilterDropdown
                      specificConcernDropdown={specificConcern}
                      filters={filters}
                      setFilters={setFilters}
                    />
                    <GenderFilter filters={filters} setFilters={setFilters} />
                    <AgeFilter filters={filters} setFilters={setFilters} />
                  </div>
                  <div className="md:flex gap-2 items-center md:mb-0 md:justify-end hidden">
                    <span className="text-grey-dark text-base font-semibold leading-[20px]">
                      Sort by
                    </span>{' '}
                    <SortFilter
                      consultationFilterVariables={optionsDropdown}
                      filters={filters}
                      setFilters={setFilters}
                    />
                  </div>
                </div>
                <div className="w-full flex justify-between">
                  {/* results in numbers */}
                  <p className=" text-grey-9 text-base font-semibold leading-[20px]">
                    {docCount === undefined ? 0 : docCount} package{docCount > 1 && 's'} found
                  </p>
                </div>
              </div>
              <div className="justify-between flex w-full">
                <div className="flex gap-3 md:flex-wrap overflow-scroll slider-body">
                  {filters?.selectedGendersAndLanguages?.specificConcerns?.length !== 0 && (
                    <>
                      {filters?.selectedGendersAndLanguages?.specificConcerns?.map(
                        (tab: any, i: any) => (
                          <div
                            key={i}
                            className="text-[14px] font-semibold flex items-center justify-center leading-[20px] text-center px-3 py-1.5 rounded-[24px] whitespace-nowrap transition-all duration-150 cursor-pointer bg-[#7392AA] text-off-white"
                            onClick={() => removeCheckbox(tab)}
                          >
                            <span>{tab}</span>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="15"
                              height="16"
                              viewBox="0 0 15 16"
                              fill="none"
                              className="ml-2"
                            >
                              <path
                                d="M11.25 4.25L3.75 11.75M3.75 4.25L11.25 11.75"
                                stroke="#FEFEFE"
                                stroke-width="1.2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              />
                            </svg>
                          </div>
                        ),
                      )}
                    </>
                  )}

                  {filters?.selectedGendersAndLanguages?.ageV?.length !== 0 && (
                    <>
                      {filters?.selectedGendersAndLanguages?.ageV?.map((tab: any, i: any) => (
                        <div
                          key={i}
                          className="text-[14px] font-semibold flex items-center justify-center leading-[20px] text-center px-3 py-1.5 rounded-[24px] whitespace-nowrap transition-all duration-150 cursor-pointer bg-[#7392AA] text-off-white"
                          onClick={() => removeAgeVCheckbox(tab)}
                        >
                          <span>{tab}</span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="15"
                            height="16"
                            viewBox="0 0 15 16"
                            fill="none"
                            className="ml-2"
                          >
                            <path
                              d="M11.25 4.25L3.75 11.75M3.75 4.25L11.25 11.75"
                              stroke="#FEFEFE"
                              stroke-width="1.2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                          </svg>
                        </div>
                      ))}
                    </>
                  )}
                </div>
                {(filters?.selectedGendersAndLanguages?.ageV?.length !== 0 ||
                  filters?.selectedGendersAndLanguages?.specificConcerns?.length !== 0) && (
                  <div
                    className="pr-3 hidden lg:block cursor-pointer whitespace-nowrap"
                    onClick={() => clearAll()}
                  >
                    <span className="text-[14px] font-normal font-inter text-[#0084C6]">
                      Clear all
                    </span>
                  </div>
                )}
              </div>

              {/* card */}
              <ScreeningListData
                screeningList={packages}
                filters={filters}
                getDocCount={getFilteredDoctorsNumber}
                setSelectedIds={setSelectedIds}
                selectedIds={selectedIds}
                showComparisonModal={showComparisonModal}
                setShowComparisonModal={setShowComparisonModal}
                dataToCompare={dataToCompare}
                category={category}
                setCategory={setCategory}
                isNewlyLoaded={'true'}
              />
            </div>
            {/* pagination */}
          </div>
        </section>
      </div>
      {selectedIds?.length > 0 && (
        <div className="sticky bottom-0 px-6 pt-6 pb-8 md:px-[71px] md:py-8 bg-off-white shadow-level2 z-[150]">
          <div className="flex flex-col md:flex-row gap-4 md:justify-between md:items-center">
            <div className="flex flex-col gap-2 md:gap-0">
              <p className="text-grey-dark text-center md:text-start text-[16px] leading-[24px]">
                <span className="font-semibold">{selectedIds?.length} product selected</span> (max
                {windowWidth > 1200 ? 4 : 2})
              </p>
              <div className="flex gap-2 py-2">
                <div className="w-5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                  >
                    <mask
                      id="mask0_1246_6805"
                      style={{ maskType: 'alpha' }}
                      maskUnits="userSpaceOnUse"
                      x="0"
                      y="0"
                      width="20"
                      height="20"
                    >
                      <rect width="20" height="20" fill="#D9D9D9" />
                    </mask>
                    <g mask="url(#mask0_1246_6805)">
                      <path
                        d="M10.0003 14.1666C10.2364 14.1666 10.4344 14.0868 10.5941 13.927C10.7538 13.7673 10.8337 13.5694 10.8337 13.3333C10.8337 13.0972 10.7538 12.8993 10.5941 12.7395C10.4344 12.5798 10.2364 12.5 10.0003 12.5C9.76421 12.5 9.5663 12.5798 9.40658 12.7395C9.24685 12.8993 9.16699 13.0972 9.16699 13.3333C9.16699 13.5694 9.24685 13.7673 9.40658 13.927C9.5663 14.0868 9.76421 14.1666 10.0003 14.1666ZM10.0003 10.8333C10.2364 10.8333 10.4344 10.7534 10.5941 10.5937C10.7538 10.434 10.8337 10.2361 10.8337 9.99996V6.66663C10.8337 6.43052 10.7538 6.2326 10.5941 6.07288C10.4344 5.91315 10.2364 5.83329 10.0003 5.83329C9.76421 5.83329 9.5663 5.91315 9.40658 6.07288C9.24685 6.2326 9.16699 6.43052 9.16699 6.66663V9.99996C9.16699 10.2361 9.24685 10.434 9.40658 10.5937C9.5663 10.7534 9.76421 10.8333 10.0003 10.8333ZM10.0003 18.3333C8.84755 18.3333 7.76421 18.1145 6.75033 17.677C5.73644 17.2395 4.85449 16.6458 4.10449 15.8958C3.35449 15.1458 2.76074 14.2638 2.32324 13.25C1.88574 12.2361 1.66699 11.1527 1.66699 9.99996C1.66699 8.84718 1.88574 7.76385 2.32324 6.74996C2.76074 5.73607 3.35449 4.85413 4.10449 4.10413C4.85449 3.35413 5.73644 2.76038 6.75033 2.32288C7.76421 1.88538 8.84755 1.66663 10.0003 1.66663C11.1531 1.66663 12.2364 1.88538 13.2503 2.32288C14.2642 2.76038 15.1462 3.35413 15.8962 4.10413C16.6462 4.85413 17.2399 5.73607 17.6774 6.74996C18.1149 7.76385 18.3337 8.84718 18.3337 9.99996C18.3337 11.1527 18.1149 12.2361 17.6774 13.25C17.2399 14.2638 16.6462 15.1458 15.8962 15.8958C15.1462 16.6458 14.2642 17.2395 13.2503 17.677C12.2364 18.1145 11.1531 18.3333 10.0003 18.3333ZM10.0003 16.6666C11.8614 16.6666 13.4378 16.0208 14.7295 14.7291C16.0212 13.4375 16.667 11.8611 16.667 9.99996C16.667 8.13885 16.0212 6.56246 14.7295 5.27079C13.4378 3.97913 11.8614 3.33329 10.0003 3.33329C8.13921 3.33329 6.56283 3.97913 5.27116 5.27079C3.97949 6.56246 3.33366 8.13885 3.33366 9.99996C3.33366 11.8611 3.97949 13.4375 5.27116 14.7291C6.56283 16.0208 8.13921 16.6666 10.0003 16.6666Z"
                        fill="#FDB913"
                      />
                    </g>
                  </svg>
                </div>
                <p className="text-grey-dark text-[14px] leading-[20px]">
                  You can only compare product within same category.
                </p>
              </div>
            </div>
            <div className="flex flex-row gap-2">
              <p
                onClick={stopCompare}
                className="btn_secondary_small-light font-semibold rounded-full leading-[20px] w-full text-center whitespace-nowrap flex items-center md:w-[165px] h-[47.2px] cursor-pointer"
              >
                Stop comparing
              </p>

              <p
                onClick={compareData}
                className={`${
                  selectedIds?.length > 1 && selectedIds?.length <= 4
                    ? 'bg-[#0957CB] hover:bg-[#0745A3] border-[#0957CB] hover:border-[#0745A3]'
                    : 'bg-[#00000040] border-none'
                } text-[#FEFEFE] text-[14px] border-[2px] py-3 px-6 transition-all duration-150 whitespace-nowrap font-semibold rounded-full leading-[20px] w-full text-center md:w-[165px] h-[47.2px] flex items-center justify-center cursor-pointer`}
              >
                Compare
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
