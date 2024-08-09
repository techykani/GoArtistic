import { SanityImg } from 'sanity-react-extra'
import { PortableText, imageUrlBuilder } from '@/sanity'
import { useRouter } from 'next/router'
import { useWindowSize } from '@/lib/hooks'
import { LinkAngleRight } from '@/components/ui'
import clsx from 'clsx'
import { Swiper, SwiperSlide } from 'swiper/react'

export const PracticeLocation: React.FC<any> = ({ title, clinicLocations, button }) => {
  const router = useRouter()
  const windowWidth = useWindowSize()?.width ?? 0

  return (
    <>
      {clinicLocations?.length > 0 && (
        <div className={`${windowWidth > 1000 ? 'px-[71px] block' : 'hidden'}  bg-[#003964]`}>
          <div className={`${windowWidth > 1000 ? 'container mx-auto' : ''}  py-[80px]`}>
            <div className="flex">
              <h1 className="text-4xl text-[#FEFEFE] font-semibold leading-[44px] tracking-[-0.36px]">
                {title}
              </h1>
            </div>
            <div className="flex gap-6  pt-8">
              {clinicLocations?.slice(0, 3).map((location: any, index: any) => (
                <div className="" key={index}>
                  <div className="max-w-[392px]  bg-off-white rounded-xl overflow-hidden shadow-megaMenu">
                    {location?.locationImage && (
                      <div className="flex items-center max-h-[221px]">
                        <SanityImg
                          className=" min-h-[221px]  rounded-b-none object-cover aspect-[16/9]"
                          builder={imageUrlBuilder}
                          image={location?.locationImage}
                          width={392}
                          height={429}
                          alt={'icon'}
                        />
                      </div>
                    )}
                    <div className="p-6 flex flex-col h-[252px] lg2:h-[190px]">
                      <h6 className="text-base font-semibold leading-[22px] text-grey-dark">
                        {location?.title}
                      </h6>
                      <span className="flex text-sm font-normal leading-5 text-grey-9 pt-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                          fill="none"
                        >
                          <mask
                            id="mask0_63_10883"
                            maskUnits="userSpaceOnUse"
                            x="0"
                            y="0"
                            width="20"
                            height="20"
                          >
                            <rect width="20" height="20" fill="#D9D9D9" />
                          </mask>
                          <g mask="url(#mask0_63_10883)">
                            <path
                              d="M9.99992 16.125C11.6944 14.5694 12.9513 13.1562 13.7708 11.8854C14.5902 10.6146 14.9999 9.48611 14.9999 8.5C14.9999 6.98611 14.5173 5.74653 13.552 4.78125C12.5867 3.81597 11.4027 3.33333 9.99992 3.33333C8.59714 3.33333 7.41311 3.81597 6.44784 4.78125C5.48256 5.74653 4.99992 6.98611 4.99992 8.5C4.99992 9.48611 5.40964 10.6146 6.22909 11.8854C7.04853 13.1562 8.30547 14.5694 9.99992 16.125ZM9.99992 17.7708C9.80547 17.7708 9.61103 17.7361 9.41659 17.6667C9.22214 17.5972 9.04853 17.4931 8.89575 17.3542C7.99297 16.5208 7.19436 15.7083 6.49992 14.9167C5.80547 14.125 5.22561 13.3576 4.76034 12.6146C4.29506 11.8715 3.94089 11.1562 3.69784 10.4687C3.45478 9.78125 3.33325 9.125 3.33325 8.5C3.33325 6.41666 4.00339 4.75694 5.34367 3.52083C6.68395 2.28472 8.23603 1.66666 9.99992 1.66666C11.7638 1.66666 13.3159 2.28472 14.6562 3.52083C15.9964 4.75694 16.6666 6.41666 16.6666 8.5C16.6666 9.125 16.5451 9.78125 16.302 10.4687C16.0589 11.1562 15.7048 11.8715 15.2395 12.6146C14.7742 13.3576 14.1944 14.125 13.4999 14.9167C12.8055 15.7083 12.0069 16.5208 11.1041 17.3542C10.9513 17.4931 10.7777 17.5972 10.5833 17.6667C10.3888 17.7361 10.1944 17.7708 9.99992 17.7708ZM9.99992 10C10.4583 10 10.8506 9.8368 11.177 9.51041C11.5034 9.18403 11.6666 8.79166 11.6666 8.33333C11.6666 7.875 11.5034 7.48264 11.177 7.15625C10.8506 6.82986 10.4583 6.66666 9.99992 6.66666C9.54158 6.66666 9.14922 6.82986 8.82284 7.15625C8.49645 7.48264 8.33325 7.875 8.33325 8.33333C8.33325 8.79166 8.49645 9.18403 8.82284 9.51041C9.14922 9.8368 9.54158 10 9.99992 10Z"
                              fill="#6E6E6E"
                            />
                          </g>
                        </svg>
                        <span className="pl-2">{location?.address}</span>
                      </span>
                      <div className="pt-3 flex">
                        <div>
                          <img src="/clock.svg" className="h-5 w-auto  pr-2" alt="clock" />
                        </div>
                        <div className="flex flex-col ">
                          <span className="text-sm leading-5 text-grey-9">
                            <PortableText blocks={location?.description} />
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex justify-center pt-12">
              <LinkAngleRight
                href={button?.href ?? ''}
                className={clsx(
                  'pl-6 py-3 pr-6 text-base font-semibold leading-5 text-[#FEFEFE] rounded-lg border-2 border-[#FEFEFE] flex items-center transition-colors duration-150 group',
                )}
                color="white"
                gtag_event="select_content"
                gtag_content_name={''}
                gtag_content_type={title}
                gtag_cta_button={button?.text}
              >
                {button?.text}
              </LinkAngleRight>
            </div>
          </div>
        </div>
      )}
      {clinicLocations?.length > 0 && (
        <div className={`py-16 ${windowWidth <= 1000 ? ' block' : 'hidden'}  bg-[#003964]`}>
          <div className="flex">
            <h1 className="w-[300px] text-[28px] md:text-4xl text-[#FEFEFE] font-semibold leading-9 md:leading-[44px] tracking-[-0.28px] md:tracking-[-0.36px] px-6">
              {title}
            </h1>
          </div>
          <div className="pt-8">
            <Swiper
              spaceBetween={10}
              slidesPerView={'auto'}
              pagination={{ clickable: true }}
              slidesOffsetAfter={10}
              onSlideChange={() => console.log('slide change')}
              onSwiper={(swiper) => console.log(swiper)}
              className="pt-6 carousel-swiper !pr-6"
            >
              {clinicLocations?.map((location: any, index: any) => (
                <SwiperSlide className="!w-[288px] !ml-[24px] !mr-0" key={index}>
                  <div className="flex justify-center">
                    <div className="max-w-[392px] w-[288px] h-[360px] bg-off-white rounded-xl shadow-megaMenu">
                      <div className="">
                        <SanityImg
                          className="h-auto rounded-xl rounded-b-none "
                          builder={imageUrlBuilder}
                          image={location?.locationImage}
                          width={288}
                          height={162}
                          alt={'icon'}
                        />
                      </div>
                      <div className="p-4 flex flex-col">
                        <h6 className="text-basexl font-semibold leading-5 text-grey-dark">
                          {location?.title}
                        </h6>
                        <span className="flex text-sm font-normal leading-5 text-grey-dark pt-4">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            viewBox="0 0 20 20"
                            fill="none"
                          >
                            <mask
                              id="mask0_63_10883"
                              maskUnits="userSpaceOnUse"
                              x="0"
                              y="0"
                              width="20"
                              height="20"
                            >
                              <rect width="20" height="20" fill="#D9D9D9" />
                            </mask>
                            <g mask="url(#mask0_63_10883)">
                              <path
                                d="M9.99992 16.125C11.6944 14.5694 12.9513 13.1562 13.7708 11.8854C14.5902 10.6146 14.9999 9.48611 14.9999 8.5C14.9999 6.98611 14.5173 5.74653 13.552 4.78125C12.5867 3.81597 11.4027 3.33333 9.99992 3.33333C8.59714 3.33333 7.41311 3.81597 6.44784 4.78125C5.48256 5.74653 4.99992 6.98611 4.99992 8.5C4.99992 9.48611 5.40964 10.6146 6.22909 11.8854C7.04853 13.1562 8.30547 14.5694 9.99992 16.125ZM9.99992 17.7708C9.80547 17.7708 9.61103 17.7361 9.41659 17.6667C9.22214 17.5972 9.04853 17.4931 8.89575 17.3542C7.99297 16.5208 7.19436 15.7083 6.49992 14.9167C5.80547 14.125 5.22561 13.3576 4.76034 12.6146C4.29506 11.8715 3.94089 11.1562 3.69784 10.4687C3.45478 9.78125 3.33325 9.125 3.33325 8.5C3.33325 6.41666 4.00339 4.75694 5.34367 3.52083C6.68395 2.28472 8.23603 1.66666 9.99992 1.66666C11.7638 1.66666 13.3159 2.28472 14.6562 3.52083C15.9964 4.75694 16.6666 6.41666 16.6666 8.5C16.6666 9.125 16.5451 9.78125 16.302 10.4687C16.0589 11.1562 15.7048 11.8715 15.2395 12.6146C14.7742 13.3576 14.1944 14.125 13.4999 14.9167C12.8055 15.7083 12.0069 16.5208 11.1041 17.3542C10.9513 17.4931 10.7777 17.5972 10.5833 17.6667C10.3888 17.7361 10.1944 17.7708 9.99992 17.7708ZM9.99992 10C10.4583 10 10.8506 9.8368 11.177 9.51041C11.5034 9.18403 11.6666 8.79166 11.6666 8.33333C11.6666 7.875 11.5034 7.48264 11.177 7.15625C10.8506 6.82986 10.4583 6.66666 9.99992 6.66666C9.54158 6.66666 9.14922 6.82986 8.82284 7.15625C8.49645 7.48264 8.33325 7.875 8.33325 8.33333C8.33325 8.79166 8.49645 9.18403 8.82284 9.51041C9.14922 9.8368 9.54158 10 9.99992 10Z"
                                fill="#6E6E6E"
                              />
                            </g>
                          </svg>
                          <span className="pl-2"> {location?.address}</span>
                        </span>
                        <div className="pt-3 flex">
                          <div>
                            <img src="/clock.svg" className="h-5 w-auto  pr-2" alt="clock" />
                          </div>
                          <div className="flex flex-col ">
                            <span className="text-sm leading-5 text-grey-dark">
                              <PortableText blocks={location.description} />
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <div className="flex justify-center pt-12">
            <LinkAngleRight
              href={''}
              className={clsx(
                'pl-6 py-3 pr-6 text-base font-semibold text-[#FEFEFE] rounded-lg border-2 border-[#FEFEFE] flex  transition-colors duration-150 group',
              )}
              color="white"
              gtag_event="select_content"
              gtag_content_name={''}
              gtag_content_type={title}
              gtag_cta_button={button?.text}
            >
              {button?.text}
            </LinkAngleRight>
          </div>
        </div>
      )}
    </>
  )
}
