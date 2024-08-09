import { SanityImg } from 'sanity-react-extra'
import { imageUrlBuilder } from '@/sanity'
import { useEffect, useRef, useState } from 'react'
import { useRouter } from 'next/router'
import { useWindowSize } from '@/lib/hooks'
import { LinkAngleRight } from '@/components/ui'
import { Swiper, SwiperSlide } from 'swiper/react'
import clsx from 'clsx'
import Image from 'next/image'
import ReactPortableText from '../widgets/shared/reactPortableText'

export const DoctorStories: React.FC<any> = ({ title, description, button, doctor }) => {
  const router = useRouter()
  const slides = [1, 2, 3, 4, 5]

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
      {' '}
      <div className="hidden xl:block  bg-alice-blue">
        <div className={`${windowWidth > 1550 ? 'container' : ''} px-[71px] py-[80px]`}>
          <div className="flex">
            <h1 className="w-[392px] text-[32px] text-primary-blue-new font-montserrat font-bold leading-[44px] tracking-[0.32px]">
              {title}
            </h1>
            <div className="pl-[129px] ">
              <p className="text-base font-normal text-grey-8 leading-6 w-[391px]">{description}</p>
              <LinkAngleRight
                href={button.href ?? ''}
                className={clsx(
                  'text-base font-semibold text-grey-9 leading-5 pt-4 flex items-center transition-colors duration-150 group',
                )}
                color="black"
                gtag_event="select_content"
                gtag_content_name={title}
                gtag_content_type="null"
                gtag_cta_button={button?.text}
              >
                {button?.text}
              </LinkAngleRight>
            </div>
          </div>
          <div className="grid grid-cols-12 pt-8">
            {doctor?.map((doctor: any, index: any) => (
              <div className="col-span-4 pr-6 h-full" key={index}>
                <div className="p-6 bg-off-white rounded-xl h-full shadow-megaMenu">
                  <div className="flex flex-col justify-between h-full">
                    <div className="flex flex-col items-start justify-between">
                      <div className="flex flex-col items-start justify-between min-h-[198px]">
                        <div className="flex">
                          <div>
                            {doctor?.photo ? (
                              <div
                                className="min-w-[64px] lg:min-w-[64px] min-h-[64px] max-h-[64px] lg:min-h-[64px] lg:max-h-[64px] bg-cover bg-center rounded-full overflow-hidden"
                                style={{ backgroundImage: `url(${doctor?.photo})` }}
                              >
                                {' '}
                              </div>
                            ) : (
                              <div
                                className="min-w-[64px] lg:min-w-[64px] min-h-[64px] max-h-[64px] lg:min-h-[64px] lg:max-h-[64px] bg-cover bg-center rounded-full overflow-hidden"
                                style={{ backgroundImage: `url('/user-profile.png')` }}
                              >
                                {' '}
                              </div>
                            )}
                          </div>
                          <div className="pl-4 flex flex-col">
                            <h6 className="pt-1 text-[18px] font-semibold leading-[22px] text-grey-darkest">
                              {doctor?.name}
                            </h6>
                            <span className="pt-1 text-sm text-grey-7 font-medium leading-[18px]">
                              {doctor?.designation}
                            </span>
                            <span className="pt-1 text-sm text-secondary-ocean font-medium leading-[18px]">
                              {doctor?.specialist?.title}
                            </span>
                          </div>
                        </div>
                        <div className="text-base font-normal text-grey-9 leading-6 medical-hospitality-doctor-stories mt-[-8px]">
                          <ReactPortableText content={doctor?.about?.description} />
                        </div>
                      </div>
                    </div>
                    <div>
                      <LinkAngleRight
                        href={`/doctors/${doctor?.slug?.current ?? ''}`}
                        className={clsx(
                          'text-base pt-4 leading-5 text-grey-9 items-center  font-semibold flex transition-colors duration-150 group',
                        )}
                        color="black"
                        gtag_event="select_content"
                        gtag_content_name="Meet our doctors"
                        gtag_content_type={doctor?.name}
                        gtag_cta_button="Read more"
                      >
                        Read more
                      </LinkAngleRight>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="xl:hidden block  py-12 bg-alice-blue">
        <div className="px-6 pb-6">
          <div className="container mx-auto flex flex-col" ref={headingRef}>
            {' '}
            <h1 className="text-[26px] text-primary-blue-new font-montserrat font-bold leading-[32px] tracking-[0.32px]">
              {title}
            </h1>
            <div className="pt-2">
              <p className="pb-4 text-base font-normal text-grey-9 leading-6">{description}</p>
              <LinkAngleRight
                href={button.href ?? ''}
                className={clsx(
                  'text-base font-semibold text-grey-9 leading-5 flex items-center transition-colors duration-150 group',
                )}
                color="black"
                gtag_event="select_content"
                gtag_content_name={description}
                gtag_content_type={title}
                gtag_cta_button={button?.text}
              >
                {button?.text}
              </LinkAngleRight>
            </div>
          </div>
        </div>
        <div>
          <Swiper
            spaceBetween={24}
            slidesPerView={'auto'}
            pagination={{ clickable: true }}
            slidesOffsetAfter={windowWidth >= 768 ? 71 : 24}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
            className={`carousel-swiper grid grid-cols-12 h-full`}
            style={{ paddingLeft: sliderPosition }}
          >
            {doctor?.map((doctor: any, index: any) => (
              <SwiperSlide key={index} className={`!w-[312px] h-full `}>
                <div className="bg-off-white h-full rounded-xl shadow-megaMenu" key={index}>
                  <div className="flex flex-col justify-between h-full px-6 pt-6">
                    <div className="flex flex-col items-start">
                      <div className="flex flex-col items-start justify-between min-h-[198px]">
                        <div className="flex">
                          <div>
                            {doctor?.photo ? (
                              <div
                                className="min-w-[64px] lg:min-w-[64px] min-h-[64px] max-h-[64px] lg:min-h-[64px] lg:max-h-[64px] bg-cover bg-center rounded-full overflow-hidden"
                                style={{ backgroundImage: `url(${doctor?.photo})` }}
                              >
                                {' '}
                              </div>
                            ) : (
                              <div
                                className="min-w-[64px] lg:min-w-[64px] min-h-[64px] max-h-[64px] lg:min-h-[64px] lg:max-h-[64px] bg-cover bg-center rounded-full overflow-hidden"
                                style={{ backgroundImage: `url('/user-profile.png')` }}
                              >
                                {' '}
                              </div>
                            )}
                          </div>
                          <div className="pl-4 flex flex-col">
                            <h6 className="pt-1 text-base font-semibold  leading-[22px] text-grey-darkest">
                              {doctor?.name}
                            </h6>
                            <span className="pt-1 text-sm text-grey-7 font-medium leading-[18px]">
                              {doctor?.designation}
                            </span>
                            <span className="pt-1 text-sm  text-secondary-ocean font-medium leading-[18px]">
                              {doctor?.specialist?.title}
                            </span>
                          </div>
                        </div>

                        <div>
                          <div className="text-base font-normal text-grey-9 leading-6 medical-hospitality-doctor-stories">
                            <ReactPortableText content={doctor?.about?.description} />
                          </div>
                        </div>
                      </div>
                    </div>

                    <div>
                      <LinkAngleRight
                        href={`/doctors/${doctor?.slug?.current ?? ''}`}
                        className={clsx(
                          'text-sm pt-4 pb-6 leading-5 text-grey-dark font-semibold flex items-center  transition-colors duration-150 group',
                        )}
                        color="black"
                        gtag_event="select_content"
                        gtag_content_name={description}
                        gtag_content_type={title}
                        gtag_cta_button="Read more"
                      >
                        Read more
                      </LinkAngleRight>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </>
  )
}
