import { useEffect, useRef, useState } from 'react'
import { TabFilter } from './filters/tabFilter'
import { PopupFilter } from './popupFilter'
import { ClinicListingData } from './clinicListingData'
import GoogleMapComponent from '../common/GoogleMap'
import { useWindowSize } from '@/lib/hooks'
import { DoctorListSearchField } from '../doctor/doctorListSearchField'
import Title from '../widgets/shared/title'

import { OrderFilter } from './filters/orderFilter'
import { ZoneFilterDropdown } from './filters/zoneFilter'

export interface ClinicFilters {
  center: string
  searchValues: string
  sortBy?: {
    zone: []
    alpha: string
  }
}

export const ClinicListing: React.FC<any> = ({ filterDropdownOptions, clinics }) => {
  const [selectedIndex, setSelectedIndex] = useState<any>('All')
  const [locationList, setlocationlist] = useState(clinics)
  const [filters, setFilters] = useState<ClinicFilters>({
    center: filterDropdownOptions?.centerFilter[0],
    searchValues: '',
    sortBy: {
      zone: [],
      alpha: 'A-Z',
    },
  })
  const [ClinicCount, setClinicCount] = useState(0)
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

  const getFilteredClinicNumber = (ClinicCount: number) => {
    setClinicCount(ClinicCount)
  }
  const positions = locationList.map(
    ({
      name,
      latitude,
      longitude,
      address,
      slug,
      description,
    }: {
      name: string
      latitude: number
      longitude: number
      address: string
      slug: any
      description: string
    }) => ({
      locationName: name,
      latitude: latitude,
      longitude: longitude,
      address: address,
      slug: slug,
      description: description,
    }),
  )
  const removeCheckbox = (tab: any) => {
    setFilters((prevFilters: any) => ({
      ...prevFilters,
      sortBy: {
        ...prevFilters.sortBy,
        zone: prevFilters?.sortBy?.zone?.filter((item: any) => item !== tab),
      },
    }))
  }
  const clearSearch = () => {
    setFilters((prevFilters: any) => ({
      ...prevFilters,
      searchValues: '',
    }))
  }
  return (
    <main className="w-full bg-[#F1F6FF]">
      {/* notification section */}
      <section className="md:px-[71px] md:py-8">
        <div className="md:px-[71px] md:pt-[48px]">
          <div className="container mx-auto">
            <GoogleMapComponent positionsList={positions} />
          </div>
        </div>
      </section>

      <section className="pt-[24px] pb-[48px] md:pt-[4px] md:pb-20 flex flex-col gap-8 md:gap-[36px]">
        <div className="px-6 md:px-[71px] ">
          <div className="container mx-auto">
            {/* <PrimarySectionHorizontal
              title={''}
              tagline={filterDropdownOptions?.title}
              description={filterDropdownOptions?.description}
              target={'_self'}
              btnType={'primary'}
              arrowVisibility={false}
              theme={'light'}
              customStyle={''}
              size={'small'}
              arrowColor={'white'}
            /> */}
            <div
              ref={headingRef}
              className="container mx-auto flex flex-col md:flex-row gap-6 md:justify-between "
            >
              {filterDropdownOptions.title && (
                <Title headingType="h2" theme="light" tagline={filterDropdownOptions.title} />
              )}
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
                    searchInputPlaceholder="Search clinics"
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
                    options={filterDropdownOptions?.zoneFilter}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <TabFilter
          options={filterDropdownOptions?.centerFilter}
          selectedIndex={selectedIndex}
          setSelectedIndex={setSelectedIndex}
          filters={filters}
          setFilters={setFilters}
          sliderPosition={sliderPosition}
        />
        <div className="flex flex-col gap-8 md:gap-12">
          {/* filter */}
          <div
            style={{ paddingLeft: sliderPosition, paddingRight: sliderPosition }}
            className="flex flex-col gap-6 md:gap-8"
          >
            <div className="w-full flex flex-row justify-between items-center">
              <div className="text-grey-9 text-base font-semibold leading-[20px]">
                {ClinicCount === undefined ? 0 : ClinicCount} clinic{ClinicCount > 1 && 's'} found
              </div>

              <div className="md:flex gap-2 items-center md:mb-0 md:justify-end hidden">
                <span className="text-grey-dark text-base font-semibold leading-[20px]">
                  Sort by
                </span>{' '}
                <ZoneFilterDropdown
                  options={filterDropdownOptions?.zoneFilter}
                  filters={filters}
                  setFilters={setFilters}
                />
                <OrderFilter
                  filterDropdownOptionsList={filterDropdownOptions}
                  filters={filters}
                  setFilters={setFilters}
                />
              </div>
            </div>
            {filters?.sortBy?.zone?.length !== 0 && (
              <div className="flex gap-3 overflow-scroll slider-body">
                {filters?.sortBy?.zone?.map((tab: any, i: any) => (
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
                ))}
              </div>
            )}
            <ClinicListingData
              clinicList={clinics}
              filters={filters}
              getClinicCount={getFilteredClinicNumber}
            />
          </div>
        </div>
      </section>
    </main>
  )
}
