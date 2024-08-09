import { useWindowSize } from "@/lib/hooks"
import { useState, useRef, useEffect } from "react"
import FourColCardListing from "../widgets/blocks/cardListing/primary/fourColListing"
import LocationCardListing from "../widgets/blocks/cardListing/primary/fourColListing/locationCardListing"
import LocationCard from "../widgets/blocks/cards/locationCard/locationCard"




export const GetOurClinics = ({
  title,
  tagline,
  description,
  cta,
  cards,
}: any) => {
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
    <div className="bg-[#F4F3F0] py-12 md:py-20 flex flex-col gap-8 md:gap-12">
      <FourColCardListing title={title}
        tagline={tagline}
        description={description}
        link={cta}
        target="_self"
        btnType="tertiary"
        arrowVisibility={true}
        theme="light"
        customStyle=''
        size="medium"
        arrowColor='black'
        points={cards}
        headingRef={headingRef}
      >
        <LocationCardListing points={cards} sliderPosition={sliderPosition} />
      </FourColCardListing>
    </div>
  )
}
