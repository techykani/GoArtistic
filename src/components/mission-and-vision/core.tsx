import Title from '@/components/widgets/shared/title'
import { useWindowSize } from '@/lib/hooks'
import { useState, useRef, useEffect } from 'react'
import PrimarySectionHorizontal from '../widgets/blocks/sections/primarySectionHorizontal'

const Core = ({ title, tagline, description, coreValues, cta }: any) => {
  console.log(coreValues)
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
    <section className="w-full py-12 md:py-20 md:px-[71px] px-6 flex flex-col gap-6 md:gap-9 bg-alice-blue">
      <div className="flex flex-col gap-8 md:gap-[36px] container">
        <PrimarySectionHorizontal
          title={title}
          tagline={tagline}
          description={description}
          link={cta}
          target={'_self'}
          btnType={'primary'}
          arrowVisibility={false}
          theme={'light'}
          customStyle={''}
          size={'medium'}
          arrowColor={'black'}
        />
      </div>
      <div
        style={{ paddingLeft: sliderPosition, paddingRight: sliderPosition }}
        className="w-full overflow-scroll slider-body"
      >
        <div className="w-[476px] md:w-[1224px] flex flex-wrap container">
          <div className="grid grid-cols-3 md:grid-rows-1 grid-flow-col md:grid-cols-3 gap-[18rem] md:gap-6 w-full">
            {coreValues.map(({ title, tagline }: any, i: any) => (
              <div
                key={i}
                className="flex flex-col bg-off-white shadow-megaMenu rounded-xl w-[250px] md:w-[371px] h-auto px-6 py-6 flex-grow"
              >
                <div className="flex relative ">
                  <div className="w-[1.5px] h-full bg-[#00A854] items-center absolute" />
                  <div className="text-grey-dark text-[16px] font-semibold leading-[20px] ml-3">
                    {title}
                  </div>
                </div>
                <div className="text-grey-dark text-[14px] md:text-[16px] font-normal leading-[24px] ml-3 mt-2 font-inter">
                  {tagline}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Core
