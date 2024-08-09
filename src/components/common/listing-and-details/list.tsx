import { SanityImg } from 'sanity-react-extra'
import { PortableText, imageUrlBuilder } from '@/sanity'
import { Button, LinkAngleRight } from '@/components/ui'
import { Swiper, SwiperSlide } from 'swiper/react'
import { useWindowSize } from '@/lib/hooks'
import clsx from 'clsx'
import { useRouter } from 'next/router'
import React from 'react'
import Link from 'next/link'

interface HeroProps {
  tagline: string
  title: string
  list: []
  link: CTAButton
  classNameValues?: string
}

export const List: React.FC<HeroProps> = ({ tagline, title, list, link, classNameValues }) => {
  const windowWidth = useWindowSize()?.width ?? 0
  const router = useRouter()

  return (
    <>
      <div
        className={`hidden xl:block  ${classNameValues} bg-surface-light-neutral-2 text-primary-hmi-blue `}
      >
        <div className={`${windowWidth > 1550 ? 'container' : ''} px-[71px] py-20`}>
          <div className="flex">
            <h1 className="w-[350px] text-4xl font-semibold leading-[44px] tracking-[-0.36px]">
              {title}
            </h1>
            <div className="pl-[128px] w-[525px]">
              <p className="text-base leading-6">{tagline}</p>
              {link?.title && (
                <div className="pt-4 ">
                  <LinkAngleRight
                    href={''}
                    color={classNameValues === 'our__gp-service-list' ? 'white' : 'black'}
                    gtag_event="select_content"
                    gtag_content_name={tagline}
                    gtag_content_type={title}
                    gtag_cta_button={link?.title}
                  >
                    <span
                      className={`text-base font-semibold leading-5 ${
                        classNameValues === 'our__gp-service-list'
                          ? 'text-off-white'
                          : 'text-grey-dark'
                      }`}
                    >
                      {link?.title}
                    </span>
                  </LinkAngleRight>
                </div>
              )}
            </div>
          </div>
          <div className="grid grid-cols-12  pt-12 md:gap-6">
            {list?.slice(0, 3).map((data: any, index: any) => (
              <div className="col-span-4" key={index}>
                <div className="w-[392px] h-[505px] bg-off-white rounded-xl shadow-megaMenu">
                  <div className="flex items-center">
                    {data?.locationImage && (
                      <SanityImg
                        className="w-[392px] h-[221px] rounded-xl rounded-b-none"
                        builder={imageUrlBuilder}
                        image={data?.locationImage}
                        width={392}
                        height={221}
                        alt={'icon'}
                      />
                    )}
                  </div>
                  <div className="flex flex-col justify-between h-[284px]">
                    <div className="p-6 flex flex-col">
                      <h6 className="text-[18px] font-semibold leading-6 text-grey-dark">
                        {data?.title}
                      </h6>
                      <span className="text-sm font-normal leading-[22px] text-grey-9 pt-2 flex">
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
                        <span className="pl-2"> {data?.address} </span>
                      </span>
                      <div className="pt-3 flex">
                        <div>
                          <img src="/clock.svg" className="h-5 w-auto  pr-2" alt="clock" />
                        </div>
                        <div className="flex flex-col ">
                          <span className="text-sm font-semibold leading-5 text-grey-9">
                            <PortableText blocks={data.description} />
                          </span>
                          {/* <span className="text-sm font-normal leading-5 text-grey-9">
                          {data?.schedule?.startTime}
                        </span>
                        <span className="text-sm font-normal leading-5 text-grey-9">
                          {data?.schedule?.endTime}
                        </span> */}
                        </div>
                      </div>
                    </div>
                    <div className="flex justify-center px-6 pb-6">
                      <Link
                        href={`/clinics/${data?.slug?.current ?? ''}`}
                        className="w-full h-[44px] inline-block bg-grey-darkest text-base leading-[20px] text-[white] hover:bg-[#004E89] hover:border-[#004E89] px-6 py-3 rounded-lg align-baseline font-semibold text-center border-[2px] border-grey-darkest"
                      >
                        View more
                      </Link>
                      <Link
                        href={`tel:${data?.mobileNo}`}
                        className="w-full h-[44px] ml-2 inline-block bg-[white] text-base leading-[20px] text-grey-darkest px-6 py-3 rounded-lg align-baseline font-semibold  border-[2px] border-grey-darkest hover:bg-[#E6E6E6] hover:text-grey-darkest text-center hover:border-[#E6E6E6]"
                      >
                        {data?.link?.text ?? ''}
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div
        className={`xl:hidden block py-16 ${classNameValues} bg-surface-light-neutral-2 text-primary-hmi-blue`}
      >
        <div className="flex flex-col px-6 ">
          <h1 className="text-[28px]  font-semibold leading-[36px] tracking-[-0.28px]">{title}</h1>
          <p className="pt-4 text-base leading-6">{tagline}</p>
          <div className="pt-4">
            {link?.title && (
              <LinkAngleRight
                href={''}
                color={classNameValues === 'our__gp-service-list' ? 'white' : 'black'}
                gtag_event="select_content"
                gtag_content_name={tagline}
                gtag_content_type={title}
                gtag_cta_button={link?.title}
              >
                <span
                  className={`${
                    classNameValues === 'our__gp-service-list' ? 'text-off-white' : 'text-grey-dark'
                  }`}
                >
                  {link?.title}
                </span>
              </LinkAngleRight>
            )}
          </div>
        </div>
        <div className="pt-8">
          <Swiper
            spaceBetween={10}
            slidesPerView={'auto'}
            pagination={{ clickable: true }}
            slidesOffsetAfter={10}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
            className="pt-6 carousel-swiper"
          >
            {list?.slice(0, 3).map((data: any, index: any) => (
              <SwiperSlide className="!w-[288px] !ml-[24px] last:!mr-[14px]" key={index}>
                <div className="flex justify-center">
                  <div className="max-w-[392px] w-[288px] h-[534px] bg-off-white rounded-xl shadow-megaMenu">
                    <div className="">
                      {data?.locationImage && (
                        <SanityImg
                          className="h-auto rounded-xl rounded-b-none "
                          builder={imageUrlBuilder}
                          image={data?.locationImage}
                          width={288}
                          height={162}
                          alt={'icon'}
                        />
                      )}
                    </div>
                    <div className="flex flex-col justify-between h-[372px]">
                      <div className="p-4 flex flex-col">
                        <h6 className="text-[16px] font-semibold leading-5 text-grey-9">
                          {data?.title}
                        </h6>
                        <span className="text-sm font-normal leading-5 text-grey-9 pt-2 flex">
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
                          <span className="pl-2"> {data?.address} </span>
                        </span>
                        <div className="pt-3 flex">
                          <div>
                            <img src="/clock.svg" className="h-5 w-auto  pr-2" alt="clock" />
                          </div>
                          <div className="flex flex-col ">
                            <span className="text-sm font-semibold leading-5 text-grey-9">
                              <PortableText blocks={data.description} />
                            </span>
                            {/* <span className="text-sm font-normal leading-5 text-grey-9">
                            {data?.schedule?.startTime}
                          </span>
                          <span className="text-sm font-normal leading-5 text-grey-9">
                            {data?.schedule?.endTime}
                          </span> */}
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col justify-center px-6 pb-6">
                        <Link
                          href={`/clinics/${data?.slug?.current ?? ''}`}
                          className="w-full h-[44px] inline-block bg-grey-darkest text-base leading-[20px] text-[white] hover:bg-[#004E89] hover:border-[#004E89] px-6 py-3 rounded-lg align-baseline font-semibold text-center border-[2px] border-off-white"
                        >
                          View more
                        </Link>
                        <Link
                          href={`tel:${data?.mobileNo}`}
                          className="w-full h-[44px]  inline-block bg-[white] text-base leading-[20px] text-grey-darkest px-6 py-3 rounded-lg align-baseline font-semibold  border-[2px] border-grey-darkest hover:bg-[#E6E6E6] hover:text-grey-darkest text-center hover:border-[#E6E6E6] mt-3"
                        >
                          {data?.link?.text ?? ''}
                        </Link>
                      </div>
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
