import { imageUrlBuilder, PortableText } from '@/sanity'
import clsx from 'clsx'
import { SanityImg } from 'sanity-react-extra'
import { useWindowSize } from '@/lib/hooks'
import { Dispatch, SetStateAction, useEffect, useState } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import { GTAEvent } from '@/lib/gtag'

export const TabFilter: React.FC<any> = ({
  options,
  filters,
  selectedIndex,
  setSelectedIndex,
  setFilters,
  sliderPosition,
}) => {
  const windowWidth = useWindowSize()?.width ?? 0
  const [hash, setHash] = useState('')

  useEffect(() => {
    const hashWithHashSymbol = window.location.hash
    const hashWithoutHashSymbol = hashWithHashSymbol.substring(1) // Remove the # symbol
    setHash(hashWithoutHashSymbol)
  }, [])

  useEffect(() => {
    if (hash) {
      setFilters((prevObject: any) => ({
        ...prevObject,
        selectedType: hash,
      }))
      setSelectedIndex(hash)
    } else {
      setFilters((prevObject: any) => ({
        ...prevObject,
        selectedType: 'All types', // Set default value when hash is empty
      }))
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [hash, setFilters])

  function handleClick(eve: any) {
    setFilters((prevObject: any) => ({
      ...prevObject, // spread the existing properties
      selectedType: eve?.target?.innerText ? eve?.target?.innerText : eve,
    }))
  }

  return (
    <div
      style={{ paddingRight: sliderPosition, paddingLeft: sliderPosition }}
      className="flex gap-3 overflow-scroll slider-body"
    >
      {options.map((tab: any, i: any) => (
        <div
          key={i}
          onClick={(eve: any) => {
            handleClick(eve)
            // setFilters((prevObject: any) => ({
            //   ...prevObject, // spread the existing properties
            //   selectedType: eve.target.innerText,
            // })),
            setSelectedIndex(tab),
              GTAEvent('view_content', {
                content_name: '',
                content_type: eve.target.innerText,
              })
          }}
          className={`text-base font-semibold leading-[20px] text-center px-6 py-2 rounded-[24px] whitespace-nowrap whitesapce-nowrap transition-all duration-150 cursor-pointer ${tab === selectedIndex
              ? 'bg-secondary-ocean text-off-white'
              : 'text-[#0746A2] bg-[#D6E7FF] hover:bg-[#0084C6] hover:text-off-white'
            }  `}
        >
          {tab}
        </div>
      ))}
    </div>
  )
}
