import { useState } from 'react'
import { useWindowSize } from '@/lib/hooks'
import { Swiper, SwiperSlide } from 'swiper/react'
import { PracticeListingItem } from './practiceListingItem'
import { PortableText } from '@/sanity'
import Title from '@/components/widgets/shared/title'

const PracticeLocations = ({ clinics }: any) => {
  const [showModal, setShowModal] = useState(false)
  const [sortedCards, setSortedCards] = useState(clinics)
  const [searchTerm, setSearchTerm] = useState('')
  const windowWidth = useWindowSize()?.width ?? 0
  const handleSearch = (event: any) => {
    const searchTerm = event.target.value.toLowerCase()

    const filtered = clinics.filter(
      (card: any) =>
        card.title.toLowerCase().includes(searchTerm) ||
        card.address.toLowerCase().includes(searchTerm),
    )

    setSortedCards(filtered)
    setSearchTerm(searchTerm)
  }

  const handleClear = () => {
    const searchTerm = ''
    const filtered = clinics
    setSortedCards(filtered)
    setSearchTerm(searchTerm)
    setShowModal(false)
  }

  return (
    <section
      className={`${windowWidth >= 1163 && 'px-[71px]'
        } bg-secondary-deep py-[64px] md:py-[80px] relative `}
    >
      {/* popup modal */}
      {showModal && (
        <div className={'inset-0 z-50 w-full fixed bg-[#FBFBFB] md:bg-[#000000b3] md:py-[78px]'}>
          <div className="max-w-[1016px] mx-auto bg-[#FBFBFB] rounded-xl  relative h-full overflow-scroll slider-body">
            {/* header */}
            <div className="w-full px-6 md:px-[32px] py-6 flex justify-between items-center gap-[10px] border-[1px] border-grey-2 sticky top-0 bg-[#FBFBFB]">
              {/* <h1 className="text-grey-dark text-[20px] md:text-[28px] font-semibold leading-[24px] md:leading-[36px] md:tracking-[-0.28px]">
                Practice locations
              </h1> */}
              <Title
                headingType="h3"
                theme='dark'
                tagline={'Practice locations'}
                className="!text-[#3C3C3C]"
              />
              <div onClick={() => handleClear()} className="cursor-pointer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                >
                  <g clip-path="url(#clip0_594_124943)">
                    <mask
                      id="mask0_594_124943"
                      style={{ maskType: 'alpha' }}
                      maskUnits="userSpaceOnUse"
                      x="0"
                      y="0"
                      width="32"
                      height="32"
                    >
                      <rect width="32" height="32" fill="#D9D9D9" />
                    </mask>
                    <g mask="url(#mask0_594_124943)">
                      <path
                        d="M16.0001 17.8667L9.46673 24.4C9.22229 24.6444 8.91118 24.7667 8.5334 24.7667C8.15562 24.7667 7.84451 24.6444 7.60007 24.4C7.35562 24.1556 7.2334 23.8444 7.2334 23.4667C7.2334 23.0889 7.35562 22.7778 7.60007 22.5333L14.1334 16L7.60007 9.46667C7.35562 9.22223 7.2334 8.91112 7.2334 8.53334C7.2334 8.15556 7.35562 7.84445 7.60007 7.6C7.84451 7.35556 8.15562 7.23334 8.5334 7.23334C8.91118 7.23334 9.22229 7.35556 9.46673 7.6L16.0001 14.1333L22.5334 7.6C22.7778 7.35556 23.089 7.23334 23.4667 7.23334C23.8445 7.23334 24.1556 7.35556 24.4001 7.6C24.6445 7.84445 24.7667 8.15556 24.7667 8.53334C24.7667 8.91112 24.6445 9.22223 24.4001 9.46667L17.8667 16L24.4001 22.5333C24.6445 22.7778 24.7667 23.0889 24.7667 23.4667C24.7667 23.8444 24.6445 24.1556 24.4001 24.4C24.1556 24.6444 23.8445 24.7667 23.4667 24.7667C23.089 24.7667 22.7778 24.6444 22.5334 24.4L16.0001 17.8667Z"
                        fill="#3C3C3C"
                      />
                    </g>
                  </g>
                  <defs>
                    <clipPath id="clip0_594_124943">
                      <rect width="32" height="32" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </div>
            </div>
            {/* search section */}
            <div className="px-6 py-6 md:py-8 bg-[#FBFBFB]">
              <div className="max-w-[808px] mx-auto ">
                <div className="w-full flex items-center shadow-level2 cursor-pointer">
                  <div className="rounded-lg bg-off-white flex items-center py-4 px-6 gap-2 flex-1">
                    <label>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                      >
                        <path
                          d="M8.54167 2.5C5.21235 2.5 2.5 5.21235 2.5 8.54167C2.5 11.871 5.21235 14.5833 8.54167 14.5833C9.98182 14.5833 11.3057 14.0746 12.3454 13.2292L16.4331 17.3169C16.4907 17.3769 16.5597 17.4248 16.636 17.4578C16.7123 17.4907 16.7945 17.5082 16.8776 17.509C16.9608 17.5099 17.0433 17.4941 17.1202 17.4627C17.1972 17.4312 17.2672 17.3848 17.326 17.326C17.3848 17.2672 17.4312 17.1972 17.4627 17.1202C17.4941 17.0433 17.5099 16.9608 17.509 16.8776C17.5082 16.7945 17.4907 16.7123 17.4578 16.636C17.4248 16.5597 17.3769 16.4907 17.3169 16.4331L13.2292 12.3454C14.0746 11.3057 14.5833 9.98182 14.5833 8.54167C14.5833 5.21235 11.871 2.5 8.54167 2.5ZM8.54167 3.75C11.1954 3.75 13.3333 5.8879 13.3333 8.54167C13.3333 9.83442 12.8234 11.0024 11.9963 11.8628C11.9453 11.9003 11.9003 11.9453 11.8628 11.9963C11.0024 12.8234 9.83442 13.3333 8.54167 13.3333C5.8879 13.3333 3.75 11.1954 3.75 8.54167C3.75 5.8879 5.8879 3.75 8.54167 3.75Z"
                          fill="#6E6E6E"
                          stroke="#6E6E6E"
                          stroke-width="0.5"
                        />
                      </svg>
                    </label>

                    <input
                      className="w-full border-none outline-none placeholder:text-base placeholder:leading-[24px] placeholder:text-grey-8"
                      placeholder="Search a location"
                      onChange={handleSearch}
                    />
                  </div>
                </div>
              </div>
            </div>
            {/* list section */}
            <div className="px-6 py-4 md:py-6">
              <div className="max-w-[808px] mx-auto flex flex-col gap-4">
                <p className="text-[#3C3C3C] text-base font-semibold leading-[20px]">
                  {sortedCards.length} Locations
                </p>
                <div className="flex flex-col gap-8 md:gap-12">
                  <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                    {sortedCards.map((props: any, idx: any) => (
                      <PracticeListingItem key={idx} props={props} />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <div
        className={`flex   ${windowWidth >= 1163 && clinics?.length > 0 && clinics?.length < 3
            ? 'flex-row items-center justify-between container mx-auto'
            : 'flex-col'
          } gap-6 `}
      >
        <Title
          headingType="h2"
          theme='dark'
          tagline="Practice locations"
          className={`px-6  ${windowWidth >= 1163 ? 'container mx-auto ' : ''} md:px-[71px] w-full`}
        />
        <div className="w-full flex flex-col gap-8 ">
          <div className="">
            {clinics && windowWidth < 1163 && (
              <Swiper
                spaceBetween={10}
                slidesPerView={'auto'}
                pagination={{ clickable: true }}
                slidesOffsetAfter={10}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
                className={`${windowWidth < 1163 && windowWidth >= 768 ? '!pl-[71px]' : '!pl-6'
                  } pt-6 carousel-swiper `}
              >
                {clinics?.slice(0, 3).map(({ address, mobileNo, description, title, _id }: any) => (
                  <SwiperSlide
                    className={`${windowWidth >= 768 ? '!w-[392px] !mr-[24px]' : ' !w-[230px] !mr-[16px]'
                      }  `}
                    key={_id}
                  >
                    <div className="flex justify-center">
                      <div
                        className={`${windowWidth >= 768 ? 'w-[392px] !h-[268px]' : 'w-[230px] !h-[324px]'
                          } bg-off-white rounded-xl shadow-megaMenu p-4 md:p-6`}
                      >
                        <div className="w-full flex flex-col gap-2 md:gap-3">
                          <h2 className="text-grey-dark text-base md:text-[18px] font-semibold leading-[20px] md:leading-[24px]">
                            {title}
                          </h2>
                          <div className="w-full flex flex-col gap-3">
                            <div className="flex gap-1">
                              <div className="w-5 h-5">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="20"
                                  height="20"
                                  viewBox="0 0 20 20"
                                  fill="none"
                                >
                                  <mask
                                    id="mask0_2944_9805"
                                    style={{ maskType: 'alpha' }}
                                    maskUnits="userSpaceOnUse"
                                    x="0"
                                    y="0"
                                    width="20"
                                    height="20"
                                  >
                                    <rect width="20" height="20" fill="#D9D9D9" />
                                  </mask>
                                  <g mask="url(#mask0_2944_9805)">
                                    <path
                                      d="M9.99967 16.125C11.6941 14.5694 12.9511 13.1562 13.7705 11.8854C14.59 10.6146 14.9997 9.48611 14.9997 8.5C14.9997 6.98611 14.517 5.74653 13.5518 4.78125C12.5865 3.81597 11.4025 3.33333 9.99967 3.33333C8.5969 3.33333 7.41287 3.81597 6.44759 4.78125C5.48231 5.74653 4.99967 6.98611 4.99967 8.5C4.99967 9.48611 5.4094 10.6146 6.22884 11.8854C7.04829 13.1562 8.30523 14.5694 9.99967 16.125ZM9.99967 17.7708C9.80523 17.7708 9.61079 17.7361 9.41634 17.6667C9.2219 17.5972 9.04829 17.4931 8.89551 17.3542C7.99273 16.5208 7.19412 15.7083 6.49967 14.9167C5.80523 14.125 5.22537 13.3576 4.76009 12.6146C4.29481 11.8715 3.94065 11.1562 3.69759 10.4688C3.45454 9.78125 3.33301 9.125 3.33301 8.5C3.33301 6.41667 4.00315 4.75694 5.34342 3.52083C6.6837 2.28472 8.23579 1.66667 9.99967 1.66667C11.7636 1.66667 13.3156 2.28472 14.6559 3.52083C15.9962 4.75694 16.6663 6.41667 16.6663 8.5C16.6663 9.125 16.5448 9.78125 16.3018 10.4688C16.0587 11.1562 15.7045 11.8715 15.2393 12.6146C14.774 13.3576 14.1941 14.125 13.4997 14.9167C12.8052 15.7083 12.0066 16.5208 11.1038 17.3542C10.9511 17.4931 10.7775 17.5972 10.583 17.6667C10.3886 17.7361 10.1941 17.7708 9.99967 17.7708ZM9.99967 10C10.458 10 10.8504 9.83681 11.1768 9.51042C11.5031 9.18403 11.6663 8.79167 11.6663 8.33333C11.6663 7.875 11.5031 7.48264 11.1768 7.15625C10.8504 6.82986 10.458 6.66667 9.99967 6.66667C9.54134 6.66667 9.14898 6.82986 8.82259 7.15625C8.4962 7.48264 8.33301 7.875 8.33301 8.33333C8.33301 8.79167 8.4962 9.18403 8.82259 9.51042C9.14898 9.83681 9.54134 10 9.99967 10Z"
                                      fill="#6E6E6E"
                                    />
                                  </g>
                                </svg>
                              </div>
                              <p className="text-grey-10 text-sm leading-[20px]">{address}</p>
                            </div>
                            <div className="flex gap-1">
                              <div className="w-5 h-5">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="20"
                                  height="20"
                                  viewBox="0 0 20 20"
                                  fill="none"
                                >
                                  <mask
                                    id="mask0_2944_9810"
                                    style={{ maskType: 'alpha' }}
                                    maskUnits="userSpaceOnUse"
                                    x="0"
                                    y="0"
                                    width="20"
                                    height="20"
                                  >
                                    <rect width="20" height="20" fill="#D9D9D9" />
                                  </mask>
                                  <g mask="url(#mask0_2944_9810)">
                                    <path
                                      d="M16.625 17.5C14.8889 17.5 13.1736 17.1215 11.4792 16.3646C9.78472 15.6076 8.24306 14.5347 6.85417 13.1458C5.46528 11.7569 4.39236 10.2153 3.63542 8.52083C2.87847 6.82639 2.5 5.11111 2.5 3.375C2.5 3.125 2.58333 2.91667 2.75 2.75C2.91667 2.58333 3.125 2.5 3.375 2.5H6.75C6.94444 2.5 7.11806 2.56597 7.27083 2.69792C7.42361 2.82986 7.51389 2.98611 7.54167 3.16667L8.08333 6.08333C8.11111 6.30556 8.10417 6.49306 8.0625 6.64583C8.02083 6.79861 7.94444 6.93056 7.83333 7.04167L5.8125 9.08333C6.09028 9.59722 6.42014 10.0938 6.80208 10.5729C7.18403 11.0521 7.60417 11.5139 8.0625 11.9583C8.49306 12.3889 8.94444 12.7882 9.41667 13.1562C9.88889 13.5243 10.3889 13.8611 10.9167 14.1667L12.875 12.2083C13 12.0833 13.1632 11.9896 13.3646 11.9271C13.566 11.8646 13.7639 11.8472 13.9583 11.875L16.8333 12.4583C17.0278 12.5139 17.1875 12.6146 17.3125 12.7604C17.4375 12.9062 17.5 13.0694 17.5 13.25V16.625C17.5 16.875 17.4167 17.0833 17.25 17.25C17.0833 17.4167 16.875 17.5 16.625 17.5ZM5.02083 7.5L6.39583 6.125L6.04167 4.16667H4.1875C4.25694 4.73611 4.35417 5.29861 4.47917 5.85417C4.60417 6.40972 4.78472 6.95833 5.02083 7.5ZM12.4792 14.9583C13.0208 15.1944 13.5729 15.3819 14.1354 15.5208C14.6979 15.6597 15.2639 15.75 15.8333 15.7917V13.9583L13.875 13.5625L12.4792 14.9583Z"
                                      fill="#6E6E6E"
                                    />
                                  </g>
                                </svg>
                              </div>
                              <p className="text-grey-10 text-sm leading-[20px]">{mobileNo}</p>
                            </div>
                            <div className="flex gap-1">
                              <div className="w-5 h-5">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="20"
                                  height="20"
                                  viewBox="0 0 20 20"
                                  fill="none"
                                >
                                  <mask
                                    id="mask0_2944_9815"
                                    style={{ maskType: 'alpha' }}
                                    maskUnits="userSpaceOnUse"
                                    x="0"
                                    y="0"
                                    width="20"
                                    height="20"
                                  >
                                    <rect width="20" height="20" fill="#D9D9D9" />
                                  </mask>
                                  <g mask="url(#mask0_2944_9815)">
                                    <path
                                      d="M10.8337 9.66667V6.66666C10.8337 6.43055 10.7538 6.23264 10.5941 6.07291C10.4344 5.91319 10.2364 5.83333 10.0003 5.83333C9.76421 5.83333 9.5663 5.91319 9.40658 6.07291C9.24685 6.23264 9.16699 6.43055 9.16699 6.66666V9.97917C9.16699 10.0903 9.18783 10.1979 9.22949 10.3021C9.27116 10.4062 9.33366 10.5 9.41699 10.5833L12.167 13.3333C12.3198 13.4861 12.5142 13.5625 12.7503 13.5625C12.9864 13.5625 13.1809 13.4861 13.3337 13.3333C13.4864 13.1806 13.5628 12.9861 13.5628 12.75C13.5628 12.5139 13.4864 12.3194 13.3337 12.1667L10.8337 9.66667ZM10.0003 18.3333C8.84755 18.3333 7.76421 18.1146 6.75033 17.6771C5.73644 17.2396 4.85449 16.6458 4.10449 15.8958C3.35449 15.1458 2.76074 14.2639 2.32324 13.25C1.88574 12.2361 1.66699 11.1528 1.66699 10C1.66699 8.84722 1.88574 7.76389 2.32324 6.75C2.76074 5.73611 3.35449 4.85416 4.10449 4.10416C4.85449 3.35416 5.73644 2.76041 6.75033 2.32291C7.76421 1.88541 8.84755 1.66666 10.0003 1.66666C11.1531 1.66666 12.2364 1.88541 13.2503 2.32291C14.2642 2.76041 15.1462 3.35416 15.8962 4.10416C16.6462 4.85416 17.2399 5.73611 17.6774 6.75C18.1149 7.76389 18.3337 8.84722 18.3337 10C18.3337 11.1528 18.1149 12.2361 17.6774 13.25C17.2399 14.2639 16.6462 15.1458 15.8962 15.8958C15.1462 16.6458 14.2642 17.2396 13.2503 17.6771C12.2364 18.1146 11.1531 18.3333 10.0003 18.3333ZM10.0003 16.6667C11.8475 16.6667 13.4205 16.0174 14.7191 14.7187C16.0177 13.4201 16.667 11.8472 16.667 10C16.667 8.15278 16.0177 6.57986 14.7191 5.28125C13.4205 3.98264 11.8475 3.33333 10.0003 3.33333C8.1531 3.33333 6.58019 3.98264 5.28158 5.28125C3.98296 6.57986 3.33366 8.15278 3.33366 10C3.33366 11.8472 3.98296 13.4201 5.28158 14.7187C6.58019 16.0174 8.1531 16.6667 10.0003 16.6667Z"
                                      fill="#6E6E6E"
                                    />
                                  </g>
                                </svg>
                              </div>
                              <p className="text-grey-10 text-sm leading-[20px]">
                                <PortableText blocks={description} />
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            )}
            {clinics && windowWidth >= 1163 && (
              <div
                className={`flex gap-6 ${clinics.length >= 3 ? 'container mx-auto' : 'justify-end'
                  }`}
              >
                {clinics?.slice(0, 3).map(({ address, mobileNo, description, title, _id }: any) => (
                  <div className={`${windowWidth >= 768 ? 'w-1/3' : ' '}  `} key={_id}>
                    <div className="flex justify-center">
                      <div
                        className={`${windowWidth >= 768 ? 'w-full !h-[288px]' : 'w-[230px] !h-auto'
                          } bg-off-white rounded-xl shadow-megaMenu p-4 md:p-6`}
                      >
                        <div className="w-full flex flex-col gap-2 md:gap-3">
                          <h2 className="text-grey-dark text-base md:text-[18px] font-semibold leading-[20px] md:leading-[24px]">
                            {title}
                          </h2>
                          <div className="w-full flex flex-col gap-3">
                            <div className="flex gap-1">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="20"
                                height="20"
                                viewBox="0 0 20 20"
                                fill="none"
                              >
                                <mask
                                  id="mask0_2944_9805"
                                  style={{ maskType: 'alpha' }}
                                  maskUnits="userSpaceOnUse"
                                  x="0"
                                  y="0"
                                  width="20"
                                  height="20"
                                >
                                  <rect width="20" height="20" fill="#D9D9D9" />
                                </mask>
                                <g mask="url(#mask0_2944_9805)">
                                  <path
                                    d="M9.99967 16.125C11.6941 14.5694 12.9511 13.1562 13.7705 11.8854C14.59 10.6146 14.9997 9.48611 14.9997 8.5C14.9997 6.98611 14.517 5.74653 13.5518 4.78125C12.5865 3.81597 11.4025 3.33333 9.99967 3.33333C8.5969 3.33333 7.41287 3.81597 6.44759 4.78125C5.48231 5.74653 4.99967 6.98611 4.99967 8.5C4.99967 9.48611 5.4094 10.6146 6.22884 11.8854C7.04829 13.1562 8.30523 14.5694 9.99967 16.125ZM9.99967 17.7708C9.80523 17.7708 9.61079 17.7361 9.41634 17.6667C9.2219 17.5972 9.04829 17.4931 8.89551 17.3542C7.99273 16.5208 7.19412 15.7083 6.49967 14.9167C5.80523 14.125 5.22537 13.3576 4.76009 12.6146C4.29481 11.8715 3.94065 11.1562 3.69759 10.4688C3.45454 9.78125 3.33301 9.125 3.33301 8.5C3.33301 6.41667 4.00315 4.75694 5.34342 3.52083C6.6837 2.28472 8.23579 1.66667 9.99967 1.66667C11.7636 1.66667 13.3156 2.28472 14.6559 3.52083C15.9962 4.75694 16.6663 6.41667 16.6663 8.5C16.6663 9.125 16.5448 9.78125 16.3018 10.4688C16.0587 11.1562 15.7045 11.8715 15.2393 12.6146C14.774 13.3576 14.1941 14.125 13.4997 14.9167C12.8052 15.7083 12.0066 16.5208 11.1038 17.3542C10.9511 17.4931 10.7775 17.5972 10.583 17.6667C10.3886 17.7361 10.1941 17.7708 9.99967 17.7708ZM9.99967 10C10.458 10 10.8504 9.83681 11.1768 9.51042C11.5031 9.18403 11.6663 8.79167 11.6663 8.33333C11.6663 7.875 11.5031 7.48264 11.1768 7.15625C10.8504 6.82986 10.458 6.66667 9.99967 6.66667C9.54134 6.66667 9.14898 6.82986 8.82259 7.15625C8.4962 7.48264 8.33301 7.875 8.33301 8.33333C8.33301 8.79167 8.4962 9.18403 8.82259 9.51042C9.14898 9.83681 9.54134 10 9.99967 10Z"
                                    fill="#6E6E6E"
                                  />
                                </g>
                              </svg>
                              <p className="text-grey-10 text-sm leading-[20px]">{address}</p>
                            </div>
                            <div className="flex gap-1">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="20"
                                height="20"
                                viewBox="0 0 20 20"
                                fill="none"
                              >
                                <mask
                                  id="mask0_2944_9810"
                                  style={{ maskType: 'alpha' }}
                                  maskUnits="userSpaceOnUse"
                                  x="0"
                                  y="0"
                                  width="20"
                                  height="20"
                                >
                                  <rect width="20" height="20" fill="#D9D9D9" />
                                </mask>
                                <g mask="url(#mask0_2944_9810)">
                                  <path
                                    d="M16.625 17.5C14.8889 17.5 13.1736 17.1215 11.4792 16.3646C9.78472 15.6076 8.24306 14.5347 6.85417 13.1458C5.46528 11.7569 4.39236 10.2153 3.63542 8.52083C2.87847 6.82639 2.5 5.11111 2.5 3.375C2.5 3.125 2.58333 2.91667 2.75 2.75C2.91667 2.58333 3.125 2.5 3.375 2.5H6.75C6.94444 2.5 7.11806 2.56597 7.27083 2.69792C7.42361 2.82986 7.51389 2.98611 7.54167 3.16667L8.08333 6.08333C8.11111 6.30556 8.10417 6.49306 8.0625 6.64583C8.02083 6.79861 7.94444 6.93056 7.83333 7.04167L5.8125 9.08333C6.09028 9.59722 6.42014 10.0938 6.80208 10.5729C7.18403 11.0521 7.60417 11.5139 8.0625 11.9583C8.49306 12.3889 8.94444 12.7882 9.41667 13.1562C9.88889 13.5243 10.3889 13.8611 10.9167 14.1667L12.875 12.2083C13 12.0833 13.1632 11.9896 13.3646 11.9271C13.566 11.8646 13.7639 11.8472 13.9583 11.875L16.8333 12.4583C17.0278 12.5139 17.1875 12.6146 17.3125 12.7604C17.4375 12.9062 17.5 13.0694 17.5 13.25V16.625C17.5 16.875 17.4167 17.0833 17.25 17.25C17.0833 17.4167 16.875 17.5 16.625 17.5ZM5.02083 7.5L6.39583 6.125L6.04167 4.16667H4.1875C4.25694 4.73611 4.35417 5.29861 4.47917 5.85417C4.60417 6.40972 4.78472 6.95833 5.02083 7.5ZM12.4792 14.9583C13.0208 15.1944 13.5729 15.3819 14.1354 15.5208C14.6979 15.6597 15.2639 15.75 15.8333 15.7917V13.9583L13.875 13.5625L12.4792 14.9583Z"
                                    fill="#6E6E6E"
                                  />
                                </g>
                              </svg>
                              <p className="text-grey-10 text-sm leading-[20px]">{mobileNo}</p>
                            </div>
                            <div className="flex gap-1">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="20"
                                height="20"
                                viewBox="0 0 20 20"
                                fill="none"
                              >
                                <mask
                                  id="mask0_2944_9815"
                                  style={{ maskType: 'alpha' }}
                                  maskUnits="userSpaceOnUse"
                                  x="0"
                                  y="0"
                                  width="20"
                                  height="20"
                                >
                                  <rect width="20" height="20" fill="#D9D9D9" />
                                </mask>
                                <g mask="url(#mask0_2944_9815)">
                                  <path
                                    d="M10.8337 9.66667V6.66666C10.8337 6.43055 10.7538 6.23264 10.5941 6.07291C10.4344 5.91319 10.2364 5.83333 10.0003 5.83333C9.76421 5.83333 9.5663 5.91319 9.40658 6.07291C9.24685 6.23264 9.16699 6.43055 9.16699 6.66666V9.97917C9.16699 10.0903 9.18783 10.1979 9.22949 10.3021C9.27116 10.4062 9.33366 10.5 9.41699 10.5833L12.167 13.3333C12.3198 13.4861 12.5142 13.5625 12.7503 13.5625C12.9864 13.5625 13.1809 13.4861 13.3337 13.3333C13.4864 13.1806 13.5628 12.9861 13.5628 12.75C13.5628 12.5139 13.4864 12.3194 13.3337 12.1667L10.8337 9.66667ZM10.0003 18.3333C8.84755 18.3333 7.76421 18.1146 6.75033 17.6771C5.73644 17.2396 4.85449 16.6458 4.10449 15.8958C3.35449 15.1458 2.76074 14.2639 2.32324 13.25C1.88574 12.2361 1.66699 11.1528 1.66699 10C1.66699 8.84722 1.88574 7.76389 2.32324 6.75C2.76074 5.73611 3.35449 4.85416 4.10449 4.10416C4.85449 3.35416 5.73644 2.76041 6.75033 2.32291C7.76421 1.88541 8.84755 1.66666 10.0003 1.66666C11.1531 1.66666 12.2364 1.88541 13.2503 2.32291C14.2642 2.76041 15.1462 3.35416 15.8962 4.10416C16.6462 4.85416 17.2399 5.73611 17.6774 6.75C18.1149 7.76389 18.3337 8.84722 18.3337 10C18.3337 11.1528 18.1149 12.2361 17.6774 13.25C17.2399 14.2639 16.6462 15.1458 15.8962 15.8958C15.1462 16.6458 14.2642 17.2396 13.2503 17.6771C12.2364 18.1146 11.1531 18.3333 10.0003 18.3333ZM10.0003 16.6667C11.8475 16.6667 13.4205 16.0174 14.7191 14.7187C16.0177 13.4201 16.667 11.8472 16.667 10C16.667 8.15278 16.0177 6.57986 14.7191 5.28125C13.4205 3.98264 11.8475 3.33333 10.0003 3.33333C8.1531 3.33333 6.58019 3.98264 5.28158 5.28125C3.98296 6.57986 3.33366 8.15278 3.33366 10C3.33366 11.8472 3.98296 13.4201 5.28158 14.7187C6.58019 16.0174 8.1531 16.6667 10.0003 16.6667Z"
                                    fill="#6E6E6E"
                                  />
                                </g>
                              </svg>
                              <p className="text-grey-10 text-sm leading-[20px]">
                                <PortableText blocks={description} />
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
          {clinics?.length > 2 && (
            <div className="w-full flex justify-center">
              <div onClick={() => setShowModal(!showModal)}>
                <button className="w-full  bg-transparent text-base leading-[20px] text-[white] px-6 py-3 rounded-lg align-baseline font-semibold border-[2px] border-off-white flex justify-center items-center gap-2 ">
                  View All Location{' '}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    height="24"
                    viewBox="0 0 25 24"
                    fill="none"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M15.3925 6.89459C15.783 6.50406 16.4162 6.50405 16.8067 6.89457L21.2052 11.2929C21.3927 11.4804 21.4981 11.7348 21.4981 12C21.4981 12.2652 21.3927 12.5196 21.2052 12.7071L16.8067 17.1056C16.4162 17.4961 15.783 17.4961 15.3925 17.1056C15.002 16.7151 15.002 16.0819 15.3925 15.6914L18.0839 13H4.49805C3.94576 13 3.49805 12.5523 3.49805 12C3.49805 11.4477 3.94576 11 4.49805 11H18.0838L15.3925 8.3088C15.002 7.91829 15.002 7.28512 15.3925 6.89459Z"
                      fill="#FEFEFE"
                    />
                  </svg>
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

export default PracticeLocations
