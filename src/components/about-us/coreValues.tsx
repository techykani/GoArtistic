import { useWindowSize } from '@/lib/hooks'
import { Swiper } from 'swiper/react'
import { SwiperSlide } from 'swiper/react'
import { CarouselContent } from '../widgets/blocks/carouselListing/carouselContent'
import { useState, useRef, useEffect } from 'react'
import Title from '../widgets/shared/title'
import PrimarySectionHorizontal from '../widgets/blocks/sections/primarySectionHorizontal'

export const CoreValues: React.FC<any> = ({ title, mobileTitle, description, tagline, points }) => {
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
      <section
        style={{
          background: 'linear-gradient(75deg, #195FC9 21.69%, #2C82D0 50.84%, #7BEFFF 104.28%)',
        }}
        className=" py-12 md:py-20 flex flex-col gap-8 md:gap-[36px]"
      >
        <div className={`w-full px-6 md:px-[71px] flex flex-col gap-8 md:gap-[36px]`}>
          <div ref={headingRef} className={`container mx-auto flex flex-col gap-2`}>
            <PrimarySectionHorizontal
              title={title}
              tagline={tagline}
              description={description}
              theme="dark"
              target="_self"
              btnType="tertiary"
              arrowVisibility={false}
              customStyle=""
              size="medium"
              arrowColor="white"
            />
          </div>
          {windowWidth >= 1366 && (
            <div className="container mx-auto flex gap-6">
              {points?.map(({ _key, link, shortDes }: any) => (
                <div
                  className={`${windowWidth >= 768 ? '!w-[392px]' : '!w-[288px]'} h-full`}
                  key={_key}
                >
                  <div className="flex justify-center">
                    <div
                      className="w-full rounded-[12px] bg-off-white overflow-hidden md:shadow-megaMenu "
                      key={_key}
                    >
                      <div className="p-6 flex flex-col gap-2 h-full ">
                        <div className="relative">
                          {/* <Title
                          headingType="h4"
                          theme="dark"
                          tagline={link?.text}
                          className=" pl-3"
                        /> */}
                          <p className="text-grey-dark text-[16px] font-semibold leading-[20px] pl-3">
                            {link?.text}
                          </p>
                          <div className="w-[1.5px] absolute top-0 left-0 bg-[#00A854] h-full"></div>
                        </div>
                        <h3 className="text-grey-8 text-[14px] leading-[20px] pl-3">{shortDes}</h3>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {windowWidth < 1366 && (
          <div className="">
            <Swiper
              spaceBetween={24}
              slidesPerView={'auto'}
              pagination={{ clickable: true }}
              slidesOffsetAfter={windowWidth >= 768 ? 71 : 24}
              onSlideChange={() => console.log('slide change')}
              onSwiper={(swiper) => console.log(swiper)}
              className={`grid grid-flow-col carousel-swiper`}
              style={{ paddingLeft: sliderPosition }}
            >
              {points?.map(({ _key, link, shortDes }: any) => (
                <SwiperSlide
                  className={`${windowWidth >= 768 ? '!w-[392px]' : '!w-[288px]'} h-full`}
                  key={_key}
                >
                  <div className="flex justify-center h-full">
                    <div
                      className="w-full rounded-[12px] bg-off-white overflow-hidden md:shadow-megaMenu"
                      key={_key}
                    >
                      <div className="p-6 flex flex-col gap-2 h-full ">
                        <div className="relative">
                          <p className="text-grey-dark text-[16px] font-semibold leading-[20px] pl-3">
                            {link?.text}
                          </p>
                          <div className="w-[1.5px] absolute top-0 left-0 bg-[#00A854] h-full"></div>
                        </div>
                        <h3 className="text-grey-8 text-[14px] leading-[20px] pl-3">{shortDes}</h3>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        )}
      </section>
    </>
  )
}
