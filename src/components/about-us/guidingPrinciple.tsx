import style from '@/styles/Home.module.css'
import { useEffect, useRef, useState } from 'react'
import { SanityImg } from 'sanity-react-extra'
import { imageUrlBuilder, PortableText } from '../../../utils/sanity'
import { useWindowSize } from '@/lib/hooks'
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import PrimarySectionHorizontal from '@/components/widgets/blocks/sections/primarySectionHorizontal'
import { Navigation } from 'swiper'
import EyeBrow from '../widgets/shared/eyeBrew'

export const styles = {
  display: '-webkit-box',
  WebkitBoxOrient: 'vertical',
  WebkitLineClamp: 3,
  overflow: 'hidden',
  textOverflow: 'ellipsis',
} as React.CSSProperties

export const GuidingPrinciple: React.FC<any> = ({ title, description, tagline, points, cta }) => {
  const windowWidth = useWindowSize()?.width ?? 0
  const [sliderPosition, setSliderPosition] = useState(0)
  const headingRef = useRef<HTMLHeadingElement>(null)
  useEffect(() => {
    if (headingRef.current) {
      const rect = headingRef.current.getBoundingClientRect()
      const leftPosition = rect.left
      setSliderPosition(leftPosition)
    }
  }, [windowWidth])

  return (
    <section className=" flex flex-col md:gap-12 gap-8 py-12 md:py-[80px] bg-[#F1F6FF]">
      <div className="md:px-[71px] px-6">
        <div ref={headingRef} className="container mx-auto md:flex md:gap-[129px]">
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
        </div>
        {windowWidth >= 1200 && (
          <div className={'container mx-auto mt-9'}>
            {points && (
              <div className=" grid grid-col-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
                {points?.slice(0, 3).map((points: any, index: any) => (
                  <div className={`w-full min-h-[319px] relative h-[319px]`} key={index}>
                    {points?.icon && (
                      <SanityImg
                        className="h-full w-full absolute inset-0 z-[10] object-cover object-center rounded-2xl"
                        builder={imageUrlBuilder}
                        image={points?.icon}
                        height={windowWidth >= 768 ? 600 : 300}
                        alt="image"
                        loading="eager"
                      />
                    )}

                    <div className=" rounded-xl absolute inset-0 about-us-core-gr z-10" />
                    <div className="px-8 text-[white] absolute z-20 md:w-[391px] bottom-[24px]">
                      <p
                        className={`${style.montserrat} text-[20px] font-semibold text-off-white leading-6 mb-1`}
                      >
                        {points?.subTitle}
                      </p>
                      <p style={styles} className="text-[16px]  text-off-white leading-6 ">
                        {points?.shortDes}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
      {windowWidth < 1200 && (
        <div className="">
          <Swiper
            spaceBetween={24}
            slidesPerView={'auto'}
            pagination={{ clickable: true }}
            modules={[Navigation]}
            slidesOffsetAfter={windowWidth >= 768 ? 71 : 24}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
            className={`carousel-swiper`}
            style={{ paddingLeft: sliderPosition }}
          >
            {points?.slice(0, 3)?.map((data: any) => (
              <SwiperSlide key={data?.subtitle} className={`!w-[288px] h-full `}>
                <div className={`w-full min-h-[319px] relative h-[319px]`} key={data?.title}>
                  {/* banner background image */}
                  {data?.icon && (
                    <SanityImg
                      className="h-full w-full absolute inset-0 z-[10] object-cover object-center rounded-2xl"
                      builder={imageUrlBuilder}
                      image={data?.icon}
                      height={windowWidth >= 768 ? 600 : 300}
                      alt="image"
                      loading="eager"
                    />
                  )}
                  {/* gradient */}
                  <div className=" rounded-xl absolute inset-0 about-us-core-gr z-10" />
                  <div className="px-8 text-[white] absolute z-20 md:max-w-[391px] bottom-[24px]">
                    <p
                      className={`${style.montserrat} text-[20px] font-semibold text-off-white leading-6 mb-1`}
                    >
                      {data?.subTitle}
                    </p>
                    <p style={styles} className="text-[16px]  text-off-white leading-6 ">
                      {data?.shortDes}
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      )}
    </section>
  )
}
