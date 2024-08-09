import { ProgrammeArray } from './programmeArray'
import { useWindowSize } from '@/lib/hooks'
import { useState, useRef, useEffect } from 'react'
import Title from '../widgets/shared/title'

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
    <div className="bg-[#F1F6FF] w-full py-[64px] md:py-[80px] flex flex-col gap-8">
      <div className="px-6 md:px-[71px]">
        <div ref={headingRef} className="container mx-auto flex flex-col gap-8">
          <div className="w-full md:max-w-[600px] flex flex-col gap-2 md:gap-4">
            {/* <p className="text-primary-blue text-[28px] md:text-[36px]  font-semibold leading-9 md:leading-[44px] tracking-[-0.28px] md:tracking-[-0.36px] ">
              {title}
            </p> */}
            <Title headingType="h2" theme="light" tagline={title} />
            <p className="text-grey-8 text-base leading-[24px]">{tagline}</p>
          </div>
        </div>
      </div>
      <div
        style={{ paddingRight: sliderPosition, paddingLeft: sliderPosition }}
        className="w-full overflow-scroll slider-body"
      >
        <div className="w-[804px] md:w-[1224px] mx-auto">
          <div className="grid grid-cols-5 md:grid-cols-6 gap-4 md:gap-6">
            <ProgrammeArray options={options} />
          </div>
        </div>
      </div>
    </div>
  )
}
