import { Dispatch, SetStateAction, useState } from 'react'
import { useWindowSize } from '@/lib/hooks'
import { GTAEvent } from '@/lib/gtag'

interface HeroProps {
  placeholder: string
  setSearchText: Dispatch<SetStateAction<string | string[]>>
  searchText: string | string[]
}

export const SearchInput = ({ placeholder, setSearchText, searchText }: any) => {
  const windowWidth = useWindowSize()?.width ?? 0

  const [inputValue, setInputValue] = useState(searchText)

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    GTAEvent('search', {
      search_term: event?.target?.value,
      search_location: 'Search Query',
    })
    setInputValue(event.target.value)
    setSearchText(event.target.value)
  }

  const handleInputClick = (e: any) => {
    e.target.placeholder = ''
  }
  const clearSearch = () => {
    setInputValue('')
    setSearchText('')
  }
  return (
    <form className="w-full flex items-center shadow-level-2">
      <input
        className="placeholder:text-neutral-300 flex-1 rounded-[4px] bg-off-white focus:bg-off-white focus:outline-none focus:border-off-white py-4"
        placeholder={placeholder}
        value={inputValue}
        onChange={(event) => handleChange(event)}
        onClick={handleInputClick}
      />
      {inputValue && (
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
    </form>
  )
}
