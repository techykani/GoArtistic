import { SanityImg } from 'sanity-react-extra'
import { PortableText, imageUrlBuilder } from '@/sanity'
import { useRouter } from 'next/router'
import { useWindowSize } from '@/lib/hooks'
import { LinkAngleRight } from '@/components/ui'
import clsx from 'clsx'
import { Swiper, SwiperSlide } from 'swiper/react'
import BtnWithArrow from '../widgets/shared/buttons/button/btnWithArrow'

export const Locations = ({ title, clinicLocations, link }: any) => {
  const router = useRouter()
  const windowWidth = useWindowSize()?.width ?? 0

  return (
    <>
      <div className={`${windowWidth > 1000 ? 'px-[71px] block' : 'hidden'}  bg-[#FEFEFE]`}>
        <div className={`${windowWidth > 1000 ? 'container mx-auto' : ''}  py-[60px]`}>
          <div className="flex">
            <h1 className="text-[32px] text-primary-blue-new font-bold font-montserrat leading-[38px] tracking-[0.32px]">
              {title}
            </h1>
          </div>
          <div className="flex gap-6  pt-8">
            {clinicLocations?.slice(0, 3).map((location: any, index: any) => (
              <div className="" key={index}>
                <div className="max-w-[392px]  bg-off-white rounded-xl overflow-hidden shadow-megaMenu">
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
                  <div className="p-6 flex flex-col h-[252px] lg2:h-[230px]">
                    <h6 className="text-base font-semibold leading-[22px] text-grey-dark">
                      {location?.title}
                    </h6>
                    {location?.address && (
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
                          {' '}
                          {location?.address}{' '}
                        </a>
                      </span>
                    )}
                    {location?.mobileNo && (
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
                              id="mask0_2129_26384"
                              maskUnits="userSpaceOnUse"
                              x="0"
                              y="0"
                              width="20"
                              height="20"
                            >
                              <rect width="20" height="20" fill="#D9D9D9" />
                            </mask>
                            <g mask="url(#mask0_2129_26384)">
                              <path
                                d="M16.2417 17C14.737 17 13.2505 16.672 11.7819 16.016C10.3134 15.36 8.97731 14.4301 7.77361 13.2264C6.56991 12.0227 5.64005 10.6866 4.98403 9.21806C4.32801 7.74954 4 6.26296 4 4.75833C4 4.54167 4.07222 4.36111 4.21667 4.21667C4.36111 4.07222 4.54167 4 4.75833 4H7.68333C7.85185 4 8.00231 4.05718 8.13472 4.17153C8.26713 4.28588 8.34537 4.4213 8.36944 4.57778L8.83889 7.10556C8.86296 7.29815 8.85694 7.46065 8.82083 7.59306C8.78472 7.72546 8.71852 7.83981 8.62222 7.93611L6.87083 9.70556C7.11157 10.1509 7.39745 10.5812 7.72847 10.9965C8.05949 11.4118 8.42361 11.812 8.82083 12.1972C9.19398 12.5704 9.58519 12.9164 9.99444 13.2354C10.4037 13.5544 10.837 13.8463 11.2944 14.1111L12.9917 12.4139C13.1 12.3056 13.2414 12.2243 13.416 12.1701C13.5905 12.116 13.762 12.1009 13.9306 12.125L16.4222 12.6306C16.5907 12.6787 16.7292 12.766 16.8375 12.8924C16.9458 13.0188 17 13.1602 17 13.3167V16.2417C17 16.4583 16.9278 16.6389 16.7833 16.7833C16.6389 16.9278 16.4583 17 16.2417 17ZM6.18472 8.33333L7.37639 7.14167L7.06944 5.44444H5.4625C5.52269 5.93796 5.60694 6.42546 5.71528 6.90694C5.82361 7.38843 5.98009 7.86389 6.18472 8.33333ZM12.6486 14.7972C13.1181 15.0019 13.5965 15.1644 14.084 15.2847C14.5715 15.4051 15.062 15.4833 15.5556 15.5194V13.9306L13.8583 13.5875L12.6486 14.7972Z"
                                fill="#0957CB"
                              />
                            </g>
                          </svg>
                        </div>
                        <a className="text-[#0957CB] hover:underline hover:underline-offset-2">
                          {' '}
                          {location?.mobileNo}{' '}
                        </a>
                      </span>
                    )}
                    {location?.whatsappNo && (
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
                              id="mask0_2129_26389"
                              maskUnits="userSpaceOnUse"
                              x="0"
                              y="0"
                              width="20"
                              height="20"
                            >
                              <rect width="20" height="20" fill="#D9D9D9" />
                            </mask>
                            <g mask="url(#mask0_2129_26389)">
                              <path
                                d="M10 3C6.1403 3 3 6.1403 3 10C3 11.1464 3.30195 12.2179 3.7916 13.1732L3.03281 15.8898C2.85608 16.521 3.48017 17.1451 4.11152 16.9686L6.83018 16.2098C7.78476 16.6984 8.85471 17 10 17C13.8597 17 17 13.8597 17 10C17 6.1403 13.8597 3 10 3ZM10 4.05C13.2922 4.05 15.95 6.7078 15.95 10C15.95 13.2922 13.2922 15.95 10 15.95C8.94945 15.95 7.96671 15.6768 7.10977 15.1994C6.98897 15.1321 6.8465 15.1151 6.71328 15.1522L4.12793 15.8734L4.8498 13.2895C4.8871 13.156 4.87014 13.0133 4.80264 12.8923C4.32428 12.0347 4.05 11.0516 4.05 10C4.05 6.7078 6.7078 4.05 10 4.05ZM7.63408 6.85068C7.52243 6.85068 7.34203 6.89256 7.18838 7.05986C7.03508 7.22646 6.60322 7.63053 6.60322 8.45303C6.60322 9.27553 7.2018 10.0698 7.28545 10.1818C7.36875 10.2928 8.44157 12.0351 10.1408 12.705C11.5527 13.2615 11.8399 13.1507 12.1465 13.1227C12.4531 13.0954 13.1358 12.7189 13.2751 12.3283C13.4144 11.9377 13.4145 11.6036 13.3735 11.5347C13.3319 11.465 13.2202 11.4228 13.0529 11.3392C12.886 11.2555 12.0646 10.8514 11.9113 10.7957C11.758 10.7401 11.646 10.7118 11.5347 10.8791C11.4234 11.0464 11.1032 11.4227 11.0056 11.534C10.9079 11.646 10.8106 11.66 10.6433 11.5764C10.4756 11.492 9.93773 11.3159 9.29863 10.7465C8.80163 10.3037 8.46728 9.75646 8.36963 9.58916C8.27233 9.42256 8.35912 9.331 8.44277 9.24805C8.51802 9.17315 8.61 9.05312 8.69365 8.95547C8.7766 8.85782 8.80412 8.78855 8.85977 8.67725C8.91542 8.5663 8.88774 8.46832 8.84609 8.38467C8.80444 8.30102 8.47941 7.47401 8.33066 7.14326C8.20571 6.86536 8.07404 6.85934 7.95469 6.85479C7.85739 6.85093 7.74538 6.85068 7.63408 6.85068Z"
                                fill="#0957CB"
                                stroke="#0957CB"
                                stroke-width="0.2"
                              />
                            </g>
                          </svg>
                        </div>
                        <a className="text-[#0957CB] hover:underline hover:underline-offset-2">
                          {' '}
                          {location?.whatsappNo}{' '}
                        </a>
                      </span>
                    )}
                    {location?.email && (
                      <span className="flex gap-1 text-sm font-normal leading-5 text-grey-9 pt-[10px]">
                        <div className="w-5 h-5">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="18"
                            height="18"
                            viewBox="0 0 18 18"
                            fill="none"
                          >
                            <path
                              d="M3 5.91518L8.3072 9.56388C8.73696 9.85934 8.95184 10.0071 9.18557 10.0643C9.39203 10.1148 9.60797 10.1148 9.81443 10.0643C10.0482 10.0071 10.263 9.85934 10.6928 9.56388L16 5.91518M6.12 14.2143H12.88C13.9721 14.2143 14.5182 14.2143 14.9353 14.0055C15.3022 13.8219 15.6005 13.5289 15.7875 13.1686C16 12.7589 16 12.2226 16 11.15V7.06429C16 5.99169 16 5.45538 15.7875 5.04571C15.6005 4.68534 15.3022 4.39236 14.9353 4.20874C14.5182 4 13.9721 4 12.88 4H6.12C5.0279 4 4.48185 4 4.06472 4.20874C3.6978 4.39236 3.39949 4.68534 3.21254 5.04571C3 5.45538 3 5.99169 3 7.06429V11.15C3 12.2226 3 12.7589 3.21254 13.1686C3.39949 13.5289 3.6978 13.8219 4.06472 14.0055C4.48185 14.2143 5.0279 14.2143 6.12 14.2143Z"
                              stroke="#0957CB"
                              stroke-width="1.3"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                          </svg>
                        </div>
                        <a className="text-[#0957CB] hover:underline hover:underline-offset-2">
                          {' '}
                          {location?.email}{' '}
                        </a>
                      </span>
                    )}
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
                        <span className="text-sm leading-5 text-grey-9">
                          <PortableText blocks={location.description} />
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-center pt-8">
            {/* <LinkAngleRight
              href={button?.href ?? ''}
              className={clsx(
                'pl-6 py-3 pr-6 text-base font-semibold leading-5 text-[#3C3C3C] rounded-lg border-2 border-[#3C3C3C] flex items-center transition-colors duration-150 group',
              )}
              color="black"
            >
              {button?.text}
            </LinkAngleRight> */}
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
        </div>
      </div>
      <div className={`py-12 ${windowWidth <= 1000 ? ' block' : 'hidden'}  bg-[#FEFEFE]`}>
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
            {clinicLocations?.map((location: any, index: any) => (
              <SwiperSlide className="!w-[288px] !ml-[24px] !mr-0" key={index}>
                <div className="flex justify-center">
                  <div className="max-w-[392px] w-[288px] h-[345px] my-6 bg-off-white rounded-xl shadow-megaMenu">
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
                          {location?.address}
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
      </div>
    </>
  )
}
