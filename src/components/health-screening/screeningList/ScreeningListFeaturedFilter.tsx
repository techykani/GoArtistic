import { Fragment, Dispatch, SetStateAction, useState, useRef, useEffect } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import { DownArrow } from '@/icons/downArrow'
import Link from 'next/link'
import { GTAEvent } from '@/lib/gtag'

interface DoctorListConsultationFilterProps {
  consultationFilterVariables: string[]
  filters: {
    selectedSortBy?: string
  }
  setFilters: Dispatch<
    SetStateAction<{
      selectedSortOption: string
      selectedSortBy?: string
    }>
  >
}

export const ScreeningListFeaturedFilter: React.FC<DoctorListConsultationFilterProps> = ({
  consultationFilterVariables,
  filters,
  setFilters,
}) => {
  const [showDropDrown, setShowDropDown] = useState(false)
  const dropdownRef = useRef(null)

  // const handleClickOutside = (event: any) => {
  //   if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
  //     setShowDropDown(false)
  //   }
  // }

  // useEffect(() => {
  //   document.addEventListener('mousedown', handleClickOutside)
  //   return () => {
  //     document.removeEventListener('mousedown', handleClickOutside)
  //   }
  // }, [])

  return (
    <div
      className="w-full md:max-w-[235px] rounded-[8px] border-[1px] border-grey-3 py-3 pl-4 pr-3 flex gap-2 items-center bg-off-white mb-6 md:mb-0 relative cursor-pointer"
      onClick={() => setShowDropDown(!showDropDrown)}
    >
      <span className="flex-1 text-grey-dark text-base leading-[24px] whitespace-nowrap">
        {filters.selectedSortBy}
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
      {showDropDrown && (
        <div
          ref={dropdownRef}
          className="absolute top-[55px] left-0 flex flex-col w-full z-50 rounded-[8px] bg-off-white shadow-level2 overflow-hidden"
        >
          {consultationFilterVariables.map((variable: any, personIdx: any) => (
            <span
              onClick={(eve: any) => {
                setFilters((prevObject: any) => ({
                  ...prevObject, // spread the existing properties
                  selectedSortBy: eve.target.innerText, // update the desired property
                })),
                  GTAEvent('view_content', {
                    listing_name: 'Health Screning',
                    content_name: '',
                    content_type: eve.target.innerText,
                  })
              }}
              key={personIdx}
              className="text-grey-dark text-base leading-[24px] px-4 py-3 hover:font-semibold hover:bg-[#E5F7FC] transition duration-200"
            >
              {variable}
            </span>
          ))}
        </div>
      )}
    </div>
  )
}
