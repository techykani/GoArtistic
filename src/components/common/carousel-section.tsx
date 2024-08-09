import { Slide, SmSlide, SmCarousel, Carousel } from '@/components/ui/carousel'
import { Title, Tagline } from '@/components/ui'
import { useWindowSize } from '@/lib/hooks'
import React, { useState } from 'react'
import { SwiperSlide } from 'swiper/react'
import { formatCarouselType } from '@/lib/helpers'
import { useRouter } from 'next/router'

interface carouselProps {
  title?: string
  tagline?: string
  slidesData: CarouselDataProps[]
  buttonTitle?: string
  route?: string
  bgColor?: string
  medicalSpecialtiesDetails?: boolean
  id?: string
  mobilePadding?: number
}

export const CarouselSection: React.FC<carouselProps> = ({
  title,
  tagline,
  slidesData,
  buttonTitle = 'Learn more',
  mobilePadding = 0,
  route,
  bgColor,
  medicalSpecialtiesDetails,
  id,
}) => {
  const [activeSlideIndex, setActiveSlideIndex] = useState(0)
  const [prevButtonClicked, setPrevButtonClicked] = useState<boolean>(false)
  const windowWidth = useWindowSize()?.width ?? 0
  const router = useRouter()
  const path = route ? route : `/${router.route.split('/').slice(1, 3).join('/')}`

  const totalSlidesData =
    slidesData.length >= 5
      ? slidesData
      : Array(5)
          .fill('')
          .map((_) => slidesData)
          .flat()

  const divStyle = {
    paddingBottom: `${mobilePadding}px`,
  }

  return (
    <section className="relative h-full lg:pr-0 scroll-mt-8" id={id}>
      <div className="relative flex items-center justify-center ml-auto mr-auto lg:pb-5 2xl:mx-20">
        <div className="md:!container w-full relative z-20">
          {title && tagline && (
            <div className="text-neutral-900 text-center pt-10 lg:pt-[72px]">
              <Title>{title}</Title>
              <Tagline>{tagline}</Tagline>
            </div>
          )}

          {totalSlidesData.length !== 0 ? (
            <>
              {windowWidth >= 1024 ? (
                <Carousel
                  setActiveSlideIndex={setActiveSlideIndex}
                  setPrevButtonClicked={setPrevButtonClicked}
                  bgColor={bgColor}
                >
                  {totalSlidesData.map((slideData, index) => {
                    return (
                      <SwiperSlide key={slideData._id + index} className="lg:!h-[350px] relative">
                        <Slide
                          {...slideData}
                          index={index}
                          type={formatCarouselType(slideData._type)}
                          ctaTitle={slideData._type === 'package' ? 'View package' : buttonTitle}
                          activeSlideIndex={activeSlideIndex}
                          prevButtonClicked={prevButtonClicked}
                          path={path}
                          bgColor={bgColor}
                          medicalSpecialtiesDetails={medicalSpecialtiesDetails}
                        />
                      </SwiperSlide>
                    )
                  })}
                </Carousel>
              ) : (
                <SmCarousel setActiveSlideIndex={setActiveSlideIndex}>
                  {slidesData.map((slideData, index) => {
                    return (
                      <SwiperSlide key={slideData._id + index} className="" style={divStyle}>
                        <SmSlide
                          {...slideData}
                          index={index}
                          type={formatCarouselType(slideData._type)}
                          ctaTitle={buttonTitle}
                          path={path}
                        />
                      </SwiperSlide>
                    )
                  })}
                </SmCarousel>
              )}
            </>
          ) : (
            <Title className="min-h-[200px] text-center grid place-items-center font-medium !text-[#F3CD68]">
              Sorry, no slides available for the carousel.
            </Title>
          )}
        </div>
      </div>
    </section>
  )
}
