
import BtnWithArrow from '@/components/widgets/shared/buttons/button/btnWithArrow'
import Title from '@/components/widgets/shared/title'
import { useWindowSize } from '@/lib/hooks'
import { useState, useRef, useEffect } from 'react'
import CarouselLists from './carouselLists'
import PrimarySectionHorizontal from '../../../sections/primarySectionHorizontal'

const ThreeColCardListing = ({ title, cta, points, tagline, description, link, target, btnType, arrowVisibility, theme, customStyle, size, arrowColor }: any) => {
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
    <>
      <div className="px-6 md:px-[71px]">
        <div ref={headingRef} className="container mx-auto">
          <PrimarySectionHorizontal
            title={title}
            tagline={tagline}
            description={description}
            link={link}
            target={target}
            btnType={btnType}
            arrowVisibility={arrowVisibility}
            theme={theme}
            customStyle={customStyle}
            size={size}
            arrowColor={arrowColor}
          />
        </div>
      </div>
      <div>
        {points?.length !== 0 && (
          <CarouselLists points={points} sliderPosition={sliderPosition} />)}
      </div>

    </>
  )
}

export default ThreeColCardListing

