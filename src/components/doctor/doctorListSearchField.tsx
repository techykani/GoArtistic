import { GTAEvent } from '@/lib/gtag'
import { useState } from 'react'

export const DoctorListSearchField: React.FC<any> = ({
  searchInputPlaceholder,
  filters,
  setFilters,
}) => {
  const [query, setQuery] = useState('')
  const [inputActive, setInputActive] = useState(false)

  const handleReset = (e: any) => {
    e.preventDefault()

    setQuery('')
    setFilters({
      selectedAutoCompleteValue: '',
      selectedSortOption: 'Sort by',
      selectedConsultationType: 'Any',
    })
    setInputActive(false)
  }
  const handleInputClick = (e: any) => {
    e.target.placeholder = ''
  }
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target
    setFilters((prevFilters: any) => ({
      ...prevFilters,
      searchValues: value,
    }))
    GTAEvent('search', {
      search_term: value,
      search_location: 'Search Query',
    })
  }
  return (
    <>
      <input
        className="w-full border-none outline-none placeholder:text-base placeholder:leading-[24px] placeholder:text-grey-8"
        placeholder={searchInputPlaceholder}
        value={filters.searchValues}
        onChange={handleChange}
        onClick={handleInputClick}
      />
    </>
  )
}
