import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'
import { DoctorListSearchField } from '../doctor/doctorListSearchField'
import { TabFilter } from './tabFilter'
import { MediaListingData } from './mediaListingData'
import { PopupFilter } from './popupFilter'
import { useWindowSize } from '@/lib/hooks'
import Title from '../widgets/shared/title'

export const mediaTypes = ['All types', 'News', 'Announcements', 'Events', 'Videos']

export const MediaListing: React.FC<any> = ({ filterDropdownOptions, media }) => {
  const [selectedTags, setSelectedTags] = useState('All types')

  const handleTag = (type: string) => {
    setSelectedTags(type)
  }
  const [selectedIndex, setSelectedIndex] = useState<any>('All types')
  const [filters, setFilters] = useState<any>({
    searchValues: '',
    selectedType: filterDropdownOptions?.specialistFilter[0],
    selectedValue: {
      topic: [],
      center: '',
      year: '',
      month: '',
    },
  })
  const [docCount, setDocCount] = useState(0)
  const getFilteredDocNumber = (docCount: number) => {
    setDocCount(docCount)
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

  return (
    <div className="bg-[#FEFEFE]">
      {/* title and search */}
      <div className=" w-full px-6 md:px-[71px] py-[48px] md:py-[80px] pb-8 md:pb-12">
        <div
          ref={headingRef}
          className="container mx-auto flex flex-col md:flex-row gap-6 md:justify-between "
        >
          {filterDropdownOptions.title && (
            <Title headingType="h2" theme="light" tagline={filterDropdownOptions.title} />
          )}
          <div className="w-full md:w-1/2 lg:max-w-[496px] md:flex md:items-end">
            <div className="w-full flex gap-2 bg-off-white px-4 md:px-6 py-4 rounded-lg shadow-level2 items-center">
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
                searchInputPlaceholder="Search for a media content..."
                filters={filters}
                setFilters={setFilters}
              />
            </div>
          </div>
        </div>
      </div>
      {/* tags */}
      {/* <div className={`  flex gap-3 overflow-scroll slider-body pb-6 md:pb-8`}>
        <TabFilter
          options={filterDropdownOptions?.specialistFilter}
          selectedIndex={selectedIndex}
          setSelectedIndex={setSelectedIndex}
          filters={filters}
          setFilters={setFilters}
          sliderPosition={sliderPosition}
        />
      </div> */}
      {/* filter */}
      <div className=" px-6 md:px-[71px] pb-[48px] md:pb-[80px]">
        <div className="container mx-auto flex flex-col gap-6 md:gap-8">
          <div className="w-full flex flex-row justify-between md:items-center">
            <p className="w-full text-grey-dark text-base leading-[20px] font-semibold">
              {docCount === undefined ? 0 : docCount} article{docCount > 1 && 's'} found
            </p>
            {/* <div>
              <PopupFilter
                filters={filters}
                setFilters={setFilters}
                filterDropdownOptionsList={filterDropdownOptions}
                media={media}
              />
            </div> */}
            {/* <div className="flex gap-1 items-center">
              <div className="w-6 h-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <mask
                    id="mask0_2822_16183"
                    style={{ maskType: 'alpha' }}
                    maskUnits="userSpaceOnUse"
                    x="0"
                    y="0"
                    width="24"
                    height="24"
                  >
                    <rect width="24" height="24" fill="#D9D9D9" />
                  </mask>
                  <g mask="url(#mask0_2822_16183)">
                    <path
                      d="M11 18C10.7167 18 10.4792 17.9042 10.2875 17.7125C10.0958 17.5208 10 17.2833 10 17C10 16.7167 10.0958 16.4792 10.2875 16.2875C10.4792 16.0958 10.7167 16 11 16H13C13.2833 16 13.5208 16.0958 13.7125 16.2875C13.9042 16.4792 14 16.7167 14 17C14 17.2833 13.9042 17.5208 13.7125 17.7125C13.5208 17.9042 13.2833 18 13 18H11ZM7 13C6.71667 13 6.47917 12.9042 6.2875 12.7125C6.09583 12.5208 6 12.2833 6 12C6 11.7167 6.09583 11.4792 6.2875 11.2875C6.47917 11.0958 6.71667 11 7 11H17C17.2833 11 17.5208 11.0958 17.7125 11.2875C17.9042 11.4792 18 11.7167 18 12C18 12.2833 17.9042 12.5208 17.7125 12.7125C17.5208 12.9042 17.2833 13 17 13H7ZM4 8C3.71667 8 3.47917 7.90417 3.2875 7.7125C3.09583 7.52083 3 7.28333 3 7C3 6.71667 3.09583 6.47917 3.2875 6.2875C3.47917 6.09583 3.71667 6 4 6H20C20.2833 6 20.5208 6.09583 20.7125 6.2875C20.9042 6.47917 21 6.71667 21 7C21 7.28333 20.9042 7.52083 20.7125 7.7125C20.5208 7.90417 20.2833 8 20 8H4Z"
                      fill="#3C3C3C"
                    />
                  </g>
                </svg>
              </div>
              <p className="text-grey-dark text-base font-semibold leading-[20px]">Filter</p>
            </div> */}
          </div>
          <MediaListingData
            clinicList={media}
            filters={filters}
            getClinicCount={getFilteredDocNumber}
          />
        </div>
      </div>
    </div>
  )
}
