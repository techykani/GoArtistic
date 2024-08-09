import { GTAEvent } from '@/lib/gtag'
import { useState, useEffect, useRef } from 'react'

const monthArray = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
]

export const PopupFilter: React.FC<any> = ({
  setFilters,
  filters,
  filterDropdownOptionsList,
  media,
}) => {
  const { titleFilter, centerFilter } = filterDropdownOptionsList
  const [filterTag, setFilterTag] = useState<string[]>([])
  const [showFilterPopup, setShowFilterPopup] = useState(false)
  const [showCenterDropdown, setShowCenterDropdown] = useState(false)
  const [selectedCenter, setSelectedCenter] = useState('Select a center')
  const [showYearDropdown, setShowYearDropdown] = useState(false)
  const [selectedYear, setSelectedYear] = useState('Select a year')
  const [showMonthDropdown, setShowMonthDropdown] = useState(false)
  const [selectedMonth, setSelectedMonth] = useState('Select a month')
  const [showMonthField, setShowMonthField] = useState(false)
  const [filterActive, setFilterActive] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  const handleChangeFilterTab = (value: string): void => {
    //if All replace all string
    if (value === 'All') {
      setFilterTag([value])
    } else {
      if (filterTag.includes('All')) {
        setFilterTag([value])
      } else if (filterTag.includes(value)) {
        setFilterTag(filterTag.filter((item) => item !== value))
      } else {
        setFilterTag((prevArray) => [...prevArray, value])
      }
    }
  }

  const handleCenterDropdown = (value: string) => {
    setSelectedCenter(value)
  }

  const handleYearDropdown = (value: string) => {
    setSelectedYear(value)
    setShowMonthField(true)
  }
  const handleMonthDropdown = (value: string) => {
    setSelectedMonth(value)
  }
  const handleApply = (center: any, year: any, month: any, topic: any) => {
    setFilters((prevObject: any) => ({
      ...prevObject, // spread the existing properties
      selectedValue: {
        topic: topic,
        center: center,
        year: year,
        month: month,
      },
    })),
      GTAEvent('apply_filter', {
        listing_name: 'Media',
        filter_options_1: topic !== '' ? topic : null,
        filter_options_2: center !== '' ? center : null,
        filter_options_3: year !== '' ? year : null,
        filter_options_4: month !== '' ? month : null,
      })
    setFilterActive(true)
    setShowFilterPopup(false)
  }
  const handleClear = () => {
    setFilterTag([])
    setShowMonthField(false)
    setSelectedCenter('Select a center')
    setSelectedYear('Select a year')
    setSelectedMonth('Select a month')
    setFilters((prevObject: any) => ({
      ...prevObject, // spread the existing properties
      selectedValue: {
        topic: [],
        center: '',
        year: '',
        month: '',
      },
    }))
    setFilterActive(false)
    setShowFilterPopup(false)
  }

  const handleShowDropDown = (type: string) => {
    if (type == 'center') {
      if (showCenterDropdown) {
        setShowCenterDropdown(false)
      } else {
        setShowCenterDropdown(true)
        setShowYearDropdown(false)
        setShowMonthDropdown(false)
      }
    }
    if (type == 'year') {
      if (showYearDropdown) {
        setShowYearDropdown(false)
      } else {
        setShowYearDropdown(true)
        setShowCenterDropdown(false)
        setShowMonthDropdown(false)
      }
    }
    if (type == 'month') {
      if (showMonthDropdown) {
        setShowMonthDropdown(false)
      } else {
        setShowMonthDropdown(true)
        setShowCenterDropdown(false)
        setShowYearDropdown(false)
      }
    }
  }
  useEffect(() => {
    const handleClickOutside = (event: any) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowMonthDropdown(false)
        setShowCenterDropdown(false)
        setShowYearDropdown(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  useEffect(() => {
    const body: any = document.querySelector('body')
    if (!showFilterPopup) {
      body.style.overflow = 'auto'
    } else {
      body.style.overflow = 'hidden'
    }
  }, [showFilterPopup])
  return (
    <>
      {showFilterPopup && (
        <div className="bg-off-white md:bg-[#000000b3] fixed inset-0 z-[1000]">
          <section className="w-full md:min-h-[546px] z-[999] flex md:justify-center md:pt-[102px] lg:py-[127px] md:px-8 lg:px-[175px]  relative">
            <div className="w-full h-full bg-off-white md:max-w-[392px] md:rounded-[12px] mx-auto">
              {/* header */}
              <div className="w-full flex justify-between items-center py-4 px-6">
                <p className="text-grey-dark text-[20px] leading-[24px]">Filters</p>
                <div onClick={() => handleClear()}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    fill="none"
                    onClick={() => setShowFilterPopup(false)}
                    className="cursor-pointer"
                  >
                    <g clip-path="url(#clip0_1_136259)">
                      <mask
                        id="mask0_1_136259"
                        style={{ maskType: 'alpha' }}
                        maskUnits="userSpaceOnUse"
                        x="0"
                        y="0"
                        width="32"
                        height="32"
                      >
                        <rect width="32" height="32" fill="#D9D9D9" />
                      </mask>
                      <g mask="url(#mask0_1_136259)">
                        <path
                          d="M16.0001 17.8658L9.46673 24.3991C9.22229 24.6435 8.91118 24.7658 8.5334 24.7658C8.15562 24.7658 7.84451 24.6435 7.60007 24.3991C7.35562 24.1546 7.2334 23.8435 7.2334 23.4658C7.2334 23.088 7.35562 22.7769 7.60007 22.5324L14.1334 15.9991L7.60007 9.46576C7.35562 9.22131 7.2334 8.9102 7.2334 8.53242C7.2334 8.15464 7.35562 7.84353 7.60007 7.59909C7.84451 7.35464 8.15562 7.23242 8.5334 7.23242C8.91118 7.23242 9.22229 7.35464 9.46673 7.59909L16.0001 14.1324L22.5334 7.59909C22.7778 7.35464 23.089 7.23242 23.4667 7.23242C23.8445 7.23242 24.1556 7.35464 24.4001 7.59909C24.6445 7.84353 24.7667 8.15464 24.7667 8.53242C24.7667 8.9102 24.6445 9.22131 24.4001 9.46576L17.8667 15.9991L24.4001 22.5324C24.6445 22.7769 24.7667 23.088 24.7667 23.4658C24.7667 23.8435 24.6445 24.1546 24.4001 24.3991C24.1556 24.6435 23.8445 24.7658 23.4667 24.7658C23.089 24.7658 22.7778 24.6435 22.5334 24.3991L16.0001 17.8658Z"
                          fill="#3C3C3C"
                        />
                      </g>
                    </g>
                    <defs>
                      <clipPath id="clip0_1_136259">
                        <rect width="32" height="32" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
              </div>
              {/* divider */}
              <div className="border-[1px] border-grey-3 " />
              <div
                className={`${showCenterDropdown == true ||
                    showYearDropdown == true ||
                    showMonthDropdown == true
                    ? 'pb-8'
                    : 'pb-8'
                  } pt-8 px-6 flex flex-col gap-8 overflow-scroll overflow-x-hidden dropdown-scroll h-[84vh] md:max-h-[333px] md:min-h-[333px]`}
              >
                {/*Filter Topic */}
                {filters.selectedType !== 'All types' && (
                  <div className="w-full">
                    <p className="text-grey-dark mb-4 text-[16px] font-semibold leading-[20px]">
                      Topic Type
                    </p>
                    <div className="w-full flex flex-wrap gap-2">
                      {titleFilter.map((tag: any) => (
                        <span
                          key={tag}
                          onClick={() => handleChangeFilterTab(tag)}
                          className={`font-semibold md:px-4 px-6 py-2 md:py-[6px] leading-[20px] md:text-[14px] rounded-full whitespace-nowrap cursor-pointer hover:bg-[#0957CB] hover:text-off-white ${filterTag?.includes(tag)
                              ? 'bg-[#0957CB] text-off-white'
                              : 'bg-[#0000000a] text-grey-dark'
                            }`}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
                {/*  Centre */}
                <div className="w-full">
                  <p className="text-grey-dark mb-2 text-[16px] font-semibold leading-[20px]">
                    Center
                  </p>
                  <div
                    className="w-full  rounded-[8px] border-[1px] border-grey-3 py-3 pl-4 pr-3 flex gap-2 items-center bg-off-white mb-4 md:mb-0 relative"
                    onClick={() => handleShowDropDown('center')}
                  >
                    <span className="flex-1 text-grey-8 text-base leading-[24px] whitespace-nowrap">
                      {selectedCenter}
                    </span>
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
                        d="M18.0145 9.63451C18.362 10.0638 18.2957 10.6935 17.8665 11.0409L14.1249 14.0699C13.0242 14.9609 11.4503 14.9609 10.3497 14.0699L6.60807 11.0409C6.17881 10.6935 6.11253 10.0638 6.46003 9.63451C6.80752 9.20525 7.43721 9.13896 7.86647 9.48646L11.6081 12.5154C11.975 12.8124 12.4996 12.8124 12.8665 12.5154L16.6081 9.48646C17.0373 9.13896 17.667 9.20525 18.0145 9.63451Z"
                        fill="#3C3C3C"
                      />
                    </svg>
                    {/* dropdown */}
                    {showCenterDropdown && (
                      <div className="pb-10 absolute top-[55px] left-0 w-full z-50">
                        <div className=" w-full  rounded-[8px] bg-off-white shadow-level2 overflow-hidden">
                          <div
                            className="max-h-[185px] overflow-scroll dropdown-scroll overflow-x-hidden flex flex-col"
                            ref={dropdownRef}
                          >
                            {centerFilter.map((list: any) => (
                              <span
                                onClick={() => handleCenterDropdown(list)}
                                key={list}
                                className="text-grey-dark text-base leading-[24px] px-4 py-3 hover:font-semibold hover:bg-[#E5F7FC] transition duration-200"
                              >
                                {list}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
                {/*  Select a Period */}
                <div className="w-full">
                  <p className="text-grey-dark mb-2 text-[16px] font-semibold leading-[20px]">
                    Select a Period
                  </p>
                  <div
                    className="w-full  rounded-[8px] border-[1px] border-grey-3 py-3 pl-4 pr-3 flex gap-2 items-center bg-off-white mb-4 md:mb-0 relative"
                    onClick={() => handleShowDropDown('year')}
                  >
                    <span className="flex-1 text-grey-8 text-base leading-[24px] whitespace-nowrap">
                      {selectedYear}
                    </span>
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
                        d="M18.0145 9.63451C18.362 10.0638 18.2957 10.6935 17.8665 11.0409L14.1249 14.0699C13.0242 14.9609 11.4503 14.9609 10.3497 14.0699L6.60807 11.0409C6.17881 10.6935 6.11253 10.0638 6.46003 9.63451C6.80752 9.20525 7.43721 9.13896 7.86647 9.48646L11.6081 12.5154C11.975 12.8124 12.4996 12.8124 12.8665 12.5154L16.6081 9.48646C17.0373 9.13896 17.667 9.20525 18.0145 9.63451Z"
                        fill="#3C3C3C"
                      />
                    </svg>
                    {/* dropdown */}
                    {showYearDropdown && (
                      <div className="pb-10 absolute top-[55px] left-0 w-full z-50">
                        <div className=" w-full  rounded-[8px] bg-off-white shadow-level2 overflow-hidden">
                          <div
                            className="max-h-[185px] overflow-scroll dropdown-scroll overflow-x-hidden flex flex-col"
                            ref={dropdownRef}
                          >
                            {[...new Set(media.map((item: any) => item.calendar.year))].map(
                              (year: any) => (
                                <span
                                  onClick={() => handleYearDropdown(year)}
                                  key={year}
                                  className="text-grey-dark text-base leading-[24px] px-4 py-3 hover:font-semibold hover:bg-[#E5F7FC] transition duration-200"
                                >
                                  {year}
                                </span>
                              ),
                            )}
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
                {/* filter specific */}
                {showMonthField && (
                  <div className="w-full">
                    {/* <p className="text-grey-dark mb-2 text-[16px] font-semibold leading-[20px]">
                      Select a Month
                    </p> */}
                    <div
                      className="w-full  rounded-[8px] border-[1px] border-grey-3 py-3 pl-4 pr-3 flex gap-2 items-center bg-off-white mb-4 md:mb-0 relative "
                      onClick={() => handleShowDropDown('month')}
                    >
                      <span className="flex-1 text-grey-8 text-base leading-[24px] whitespace-nowrap">
                        {selectedMonth}
                      </span>
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
                          d="M18.0145 9.63451C18.362 10.0638 18.2957 10.6935 17.8665 11.0409L14.1249 14.0699C13.0242 14.9609 11.4503 14.9609 10.3497 14.0699L6.60807 11.0409C6.17881 10.6935 6.11253 10.0638 6.46003 9.63451C6.80752 9.20525 7.43721 9.13896 7.86647 9.48646L11.6081 12.5154C11.975 12.8124 12.4996 12.8124 12.8665 12.5154L16.6081 9.48646C17.0373 9.13896 17.667 9.20525 18.0145 9.63451Z"
                          fill="#3C3C3C"
                        />
                      </svg>
                      {/* dropdown */}
                      {showMonthDropdown && (
                        <div className="pb-10 absolute top-[55px] left-0 w-full z-50">
                          <div className=" w-full  rounded-[8px] bg-off-white shadow-level2 overflow-hidden">
                            <div
                              className="max-h-[185px] overflow-scroll dropdown-scroll overflow-x-hidden flex flex-col"
                              ref={dropdownRef}
                            >
                              {monthArray.map((list: any) => (
                                <span
                                  onClick={() => handleMonthDropdown(list)}
                                  key={list}
                                  className="text-grey-dark text-base leading-[24px] px-4 py-3 hover:font-semibold hover:bg-[#E5F7FC] transition duration-200"
                                >
                                  {list}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>
              <div className="w-full px-6 flex gap-6 items-center h-[72px] border-t-[1px] border-grey-3 fixed md:static bottom-0 z-[1000]">
                <div className="w-1/2">
                  <p
                    className="inline text-grey-dark text-base font-semibold leading-[24px] underline cursor-pointer"
                    onClick={() => handleClear()}
                  >
                    Clear all
                  </p>
                </div>
                <button
                  className="w-1/2 disabled:text-off-white disabled:bg-[#00000040] btn_primary_small-light font-semibold rounded-full leading-[20px] text-center disabled:border-none disabled:py-3"
                  disabled={
                    selectedCenter === 'Select a center' &&
                    selectedYear === 'Select a year' &&
                    selectedMonth === 'Select a month' &&
                    filterTag.length === 0
                  }
                  onClick={() =>
                    handleApply(selectedCenter, selectedYear, selectedMonth, filterTag)
                  }
                >
                  Filter
                </button>
              </div>
            </div>
          </section>
        </div>
      )}

      <div
        className="w-full  flex justify-end relative cursor-pointer"
        onClick={() => setShowFilterPopup(true)}
      >
        {filterActive && (
          <div className="absolute top-0 w-10 h-10 left-[-2px]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="10"
              height="10"
              viewBox="0 0 10 10"
              fill="none"
            >
              <circle cx="5" cy="5" r="5" fill="#00CC66" />
            </svg>
          </div>
        )}
        <div className="flex gap-1 items-center md:mb-0 md:justify-end">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <mask
              id="mask0_1771_9951"
              style={{ maskType: 'alpha' }}
              maskUnits="userSpaceOnUse"
              x="0"
              y="0"
              width="24"
              height="24"
            >
              <rect width="24" height="24" fill="#D9D9D9" />
            </mask>
            <g mask="url(#mask0_1771_9951)">
              <path
                d="M11 18C10.7167 18 10.4792 17.9042 10.2875 17.7125C10.0958 17.5208 10 17.2833 10 17C10 16.7167 10.0958 16.4792 10.2875 16.2875C10.4792 16.0958 10.7167 16 11 16H13C13.2833 16 13.5208 16.0958 13.7125 16.2875C13.9042 16.4792 14 16.7167 14 17C14 17.2833 13.9042 17.5208 13.7125 17.7125C13.5208 17.9042 13.2833 18 13 18H11ZM7 13C6.71667 13 6.47917 12.9042 6.2875 12.7125C6.09583 12.5208 6 12.2833 6 12C6 11.7167 6.09583 11.4792 6.2875 11.2875C6.47917 11.0958 6.71667 11 7 11H17C17.2833 11 17.5208 11.0958 17.7125 11.2875C17.9042 11.4792 18 11.7167 18 12C18 12.2833 17.9042 12.5208 17.7125 12.7125C17.5208 12.9042 17.2833 13 17 13H7ZM4 8C3.71667 8 3.47917 7.90417 3.2875 7.7125C3.09583 7.52083 3 7.28333 3 7C3 6.71667 3.09583 6.47917 3.2875 6.2875C3.47917 6.09583 3.71667 6 4 6H20C20.2833 6 20.5208 6.09583 20.7125 6.2875C20.9042 6.47917 21 6.71667 21 7C21 7.28333 20.9042 7.52083 20.7125 7.7125C20.5208 7.90417 20.2833 8 20 8H4Z"
                fill="#3C3C3C"
              />
            </g>
          </svg>
          <span className="text-grey-dark text-base font-semibold leading-[20px]">Filter</span>
        </div>
      </div>
    </>
  )
}
