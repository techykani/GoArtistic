import { useEffect, useRef, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import Link from 'next/link'
import { SanityImg } from 'sanity-react-extra'
import { imageUrlBuilder, PortableText } from '@/sanity'
import { useWindowSize } from '@/lib/hooks'

const ClinicList: React.FC<any> = ({ clinicLocations, title, description }) => {
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
    <main className="w-full bg-[#FEFEFE] ">
      <section className="container md:px-[71px] md:py-[80px]">
        <div className="flex flex-col gap-8 md:gap-12">
          <div className="flex flex-col md:flex-row gap-4 md:gap-[129px] px-6 py-8 md:px-0 md:py-0">
            <h2 className="text-primary-blue-new text-[26px] md:text-[36px] font-bold font-montserrat leading-[32px] tracking-[0.32px] md:w-[392px]">
              {title}
            </h2>
            <div className="text-grey-8 text-base leading-[24px] md:w-[391px]">
              <PortableText blocks={description} />
            </div>
          </div>
        </div>
        <div className="hidden md:grid grid-cols-4 gap-6 mt-[36px]">
          {clinicLocations?.slice(0, 7).map((clinic: any, index: any) => (
            <div className="col-span-1 bg-off-white shadow-megaMenu rounded-xl p-6" key={index}>
              <h6 className="text-grey-dark text-base font-semibold leading-5 ">{clinic?.name}</h6>

              <ul className="font-normal flex flex-col gap-4 text-[#0957CB] text-sm leading-[20px] mt-3 max-w-[400px] overflow-hidden break-all">
                {clinic?.links?.iconLinks?.map((data: any, index: any) => {
                  return (
                    <Link
                      className="flex gap-2 text-[14px] leading-[20px] hover:underline hover:underline-offset-2"
                      href={`${data?.link?.href}`}
                      key={index}
                    >
                      <li className="flex  gap-2 ">
                        <div className="w-[20px]">
                          <SanityImg
                            builder={imageUrlBuilder}
                            image={data?.icon}
                            alt={'icon'}
                            className="min-w-[20px] max-h-[20px]"
                            width={20}
                            height={20}
                          />
                        </div>
                        {data?.link?.text}
                      </li>
                    </Link>
                  )
                })}
              </ul>
            </div>
          ))}
        </div>
        <div className="block md:hidden ml-6">
          <Swiper
            spaceBetween={24}
            slidesPerView={'auto'}
            pagination={{ clickable: true }}
            slidesOffsetAfter={windowWidth >= 768 ? 71 : 24}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper: any) => console.log(swiper)}
            className={` carousel-swiper `}
            style={{ paddingLeft: sliderPosition }}
          >
            {clinicLocations?.slice(0, 7).map((clinic: any, index: any) => (
              <SwiperSlide
                key={index}
                className={`${windowWidth >= 768 ? '!w-[288px]' : '!w-[288px]'} !h-full mb-6`}
              >
                <div
                  className="col-span-1 bg-off-white shadow-megaMenu rounded-xl p-6 !h-[288px]"
                  key={index}
                >
                  <h6 className="text-grey-dark text-base font-semibold leading-5 ">
                    {clinic?.name}
                  </h6>
                  <ul className="font-normal flex flex-col gap-4 text-[#0957CB] text-sm leading-[20px] mt-3 max-w-[400px] overflow-hidden break-all">
                    {clinic?.links?.iconLinks?.map((data: any, index: any) => {
                      return (
                        <Link
                          className="flex gap-2 text-[14px] leading-[20px] hover:underline hover:underline-offset-2"
                          href={`${data?.link?.href}`}
                          key={index}
                        >
                          <li className="flex  gap-2 ">
                            <div className="w-[20px]">
                              <SanityImg
                                builder={imageUrlBuilder}
                                image={data?.icon}
                                alt={'icon'}
                                className="min-w-[20px] max-h-[20px]"
                                width={20}
                                height={20}
                              />
                            </div>
                            {data?.link?.text}
                          </li>
                        </Link>
                      )
                    })}
                  </ul>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
    </main>
  )
}

export default ClinicList
