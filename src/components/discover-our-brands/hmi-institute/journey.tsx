import FourColCardListing from '@/components/widgets/blocks/cardListing/primary/fourColListing'
import LocationCardListing from '@/components/widgets/blocks/cardListing/primary/fourColListing/locationCardListing'
import PrimarySectionHorizontal from '@/components/widgets/blocks/sections/primarySectionHorizontal'
import { useWindowSize } from '@/lib/hooks'
import { imageUrlBuilder } from '@/sanity'
import { urlForImage } from '@/studio/lib/image'
import Image from 'next/image'
import Link from 'next/link'
import { useState, useRef, useEffect } from 'react'
import { SanityImg } from 'sanity-react-extra'
import style from '@/styles/Home.module.css'
import { Swiper, SwiperSlide } from 'swiper/react'

export const GetOurClinics = ({ title, tagline, description, cta, points }: any) => {
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
    <div className="bg-[#FEFEFE] py-12 md:py-20 flex flex-col gap-8 md:gap-12">
      <div className="px-6 md:px-[71px]">
        <div ref={headingRef} className="container mx-auto flex flex-col gap-[32px] md:gap-[36px]">
          <PrimarySectionHorizontal
            title={title}
            tagline={tagline}
            description={description}
            link={cta}
            target="_self"
            btnType="tertiary"
            arrowVisibility={true}
            theme="light"
            customStyle=""
            size="medium"
            arrowColor="black"
          />
          {windowWidth >= 1050 && (
            <div className="grid grid-cols-3 gap-6">
              {points.map((point: any) => (
                <div
                  key={point?.link?.text}
                  className="w-full min-h-[468px] md:min-h-[350px] md:max-h-[350px]  rounded-xl flex items-end relative overflow-hidden"
                >
                  <SanityImg
                    className="w-full h-full absolute inset-0 z-[2] object-cover object-center"
                    builder={imageUrlBuilder}
                    image={point?.icon}
                    height={windowWidth >= 768 ? 600 : 300}
                    alt="image"
                    loading="eager"
                  />

                  <div className={` absolute inset-0 z-[3] home-communities-gr`} />
                  <div className="pb-6 px-6 md:px-8 relative z-40 flex flex-col gap-1 md:gap-[6px]">
                    <p
                      className={`text-[#FEFEFE] ${style.montserrat} text-[18px] md:text-[20px] font-semibold leading-[22px] md:leading-[24px]`}
                    >
                      {point?.link?.text}
                    </p>
                    <p className="text-[#FEFEFE] text-[16px] leading-[24px]">{point?.shortDes}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
      {windowWidth < 1050 && (
        <div className="">
          <Swiper
            spaceBetween={24}
            slidesPerView={'auto'}
            pagination={{ clickable: true }}
            slidesOffsetAfter={windowWidth >= 768 ? 71 : 24}
            onSlideChange={(e) => console.log('slide change', e)}
            onSwiper={(swiper) => console.log(swiper)}
            className="carousel-swiper grid grid-flow-col"
            style={{ paddingLeft: sliderPosition }}
          >
            {points.map((point: any) => (
              <SwiperSlide key={point?._id} className="!w-[288px]">
                <Link
                  href={point?.link?.href ?? ''}
                  key={point?.link?.text}
                  className="w-full min-h-[320px] max-w-[392px] rounded-xl flex items-end relative overflow-hidden cursor-pointer"
                >
                  <SanityImg
                    className="w-full h-full absolute inset-0 z-[2] object-cover object-center"
                    builder={imageUrlBuilder}
                    image={point?.icon}
                    height={windowWidth >= 768 ? 600 : 300}
                    alt="image"
                    loading="eager"
                  />

                  <div className={` absolute inset-0 z-[3] home-communities-gr`} />
                  <div className="pb-6 px-6 md:px-8 relative z-40 flex flex-col gap-1 md:gap-[6px]">
                    <p
                      className={`text-[#FEFEFE] ${style.montserrat} text-[18px] md:text-[20px] font-semibold leading-[22px] md:leading-[24px]`}
                    >
                      {point?.link?.text}
                    </p>
                    <p className="text-[#FEFEFE] text-[16px] leading-[24px]">{point?.shortDes}</p>
                  </div>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      )}
    </div>
  )
}
