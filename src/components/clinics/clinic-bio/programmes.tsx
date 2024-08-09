import Image from 'next/image'
import { LinkArrowUp } from '../../ui/link-arrow-up'
import clsx from 'clsx'
import { imageUrlBuilder } from '@/sanity'
import image from 'next/image'
import { SanityImg } from 'sanity-react-extra'
import { ProgrammeArray } from '../../by-practice/programmeArray'
import { useWindowSize } from '@/lib/hooks'
import { useState, useRef, useEffect } from 'react'
import Title from '@/components/widgets/shared/title'

export const Programmes: React.FC<any> = ({ title, tagline, options }) => {

  const [sliderPosition, setSliderPosition] = useState(0)
  const headingRef = useRef<HTMLHeadingElement>(null)
  const windowWidth = useWindowSize()?.width ?? 0
  useEffect(() => {
    if (headingRef.current) {
      const rect = headingRef.current.getBoundingClientRect()
      const leftPosition = rect.left
      setSliderPosition(leftPosition)
    }
  }, [windowWidth])

  return (
    <div style={{ background: 'linear-gradient(75deg, #195FC9 21.69%, #2C82D0 50.84%, #7BEFFF 104.28%)' }} className=" w-full py-[36px] md:py-[80px]">
      <div className='px-6 md:px-[71px]'>
        <div ref={headingRef} className="container mx-auto flex flex-col gap-8">
          <div className="w-full md:w-[70%] lg:w-[50%] flex flex-col gap-2">
            <Title headingType='h2' tagline={title} theme='dark' />
            <p className="text-[#FEFEFE] text-base md:text-base leading-[24px]">{tagline}</p>
          </div>
        </div>
      </div>
      <div style={{ paddingLeft: sliderPosition, paddingRight: sliderPosition }} className="w-full overflow-scroll slider-body mt-8 pl-6 md:pl-6 xl:pl-0 pr-6">
        <div className="w-[804px] md:w-[1224px] mx-auto">
          <div className="grid grid-cols-5 md:grid-cols-6 gap-4 md:gap-6">
            <ProgrammeArray options={options} />
          </div>
        </div>
      </div>
    </div>
  )
}
