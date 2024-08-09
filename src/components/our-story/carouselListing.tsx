import { PortableText, imageUrlBuilder } from '@/sanity'

import { Swiper, SwiperSlide } from 'swiper/react'

import { useEffect, useRef, useState } from 'react'
import { useWindowSize } from '@/lib/hooks'
import { SanityImg } from 'sanity-react-extra'

import clsx from 'clsx'
import { LinkAngleRight } from '@/components/ui'
import ReactPortableText from '../widgets/shared/reactPortableText'
import { CarouselListingImage } from '../widgets/blocks/carouselListing/carouselListingImage'

interface SpecialistsProps {
  tagline: string
  title: string
  description: string
  link: CTAButton
  classNameValues?: string
  card: Point[]
}

export const CarouselListing: React.FC<any> = ({
  tagline,
  title,
  description,
  link,
  card,
}) => {
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

    <div className={`py-12 lg:py-20 relative`}>
      <CarouselListingImage
        tagline={tagline}
        title={title}
        description={description}
        link={link}
        card={card}
        carouselType="imageWithContent"
        className="blue-gradient_bg"
        isGP={true}
        contentWidth="max-w-[1014px]"
        target="_self"
        btnType="tertiary"
        arrowVisibility="true"
        theme="dark"
        customStyle=""
        size={"medium"}
        arrowColor="white"
      />
    </div>


  )
}
