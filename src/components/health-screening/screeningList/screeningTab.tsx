import { imageUrlBuilder, PortableText } from '@/sanity'
import clsx from 'clsx'
import { SanityImg } from 'sanity-react-extra'
import { useWindowSize } from '@/lib/hooks'
import { Dispatch, SetStateAction } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import { GTAEvent } from '@/lib/gtag'

interface DoctorListConsultationFilterProps {
  position: any
  options: string[]
  selectedIndex: any
  setSelectedIndex: any
  filters: {
    selectedType?: string
  }
  setFilters: Dispatch<
    SetStateAction<{
      searchValues: string
      selectedType?: string
    }>
  >
}

export const ScreeningTab: React.FC<DoctorListConsultationFilterProps> = ({
  options,
  filters,
  selectedIndex,
  setSelectedIndex,
  setFilters,
  position,
}) => {
  const windowWidth = useWindowSize()?.width ?? 0
  return (
    <div
      className="flex gap-2 md:gap-3 overflow-scroll md:overflow-visible slider-body"
      style={{ paddingLeft: position, paddingRight: position }}
    >
      {options.map((tab: any, i: any) => (
        <span
          key={i}
          onClick={(eve: any) => {
            setFilters((prevObject: any) => ({
              ...prevObject, // spread the existing properties
              selectedType: eve.target.innerText, // update the desired property
            })),
              GTAEvent('view_content', {
                listing_name: 'Health Screning',
                content_name: '',
                content_type: eve.target.innerText,
              })
            setSelectedIndex(i)
          }}
          className={`font-semibold px-6 py-2 leading-[20px] rounded-full whitespace-nowrap transition-all duration-150 cursor-pointer ${
            i === selectedIndex
              ? 'bg-secondary-ocean text-off-white'
              : 'text-[#0746A2] bg-[#D6E7FF] hover:bg-[#0084C6] hover:text-off-white'
          }`}
        >
          {tab}
        </span>
      ))}
    </div>
  )
}
