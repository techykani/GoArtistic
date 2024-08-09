import { GTAEvent } from '@/lib/gtag'
import clsx from 'clsx'
import { useEffect, useRef, useState } from 'react'

const gender = ['All', 'Male', 'Female']
export const GenderFilter: React.FC<any> = ({ setFilters, filters }) => {
  const [showDropDrown, setShowDropDown] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)
  const [selectedItems, setSelectedItems] = useState<string>('All')

  useEffect(() => {
    const handleClickOutside = (event: any) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setShowDropDown(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  const handlecheckbox = (eve: any) => {
    setSelectedItems(eve)
    setShowDropDown(false) // Close the dropdown after selection
    setFilters((prevObject: any) => ({
      ...prevObject,
      selectedGendersAndLanguages: {
        ...prevObject.selectedGendersAndLanguages,
        gender: eve,
      },
    })),
      GTAEvent('view_content', {
        listing_name: 'Health Screning',
        content_name: '',
        content_type: eve,
      })
  }
  const handleToggleDropdown = (event: React.MouseEvent) => {
    event.stopPropagation()
    setShowDropDown((prev) => !prev)
  }
  return (
    <>
      <div
        className="rounded-[8px] py-3 pr-3 flex gap-2 items-center mb-6 md:mb-0 relative cursor-pointer"
        onClick={handleToggleDropdown}
        ref={dropdownRef}
      >
        <span className="flex-1 text-grey-dark text-base leading-[24px] whitespace-nowrap">
          Gender
        </span>
        {showDropDrown ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M6.45997 14.3663C6.11247 13.9371 6.17876 13.3074 6.60802 12.9599L10.3496 9.93099C11.4503 9.03997 13.0241 9.03997 14.1248 9.93099L17.8664 12.9599C18.2957 13.3074 18.362 13.9371 18.0145 14.3663C17.667 14.7956 17.0373 14.8619 16.608 14.5144L12.8664 11.4855C12.4995 11.1885 11.9749 11.1885 11.608 11.4855L7.86641 14.5144C7.43715 14.8619 6.80747 14.7956 6.45997 14.3663Z"
              fill="#3C3C3C"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M18.0145 9.63451C18.362 10.0638 18.2957 10.6935 17.8665 11.0409L14.1249 14.0699C13.0242 14.9609 11.4503 14.9609 10.3497 14.0699L6.60807 11.0409C6.17881 10.6935 6.11253 10.0638 6.46003 9.63451C6.80752 9.20525 7.43721 9.13896 7.86647 9.48646L11.6081 12.5154C11.975 12.8124 12.4996 12.8124 12.8665 12.5154L16.6081 9.48646C17.0373 9.13896 17.667 9.20525 18.0145 9.63451Z"
              fill="#3C3C3C"
            />
          </svg>
        )}
        {/* dropdown */}
        {showDropDrown && (
          <div className="absolute top-[55px] left-0 flex flex-col w-[150px] z-50 rounded-[8px] bg-off-white shadow-level2 overflow-hidden">
            <div className="left-0 flex flex-col w-[180px] overflow-hidden">
              <ul className="relative max-h-[355px] overflow-auto filter-scrollbar py-3">
                {gender.map((item: any, index: any) => (
                  <label
                    key={index}
                    className={clsx('py-2 pl-4 pr-1 flex items-center cursor-pointer')}
                    onClick={() => handlecheckbox(item)}
                  >
                    <input
                      type="radio"
                      checked={selectedItems === item}
                      readOnly
                      className="w-4 h-4 text-[#004E89] focus:ring-0 focus:outline-none"
                    />
                    <span className="font-normal text-normal text-[#3C3C3C] pl-2">{item}</span>
                  </label>
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>
    </>
  )
}
