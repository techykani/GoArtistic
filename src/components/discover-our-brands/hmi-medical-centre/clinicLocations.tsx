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
    <main className="w-full bg-alice-blue ">
      <section className="container md:px-[71px] md:py-[80px] py-[48px]">
        <div className="flex flex-col gap-8 md:gap-12">
          <div className="flex flex-col md:flex-row gap-4 md:gap-[129px] px-6 pb-6 md:px-0 md:py-0">
            <h2 className="text-primary-blue-new text-[26px] md:text-[36px] font-bold font-montserrat leading-[32px] tracking-[0.32px] md:w-[392px]">
              {title}
            </h2>
            {description && (
              <div className="text-grey-8 text-base leading-[24px] md:w-[391px]">
                <PortableText blocks={description} />
              </div>
            )}
          </div>
        </div>
        <div className="hidden md:grid grid-cols-4 gap-6 mt-[36px]">
          {clinicLocations.map((clinic: any, index: any) => (
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
                            image={data.icon}
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

              <div className="flex text-grey-8 text-sm leading-[24px] mt-3">
                <div className="w-5 h-5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="21"
                    viewBox="0 0 20 21"
                    fill="none"
                  >
                    <mask
                      id="mask0_115_26189"
                      maskUnits="userSpaceOnUse"
                      x="0"
                      y="0"
                      width="20"
                      height="21"
                    >
                      <rect y="0.191895" width="20" height="20" fill="#D9D9D9" />
                    </mask>
                    <g mask="url(#mask0_115_26189)">
                      <path
                        d="M11.25 10.3919V7.69189C11.25 7.47939 11.1781 7.30127 11.0344 7.15752C10.8906 7.01377 10.7125 6.94189 10.5 6.94189C10.2875 6.94189 10.1094 7.01377 9.96563 7.15752C9.82188 7.30127 9.75 7.47939 9.75 7.69189V10.6731C9.75 10.7731 9.76875 10.87 9.80625 10.9638C9.84375 11.0575 9.9 11.1419 9.975 11.2169L12.45 13.6919C12.5875 13.8294 12.7625 13.8981 12.975 13.8981C13.1875 13.8981 13.3625 13.8294 13.5 13.6919C13.6375 13.5544 13.7063 13.3794 13.7063 13.1669C13.7063 12.9544 13.6375 12.7794 13.5 12.6419L11.25 10.3919ZM10.5 18.1919C9.4625 18.1919 8.4875 17.995 7.575 17.6013C6.6625 17.2075 5.86875 16.6731 5.19375 15.9981C4.51875 15.3231 3.98438 14.5294 3.59063 13.6169C3.19687 12.7044 3 11.7294 3 10.6919C3 9.65439 3.19687 8.67939 3.59063 7.76689C3.98438 6.85439 4.51875 6.06064 5.19375 5.38564C5.86875 4.71064 6.6625 4.17627 7.575 3.78252C8.4875 3.38877 9.4625 3.19189 10.5 3.19189C11.5375 3.19189 12.5125 3.38877 13.425 3.78252C14.3375 4.17627 15.1313 4.71064 15.8063 5.38564C16.4813 6.06064 17.0156 6.85439 17.4094 7.76689C17.8031 8.67939 18 9.65439 18 10.6919C18 11.7294 17.8031 12.7044 17.4094 13.6169C17.0156 14.5294 16.4813 15.3231 15.8063 15.9981C15.1313 16.6731 14.3375 17.2075 13.425 17.6013C12.5125 17.995 11.5375 18.1919 10.5 18.1919ZM10.5 16.6919C12.1625 16.6919 13.5781 16.1075 14.7469 14.9388C15.9156 13.77 16.5 12.3544 16.5 10.6919C16.5 9.02939 15.9156 7.61377 14.7469 6.44502C13.5781 5.27627 12.1625 4.69189 10.5 4.69189C8.8375 4.69189 7.42188 5.27627 6.25313 6.44502C5.08438 7.61377 4.5 9.02939 4.5 10.6919C4.5 12.3544 5.08438 13.77 6.25313 14.9388C7.42188 16.1075 8.8375 16.6919 10.5 16.6919Z"
                        fill="#5A5A5A"
                      />
                    </g>
                  </svg>
                </div>

                <p className="pl-1 text-grey-9 text-sm leading-[20px] max-w-[200px] pr-4">
                  <PortableText blocks={clinic?.description} />
                </p>
              </div>

              {clinic?.faxNo && (
                <div className="flex mt-3 w-full">
                  <div className="w-5 h-5">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="21"
                      viewBox="0 0 20 21"
                      fill="none"
                    >
                      <mask
                        id="mask0_3024_11944"
                        style={{ maskType: 'alpha' }}
                        maskUnits="userSpaceOnUse"
                        x="0"
                        y="0"
                        width="20"
                        height="21"
                      >
                        <rect y="0.5" width="20" height="20" fill="#D9D9D9" />
                      </mask>
                      <g mask="url(#mask0_3024_11944)">
                        <path
                          d="M5 18.8332C4.30556 18.8332 3.71528 18.5901 3.22917 18.104C2.74306 17.6179 2.5 17.0276 2.5 16.3332V14.8332C2.5 14.2809 2.94772 13.8332 3.5 13.8332H5V3.1665C5 2.61422 5.44772 2.1665 6 2.1665H16.5C17.0523 2.1665 17.5 2.61422 17.5 3.1665V16.3332C17.5 17.0276 17.2569 17.6179 16.7708 18.104C16.2847 18.5901 15.6944 18.8332 15 18.8332H5ZM15 17.1665C15.2361 17.1665 15.434 17.0866 15.5938 16.9269C15.7535 16.7672 15.8333 16.5693 15.8333 16.3332V4.33317C15.8333 4.05703 15.6095 3.83317 15.3333 3.83317H7.16667C6.89052 3.83317 6.66667 4.05703 6.66667 4.33317V13.8332H13.1667C13.719 13.8332 14.1667 14.2809 14.1667 14.8332V16.3332C14.1667 16.5693 14.2465 16.7672 14.4062 16.9269C14.566 17.0866 14.7639 17.1665 15 17.1665ZM8.33333 7.99984C7.8731 7.99984 7.5 7.62674 7.5 7.1665C7.5 6.70627 7.8731 6.33317 8.33333 6.33317H14.1667C14.6269 6.33317 15 6.70627 15 7.1665C15 7.62674 14.6269 7.99984 14.1667 7.99984H8.33333ZM8.33333 10.4998C7.8731 10.4998 7.5 10.1267 7.5 9.6665C7.5 9.20627 7.8731 8.83317 8.33333 8.83317H14.1667C14.6269 8.83317 15 9.20627 15 9.6665C15 10.1267 14.6269 10.4998 14.1667 10.4998H8.33333ZM5 17.1665H12.5V15.4998H4.16667V16.3332C4.16667 16.5693 4.24653 16.7672 4.40625 16.9269C4.56597 17.0866 4.76389 17.1665 5 17.1665ZM5 17.1665H4.16667H12.5H5Z"
                          fill="#6E6E6E"
                        />
                      </g>
                    </svg>
                  </div>
                  <p className="pl-1 w-full flex-1 text-grey-dark text-sm leading-[20px]">
                    {clinic?.faxNo}
                  </p>
                </div>
              )}
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
            {clinicLocations.map((clinic: any, index: any) => (
              <SwiperSlide
                key={index}
                className={`${windowWidth >= 768 ? '!w-[288px]' : '!w-[288px]'} !h-full`}
              >
                <div
                  className="col-span-1 bg-off-white shadow-megaMenu rounded-xl p-6 !h-[288px]"
                  key={index}
                >
                  <h6 className="text-grey-dark text-base font-semibold leading-5 ">
                    {clinic?.name}
                  </h6>

                  <div className="flex text-grey-8 text-sm leading-[24px] mt-3">
                    <div className="w-5 h-5">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="21"
                        viewBox="0 0 20 21"
                        fill="none"
                      >
                        <mask
                          id="mask0_115_26189"
                          maskUnits="userSpaceOnUse"
                          x="0"
                          y="0"
                          width="20"
                          height="21"
                        >
                          <rect y="0.191895" width="20" height="20" fill="#D9D9D9" />
                        </mask>
                        <g mask="url(#mask0_115_26189)">
                          <path
                            d="M11.25 10.3919V7.69189C11.25 7.47939 11.1781 7.30127 11.0344 7.15752C10.8906 7.01377 10.7125 6.94189 10.5 6.94189C10.2875 6.94189 10.1094 7.01377 9.96563 7.15752C9.82188 7.30127 9.75 7.47939 9.75 7.69189V10.6731C9.75 10.7731 9.76875 10.87 9.80625 10.9638C9.84375 11.0575 9.9 11.1419 9.975 11.2169L12.45 13.6919C12.5875 13.8294 12.7625 13.8981 12.975 13.8981C13.1875 13.8981 13.3625 13.8294 13.5 13.6919C13.6375 13.5544 13.7063 13.3794 13.7063 13.1669C13.7063 12.9544 13.6375 12.7794 13.5 12.6419L11.25 10.3919ZM10.5 18.1919C9.4625 18.1919 8.4875 17.995 7.575 17.6013C6.6625 17.2075 5.86875 16.6731 5.19375 15.9981C4.51875 15.3231 3.98438 14.5294 3.59063 13.6169C3.19687 12.7044 3 11.7294 3 10.6919C3 9.65439 3.19687 8.67939 3.59063 7.76689C3.98438 6.85439 4.51875 6.06064 5.19375 5.38564C5.86875 4.71064 6.6625 4.17627 7.575 3.78252C8.4875 3.38877 9.4625 3.19189 10.5 3.19189C11.5375 3.19189 12.5125 3.38877 13.425 3.78252C14.3375 4.17627 15.1313 4.71064 15.8063 5.38564C16.4813 6.06064 17.0156 6.85439 17.4094 7.76689C17.8031 8.67939 18 9.65439 18 10.6919C18 11.7294 17.8031 12.7044 17.4094 13.6169C17.0156 14.5294 16.4813 15.3231 15.8063 15.9981C15.1313 16.6731 14.3375 17.2075 13.425 17.6013C12.5125 17.995 11.5375 18.1919 10.5 18.1919ZM10.5 16.6919C12.1625 16.6919 13.5781 16.1075 14.7469 14.9388C15.9156 13.77 16.5 12.3544 16.5 10.6919C16.5 9.02939 15.9156 7.61377 14.7469 6.44502C13.5781 5.27627 12.1625 4.69189 10.5 4.69189C8.8375 4.69189 7.42188 5.27627 6.25313 6.44502C5.08438 7.61377 4.5 9.02939 4.5 10.6919C4.5 12.3544 5.08438 13.77 6.25313 14.9388C7.42188 16.1075 8.8375 16.6919 10.5 16.6919Z"
                            fill="#5A5A5A"
                          />
                        </g>
                      </svg>
                    </div>
                    <p className="pl-1 text-grey-9 text-sm leading-[20px]">
                      <PortableText blocks={clinic?.description} />
                    </p>
                  </div>

                  {clinic?.mobileNo && (
                    <div className="w-full flex mt-3">
                      <div className="w-5 h-5">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="21"
                          viewBox="0 0 20 21"
                          fill="none"
                        >
                          <mask
                            id="mask0_3024_11939"
                            style={{ maskType: 'alpha' }}
                            maskUnits="userSpaceOnUse"
                            x="0"
                            y="0"
                            width="20"
                            height="21"
                          >
                            <rect y="0.5" width="20" height="20" fill="#D9D9D9" />
                          </mask>
                          <g mask="url(#mask0_3024_11939)">
                            <path
                              d="M16.625 18C14.8889 18 13.1736 17.6215 11.4792 16.8646C9.78472 16.1076 8.24306 15.0347 6.85417 13.6458C5.46528 12.2569 4.39236 10.7153 3.63542 9.02083C2.87847 7.32639 2.5 5.61111 2.5 3.875C2.5 3.625 2.58333 3.41667 2.75 3.25C2.91667 3.08333 3.125 3 3.375 3H6.75C6.94444 3 7.11806 3.06597 7.27083 3.19792C7.42361 3.32986 7.51389 3.48611 7.54167 3.66667L8.08333 6.58333C8.11111 6.80556 8.10417 6.99306 8.0625 7.14583C8.02083 7.29861 7.94444 7.43056 7.83333 7.54167L5.8125 9.58333C6.09028 10.0972 6.42014 10.5938 6.80208 11.0729C7.18403 11.5521 7.60417 12.0139 8.0625 12.4583C8.49306 12.8889 8.94444 13.2882 9.41667 13.6562C9.88889 14.0243 10.3889 14.3611 10.9167 14.6667L12.875 12.7083C13 12.5833 13.1632 12.4896 13.3646 12.4271C13.566 12.3646 13.7639 12.3472 13.9583 12.375L16.8333 12.9583C17.0278 13.0139 17.1875 13.1146 17.3125 13.2604C17.4375 13.4062 17.5 13.5694 17.5 13.75V17.125C17.5 17.375 17.4167 17.5833 17.25 17.75C17.0833 17.9167 16.875 18 16.625 18ZM5.02083 8L6.39583 6.625L6.04167 4.66667H4.1875C4.25694 5.23611 4.35417 5.79861 4.47917 6.35417C4.60417 6.90972 4.78472 7.45833 5.02083 8ZM12.4792 15.4583C13.0208 15.6944 13.5729 15.8819 14.1354 16.0208C14.6979 16.1597 15.2639 16.25 15.8333 16.2917V14.4583L13.875 14.0625L12.4792 15.4583Z"
                              fill="#6E6E6E"
                            />
                          </g>
                        </svg>
                      </div>

                      <p className="pl-1 w-full flex-1 text-grey-dark text-sm leading-[20px]">
                        {clinic?.mobileNo}
                      </p>
                    </div>
                  )}
                  {clinic?.faxNo && (
                    <div className="flex mt-3 w-full">
                      <div className="w-5 h-5">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="21"
                          viewBox="0 0 20 21"
                          fill="none"
                        >
                          <mask
                            id="mask0_3024_11944"
                            style={{ maskType: 'alpha' }}
                            maskUnits="userSpaceOnUse"
                            x="0"
                            y="0"
                            width="20"
                            height="21"
                          >
                            <rect y="0.5" width="20" height="20" fill="#D9D9D9" />
                          </mask>
                          <g mask="url(#mask0_3024_11944)">
                            <path
                              d="M5 18.8332C4.30556 18.8332 3.71528 18.5901 3.22917 18.104C2.74306 17.6179 2.5 17.0276 2.5 16.3332V14.8332C2.5 14.2809 2.94772 13.8332 3.5 13.8332H5V3.1665C5 2.61422 5.44772 2.1665 6 2.1665H16.5C17.0523 2.1665 17.5 2.61422 17.5 3.1665V16.3332C17.5 17.0276 17.2569 17.6179 16.7708 18.104C16.2847 18.5901 15.6944 18.8332 15 18.8332H5ZM15 17.1665C15.2361 17.1665 15.434 17.0866 15.5938 16.9269C15.7535 16.7672 15.8333 16.5693 15.8333 16.3332V4.33317C15.8333 4.05703 15.6095 3.83317 15.3333 3.83317H7.16667C6.89052 3.83317 6.66667 4.05703 6.66667 4.33317V13.8332H13.1667C13.719 13.8332 14.1667 14.2809 14.1667 14.8332V16.3332C14.1667 16.5693 14.2465 16.7672 14.4062 16.9269C14.566 17.0866 14.7639 17.1665 15 17.1665ZM8.33333 7.99984C7.8731 7.99984 7.5 7.62674 7.5 7.1665C7.5 6.70627 7.8731 6.33317 8.33333 6.33317H14.1667C14.6269 6.33317 15 6.70627 15 7.1665C15 7.62674 14.6269 7.99984 14.1667 7.99984H8.33333ZM8.33333 10.4998C7.8731 10.4998 7.5 10.1267 7.5 9.6665C7.5 9.20627 7.8731 8.83317 8.33333 8.83317H14.1667C14.6269 8.83317 15 9.20627 15 9.6665C15 10.1267 14.6269 10.4998 14.1667 10.4998H8.33333ZM5 17.1665H12.5V15.4998H4.16667V16.3332C4.16667 16.5693 4.24653 16.7672 4.40625 16.9269C4.56597 17.0866 4.76389 17.1665 5 17.1665ZM5 17.1665H4.16667H12.5H5Z"
                              fill="#6E6E6E"
                            />
                          </g>
                        </svg>
                      </div>
                      <p className="pl-1 w-full flex-1 text-grey-dark text-sm leading-[20px]">
                        {clinic?.faxNo}
                      </p>
                    </div>
                  )}
                  {clinic?.email && (
                    <div className="flex mt-3 w-full">
                      <div className="w-5 h-5">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                          fill="none"
                        >
                          <mask
                            id="mask0_480_11835"
                            style={{ maskType: 'alpha' }}
                            maskUnits="userSpaceOnUse"
                            x="0"
                            y="0"
                            width="20"
                            height="20"
                          >
                            <rect width="20" height="20" fill="#D9D9D9" />
                          </mask>
                          <g mask="url(#mask0_480_11835)">
                            <path
                              d="M4.4 15.2C4.015 15.2 3.68542 15.0629 3.41125 14.7887C3.13708 14.5146 3 14.185 3 13.8V5.4C3 5.015 3.13708 4.68542 3.41125 4.41125C3.68542 4.13708 4.015 4 4.4 4H15.6C15.985 4 16.3146 4.13708 16.5887 4.41125C16.8629 4.68542 17 5.015 17 5.4V13.8C17 14.185 16.8629 14.5146 16.5887 14.7887C16.3146 15.0629 15.985 15.2 15.6 15.2H4.4ZM10.53 9.96875C10.2057 10.1714 9.79427 10.1714 9.47 9.96875L4.4 6.8V13.8H15.6V6.8L10.53 9.96875ZM9.47 8.56875C9.79427 8.77142 10.2057 8.77142 10.53 8.56875L15.6 5.4H4.4L9.47 8.56875ZM4.4 6.8V5.4V13.8V6.8Z"
                              fill="#5A5A5A"
                            />
                          </g>
                        </svg>
                      </div>
                      <p className="pl-1 w-full flex-1 text-grey-dark text-sm leading-[20px]">
                        {clinic?.email}
                      </p>
                    </div>
                  )}
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
