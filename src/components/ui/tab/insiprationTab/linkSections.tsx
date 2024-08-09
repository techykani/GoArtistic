import React, { useState, useRef, useEffect } from 'react'
import { useWindowSize } from '@/lib/hooks'
import { Swiper } from 'swiper/react'
import { SwiperSlide } from 'swiper/react'

import { CorporateTabContent } from './corporateTabContent'

export const LinkSections: React.FC<any> = ({ links }) => {
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
      <section className="bg-linear-grad md:px-[71px] py-[32px] md:py-[40px]">
        <div>
          {windowWidth >= 1366 && (
            <div className="container mx-auto flex flex-col gap-8">
              <p
                className="text-off-white text-[20px] md:text-[28px] whitespace-pre-line font-semibold leading-[24px] md:leading-[36px] md:tracking-[-0.28px] md:text-center"
                ref={headingRef}
              >
                {links[0]?.title}
              </p>
              <div className="flex flex-col md:flex-row gap-6 mx-auto md:flex-wrap md:justify-center">
                {links.map((option: any, idx: any) => (
                  <div
                    className="w-full  p-6 max-w-[288px] max-h-[136px] bg-off-white rounded-[12px] shadow-megaMenu flex flex-col gap-4"
                    key={idx}
                  >
                    <div className="w-full relative pl-3">
                      <div className="bg-primary-green-1 w-[1.5px] absolute h-full left-0"></div>
                      <p className="text-grey-dark text-[16px]  font-semibold leading-[20px]">
                        {option?.link?.text}
                      </p>
                    </div>
                    <p className="w-full text-grey-8 pl-3 text-[14px] leading-[20px]">
                      {option?.tagline}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
        {windowWidth < 1366 && (
          <div>
            <p
              className="text-off-white text-[20px] md:text-[28px] whitespace-pre-line font-semibold leading-[24px] md:leading-[36px] md:tracking-[-0.28px] md:text-center px-6 pb-4"
              ref={headingRef}
            >
              {links[0]?.title}
            </p>
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
              {links?.map((option: any, idx: any) => (
                <SwiperSlide
                  className={`${windowWidth >= 768 ? '!w-[392px]' : '!w-[288px]'} ${
                    idx === 0 ? 'pl-6' : ''
                  } h-full`}
                  key={idx}
                >
                  <div className="flex justify-center h-full">
                    <div
                      className="w-full rounded-[12px] bg-off-white overflow-hidden md:shadow-megaMenu"
                      key={idx}
                    >
                      <div className="p-6 flex flex-col gap-2 h-full ">
                        <div className="relative">
                          <p className="text-grey-dark text-[16px] font-semibold leading-[20px] pl-3">
                            {option?.link?.text}
                          </p>
                          <div className="w-[1.5px] absolute top-0 left-0 bg-[#00A854] h-full"></div>
                        </div>
                        <h3 className="text-grey-8 text-[14px] leading-[20px] pl-3">
                          {option?.tagline}
                        </h3>
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
