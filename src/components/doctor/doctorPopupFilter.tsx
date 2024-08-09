import { useState, useEffect, useRef } from 'react'
import { useQuery } from 'react-query'
import { sanityClient } from '@/sanity'
import { groq } from 'next-sanity'
import { GTAEvent } from '@/lib/gtag'
import clsx from 'clsx'

const alphaFilter = ['A-Z', 'Z-A']
export const DoctorPopupFilter: React.FC<any> = ({
  setFilters,
  filters,
  filterDropdownOptionsList,
  specialities,
  locations,
}) => {
  const [showFilterPopup, setShowFilterPopup] = useState(false)
  const [selectedSpeciality, setSelectedSpeciality] = useState<string[]>([])
  const [selectedItems, setSelectedItems] = useState<string[]>([])
  const [filterActive, setFilterActive] = useState(false)
  const [selectedalphaItems, setSelectedalphaItems] = useState<string>('A-Z')
  const dropdownRef = useRef<HTMLDivElement>(null)
  useEffect(() => {
    if (filters?.selectedValue?.location) {
      setSelectedItems(filters?.selectedValue?.location)
    }
    setSelectedSpeciality(filters?.selectedValue?.speciality)
  }, [filters])
  const handleApply = (speciality: any, location: any, alpha: any) => {
    setFilters((prevObject: any) => ({
      ...prevObject, // spread the existing properties
      selectedValue: {
        speciality: speciality,
        location: location,
        alpha: alpha,
      }, // update the desired property
    }))
    GTAEvent('apply_filter', {
      listing_name: 'Doctor',
      filter_options_1: speciality,
      filter_options_4: location,
      filter_options_5: alpha,
    })
    setFilterActive(true)
    setShowFilterPopup(false)
  }
  const handleClear = () => {
    setSelectedSpeciality([])
    setSelectedItems([])
    setFilters((prevObject: any) => ({
      ...prevObject, // spread the existing properties
      selectedValue: {
        speciality: '',

        location: '',
        alpha: 'A-Z',
      }, // update the desired property
    }))
    setFilterActive(false)
    setShowFilterPopup(false)
  }

  useEffect(() => {
    const body: any = document.querySelector('body')
    if (!showFilterPopup) {
      body.style.overflow = 'auto'
    } else {
      body.style.overflow = 'hidden'
    }
  }, [showFilterPopup])

  const handlealphacheckbox = (e: any) => {
    setSelectedalphaItems(e)
  }
  const handleCheckboxChange = (eve: any, e: any) => {
    var temp = selectedItems
    if (eve.target.checked === false) {
      temp = temp.filter((a) => {
        return a != e
      })
    }
    eve.target.checked ? setSelectedItems([...selectedItems, e]) : setSelectedItems([...temp])
  }
  const handleSpeciality = (eve: any, e: any) => {
    var temp = selectedSpeciality
    if (eve.target.checked === false) {
      temp = temp.filter((a) => {
        return a != e
      })
    }
    eve.target.checked
      ? setSelectedSpeciality([...selectedSpeciality, e])
      : setSelectedSpeciality([...temp])
  }
  return (
    <>
      {showFilterPopup && (
        <div className="fixed inset-0 z-[1000]">
          <div
            className="fixed inset-0 bg-[#000000b3] opacity-50"
            onClick={() => setShowFilterPopup(false)}
          />
          <div className="bg-off-white w-[80%] md:bg-[#000000b3] fixed inset-y-0 right-0 z-[1001]">
            <section
              className={`w-full md:min-h-[546px] z-[999] flex md:justify-center md:pt-[102px] lg:py-[127px] md:px-8 lg:px-[175px] relative ${
                showFilterPopup ? 'slide-in' : 'slide-out'
              }`}
            >
              <div className="w-full h-full bg-off-white md:max-w-[392px] md:rounded-[12px] mx-auto">
                {/* header */}
                <div className="w-full flex justify-between items-center py-4 px-6">
                  <p className="text-[#5A5A5A] text-[14px] font-semibold leading-[20px]">Sort by</p>
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
                      <g clipPath="url(#clip0_1_136259)">
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
                <div className="border-[1px] border-grey-3" />
                <div className="flex flex-col h-full">
                  <div className="flex-grow overflow-y-auto px-2 filter-dropdown-scroll">
                    {/* Alphabetical filter */}
                    <div className="left-0 flex flex-col w-[180px] py-6">
                      <ul className="relative max-h-[355px]">
                        {alphaFilter.map((item: any, index: any) => (
                          <label
                            key={index}
                            className={clsx('py-1 pl-4 pr-1 flex items-center cursor-pointer')}
                            onClick={() => handlealphacheckbox(item)}
                          >
                            <input
                              type="radio"
                              checked={selectedalphaItems === item}
                              readOnly
                              className="w-4 h-4 text-[#004E89] rounded-md focus:ring-0 focus:outline-none"
                            />
                            <span className="font-normal text-normal text-[#5A5A5A] pl-4">
                              {item}
                            </span>
                          </label>
                        ))}
                      </ul>
                    </div>
                    <div className="border-[1px] border-grey-3 " />

                    {/* Locations */}
                    <div className="pb-8 left-0 flex flex-col w-[250px] py-6">
                      <p className="font-semibold text-normal pl-6 pb-4 text-[#5A5A5A]">Location</p>
                      {['Singapore', 'Johor', 'Malacca'].map((country, i) => (
                        <ul key={`${country}-${i}`} className="relative">
                          <p className="pl-6 pt-2 text-[#8A8A8A]">{country}</p>
                          {locations
                            .filter((x: any) => x?.country === country)
                            .sort((a: any, b: any) => a?.name.localeCompare(b?.name))
                            .map((x: any, index: any) => (
                              <label
                                key={index}
                                className={clsx('py-1 pl-4 pr-1 flex items-center cursor-pointer')}
                                onClick={(eve) => handleCheckboxChange(eve, x)}
                              >
                                <input
                                  type="checkbox"
                                  checked={selectedItems?.includes(x)}
                                  readOnly
                                  className="w-4 h-4 text-[#004E89] rounded-md focus:ring-0 focus:outline-none"
                                />
                                <span className="font-normal text-normal text-[#5A5A5A] pl-4">
                                  {x?.name}
                                </span>
                              </label>
                            ))}
                        </ul>
                      ))}
                    </div>
                    <div className="border-[1px] border-grey-3 " />
                    {/* Specialities */}
                    <div className="pb-8 left-0 flex flex-col w-[250px] py-6">
                      <p className="font-semibold text-normal pl-6 pb-4 text-[#5A5A5A]">
                        Speciality
                      </p>
                      <ul className="relative max-h-[355px]">
                        {specialities
                          .sort((a: any, b: any) => a?.title.localeCompare(b?.title))
                          .map((item: any, index: any) => (
                            <label
                              key={index}
                              className={clsx('py-1 pl-4 pr-1 flex items-center cursor-pointer')}
                              onClick={(eve) => handleSpeciality(eve, item)}
                            >
                              <input
                                type="checkbox"
                                checked={selectedSpeciality.includes(item)}
                                readOnly
                                className="w-4 h-4 text-[#004E89] rounded-md form-checkbox focus:ring-0 focus:outline-none"
                              />
                              <span className="font-normal text-normal text-[#5A5A5A] pl-4">
                                {item?.title}
                              </span>
                            </label>
                          ))}
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="px-4 md:px-8 lg:px-[60px] md:pt-[50px]">
                  <div className="border-[1px] border-grey-3" />
                  <div className="flex justify-between items-center py-[17px] md:py-6">
                    <p
                      onClick={handleClear}
                      className="inline text-grey-dark text-base font-semibold leading-[24px] cursor-pointer"
                    >
                      Clear all
                    </p>
                    <button
                      onClick={() =>
                        handleApply(selectedSpeciality, selectedItems, selectedalphaItems)
                      }
                      className="w-1/2 disabled:text-off-white disabled:bg-[#00000040] btn_primary_small-light font-semibold rounded-full leading-[20px] text-center disabled:border-none disabled:py-3"
                    >
                      Apply
                    </button>
                  </div>
                </div>
              </div>
            </section>
          </div>
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
        <div className="w-[66px] bg-off-white px-6 py-2.5 rounded-full md:rounded-lg shadow-level2 items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M15.0625 11.1667C16.4234 11.1667 17.5585 12.169 17.8189 13.5007L18.4375 13.5C18.7482 13.5 19 13.7612 19 14.0833C19 14.3697 18.801 14.6079 18.5386 14.6573L18.4375 14.6667L17.8186 14.6672C17.5579 15.9982 16.423 17 15.0625 17C13.702 17 12.5671 15.9982 12.3064 14.6672L1.5625 14.6667C1.25184 14.6667 1 14.4055 1 14.0833C1 13.797 1.19898 13.5588 1.46139 13.5094L1.5625 13.5L12.3061 13.5007C12.5665 12.169 13.7016 11.1667 15.0625 11.1667ZM15.0625 12.3333C14.1332 12.3333 13.3793 13.1124 13.375 14.0751C13.375 14.0778 13.375 14.0805 13.375 14.0833L13.3739 14.0915L13.3827 14.2519C13.4645 15.1393 14.1853 15.8333 15.0625 15.8333C15.9945 15.8333 16.75 15.0498 16.75 14.0833C16.75 13.1168 15.9945 12.3333 15.0625 12.3333ZM4.9375 3C6.29839 3 7.43353 4.00236 7.69387 5.334L18.4375 5.33333C18.7482 5.33333 19 5.5945 19 5.91667C19 6.20304 18.801 6.44121 18.5386 6.4906L18.4375 6.5L7.69364 6.50051C7.43286 7.83156 6.29799 8.83333 4.9375 8.83333C3.57701 8.83333 2.44214 7.83156 2.18136 6.50051L1.5625 6.5C1.25184 6.5 1 6.23883 1 5.91667C1 5.6303 1.19898 5.39212 1.46139 5.34273L1.5625 5.33333L2.18113 5.334C2.44147 4.00236 3.57661 3 4.9375 3ZM4.9375 4.16667C4.00552 4.16667 3.25 4.95017 3.25 5.91667C3.25 6.88316 4.00552 7.66667 4.9375 7.66667C5.86948 7.66667 6.625 6.88316 6.625 5.91667C6.625 4.95017 5.86948 4.16667 4.9375 4.16667Z"
              fill="#5A5A5A"
            />
          </svg>
        </div>
      </div>
    </>
  )
}