import FourColCardListing from "@/components/widgets/blocks/cardListing/primary/fourColListing"
import LocationCardListing from "@/components/widgets/blocks/cardListing/primary/fourColListing/locationCardListing"
import PrimarySectionHorizontal from "@/components/widgets/blocks/sections/primarySectionHorizontal"
import { useWindowSize } from "@/lib/hooks"
import { imageUrlBuilder } from "@/sanity"
import { urlForImage } from "@/studio/lib/image"
import Image from "next/image"
import Link from "next/link"
import { useState, useRef, useEffect } from "react"
import { SanityImg } from "sanity-react-extra"
import style from '@/styles/Home.module.css'
import { Swiper, SwiperSlide } from "swiper/react"
import Title from "../widgets/shared/title"
import BtnWithArrow from "../widgets/shared/buttons/button/btnWithArrow"




export const Reviews = ({
  tagline,
  studentReview,
  cta,
  rating,
}: any) => {

  const [sliderPosition, setSliderPosition] = useState(0)
  const headingRef = useRef<HTMLHeadingElement>(null)
  const windowWidth = useWindowSize()?.width ?? 0
  useEffect(() => {
    if (headingRef.current) {
      const rect = headingRef.current.getBoundingClientRect()
      const leftPosition = rect.left
      setSliderPosition(leftPosition)
    }
  }, [windowWidth]);

  const renderSVGs = () => {
    const svgs = [];
    for (let i = 0; i < rating?.ratingNumber; i++) {
      svgs.push(<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path d="M12.2089 3.60489C12.9443 2.12478 15.0557 2.12478 15.7911 3.60489L17.6661 7.37869C17.9573 7.96481 18.5169 8.37137 19.1644 8.46721L23.3329 9.08429C24.9678 9.32632 25.6202 11.3344 24.4398 12.4912L21.4301 15.4406C20.9627 15.8987 20.749 16.5565 20.8579 17.2019L21.5591 21.357C21.8342 22.9867 20.126 24.2278 18.6611 23.4626L14.926 21.5117C14.3458 21.2086 13.6542 21.2086 13.074 21.5117L9.33894 23.4626C7.874 24.2278 6.16584 22.9867 6.44088 21.357L7.14213 17.2019C7.25105 16.5565 7.03731 15.8987 6.56986 15.4406L3.56018 12.4912C2.37976 11.3344 3.03222 9.32632 4.66714 9.08429L8.83565 8.46721C9.48308 8.37137 10.0427 7.96481 10.3339 7.37868L12.2089 3.60489Z" fill="#00CC66" />
      </svg>);
    }
    return svgs;
  };


  const renderSVGs2 = (num: number) => {
    const svgs2 = [];
    for (let i = 0; i < num; i++) {
      svgs2.push(<svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21" fill="none">
        <path d="M9.10445 2.05244C9.47215 1.31239 10.5279 1.31239 10.8956 2.05245L12.7183 5.72096C12.8639 6.01403 13.1437 6.2173 13.4674 6.26522L17.5196 6.8651C18.3371 6.98611 18.6633 7.99014 18.0731 8.56854L15.1474 11.4357C14.9136 11.6647 14.8068 11.9936 14.8612 12.3163L15.5429 16.3556C15.6804 17.1704 14.8264 17.7909 14.0939 17.4084L10.463 15.5118C10.1729 15.3603 9.82708 15.3603 9.53702 15.5118L5.90611 17.4084C5.17364 17.7909 4.31956 17.1704 4.45708 16.3556L5.13877 12.3163C5.19323 11.9936 5.08636 11.6647 4.85264 11.4357L1.92692 8.56853C1.33671 7.99014 1.66294 6.98611 2.4804 6.8651L6.53262 6.26522C6.85634 6.2173 7.13612 6.01403 7.28173 5.72096L9.10445 2.05244Z" fill="#FEFEFE" />
      </svg>);
    }
    return svgs2;
  };


  return (
    <div className="bg-[#F1F6FF] py-12 md:py-20 flex flex-col gap-8 md:gap-12">
      <div className="px-6 md:px-[71px]">
        <div ref={headingRef} className="container mx-auto flex flex-col gap-[32px] md:gap-[36px]">
          <div className="w-full flex flex-col md:flex-row gap-6 md:justify-between">
            <div className="flex flex-col gap-2">
              {tagline && <Title tagline={tagline} headingType={"h2"} theme="light" />}
              {cta?.text && (
                <div className="w-full flex">
                  <BtnWithArrow
                    link={cta}
                    target={"_self"}
                    rel=""
                    btnType={"tertiary"}
                    arrowVisibility={true}
                    theme={"light"}
                    customStyle={''}
                    size={"medium"}
                    arrowColor={"black"}
                    gtag_event="select_content"
                    gtag_content_name={tagline}
                    gtag_content_type={""}
                    gtag_cta_button={cta?.text}
                  />
                </div>
              )}
            </div>
            <div style={{ boxShadow: "0px 8px 32px 0px rgba(0, 0, 0, 0.04)" }} className="bg-[#0957CB] w-full max-w-[321px] py-4 px-6 flex gap-4 rounded-2xl">
              <p className={`text-[#FEFEFE] text-[64px] font-bold leading-[48px] tracking-[1.28px] ${style.montserrat}`}>{rating?.ratingNumber}</p>
              <div className="flex flex-col gap-1">
                <p className="text-[#FEFEFE] font-semibold leading-[20px] whitespace-nowrap">{rating?.caption}</p>
                <div className="flex gap-[2px]">
                  {renderSVGs()}
                </div>
              </div>
            </div>
          </div>
          {windowWidth >= 1050 && (
            <div className="grid grid-cols-3 gap-6">
              {studentReview?.map((point: any, i: any) => (
                <Link href={point?.cta?.href ?? ""} key={i} style={{ background: "linear-gradient(160deg, #0957CB 1.55%, #00D494 100%)", boxShadow: "0px 12px 48px 0px rgba(0, 0, 0, 0.08)" }}
                  className="w-full h-full min-h-[483px] md:min-h-[550px] rounded-2xl   flex flex-col justify-between"
                >
                  <div className="flex flex-col gap-6 md:gap-[44px] px-[44px] pt-[50px]  relative">
                    <div className="absolute top-[38px] left-[36px]">
                      <svg xmlns="http://www.w3.org/2000/svg" width="19" height="16" viewBox="0 0 19 16" fill="none">
                        <path d="M0 10.9871C0 8.60658 0.534944 6.45494 1.60483 4.53219C2.72123 2.56366 4.18651 1.05293 6.00067 0L7.3264 2.12876C6.11696 2.81545 5.16337 3.79971 4.46562 5.08155C3.76786 6.36338 3.41899 7.75966 3.41899 9.27039C4.39584 9.27039 5.20988 9.59084 5.86112 10.2318C6.55887 10.8727 6.90775 11.6738 6.90775 12.6352C6.90775 13.5966 6.60539 14.3977 6.00067 15.0386C5.39595 15.6795 4.6982 16 3.90741 16C2.83753 16 1.90719 15.5193 1.1164 14.5579C0.372135 13.5508 0 12.3605 0 10.9871ZM11.5827 10.9871C11.5827 8.60658 12.1176 6.45494 13.1875 4.53219C14.3039 2.56366 15.7692 1.05293 17.5834 0L18.9091 2.12876C17.6997 2.81545 16.7461 3.79971 16.0483 5.08155C15.3506 6.36338 15.0017 7.75966 15.0017 9.27039C15.9785 9.27039 16.7926 9.59084 17.4438 10.2318C18.095 10.8727 18.4207 11.6738 18.4207 12.6352C18.4207 13.5966 18.1183 14.3977 17.5136 15.0386C16.9554 15.6795 16.2576 16 15.4203 16C14.3504 16 13.4434 15.5193 12.6991 14.5579C11.9548 13.5508 11.5827 12.3605 11.5827 10.9871Z" fill="white" />
                      </svg>
                    </div>
                    <div className="flex gap-[2px] justify-center">
                      {renderSVGs2(point?.ratingNumber)}
                    </div>
                    {point?.caption && <p className="text-[#FEFEFE] text-center text-[16px] md:text-[20px] font-medium leading-[22px] md:leading-[27px]">{point?.caption}</p>}
                    <p className="text-[#FEFEFE] text-center text-[16px] md:text-[18px] font-semibold leading-[20px] md:leading-[22px]">{point?.studentName}</p>
                    <div className="absolute bottom-[-25px] right-[36px]">
                      <svg xmlns="http://www.w3.org/2000/svg" width="19" height="16" viewBox="0 0 19 16" fill="none">
                        <path d="M18.9092 5.01288C18.9092 7.39342 18.3742 9.54506 17.3043 11.4678C16.1879 13.4363 14.7227 14.9471 12.9085 16L11.5828 13.8712C12.7922 13.1845 13.7458 12.2003 14.4436 10.9185C15.1413 9.63662 15.4902 8.24034 15.4902 6.72961C14.5133 6.72961 13.6993 6.40916 13.0481 5.76824C12.3503 5.12732 12.0014 4.32618 12.0014 3.36481C12.0014 2.40343 12.3038 1.60229 12.9085 0.961373C13.5132 0.320457 14.211 0 15.0018 0C16.0717 0 17.002 0.480686 17.7928 1.44206C18.537 2.44921 18.9092 3.63948 18.9092 5.01288ZM7.32649 5.01288C7.32649 7.39342 6.79155 9.54506 5.72166 11.4678C4.60526 13.4363 3.13997 14.9471 1.32582 16L8.96454e-05 13.8712C1.20953 13.1845 2.16312 12.2003 2.86087 10.9185C3.55863 9.63662 3.9075 8.24034 3.9075 6.72961C2.93065 6.72961 2.1166 6.40916 1.46537 5.76824C0.814133 5.12732 0.488516 4.32618 0.488516 3.36481C0.488516 2.40343 0.790874 1.60229 1.39559 0.961373C1.9538 0.320457 2.65155 0 3.48885 0C4.55874 0 5.46582 0.480686 6.21009 1.44206C6.95435 2.44921 7.32649 3.63948 7.32649 5.01288Z" fill="white" />
                      </svg>
                    </div>
                  </div>

                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
      {windowWidth < 1050 && (
        <div className="">
          <Swiper
            spaceBetween={24}
            slidesPerView={'auto'}
            pagination={{ clickable: true }}
            slidesOffsetAfter={windowWidth >= 768 ? 71 : 24}
            onSlideChange={(e) => console.log('slide change', e)}
            onSwiper={(swiper) => console.log(swiper)}
            className="carousel-swiper grid grid-flow-col"
            style={{ paddingLeft: sliderPosition }}
          >
            {studentReview?.map((point: any) => (
              <SwiperSlide key={point?._id} className="!w-[248px]">
                <Link href={point?.cta?.href ?? ""} style={{ background: "linear-gradient(160deg, #0957CB 1.55%, #00D494 100%)", boxShadow: "0px 12px 48px 0px rgba(0, 0, 0, 0.08)" }}
                  className="w-full h-full  rounded-2xl   flex flex-col justify-between gap-10 md:gap-0"
                >
                  <div className="flex flex-col gap-6 md:gap-[44px] px-[44px] pt-[50px] pb-[30px] md:py-[50px]  relative">
                    <div className="absolute top-[38px] left-[36px]">
                      <svg xmlns="http://www.w3.org/2000/svg" width="19" height="16" viewBox="0 0 19 16" fill="none">
                        <path d="M0 10.9871C0 8.60658 0.534944 6.45494 1.60483 4.53219C2.72123 2.56366 4.18651 1.05293 6.00067 0L7.3264 2.12876C6.11696 2.81545 5.16337 3.79971 4.46562 5.08155C3.76786 6.36338 3.41899 7.75966 3.41899 9.27039C4.39584 9.27039 5.20988 9.59084 5.86112 10.2318C6.55887 10.8727 6.90775 11.6738 6.90775 12.6352C6.90775 13.5966 6.60539 14.3977 6.00067 15.0386C5.39595 15.6795 4.6982 16 3.90741 16C2.83753 16 1.90719 15.5193 1.1164 14.5579C0.372135 13.5508 0 12.3605 0 10.9871ZM11.5827 10.9871C11.5827 8.60658 12.1176 6.45494 13.1875 4.53219C14.3039 2.56366 15.7692 1.05293 17.5834 0L18.9091 2.12876C17.6997 2.81545 16.7461 3.79971 16.0483 5.08155C15.3506 6.36338 15.0017 7.75966 15.0017 9.27039C15.9785 9.27039 16.7926 9.59084 17.4438 10.2318C18.095 10.8727 18.4207 11.6738 18.4207 12.6352C18.4207 13.5966 18.1183 14.3977 17.5136 15.0386C16.9554 15.6795 16.2576 16 15.4203 16C14.3504 16 13.4434 15.5193 12.6991 14.5579C11.9548 13.5508 11.5827 12.3605 11.5827 10.9871Z" fill="white" />
                      </svg>
                    </div>
                    <div className="flex gap-[2px] justify-center">
                      {renderSVGs2(point?.ratingNumber)}
                    </div>
                    {point?.caption && <p className="text-[#FEFEFE] text-center text-[16px] md:text-[20px] font-medium leading-[22px] md:leading-[27px]">{point?.caption}</p>}
                    <p className="text-[#FEFEFE] text-center text-[16px] md:text-[18px] font-semibold leading-[20px] md:leading-[22px]">{point?.studentName}</p>
                    <div className="absolute bottom-[25px] md:bottom-[25px] right-[36px]">
                      <svg xmlns="http://www.w3.org/2000/svg" width="19" height="16" viewBox="0 0 19 16" fill="none">
                        <path d="M18.9092 5.01288C18.9092 7.39342 18.3742 9.54506 17.3043 11.4678C16.1879 13.4363 14.7227 14.9471 12.9085 16L11.5828 13.8712C12.7922 13.1845 13.7458 12.2003 14.4436 10.9185C15.1413 9.63662 15.4902 8.24034 15.4902 6.72961C14.5133 6.72961 13.6993 6.40916 13.0481 5.76824C12.3503 5.12732 12.0014 4.32618 12.0014 3.36481C12.0014 2.40343 12.3038 1.60229 12.9085 0.961373C13.5132 0.320457 14.211 0 15.0018 0C16.0717 0 17.002 0.480686 17.7928 1.44206C18.537 2.44921 18.9092 3.63948 18.9092 5.01288ZM7.32649 5.01288C7.32649 7.39342 6.79155 9.54506 5.72166 11.4678C4.60526 13.4363 3.13997 14.9471 1.32582 16L8.96454e-05 13.8712C1.20953 13.1845 2.16312 12.2003 2.86087 10.9185C3.55863 9.63662 3.9075 8.24034 3.9075 6.72961C2.93065 6.72961 2.1166 6.40916 1.46537 5.76824C0.814133 5.12732 0.488516 4.32618 0.488516 3.36481C0.488516 2.40343 0.790874 1.60229 1.39559 0.961373C1.9538 0.320457 2.65155 0 3.48885 0C4.55874 0 5.46582 0.480686 6.21009 1.44206C6.95435 2.44921 7.32649 3.63948 7.32649 5.01288Z" fill="white" />
                      </svg>
                    </div>
                  </div>

                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      )}
    </div>
  )
}
