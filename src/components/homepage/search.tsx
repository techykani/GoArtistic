import { GTAEvent } from '@/lib/gtag'
import { queryTitleAll } from '@/lib/queryClient'
import { sanityClient } from '@/sanity'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect, useRef, useState } from 'react'
import { useQuery } from 'react-query'
import isEmpty from 'lodash/isEmpty'

const highlightSearchTerm = (text: any, searchText: any) => {
  if (!searchText) return text

  const regex = new RegExp(`(${searchText})`, 'gi')
  return text.replace(regex, '<strong>$1</strong>')
}

const SearchBar = ({ placeholder, popularsearch }: any) => {
  const router = useRouter()
  const [searchText, setSearchText] = useState('')
  const [searchPlaceholder, setSearchPlaceholder] = useState(placeholder)
  const [showDropdown, setShowDropdown] = useState(false)
  const [currentPage, setCurrentPage] = useState(1)
  const dataPerpage = 6
  const [filteredLinks, setFilteredLinks] = useState([])
  const fetchAll = async (searchText: string | string[]) => {
    const query = queryTitleAll({
      searchText,
    })

    const results = await sanityClient('anonymous').fetch(query, {
      locale: router.locale,
      defaultLocale: 'en-my',
    })

    return results
  }

  console.log('popularsearch', popularsearch)

  const { data: allDoc, isLoading } = useQuery<any[], Error>(
    ['allDoc', searchText],
    () => fetchAll(searchText),
    {
      refetchOnWindowFocus: false,
      enabled: !!searchText,
    },
  )

  const indexOfLastData = currentPage * dataPerpage
  const paginatedData = allDoc?.slice(0, indexOfLastData)

  const inputRef = useRef<HTMLInputElement>(null)
  const dropdownRef = useRef<HTMLDivElement>(null)
  useEffect(() => {
    if (showDropdown && inputRef.current) {
      inputRef.current.focus()
    }
  }, [showDropdown])

  useEffect(() => {
    const country = sessionStorage.getItem('country')

    fetch(`https://ipinfo.io/json`)
      .then((response) => response.json())
      .then((data) => {
        if (!isEmpty(data)) {
          const filteredLinks = popularsearch.filter((link: any) => {
            if (link.text === 'International Patients' && data?.country === 'SG') {
              return false
            }
            return true
          })
          setFilteredLinks(filteredLinks)
        }
      })
      .catch((error) => {
        console.error('Error fetching IP information:', error)
        setFilteredLinks(popularsearch)
      })
  }, [popularsearch])

  const handleSearchModal = (event: any) => {
    GTAEvent('search', {
      search_term: event?.target?.value,
      search_location: 'Search Query',
    })
    setSearchText(event.target.value)
    if (event?.target?.value?.length >= 1) {
      setShowDropdown(true)
    } else {
      setShowDropdown(false)
    }
  }

  const clearSearch = () => {
    setSearchText('')
  }
  const handleEnter = (event: any) => {
    if (event.key === 'Enter') {
      router.push(
        {
          pathname: '/search',
          query: { searchText: searchText },
        },
        undefined,
        { shallow: true },
      )
    }
  }

  const handleClick = () => {
    if (searchText.length > 1) {
      router.push(
        {
          pathname: '/search',
          query: { searchText: searchText },
        },
        undefined,
        { shallow: true },
      )
    }
  }

  const handleInputClick = (e: any) => {
    e.target.placeholder = ''
  }
  useEffect(() => {
    const handleClickOutside = (event: any) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowDropdown(false)
        setSearchText(' ')
      }
    }

    document.addEventListener('mousedown', handleClickOutside)

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])
  const getDocUrl = (slug: Slug, type: string) => {
    switch (type) {
      case 'doctor':
        return `/doctors/${slug?.current}`

      case 'package':
        return `/services/health-screening/${slug?.current}`

      case `specialtyList`:
        return `/services/medical-specialties/${slug?.current}`

      case `media`:
        return `/media/${slug?.current}`

      case `insights`:
        return `/insights/${slug?.current}`

      default:
        return '#'
    }
  }
  const handleSelectModal = (value: any) => {
    GTAEvent('select_content', {
      search_term: value,
      search_location: 'Quicklinks',
    })
    setSearchText(value)
  }
  return (
    <section className="bg-[#004E89] px-6 md:px-[71px] py-8 md:py-12">
      <div className="max-w-[1016px] mx-auto flex flex-col gap-4 relative">
        <div className="w-full bg-[#FEFEFE] px-6 md:px-5 flex gap-2 md:gap-4 items-center rounded-lg shadow-level2 border-[0.5px] border-[#F0F0F0]">
          <div onClick={handleClick} className="cursor-pointer">
            <div className="w-5 h-5">
              {' '}
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
            </div>
          </div>
          <input
            ref={inputRef}
            id="home_search_v3"
            className="placeholder:text-[#6E6E6E] placeholder:italic flex-1 rounded-[4px] bg-off-white focus:bg-off-white focus:outline-none focus:border-off-white py-4"
            name="search"
            placeholder={searchPlaceholder}
            autoComplete="off"
            onClick={(e) => handleInputClick(e)}
            onChange={(event) => handleSearchModal(event)}
            onKeyUp={(event) => handleEnter(event)}
            value={searchText}
          />
          {showDropdown && (
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
        <div className="w-full flex gap-2 md:gap-3 flex-wrap">
          {filteredLinks.map(({ text, _id, href }: any) => (
            <Link
              href={href ?? ''}
              key={_id}
              className="text-[#0746A2] hover:text-[#FEFEFE] bg-[#D6E7FF] hover:bg-[#0084C6] rounded-[50px] px-4 py-2 transition-all duration-150 cursor-pointer"
              onClick={() => handleSelectModal(text)}
            >
              {text}
            </Link>
          ))}
        </div>
        {showDropdown && (
          <div
            className="absolute top-[58px] bg-off-white rounded-lg w-full border-[0.5px] border-[#F0F0F0] shadow-level2 pt-4 px-5 overflow-hidden dropdown-scroll flex flex-col gap-4"
            ref={dropdownRef}
          >
            {paginatedData?.slice(0, 5)?.map((props: any) => (
              <Link href={getDocUrl(props?.slug, props?._type)} key={props?._id}>
                <div className="flex gap-2 md:gap-4 items-center py-2">
                  <div onClick={handleClick} className="cursor-pointer">
                    <div className="w-5 h-5">
                      {' '}
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
                    </div>
                  </div>
                  {props?.title && (
                    <p
                      className="placeholder:text-[#6E6E6E] text-[16px] leading-[24px] flex-1 bg-off-white truncate-over"
                      dangerouslySetInnerHTML={{
                        __html: highlightSearchTerm(props?.title, searchText),
                      }}
                    ></p>
                  )}
                  {props?.name && (
                    <p
                      className="placeholder:text-[#6E6E6E] text-[16px] leading-[24px] flex-1 bg-off-white truncate-over"
                      dangerouslySetInnerHTML={{
                        __html: highlightSearchTerm(props?.name, searchText),
                      }}
                    ></p>
                  )}
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}

export default SearchBar
