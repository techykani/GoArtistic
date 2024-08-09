import { GTAEvent } from '@/lib/gtag'
import React, { useEffect, useState, useRef } from 'react'

export const Tab: React.FC<any> = ({
  options,
  selectedIndex,
  setSelectedOption,
  setSelectedIndex,
}) => {
  const [isSticky, setSticky] = useState(false)
  const doc: any = typeof window !== 'undefined' ? window?.document : ''

  const secondTabBarRef: any = useRef()

  const [isAnnouncementBarAvailable, setIsAnnouncementBarAvailable] = useState<string | null>()

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY

      secondTabBarRef.current = document.createElement('div')
      const { top } = secondTabBarRef.current.getBoundingClientRect()

      // Adjust this value based on your design and layout
      const triggerOffset = top + 250

      setSticky(offset > triggerOffset)
    }

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll)

    // Remove event listener on component cleanup
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  useEffect(() => {
    const announcementBar = sessionStorage.getItem('announcement')
    setIsAnnouncementBarAvailable(announcementBar)
  }, [])

  return (
    <section
      ref={secondTabBarRef}
      className={`flex md:justify-center bg-surface-light-neutral-2  ${
        isSticky && isAnnouncementBarAvailable === 'true'
          ? 'sticky h-[70px] top-0 md:top-[172px] z-[999] pt-3 lg:pt-[18px]'
          : 'sticky h-[70px] top-0 md:top-[135px] z-[999] pt-3 lg:pt-[18px]'
      }`}
    >
      <div className="flex overflow-scroll lg:overflow-hidden snap snap-mandatory slider-body relative z-10">
        {options?.map((option: any, idx: any) => (
          <div
            key={option?._key}
            onClick={() => {
              GTAEvent('view_content', {
                content_name: option?.title,
                content_type: option?.entryName,
              })
              setSelectedOption(option)
              setSelectedIndex(idx)
            }}
            className="cursor-pointer md:pr-8"
          >
            <p
              className={`w-full text-base leading-6  whitespace-nowrap px-3 py-3 font-normal ${
                idx === selectedIndex ? ' text-[#0084C6] font-semibold' : ' text-grey-9'
              }`}
            >
              {option?.title}
            </p>
            <span
              className={` block w-full h-[4px] md:mt-0 mt-[6px] ${
                idx === selectedIndex ? 'bg-[#0084C6]' : 'bg-transparent'
              } `}
            />
          </div>
        ))}
      </div>
    </section>
  )
}
