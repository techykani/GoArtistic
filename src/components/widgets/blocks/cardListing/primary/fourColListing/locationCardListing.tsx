import { useWindowSize } from '@/lib/hooks'
import { Swiper, SwiperSlide } from 'swiper/react'
import { ThreeColCard } from '../../../cards/primaryListingCards/threeColCard'
import Image from 'next/image'
import { urlForImage } from '@/studio/lib/image'
import Title from '@/components/widgets/shared/title'
import { PortableText } from '@/sanity'
import Link from 'next/link'

const LocationCardListing = ({ points, sliderPosition }: any) => {
    const windowWidth = useWindowSize()?.width ?? 0
    return (
        <>
            {points?.length !== 0 && (
                <Swiper
                    spaceBetween={24}
                    slidesPerView={'auto'}
                    pagination={{ clickable: true }}
                    slidesOffsetAfter={windowWidth >= 768 ? 71 : 24}
                    onSlideChange={(e) => console.log('slide change', e)}
                    onSwiper={(swiper) => console.log(swiper)}
                    className="grid grid-flow-col carousel-swiper"
                    style={{ paddingLeft: sliderPosition }}
                >
                    {points?.map(({ _id, title, locationImage, address, description, slug, mobileNo, link1, link2 }: any) => (
                        <SwiperSlide key={_id} className={`${windowWidth >= 768 ? '!w-[392px] ' : '!w-[288px] '} h-full `}>
                            <div className="h-full flex flex-col bg-off-white rounded-xl shadow-megaMenu ">
                                {locationImage && (
                                    <div className="w-full">
                                        <Image
                                            className="w-full aspect-[16/9] rounded-xl rounded-b-none object-cover"
                                            src={urlForImage(locationImage).url()}
                                            width={392}
                                            height={221}
                                            alt={'address'}
                                            quality={100}
                                            loading="lazy"
                                        />
                                    </div>
                                )}

                                <div className="p-4 md:p-6 h-full flex flex-col justify-between gap-6">
                                    <div className="flex flex-col gap-2">
                                        {title && <Title headingType="h5" theme='dark' tagline={title} />}
                                        <div className="flex flex-col gap-3">
                                            {address && (
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
                                                                id="mask0_93_10849"
                                                                style={{ maskType: 'alpha' }}
                                                                maskUnits="userSpaceOnUse"
                                                                x="0"
                                                                y="0"
                                                                width="20"
                                                                height="20"
                                                            >
                                                                <rect width="20" height="20" fill="#D9D9D9" />
                                                            </mask>
                                                            <g mask="url(#mask0_93_10849)">
                                                                <path
                                                                    d="M9.5 15.5692C10.8979 14.2169 11.9349 12.9884 12.6109 11.8836C13.287 10.7788 13.625 9.79776 13.625 8.94049C13.625 7.62441 13.2268 6.54679 12.4305 5.70763C11.6341 4.86848 10.6573 4.4489 9.5 4.4489C8.34271 4.4489 7.36589 4.86848 6.56953 5.70763C5.77318 6.54679 5.375 7.62441 5.375 8.94049C5.375 9.79776 5.71302 10.7788 6.38906 11.8836C7.0651 12.9884 8.10208 14.2169 9.5 15.5692ZM9.5 17C9.33958 17 9.17917 16.9698 9.01875 16.9094C8.85833 16.8491 8.7151 16.7585 8.58906 16.6378C7.84427 15.9133 7.18542 15.207 6.6125 14.5188C6.03958 13.8305 5.5612 13.1634 5.17734 12.5175C4.79349 11.8715 4.5013 11.2497 4.30078 10.652C4.10026 10.0543 4 9.48383 4 8.94049C4 7.12937 4.55286 5.6865 5.65859 4.6119C6.76432 3.5373 8.04479 3 9.5 3C10.9552 3 12.2357 3.5373 13.3414 4.6119C14.4471 5.6865 15 7.12937 15 8.94049C15 9.48383 14.8997 10.0543 14.6992 10.652C14.4987 11.2497 14.2065 11.8715 13.8227 12.5175C13.4388 13.1634 12.9604 13.8305 12.3875 14.5188C11.8146 15.207 11.1557 15.9133 10.4109 16.6378C10.2849 16.7585 10.1417 16.8491 9.98125 16.9094C9.82083 16.9698 9.66042 17 9.5 17ZM9.5 10.2445C9.87813 10.2445 10.2018 10.1026 10.4711 9.81889C10.7404 9.53514 10.875 9.19405 10.875 8.7956C10.875 8.39715 10.7404 8.05606 10.4711 7.77232C10.2018 7.48857 9.87813 7.3467 9.5 7.3467C9.12187 7.3467 8.79818 7.48857 8.52891 7.77232C8.25964 8.05606 8.125 8.39715 8.125 8.7956C8.125 9.19405 8.25964 9.53514 8.52891 9.81889C8.79818 10.1026 9.12187 10.2445 9.5 10.2445Z"
                                                                    fill="#6E6E6E"
                                                                />
                                                            </g>
                                                        </svg>
                                                    </div>
                                                    <div className="text-sm font-normal leading-[22px] text-grey-9">{address}</div>
                                                </div>
                                            )}
                                            {mobileNo && (
                                                <div className="w-full flex gap-1">
                                                    <div className="w-5 h-5">
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            width="20"
                                                            height="20"
                                                            viewBox="0 0 20 20"
                                                            fill="none"
                                                        >
                                                            <mask
                                                                id="mask0_115_23409"
                                                                style={{ maskType: 'alpha' }}
                                                                maskUnits="userSpaceOnUse"
                                                                x="0"
                                                                y="0"
                                                                width="20"
                                                                height="20"
                                                            >
                                                                <rect width="20" height="20" fill="#D9D9D9" />
                                                            </mask>
                                                            <g mask="url(#mask0_115_23409)">
                                                                <path
                                                                    d="M16.625 17.5C14.8889 17.5 13.1736 17.1215 11.4792 16.3646C9.78472 15.6076 8.24306 14.5347 6.85417 13.1458C5.46528 11.7569 4.39236 10.2153 3.63542 8.52083C2.87847 6.82639 2.5 5.11111 2.5 3.375C2.5 3.125 2.58333 2.91667 2.75 2.75C2.91667 2.58333 3.125 2.5 3.375 2.5H6.75C6.94444 2.5 7.11806 2.56597 7.27083 2.69792C7.42361 2.82986 7.51389 2.98611 7.54167 3.16667L8.08333 6.08333C8.11111 6.30556 8.10417 6.49306 8.0625 6.64583C8.02083 6.79861 7.94444 6.93056 7.83333 7.04167L5.8125 9.08333C6.09028 9.59722 6.42014 10.0938 6.80208 10.5729C7.18403 11.0521 7.60417 11.5139 8.0625 11.9583C8.49306 12.3889 8.94444 12.7882 9.41667 13.1562C9.88889 13.5243 10.3889 13.8611 10.9167 14.1667L12.875 12.2083C13 12.0833 13.1632 11.9896 13.3646 11.9271C13.566 11.8646 13.7639 11.8472 13.9583 11.875L16.8333 12.4583C17.0278 12.5139 17.1875 12.6146 17.3125 12.7604C17.4375 12.9062 17.5 13.0694 17.5 13.25V16.625C17.5 16.875 17.4167 17.0833 17.25 17.25C17.0833 17.4167 16.875 17.5 16.625 17.5ZM5.02083 7.5L6.39583 6.125L6.04167 4.16667H4.1875C4.25694 4.73611 4.35417 5.29861 4.47917 5.85417C4.60417 6.40972 4.78472 6.95833 5.02083 7.5ZM12.4792 14.9583C13.0208 15.1944 13.5729 15.3819 14.1354 15.5208C14.6979 15.6597 15.2639 15.75 15.8333 15.7917V13.9583L13.875 13.5625L12.4792 14.9583Z"
                                                                    fill="#5A5A5A"
                                                                />
                                                            </g>
                                                        </svg>
                                                    </div>
                                                    <p className="text-grey-9 text-[14px] leading-[20px]">{mobileNo}</p>
                                                </div>
                                            )}
                                            {description && (
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
                                                                id="mask0_93_10874"
                                                                style={{ maskType: 'alpha' }}
                                                                maskUnits="userSpaceOnUse"
                                                                x="0"
                                                                y="0"
                                                                width="20"
                                                                height="20"
                                                            >
                                                                <rect width="20" height="20" fill="#D9D9D9" />
                                                            </mask>
                                                            <g mask="url(#mask0_93_10874)">
                                                                <path
                                                                    d="M10.15 9.24V6.9C10.15 6.71583 10.0877 6.56146 9.96313 6.43687C9.83854 6.31229 9.68417 6.25 9.5 6.25C9.31583 6.25 9.16146 6.31229 9.03688 6.43687C8.91229 6.56146 8.85 6.71583 8.85 6.9V9.48375C8.85 9.57042 8.86625 9.65438 8.89875 9.73562C8.93125 9.81687 8.98 9.89 9.045 9.955L11.19 12.1C11.3092 12.2192 11.4608 12.2788 11.645 12.2788C11.8292 12.2788 11.9808 12.2192 12.1 12.1C12.2192 11.9808 12.2788 11.8292 12.2788 11.645C12.2788 11.4608 12.2192 11.3092 12.1 11.19L10.15 9.24ZM9.5 16C8.60083 16 7.75583 15.8294 6.965 15.4881C6.17417 15.1469 5.48625 14.6838 4.90125 14.0988C4.31625 13.5138 3.85313 12.8258 3.51187 12.035C3.17062 11.2442 3 10.3992 3 9.5C3 8.60083 3.17062 7.75583 3.51187 6.965C3.85313 6.17417 4.31625 5.48625 4.90125 4.90125C5.48625 4.31625 6.17417 3.85313 6.965 3.51187C7.75583 3.17062 8.60083 3 9.5 3C10.3992 3 11.2442 3.17062 12.035 3.51187C12.8258 3.85313 13.5138 4.31625 14.0988 4.90125C14.6838 5.48625 15.1469 6.17417 15.4881 6.965C15.8294 7.75583 16 8.60083 16 9.5C16 10.3992 15.8294 11.2442 15.4881 12.035C15.1469 12.8258 14.6838 13.5138 14.0988 14.0988C13.5138 14.6838 12.8258 15.1469 12.035 15.4881C11.2442 15.8294 10.3992 16 9.5 16ZM9.5 14.7C10.9408 14.7 12.1677 14.1935 13.1806 13.1806C14.1935 12.1677 14.7 10.9408 14.7 9.5C14.7 8.05917 14.1935 6.83229 13.1806 5.81938C12.1677 4.80646 10.9408 4.3 9.5 4.3C8.05917 4.3 6.83229 4.80646 5.81938 5.81938C4.80646 6.83229 4.3 8.05917 4.3 9.5C4.3 10.9408 4.80646 12.1677 5.81938 13.1806C6.83229 14.1935 8.05917 14.7 9.5 14.7Z"
                                                                    fill="#6E6E6E"
                                                                />
                                                            </g>
                                                        </svg>
                                                    </div>
                                                    <div className="text-sm font-normal leading-[22px] text-grey-9">
                                                        <PortableText blocks={description} />
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                    </div>

                                    {link1?.text?.length > 0 || link2?.text?.length > 0 ? <div className="flex flex-col xl:flex-row gap-3 md:gap-4">
                                        {link1?.text && (
                                            <Link
                                                href={`/clinics/${slug?.current ?? ''}`}
                                                className="w-full h-[44px] inline-block bg-grey-darkest text-base leading-[20px] text-[white] hover:bg-[#004E89] hover:border-[#004E89] px-6 py-3 rounded-lg align-baseline font-semibold text-center border-[2px] border-grey-darkest"
                                            >
                                                {link1?.text}
                                            </Link>

                                        )}
                                        {link2?.text && (
                                            <Link
                                                href={`tel:${mobileNo}`}
                                                className="w-full h-[44px] inline-block bg-[white] text-base leading-[20px] text-grey-darkest px-6 py-3 rounded-lg align-baseline font-semibold  border-[2px] border-grey-darkest hover:bg-[#E6E6E6] hover:text-grey-darkest text-center hover:border-[#E6E6E6]"
                                            >
                                                {link2?.text}
                                            </Link>
                                        )}
                                    </div> : <></>}

                                </div>

                            </div>
                        </SwiperSlide >

                    ))}
                </Swiper>
            )}
        </>
    )
}

export default LocationCardListing