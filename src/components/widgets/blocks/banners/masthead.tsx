import { SanityImage, SanityImg } from 'sanity-react-extra'
import { useWindowSize } from '@/lib/hooks'
import { urlForImage } from '@/studio/lib/image'
import Image from 'next/image'
import Link from 'next/link'
import style from '@/styles/Home.module.css'
import { Swiper, SwiperSlide } from 'swiper/react'
import EyeBrow from '../../shared/eyeBrew'
import { Autoplay, Navigation, Pagination } from 'swiper'
import 'swiper/css'
import 'swiper/css/pagination'
// import 'swiper/css/navigation'
import { LeftArrow } from '@/icons/leftArrow'
import { RightArrow } from '@/icons/rightArrow'

export interface MastheadProps {
  masterHead: BannersDetails[]
}

export interface BannersDetails {
  _id: string
  title: string
  tagline: string
  description: string
  cta: Link
  largeScreenBannerImage: any
  smallScreenBannerImage: any
}

export interface Link {
  text: string
  href: string
}

export const Masthead = ({ masterHead }: MastheadProps) => {
  console.log(masterHead, 'masterHead')
  const windowWidth = useWindowSize()?.width ?? 0
  return (
    <div className="relative">
      {masterHead.length > 1 && (
        <div className="w-full px-6 md:px-[71px] absolute top-[50%] transform -translate-y-1/2 z-50 hidden lg:block">
          <div className="[max-w-[1016px] mx-auto flex justify-between">
            <div className="w-[50px] h-[50px] rounded-full bg-off-white hover:bg-[E6E6E6] flex justify-center items-center relative cursor-pointer image-swiper-button-prev ">
              <LeftArrow />
            </div>
            <div className="w-[50px] h-[50px] rounded-full bg-off-white hover:bg-[E6E6E6] flex justify-center items-center cursor-pointer image-swiper-button-next">
              <RightArrow />
            </div>
          </div>
        </div>
      )}
      <Swiper
        slidesPerView={1}
        centeredSlides={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: true,
        }}
        speed={300}
        pagination={{
          clickable: true,
        }}
        navigation={{
          nextEl: '.image-swiper-button-next',
          prevEl: '.image-swiper-button-prev',
          disabledClass: 'swiper-button-disabled',
        }}
        modules={[Autoplay, Pagination, Navigation]}
        id="homepage_masterHead"
        className="mySwiper"
      >
        {masterHead.map(
          ({
            _id,
            title,
            tagline,
            description,
            cta,
            largeScreenBannerImage,
            smallScreenBannerImage,
          }) => (
            <SwiperSlide key={_id}>
              <section className="w-full px-6 lg:px-[175px] relative">
                <div className="absolute inset-0 hero_gradient_bg z-10" />

                {(largeScreenBannerImage || smallScreenBannerImage) && (
                  <video
                    src={windowWidth >= 768 ? largeScreenBannerImage : smallScreenBannerImage}
                    width={1366}
                    height={768}
                    className="absolute inset-0 object-cover h-full w-full md:object-right"
                    autoPlay
                    muted
                    loop
                    playsInline
                  >
                    {windowWidth >= 768 ? largeScreenBannerImage?.alt : smallScreenBannerImage?.alt}
                  </video>
                )}

                <div className="max-w-[1016px] mx-auto relative z-20 ">
                  <div
                    className={`${
                      windowWidth <= 900 ? 'max-w-[496px]' : 'max-w-[655px]'
                    } pt-[257px] pb-[96px] md:py-[180px] flex flex-col gap-4 md:gap-6`}
                  >
                    <div className="flex flex-col gap-2">
                      {title && (
                        <EyeBrow title={title} theme={'dark'} className="banner_textshadows" />
                      )}
                      <div className="max-w-[273px] md:max-w-[655px] relative">
                        {tagline && (
                          <h1
                            className={`${style.montserrat} text-[#FFF] text-[48px] md:text-[64px] font-bold leading-[48px] md:leading-[63px] tracking-[1.92px] md:tracking-[1.28px] uppercase whitespace-pre-line banner_textshadows`}
                          >
                            {tagline}
                          </h1>
                        )}
                        <div
                          className={`${windowWidth < 768 && 'top-[42px] right-[-39px]'} ${
                            windowWidth >= 768 && windowWidth <= 900 && 'top-[-63px] right-[2px]'
                          } ${
                            windowWidth > 900 && 'top-[0px] right-[-70px]'
                          } absolute max-w-[69px] max-h-[69px]`}
                          style={{
                            filter:
                              'drop-shadow(0px 0px 20px rgba(0, 0, 0, 0.10)) drop-shadow(0px 1px 4px rgba(0, 0, 0, 0.30)) drop-shadow(0px 2px 8px rgba(0, 0, 0, 0.20)',
                          }}
                        >
                          {/* {masterHead.length === 1 && (
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="72"
                              height="71"
                              viewBox="0 0 72 71"
                              fill="none"
                            >
                              <path
                                d="M26.1449 20.9441C26.0704 21.7533 25.7143 22.5109 25.1386 23.0855C24.5628 23.6601 23.8036 24.0154 22.9927 24.0897L10.7657 25.2042C10.1303 25.2619 9.48999 25.1794 8.8901 24.9626C8.29022 24.7458 7.74544 24.4001 7.29437 23.9498L2.26144 18.9274C2.14228 18.811 2.05916 18.6629 2.02195 18.5007C1.98473 18.3385 1.99501 18.169 2.05154 18.0125C2.10808 17.8559 2.20849 17.7189 2.34085 17.6177C2.4732 17.5164 2.6319 17.4553 2.79808 17.4415L15.1943 16.2981C16.0036 16.2228 16.761 15.8677 17.3357 15.2942C17.9105 14.7207 18.2663 13.9648 18.3417 13.1573L19.4972 0.791919C19.5118 0.627079 19.5733 0.469835 19.6744 0.338703C19.7756 0.207571 19.9122 0.10801 20.0681 0.0517424C20.2241 -0.00452528 20.3929 -0.0151568 20.5547 0.0210993C20.7165 0.0573555 20.8646 0.138991 20.9814 0.256392L26.0144 5.27876C26.4662 5.72942 26.8131 6.27385 27.0304 6.87337C27.2476 7.47288 27.3299 8.11279 27.2714 8.74762L26.1449 20.9441Z"
                                fill="white"
                              />
                              <path
                                d="M47.4593 48.5016C47.5338 47.6937 47.8894 46.9373 48.4642 46.3636C49.0391 45.79 49.7971 45.4352 50.6067 45.3608L62.8337 44.2464C63.4691 44.1887 64.1094 44.2712 64.7093 44.4879C65.3092 44.7047 65.854 45.0505 66.305 45.5007L71.3379 50.5231C71.4559 50.6388 71.5382 50.7859 71.5751 50.9468C71.6119 51.1077 71.6017 51.2759 71.5457 51.4312C71.4898 51.5866 71.3904 51.7226 71.2593 51.8234C71.1282 51.9241 70.971 51.9852 70.8061 51.9994L58.4051 53.1429C57.5968 53.2172 56.84 53.5714 56.266 54.1442C55.692 54.717 55.337 55.4722 55.2626 56.2788L54.1119 68.6538C54.0965 68.8177 54.0348 68.9738 53.934 69.104C53.8331 69.2342 53.6972 69.3331 53.5422 69.3893C53.3871 69.4454 53.2193 69.4564 53.0583 69.421C52.8972 69.3856 52.7495 69.3053 52.6325 69.1893L47.5947 64.1621C47.1444 63.7116 46.7988 63.1678 46.5824 62.5692C46.366 61.9706 46.2841 61.3318 46.3425 60.6981L47.4593 48.5016Z"
                                fill="white"
                              />
                              <path
                                d="M50.6071 24.0893C49.7968 24.0148 49.0382 23.6593 48.4632 23.0847C47.8882 22.51 47.5332 21.7525 47.4597 20.9437L46.3429 8.75687C46.2838 8.1224 46.3653 7.48272 46.5817 6.88322C46.7981 6.28373 47.1441 5.73911 47.5951 5.28801L52.6329 0.265644C52.7499 0.149726 52.8976 0.0693884 53.0587 0.0339936C53.2197 -0.00140122 53.3876 0.00960407 53.5426 0.0657243C53.6976 0.121845 53.8335 0.22077 53.9344 0.350977C54.0352 0.481184 54.0969 0.637311 54.1123 0.801169L55.2726 13.1617C55.3469 13.9688 55.7018 14.7247 56.2757 15.2982C56.8496 15.8718 57.6065 16.2271 58.4152 16.3025L70.8066 17.4411C70.9713 17.4565 71.1283 17.5184 71.259 17.6197C71.3898 17.721 71.4889 17.8573 71.5447 18.0128C71.6005 18.1683 71.6108 18.3364 71.5742 18.4975C71.5377 18.6586 71.4559 18.8059 71.3384 18.9222L66.3054 23.9446C65.8544 24.3948 65.3096 24.7406 64.7097 24.9574C64.1098 25.1742 63.4695 25.2566 62.8341 25.199L50.6071 24.0893Z"
                                fill="white"
                              />
                              <path
                                d="M23.0599 44.614L23.0596 44.6139L10.8327 43.4995L10.8324 43.4994C10.0877 43.4319 9.33723 43.5285 8.6341 43.7826C7.931 44.0367 7.29237 44.442 6.76349 44.9699C6.76346 44.9699 6.76343 44.9699 6.76341 44.9699L1.73055 49.9922L1.73055 49.9922L1.72849 49.9943C1.51212 50.2119 1.36197 50.4866 1.2958 50.7864C1.22963 51.0862 1.25021 51.3986 1.3551 51.6872C1.45999 51.9757 1.64482 52.2283 1.88775 52.4157C2.13068 52.6031 2.42181 52.7177 2.72723 52.7462L2.72779 52.7462L15.124 53.8945L15.1247 53.8945C15.7597 53.9528 16.354 54.2307 16.8048 54.6799C17.2555 55.129 17.5345 55.7209 17.5938 56.3531C17.5938 56.3532 17.5938 56.3534 17.5938 56.3536L18.7396 68.7278L18.7402 68.7336C18.7708 69.0385 18.8871 69.3283 19.0757 69.5698L19.6668 69.1082L19.0757 69.5698C19.2642 69.8112 19.5171 69.9943 19.805 70.0982L20.0596 69.3927L19.805 70.0982C20.093 70.2021 20.4044 70.2226 20.7035 70.1574C21.0026 70.0923 21.2773 69.944 21.4959 69.7295L21.4959 69.7295L21.5007 69.7248L26.5333 64.6979C27.0623 64.1701 27.4687 63.5326 27.7235 62.8304C27.9783 62.1282 28.0753 61.3787 28.0075 60.6349L28.0075 60.6346L26.8907 48.4333L26.8905 48.4318C26.7986 47.4488 26.3651 46.5291 25.6654 45.8319L25.136 46.3632L25.6654 45.8319C24.9657 45.1348 24.044 44.7041 23.0599 44.614Z"
                                stroke="white"
                                stroke-width="1.5"
                              />
                            </svg>
                          )} */}
                        </div>
                      </div>
                      {description && (
                        <p
                          style={{
                            textShadow:
                              '0px 1px 3px rgba(0, 0, 0, 0.40), 0px 0px 25px rgba(0, 0, 0, 0.25), 0px 1px 4px rgba(0, 0, 0, 0.25)',
                          }}
                          className="text-[#FBFBFB] text-[16px] md:text-[20px] leading-[20px] md:leading-[28px]"
                        >
                          {description}
                        </p>
                      )}
                    </div>
                    <div className="w-full flex">
                      <Link
                        style={{
                          background: 'linear-gradient(270deg, #D52328 43.23%, #9E1D20 100%)',
                        }}
                        href={cta.href ?? ''}
                        className="text-[#FBFBFB] text-[16px] font-semibold leading-[20px] px-6 py-3 flex gap-2 items-center rounded-[52px] group"
                      >
                        {cta.text}{' '}
                        <div className="transition-all duration-150 group-hover:translate-x-1">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                          >
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M14.8925 6.89459C15.283 6.50406 15.9162 6.50405 16.3067 6.89457L20.7052 11.2929C20.8927 11.4804 20.9981 11.7348 20.9981 12C20.9981 12.2652 20.8927 12.5196 20.7052 12.7071L16.3067 17.1056C15.9162 17.4961 15.283 17.4961 14.8925 17.1056C14.502 16.7151 14.502 16.0819 14.8925 15.6914L17.5839 13H3.99805C3.44576 13 2.99805 12.5523 2.99805 12C2.99805 11.4477 3.44576 11 3.99805 11H17.5838L14.8925 8.3088C14.502 7.91829 14.502 7.28512 14.8925 6.89459Z"
                              fill="#FEFEFE"
                            />
                          </svg>
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
              </section>
            </SwiperSlide>
          ),
        )}
      </Swiper>
    </div>
  )
}
