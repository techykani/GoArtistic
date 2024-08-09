import { PortableText } from '@/sanity'
import { DoctorListSearchField } from './doctorListSearchField'
import { useEffect, useRef, useState } from 'react'
import { DoctorPopupFilter } from './doctorPopupFilter'
import { DoctorListingData } from './doctorListingData'
import Title from '../widgets/shared/title'
import { useWindowSize } from '@/lib/hooks'

import { LocationsFilter } from './filters/locationsFilter'
import { TabFilter } from './filters/tabFilter'
import { OrderFilter } from './filters/orderFilter'
import { SpecialityFilterDropdown } from './filters/specialityFilter'

export const DoctorListing: React.FC<any> = ({
  filterDropdownOptions,
  doctors,
  specialities,
  centers,
}) => {
  const [selectedIndex, setSelectedIndex] = useState<number>(0)
  const [sliderPosition, setSliderPosition] = useState(0)
  const [searchInputPlaceholder, setsearchInputPlaceholder] = useState('Search a doctor here...')
  const headingRef = useRef<HTMLHeadingElement>(null)
  const windowWidth = useWindowSize()?.width ?? 0
  const [filters, setFilters] = useState<any>({
    searchValues: '',
    selectedType: filterDropdownOptions?.titleFilter[0],
    selectedValue: {
      speciality: [],
      location: [],
      alpha: 'A-Z',
    },
  })
  const [docCount, setDocCount] = useState(0)
  const getFilteredDocNumber = (docCount: number) => {
    setDocCount(docCount)
  }

  useEffect(() => {
    if (headingRef.current) {
      const rect = headingRef.current.getBoundingClientRect()
      const leftPosition = rect.left
      setSliderPosition(leftPosition)
    }
  }, [windowWidth])
  const removeCheckbox = (value: any, tab: any) => {
    if (tab === 'location') {
      setFilters((prevFilters: any) => ({
        ...prevFilters,
        selectedValue: {
          ...prevFilters.selectedValue,
          location: prevFilters?.selectedValue?.location?.filter((item: any) => item !== value),
        },
      }))
    } else {
      setFilters((prevFilters: any) => ({
        ...prevFilters,
        selectedValue: {
          ...prevFilters.selectedValue,
          speciality: prevFilters?.selectedValue?.speciality?.filter((item: any) => item !== value),
        },
      }))
    }
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
      selectedValue: {
        speciality: [],
        location: [],
        alpha: 'A-Z',
      },
    }))
  }
  return (
    <section className="bg-[#F1F6FF] px-6 md:px-[71px] py-[48px] md:py-[80px]">
      <div className="container mx-auto flex flex-col gap-[32px] md:gap-[36px]">
        {/* title */}
        <div className="w-full flex flex-col md:flex-row gap-8 md:justify-between">
          <div className="w-full flex flex-col gap-4 md:max-w-[496px]">
            <Title headingType="h2" tagline={filterDropdownOptions?.title} theme="light" />
            <div className="text-grey-8 text-base leading-[24px]">
              <PortableText blocks={filterDropdownOptions?.description} />
            </div>
          </div>
          <div className="w-full md:w-1/2 lg:max-w-[496px] md:flex md:items-end flex flex-row gap-4">
            <div className="w-full h-[40px] md:h-[56px] flex gap-2 bg-off-white px-4 md:px-6 py-4 rounded-full md:rounded-lg shadow-level2 items-center">
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
                searchInputPlaceholder={searchInputPlaceholder}
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
              <DoctorPopupFilter
                filters={filters}
                setFilters={setFilters}
                filterDropdownOptionsList={filterDropdownOptions}
                specialities={specialities}
                locations={centers}
              />
            </div>
          </div>
        </div>
        <TabFilter
          options={filterDropdownOptions?.titleFilter}
          selectedIndex={selectedIndex}
          setSelectedIndex={setSelectedIndex}
          filters={filters}
          setFilters={setFilters}
          sliderPosition={sliderPosition}
        />
        {/* cards */}
        <div className="w-full flex flex-col gap-[24px] md:gap-[32px]">
          <div
            style={{ paddingLeft: sliderPosition, paddingRight: sliderPosition }}
            className="flex flex-col gap-[15px]"
          >
            <div className="w-full flex justify-between items-center">
              <div className="text-grey-9 text-base font-semibold leading-[20px]">
                {docCount === undefined ? 0 : docCount} doctor{docCount > 1 && 's'} found
              </div>
              <div className="md:flex gap-2 items-center md:mb-0 md:justify-end hidden">
                <span className="text-grey-dark text-base font-semibold leading-[20px]">
                  Filter by
                </span>{' '}
                <LocationsFilter filters={filters} setFilters={setFilters} locations={centers} />
                <SpecialityFilterDropdown
                  specialities={specialities}
                  filters={filters}
                  setFilters={setFilters}
                />
                <span className="text-grey-dark text-base font-semibold leading-[20px]">
                  Sort by
                </span>{' '}
                <OrderFilter
                  filterDropdownOptionsList={filterDropdownOptions}
                  filters={filters}
                  setFilters={setFilters}
                />
              </div>
            </div>
            <div className="justify-between flex w-full">
              <div className="flex gap-3 md:flex-wrap overflow-scroll slider-body">
                {filters?.selectedValue?.location?.length !== 0 && (
                  <>
                    {filters?.selectedValue?.location?.map((tab: any, i: any) => (
                      <div
                        key={i}
                        className="text-[14px] font-semibold flex items-center justify-center leading-[20px] text-center px-3 py-1.5 rounded-[24px] whitespace-nowrap transition-all duration-150 cursor-pointer bg-[#7392AA] text-off-white"
                        onClick={() => removeCheckbox(tab, 'location')}
                      >
                        <span>{tab?.name}</span>
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

                {filters.selectedValue?.speciality?.length !== 0 && (
                  <>
                    {filters?.selectedValue?.speciality?.map((tab: any, i: any) => (
                      <div
                        key={i}
                        className="text-[14px] font-semibold flex items-center justify-center leading-[20px] text-center px-3 py-1.5 rounded-[24px] whitespace-nowrap transition-all duration-150 cursor-pointer bg-[#7392AA] text-off-white"
                        onClick={() => removeCheckbox(tab, 'speciality')}
                      >
                        <span>{tab?.title}</span>
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
              {(filters?.selectedValue?.location?.length !== 0 ||
                filters.selectedValue?.speciality?.length !== 0) && (
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
          </div>
          {/* individual cards */}
          <DoctorListingData
            doctorList={doctors}
            filters={filters}
            getDocCount={getFilteredDocNumber}
          />
        </div>
      </div>
    </section>
  )
}
