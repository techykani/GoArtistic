import { GTAEvent } from '@/lib/gtag'
import { useEffect, useState } from 'react'

export const TabFilter: React.FC<any> = ({
  options,
  filters,
  selectedIndex,
  setSelectedIndex,
  setFilters,
  sliderPosition,
}) => {
  const [hash, setHash] = useState('')

  useEffect(() => {
    const hashWithHashSymbol = window.location.hash
    let decodedString = hashWithHashSymbol.replace(/%20/g, ' ')
    const hashWithoutHashSymbol = decodedString.substring(1) // Remove the # symbol
    setHash(hashWithoutHashSymbol)
  }, [hash])

  useEffect(() => {
    if (hash) {
      setFilters((prevObject: any) => ({
        ...prevObject,
        center: hash,
      }))
      setSelectedIndex(hash)
    } else {
      setFilters((prevObject: any) => ({
        ...prevObject,
        center: 'All', // Set default value when hash is empty
      }))
    }
  }, [hash, setFilters, setSelectedIndex])

  function handleClick(eve: any) {
    setFilters((prevObject: any) => ({
      ...prevObject, // spread the existing properties
      center: eve?.target?.innerText ? eve?.target?.innerText : eve,
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
            setSelectedIndex(eve.target.innerText),
              GTAEvent('view_content', {
                content_name: '',
                content_type: eve.target.innerText,
              })
          }}
          className={`text-base font-semibold leading-[20px] text-center px-6 py-2 rounded-[24px] whitespace-nowrap whitesapce-nowrap transition-all duration-150 cursor-pointer ${
            tab === selectedIndex
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
