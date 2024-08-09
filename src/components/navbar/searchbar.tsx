import { SearchIcon } from '@/icons/searchIcon'
import { useRouter } from 'next/router'
import React, { Dispatch, SetStateAction, useState } from 'react'

export const Searchbar = ({
  setNavbarActive,
}: {
  setNavbarActive?: Dispatch<SetStateAction<boolean>>
}) => {
  const router = useRouter()
  const [searchText, setSearchText] = useState('')

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(event.target.value)
  }

  const handleEnter = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter' && searchText.length >= 3) {
      router.push(
        {
          pathname: '/search',
          query: { searchText: searchText },
        },
        undefined,
        { shallow: true },
      )
      setNavbarActive && setNavbarActive(false)
    }
  }

  return (
    <div className="relative flex items-center justify-start mx-auto text-sm bg-white text-neutral-700">
      <input
        className="py-[9px] pr-7 pl-3 focus:outline-none placeholder:text-neutral-300 flex-1 border border-[#F0ECE7] focus:ring-0 focus-visible:ring-1 focus-visible:ring-copper-500 focus:border-copper-500 transition duration-300 rounded-[4px]"
        name="search"
        onChange={(event) => handleChange(event)}
        onKeyUp={(event) => handleEnter(event)}
        value={searchText}
        placeholder="Search here..."
      />
      <button type="submit" className="absolute right-0 mr-3 transform -translate-y-1/2 top-1/2">
        {searchText.length >= 3 ? (
          <SearchIcon className="w-[15px] h-[15px]" />
        ) : (
          <SearchIcon className="w-[15px] h-[15px]" color="#D3D4D6" />
        )}
      </button>
    </div>
  )
}
