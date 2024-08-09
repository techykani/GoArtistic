/* eslint-disable import/no-unresolved */
import { Swiper, SwiperSlide } from 'swiper/react'
import { useEffect, useRef, useState } from 'react'
import { useWindowSize } from '@/lib/hooks'
import { CarouselCard } from './carouselCard'
import PrimarySectionHorizontal from '../sections/primarySectionHorizontal'
import { Navigation } from 'swiper'
import { LeftArrow } from '@/icons/leftArrow'
import { RightArrow } from '@/icons/rightArrow'
import { AboutCarouselCard } from './aboutCarouselCard'

interface CarouselListingProps {
  card: any[]
  tagline: string
  title: string
  description: string
  link: any
  carouselType: 'imageWithContent' | 'imageWithoutContent'
  theme: 'dark' | 'light'
  className: string
  isGP: boolean
  contentWidth: 'container' | 'max-w-[1014px]'
}

export const AboutCarouselListing = ({
  card,
  tagline,
  title,
  description,
  link,
  target,
  theme,
  carouselType,
  className,
  isGP,
  contentWidth,
  btnType,
  arrowVisibility,
  customStyle,
  size,
  arrowColor,
  gtag_event,
  gtag_content_name,
  gtag_content_type,
}: any) => {
  console.log(card, 'card')
  const [activeSlideIndex, setActiveSlideIndex] = useState(0)
  const [prevButtonClicked, setPrevButtonClicked] = useState<boolean>(false)

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
  const [prevEl, setPrevEl] = useState<HTMLElement | null>(null)
  const [nextEl, setNextEl] = useState<HTMLElement | null>(null)

  return (
    <>
      <div className={`w-full pb-[32px] md:pb-[36px] px-6 md:px-[71px] z-20 relative `}>
        <div ref={headingRef} className={`${contentWidth} mx-auto flex flex-col gap-2`}>
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

      <div className={'relative z-20'}>
        <div className="min-h-[408px] relative">
          <Swiper
            spaceBetween={24}
            slidesPerView={'auto'}
            pagination={{ clickable: true }}
            navigation={{
              prevEl,
              nextEl,
            }}
            modules={[Navigation]}
            slidesOffsetAfter={windowWidth >= 768 ? 71 : 24}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
            className={`carousel-swiper`}
            style={{ paddingLeft: sliderPosition }}
          >
            {card.map(({ _id, tagline, title, name, HomeImg, HomeSecondaryImg, link }: any) => (
              <SwiperSlide
                key={_id}
                className={`${windowWidth >= 768 ? '!w-[392px] ' : '!w-[230px] '} h-full `}
              >
                <AboutCarouselCard
                  primaryImg={HomeImg}
                  tagline={tagline}
                  title={title ? title : name}
                  secondaryImg={HomeSecondaryImg}
                  link={link}
                  isGP={isGP}
                  gtag_event={gtag_event}
                  gtag_content_name={gtag_content_name}
                  gtag_content_type={gtag_content_type}
                  gtag_cta_button={title ? title : name}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className="w-full px-6 md:px-[71px] absolute top-[50%] transform -translate-y-1/2 z-50">
          <div className="container mx-auto flex justify-between">
            <button
              aria-label="arrow-left-previous-slide"
              className="w-[50px] h-[50px] rounded-full bg-off-white flex justify-center items-center relative"
              ref={(node) => setPrevEl(node)}
            >
              <LeftArrow />
            </button>
            <button
              aria-label="arrow-right-next-slide"
              className="w-[50px] h-[50px] rounded-full bg-off-white flex justify-center items-center"
              ref={(node) => setNextEl(node)}
            >
              <RightArrow />
            </button>
          </div>
        </div>
      </div>
      <div
        style={
          windowWidth >= 768
            ? { marginRight: sliderPosition }
            : { marginRight: sliderPosition - 24 }
        }
        className={`h-[500px] md:h-[630px] ${className} absolute inset-0 md:rounded-r-[100px] z-10 bg-light`}
      />
    </>
  )
}
