import { useWindowSize } from '@/lib/hooks'
import PrimarySectionHorizontal from '../widgets/blocks/sections/primarySectionHorizontal'
import { urlForImage } from '@/studio/lib/image'
import Image from 'next/image'

export const Locations = ({ title, description, points, link }: any) => {
  const windowWidth = useWindowSize()?.width ?? 0
  const navigateTo = (href: any) => {
    if (href) {
      window.open(href, '_blank', 'noopener,noreferrer')
    }
  }
  return (
    <>
      <div className={`${windowWidth > 1000 ? 'px-[71px] block' : 'block'}  bg-[#F1F6FF]`}>
        <div
          className={`${
            windowWidth > 1000 ? 'container mx-auto flex-col gap-2 py-[80px]' : 'px-6 py-12'
          }  `}
        >
          <PrimarySectionHorizontal
            title={''}
            tagline={title}
            description={description}
            link={link}
            target={'_blank'}
            btnType={'secondary'}
            arrowVisibility={false}
            theme={'light'}
            customStyle={''}
            size={'medium'}
            arrowColor={'white'}
          />

          <div className="flex flex-col lg:flex-row gap-6  pt-8">
            {points?.slice(0, 3).map((location: any, index: any) => (
              <div onClick={() => navigateTo(location?.link?.href)} key={index}>
                <div
                  className={`max-w-[392px] bg-off-white rounded-xl overflow-hidden shadow-megaMenu ${
                    location.link?.href ? 'cursor-pointer' : ''
                  }`}
                >
                  <div className="flex items-center max-h-[221px]">
                    <Image
                      src={urlForImage(location?.icon)?.url()}
                      width={392}
                      height={429}
                      alt={location?.icon?.alt ?? ''}
                      quality={100}
                      className="amin-h-[221px]  rounded-b-none object-cover aspect-[16/9]"
                      loading="eager"
                    />
                  </div>
                  <div className="p-6 flex flex-col">
                    <h6 className="text-base font-semibold leading-[22px] text-[#3C3C3C]">
                      {location?.title}
                    </h6>
                    <p className="text-sm font-normal leading-5 text-[#6E6E6E] pt-2">
                      {location?.tagline}
                    </p>

                    {location?.date && (
                      <span className="flex gap-1 text-sm font-normal leading-5 text-grey-9 pt-[10px]">
                        <div className="w-5 h-5">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            viewBox="0 0 20 20"
                            fill="none"
                          >
                            <path
                              d="M16 8.33333H4M12.6667 3V5.66667M7.33333 3V5.66667M7.2 16.3333H12.8C13.9201 16.3333 14.4802 16.3333 14.908 16.1153C15.2843 15.9236 15.5903 15.6176 15.782 15.2413C16 14.8135 16 14.2534 16 13.1333V7.53333C16 6.41323 16 5.85318 15.782 5.42535C15.5903 5.04903 15.2843 4.74307 14.908 4.55132C14.4802 4.33333 13.9201 4.33333 12.8 4.33333H7.2C6.0799 4.33333 5.51984 4.33333 5.09202 4.55132C4.71569 4.74307 4.40973 5.04903 4.21799 5.42535C4 5.85318 4 6.41323 4 7.53333V13.1333C4 14.2534 4 14.8135 4.21799 15.2413C4.40973 15.6176 4.71569 15.9236 5.09202 16.1153C5.51984 16.3333 6.0799 16.3333 7.2 16.3333Z"
                              stroke="#6E6E6E"
                              stroke-width="1.5"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                          </svg>
                        </div>
                        <a className="text-[#6E6E6E]"> {location?.date} </a>
                      </span>
                    )}
                    {location?.time && (
                      <span className="flex gap-1 text-sm font-normal leading-5 text-grey-9 pt-[10px]">
                        <div className="w-5 h-5">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            viewBox="0 0 20 20"
                            fill="none"
                          >
                            <path
                              d="M10 6.4V10L12.4 11.2M16 10C16 13.3137 13.3137 16 10 16C6.68629 16 4 13.3137 4 10C4 6.68629 6.68629 4 10 4C13.3137 4 16 6.68629 16 10Z"
                              stroke="#6E6E6E"
                              stroke-width="1.5"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                          </svg>
                        </div>
                        <a className="text-[#6E6E6E]"> {location?.time} </a>
                      </span>
                    )}
                    {location?.location && (
                      <span className="flex gap-1 text-sm font-normal leading-5 text-grey-9 pt-[10px]">
                        <div className="w-5 h-5">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            viewBox="0 0 20 20"
                            fill="none"
                          >
                            <mask
                              id="mask0_4108_809"
                              maskUnits="userSpaceOnUse"
                              x="0"
                              y="0"
                              width="20"
                              height="20"
                            >
                              <rect width="20" height="20" fill="#D9D9D9" />
                            </mask>
                            <g mask="url(#mask0_4108_809)">
                              <path
                                d="M10 16.125C11.6944 14.5695 12.9514 13.1563 13.7708 11.8854C14.5903 10.6146 15 9.48613 15 8.50002C15 6.98613 14.5174 5.74655 13.5521 4.78127C12.5868 3.81599 11.4028 3.33335 10 3.33335C8.59722 3.33335 7.41319 3.81599 6.44792 4.78127C5.48264 5.74655 5 6.98613 5 8.50002C5 9.48613 5.40972 10.6146 6.22917 11.8854C7.04861 13.1563 8.30555 14.5695 10 16.125ZM10 17.7709C9.80555 17.7709 9.61111 17.7361 9.41667 17.6667C9.22222 17.5972 9.04861 17.4931 8.89583 17.3542C7.99305 16.5209 7.19444 15.7084 6.5 14.9167C5.80555 14.125 5.22569 13.3577 4.76042 12.6146C4.29514 11.8715 3.94097 11.1563 3.69792 10.4688C3.45486 9.78127 3.33333 9.12502 3.33333 8.50002C3.33333 6.41669 4.00347 4.75697 5.34375 3.52085C6.68403 2.28474 8.23611 1.66669 10 1.66669C11.7639 1.66669 13.316 2.28474 14.6562 3.52085C15.9965 4.75697 16.6667 6.41669 16.6667 8.50002C16.6667 9.12502 16.5451 9.78127 16.3021 10.4688C16.059 11.1563 15.7049 11.8715 15.2396 12.6146C14.7743 13.3577 14.1944 14.125 13.5 14.9167C12.8056 15.7084 12.0069 16.5209 11.1042 17.3542C10.9514 17.4931 10.7778 17.5972 10.5833 17.6667C10.3889 17.7361 10.1944 17.7709 10 17.7709ZM10 10C10.4583 10 10.8507 9.83683 11.1771 9.51044C11.5035 9.18405 11.6667 8.79169 11.6667 8.33335C11.6667 7.87502 11.5035 7.48266 11.1771 7.15627C10.8507 6.82988 10.4583 6.66669 10 6.66669C9.54167 6.66669 9.1493 6.82988 8.82292 7.15627C8.49653 7.48266 8.33333 7.87502 8.33333 8.33335C8.33333 8.79169 8.49653 9.18405 8.82292 9.51044C9.1493 9.83683 9.54167 10 10 10Z"
                                fill="#6E6E6E"
                              />
                            </g>
                          </svg>
                        </div>
                        <a
                          href={`https://www.google.com/maps?q=${location?.location}`}
                          target="_blank"
                          className="text-[#6E6E6E]"
                        >
                          {' '}
                          {location?.location}{' '}
                        </a>
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* <div className={`py-12 ${windowWidth <= 1000 ? ' block' : 'hidden'}  bg-[#FEFEFE]`}>
        <div className="flex">
          <h1 className="w-[300px] text-[26px] md:text-[32px] text-primary-blue-new font-bold font-montserrat leading-[32px] md:leading-[32px] tracking-[0.32px] px-6">
            {title}
          </h1>
        </div>
        <div>
          <Swiper
            spaceBetween={10}
            slidesPerView={'auto'}
            pagination={{ clickable: true }}
            slidesOffsetAfter={10}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
            className="carousel-swiper !pr-6"
          >
            {points?.map((location: any, index: any) => (
              <SwiperSlide className="!w-[288px] !ml-[24px] !mr-0" key={index}>
                <div className="flex justify-center">
                  <div className="max-w-[392px] w-[288px] h-[345px] my-6 bg-off-white rounded-xl shadow-megaMenu">
                    <div className="">
                      <Image
                        src={urlForImage(location?.icon)?.url()}
                        width={288}
                        height={162}
                        alt={location?.icon?.alt ?? ''}
                        quality={100}
                        className="h-auto rounded-xl rounded-b-none "
                        loading="eager"
                      />
                    </div>
                    <div className="p-4 flex flex-col">
                      <h6 className="text-basexl font-semibold leading-5 text-grey-dark">
                        {location?.title}
                      </h6>
                      <span className="flex gap-1 text-sm font-normal leading-5 text-grey-dark pt-4">
                        <div className="w-5 h-5">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            viewBox="0 0 20 20"
                            fill="none"
                          >
                            <mask
                              id="mask0_1412_20939"
                              maskUnits="userSpaceOnUse"
                              x="0"
                              y="0"
                              width="20"
                              height="20"
                            >
                              <rect width="20" height="20" fill="#D9D9D9" />
                            </mask>
                            <g mask="url(#mask0_1412_20939)">
                              <path
                                d="M9.91332 16.9933C11.6705 15.3802 12.9739 13.9147 13.8237 12.5968C14.6734 11.279 15.0983 10.1088 15.0983 9.08616C15.0983 7.51626 14.5978 6.23081 13.5968 5.22982C12.5958 4.22883 11.368 3.72833 9.91332 3.72833C8.45865 3.72833 7.23081 4.22883 6.22982 5.22982C5.22883 6.23081 4.72833 7.51626 4.72833 9.08616C4.72833 10.1088 5.15321 11.279 6.00298 12.5968C6.85274 13.9147 8.15619 15.3802 9.91332 16.9933ZM9.91332 18.7C9.71169 18.7 9.51005 18.664 9.30841 18.592C9.10677 18.52 8.92674 18.4119 8.76831 18.2679C7.83213 17.4038 7.00397 16.5612 6.28383 15.7402C5.56369 14.9193 4.96238 14.1235 4.47988 13.353C3.99739 12.5824 3.63012 11.8407 3.37807 11.1277C3.12602 10.4148 3 9.73428 3 9.08616C3 6.92574 3.69493 5.20461 5.0848 3.92277C6.47467 2.64092 8.08417 2 9.91332 2C11.7425 2 13.352 2.64092 14.7418 3.92277C16.1317 5.20461 16.8266 6.92574 16.8266 9.08616C16.8266 9.73428 16.7006 10.4148 16.4486 11.1277C16.1965 11.8407 15.8293 12.5824 15.3468 13.353C14.8643 14.1235 14.263 14.9193 13.5428 15.7402C12.8227 16.5612 11.9945 17.4038 11.0583 18.2679C10.8999 18.4119 10.7199 18.52 10.5182 18.592C10.3166 18.664 10.115 18.7 9.91332 18.7ZM9.91332 10.6417C10.3886 10.6417 10.7955 10.4724 11.134 10.134C11.4724 9.79549 11.6417 9.38862 11.6417 8.91332C11.6417 8.43803 11.4724 8.03116 11.134 7.69269C10.7955 7.35423 10.3886 7.18499 9.91332 7.18499C9.43803 7.18499 9.03116 7.35423 8.69269 7.69269C8.35423 8.03116 8.18499 8.43803 8.18499 8.91332C8.18499 9.38862 8.35423 9.79549 8.69269 10.134C9.03116 10.4724 9.43803 10.6417 9.91332 10.6417Z"
                                fill="#0957CB"
                              />
                            </g>
                          </svg>
                        </div>
                        <a
                          href={`https://www.google.com/maps?q=${location?.address}`}
                          target="_blank"
                          className="text-[#0957CB] hover:underline hover:underline-offset-2"
                        >
                          {location?.location}
                        </a>
                      </span>
                      <div className="pt-3 flex gap-1">
                        <div className="w-5 h-5">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            viewBox="0 0 20 20"
                            fill="none"
                          >
                            <mask
                              id="mask0_1959_1267"
                              style={{ maskType: 'alpha' }}
                              maskUnits="userSpaceOnUse"
                              x="0"
                              y="0"
                              width="20"
                              height="20"
                            >
                              <rect width="20" height="20" fill="#D9D9D9" />
                            </mask>
                            <g mask="url(#mask0_1959_1267)">
                              <path
                                d="M11.25 10.2V7.5C11.25 7.2875 11.1781 7.10938 11.0344 6.96562C10.8906 6.82187 10.7125 6.75 10.5 6.75C10.2875 6.75 10.1094 6.82187 9.96563 6.96562C9.82188 7.10938 9.75 7.2875 9.75 7.5V10.4813C9.75 10.5813 9.76875 10.6781 9.80625 10.7719C9.84375 10.8656 9.9 10.95 9.975 11.025L12.45 13.5C12.5875 13.6375 12.7625 13.7063 12.975 13.7063C13.1875 13.7063 13.3625 13.6375 13.5 13.5C13.6375 13.3625 13.7063 13.1875 13.7063 12.975C13.7063 12.7625 13.6375 12.5875 13.5 12.45L11.25 10.2ZM10.5 18C9.4625 18 8.4875 17.8031 7.575 17.4094C6.6625 17.0156 5.86875 16.4813 5.19375 15.8063C4.51875 15.1313 3.98438 14.3375 3.59063 13.425C3.19687 12.5125 3 11.5375 3 10.5C3 9.4625 3.19687 8.4875 3.59063 7.575C3.98438 6.6625 4.51875 5.86875 5.19375 5.19375C5.86875 4.51875 6.6625 3.98438 7.575 3.59063C8.4875 3.19687 9.4625 3 10.5 3C11.5375 3 12.5125 3.19687 13.425 3.59063C14.3375 3.98438 15.1313 4.51875 15.8063 5.19375C16.4813 5.86875 17.0156 6.6625 17.4094 7.575C17.8031 8.4875 18 9.4625 18 10.5C18 11.5375 17.8031 12.5125 17.4094 13.425C17.0156 14.3375 16.4813 15.1313 15.8063 15.8063C15.1313 16.4813 14.3375 17.0156 13.425 17.4094C12.5125 17.8031 11.5375 18 10.5 18ZM10.5 16.5C12.1625 16.5 13.5781 15.9156 14.7469 14.7469C15.9156 13.5781 16.5 12.1625 16.5 10.5C16.5 8.8375 15.9156 7.42188 14.7469 6.25313C13.5781 5.08438 12.1625 4.5 10.5 4.5C8.8375 4.5 7.42188 5.08438 6.25313 6.25313C5.08438 7.42188 4.5 8.8375 4.5 10.5C4.5 12.1625 5.08438 13.5781 6.25313 14.7469C7.42188 15.9156 8.8375 16.5 10.5 16.5Z"
                                fill="#6E6E6E"
                              />
                            </g>
                          </svg>
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
        <div className="flex justify-center">
          <div className="w-full text-grey-dark flex justify-center">
            <BtnWithArrow
              link={link}
              target="_self"
              rel=""
              btnType="primary"
              arrowVisibility={true}
              theme="light"
              customStyle=""
              size="medium"
              arrowColor="white"
              gtag_event="select_content"
              gtag_content_name={''}
              gtag_content_type={title}
              gtag_cta_button={link?.text}
            />
          </div>
        </div>
      </div> */}
    </>
  )
}
