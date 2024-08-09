import { useEffect, useRef, useState } from 'react'
import { useSelect } from 'downshift'
import clsx from 'clsx'

export const LocationsFilter: React.FC<any> = ({ setFilters, filters, locations }) => {
  const [showDropDown, setShowDropDown] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)
  const [selectedItems, setSelectedItems] = useState<any[]>([])

  useEffect(() => {
    const handleClickOutside = (event: any) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowDropDown(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  useEffect(() => {
    if (filters?.selectedValue?.location) {
      setSelectedItems(filters?.selectedValue?.location)
    }
  }, [filters])

  const items = locations.reduce((initial: any, current: any) => [...initial, current], [])

  const { isOpen, getToggleButtonProps, getMenuProps, highlightedIndex, getItemProps, closeMenu } =
    useSelect({
      items,
      selectedItem: null,
      onSelectedItemChange: ({ selectedItem }) => {
        if (!selectedItem) {
          return
        }
      },
      stateReducer: (state, actionAndChanges) => {
        const { changes, type } = actionAndChanges
        switch (type) {
          //@ts-ignore
          case useSelect.stateChangeTypes.MenuKeyDownEnter:
          //@ts-ignore
          case useSelect.stateChangeTypes.ItemClick:
            return {
              ...changes,
              isOpen: true, // keep menu open after selection.
              highlightedIndex: state.highlightedIndex,
            }
          default:
            return changes
        }
      },
    })

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>, item: any) => {
    const isChecked = event.target.checked
    const newSelectedItems = isChecked
      ? [...selectedItems, item]
      : selectedItems.filter((selectedItem) => selectedItem._id !== item._id)

    setSelectedItems(newSelectedItems)
    setFilters((prevFilters: any) => ({
      ...prevFilters,
      selectedValue: {
        ...prevFilters?.selectedValue,
        location: newSelectedItems,
      },
    }))
  }

  return (
    <div
      className="rounded-[8px] py-3 pr-3 flex gap-2 items-center mb-6 md:mb-0 relative cursor-pointer"
      ref={dropdownRef}
    >
      <span
        className="flex-1 text-grey-dark text-base leading-[24px] whitespace-nowrap"
        {...getToggleButtonProps()}
        onClick={() => setShowDropDown(!showDropDown)}
      >
        Locations
      </span>
      {showDropDown ? (
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

      {showDropDown && (
        <div
          ref={dropdownRef}
          {...getMenuProps()}
          className="absolute top-[55px] left-0 flex flex-col w-[250px] z-50 rounded-[8px] bg-off-white shadow-level2 overflow-hidden"
        >
          <div className="left-0 flex flex-col w-[250px] overflow-hidden">
            {['Singapore', 'Johor', 'Malacca'].map((country) => (
              <ul
                key={country}
                className="relative max-h-[355px] overflow-auto filter-scrollbar py-3"
              >
                <span className="pl-4 text-[16px] text-[#969696] font-normal">{country}</span>
                {items
                  .filter((item: any) => item.country === country)
                  .sort((a: any, b: any) => a.name.localeCompare(b.name))
                  .map((item: any, index: any) => (
                    <label
                      key={index}
                      className={clsx('py-1 pl-4 pr-1 flex items-center cursor-pointer')}
                    >
                      <input
                        type="checkbox"
                        checked={selectedItems.some(
                          (selectedItem) => selectedItem._id === item._id,
                        )}
                        value={item._id}
                        onChange={(e) => handleCheckboxChange(e, item)}
                        className="w-4 h-4 text-[#004E89] rounded-md form-checkbox focus:ring-0 focus:outline-none"
                      />
                      <span className="font-normal text-normal text-[#3C3C3C] pl-2">
                        {item.name}
                      </span>
                    </label>
                  ))}
              </ul>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
