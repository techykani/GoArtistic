import { Dispatch, SetStateAction, useState } from 'react'
import { useWindowSize } from '@/lib/hooks'
import { IoSearch } from 'react-icons/io5'
import Title from '@/components/widgets/shared/title'
import { GTAEvent } from '@/lib/gtag'

interface HeroProps {
  placeholder: string
  setSearchText: Dispatch<SetStateAction<string | string[]>>
  searchText: string | string[]
}

export const SearchInput = ({ placeholder, setSearchText, searchText }: HeroProps) => {
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
    <section
      style={{
        background: '',
      }}
      className=" py-[32px] md:py-[36px] px-6"
    >
      <div className="max-w-[1016px] mx-auto flex flex-col gap-8 md:gap-4">
        <p className="text-[#5A5A5A] text-[16px]">Search Results</p>
        <div className="container mx-auto">
          <form className="w-full flex items-center shadow-level-2">
            <div className=" rounded-lg  bg-[#E6E6E6] flex items-center py-4 px-6 gap-2 flex-1">
              <label>
                <IoSearch className="text-[#6E6E6E] text-xl leading-5" />
              </label>
              <input
                className="bg-transparent w-full outline-none border-none text-base text-[#3C3C3C] font-semibold placeholder:text-[#6E6E6E] placeholder:text-base placeholder:font-normal"
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
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}
