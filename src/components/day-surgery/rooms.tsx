import Image from "next/image";
import Title from "../widgets/shared/title";
import style from '@/styles/Home.module.css';
import ReactPortableText from "../widgets/shared/reactPortableText";
import { urlForImage } from "@/studio/lib/image";
import SwipeRooms from "./swipeRooms";
import { useEffect, useRef, useState } from "react";
import { LeftArrow } from "@/icons/leftArrow";
import { RightArrow } from "@/icons/rightArrow";
import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
// import 'swiper/css/pagination';



const Rooms = ({ title, description, roomImages, roomName, amenitiesAndServices, priceRange }: any) => {
  const [showPopup, setShowPopup] = useState(false);
  const popupRef = useRef<HTMLDivElement>(null); // Define the type as HTMLDivElement
  const [prevEl, setPrevEl] = useState<HTMLElement | null>(null)
  const [nextEl, setNextEl] = useState<HTMLElement | null>(null)

  useEffect(() => {
    // Function to close popup when clicking outside
    const handleClickOutside = (event: MouseEvent) => {
      if (popupRef.current && !popupRef.current.contains(event.target as Node)) {
        closePopup();
      }
    };

    // Attach event listener
    document.addEventListener('mousedown', handleClickOutside);

    // Clean up the event listener
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleImageClick = () => {

    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
  };
  return (
    <div className="bg-[#FEFEFE] pt-12 pb-[36px] md:py-20 flex flex-col gap-4 md:gap-[25px]">
      {/* title */}
      <div className="px-6 md:px-[71px]">
        <div className="max-w-[1016px] mx-auto flex flex-col gap-2">
          <Title tagline={title} headingType="h2" theme="light" />
          <div className="mt-[-24px]"><ReactPortableText content={description} /></div>
        </div>
      </div>
      {/* rooms images */}
      <div className="px-6 md:px-[71px] hidden md:block">
        <div className="max-w-[1016px] mx-auto flex gap-6">
          <div className="w-2/3 h-[569px] max-h-[569px] bg-slate-400 rounded-2xl overflow-hidden">
            <Image onClick={handleImageClick} src={urlForImage(roomImages[0]).url()} alt="" width={703} height={569} className="object-cover w-full h-full " />
          </div>
          <div className="w-1/3 h-[569px] max-h-[569px]  flex flex-col gap-6">
            <div className="w-full h-full rounded-2xl bg-slate-400 overflow-hidden">
              <Image onClick={handleImageClick} src={urlForImage(roomImages[1]).url()} alt="" width={288} height={274} className="object-cover w-full h-full" />
            </div>
            <div className="w-full h-full rounded-2xl bg-slate-400  overflow-hidden">
              <Image onClick={handleImageClick} src={urlForImage(roomImages[2]).url()} alt="" width={288} height={274} className="object-cover w-full h-full " />
            </div>
          </div>
        </div>
      </div>
      <div className="w-full overflow-hidden md:hidden h-[250px]">
        <SwipeRooms images={roomImages} />
      </div>
      {showPopup && (
        <div style={{
          background: "rgba(19, 19, 19, 0.90)"
        }} className={`fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center z-[9000]`}>
          <button className="absolute top-[28px] right-[71px] text-gray-500" onClick={closePopup}>
            <svg xmlns="http://www.w3.org/2000/svg" width="43" height="43" viewBox="0 0 43 43" fill="none">
              <path d="M32.25 10.75L10.75 32.25M10.75 10.75L32.25 32.25" stroke="#FEFEFE" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </button>
          <div className="w-full md:px-[71px] absolute top-[50%] transform -translate-y-1/2 z-50">
            <div className="container mx-auto flex justify-between">
              <button
                aria-label="arrow-left-previous-slide"
                className="w-[62px] h-[62px] rounded-full border border-off-white flex justify-center items-center relative"
                ref={(node) => setPrevEl(node)}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 44 44" fill="none">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M26.963 13.3703C26.2471 12.6543 25.0863 12.6543 24.3703 13.3703L17.037 20.7036C16.321 21.4196 16.321 22.5804 17.037 23.2964L24.3703 30.6297C25.0863 31.3457 26.2471 31.3457 26.963 30.6297C27.679 29.9137 27.679 28.7529 26.963 28.037L20.9261 22L26.963 15.963C27.679 15.2471 27.679 14.0863 26.963 13.3703Z" fill="#FEFEFE" />
                </svg>
              </button>
              <button
                aria-label="arrow-right-next-slide"
                className="w-[62px] h-[62px] rounded-full border border-off-white flex justify-center items-center"
                ref={(node) => setNextEl(node)}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 44 44" fill="none">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M17.037 13.3703C17.7529 12.6543 18.9137 12.6543 19.6297 13.3703L26.963 20.7036C27.679 21.4196 27.679 22.5804 26.963 23.2964L19.6297 30.6297C18.9137 31.3457 17.7529 31.3457 17.037 30.6297C16.321 29.9137 16.321 28.7529 17.037 28.037L23.0739 22L17.037 15.963C16.321 15.2471 16.321 14.0863 17.037 13.3703Z" fill="#FEFEFE" />
                </svg>
              </button>
            </div>
          </div>
          <div className={`relative bg-white max-w-[46%] max-h-[80%] overflow-hidden`}>
            <div className={'relative z-20'}>
              <div className="min-h-[250px] relative">
                <Swiper
                  spaceBetween={24}
                  slidesPerView={1}
                  pagination={{ clickable: true }}
                  navigation={{
                    prevEl,
                    nextEl,
                  }}
                  modules={[Navigation]}
                  slidesOffsetAfter={0}
                  onSlideChange={() => console.log('slide change')}
                  onSwiper={(swiper) => console.log(swiper)}
                  className={`carousel-swiper`}
                >
                  {roomImages.map((image: any, i: number) => (
                    <SwiperSlide
                      key={1}
                      className="bg-slate-300"
                    >
                      <Image src={urlForImage(image).url()} alt="" width={703} height={569} className="object-cover w-full h-full" />
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>
          </div>
        </div>
      )
      }
      <div className="px-6 md:px-[71px]">
        <div className="max-w-[1016px] mx-auto flex flex-col gap-5 md:gap-[36px]">
          <div className="w-full flex flex-col md:flex-row md:justify-between gap-[20px] md:gap-0">
            <p className={`text-[#3C3C3C] ${style.montserrat} text-[26px] font-semibold leading-[32px]`}>{roomName}</p>
            <div className="flex gap-4 items-center">
              <p className="text-[#6E6E6E] font-[16px] leading-[24px]">From</p>
              <div className="text-[#6E6E6E] font-[16px] leading-[24px] flex gap-2 items-center">
                <span className={`text-[#3C3C3C] ${style.montserrat} text-[26px] font-semibold leading-[32px]`} >${priceRange.minPrice}</span>
                <span>-</span>
                <span className={`text-[#3C3C3C] ${style.montserrat} text-[26px] font-semibold leading-[32px]`}>${priceRange.maxPrice}</span></div>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row  gap-5 md:gap-[100px]">
            {amenitiesAndServices.map(({ title, amenities }: any, index: number) => (
              <div key={index} className="w-full max-w-[316px] flex flex-col gap-4">
                <p className="text-[#3C3C3C] text-[16px] font-semibold leading-[20px]">{title}</p>
                <div className="grid grid-cols-1 lg:grid-rows-3 lg:grid-flow-col gap-x-[38px] gap-y-3 md:gap-y-5">
                  {
                    amenities.map(({ title, svgCode }: any) => (
                      <div key={title} className="flex gap-2 items-center">
                        <div className="w-6 h-6">
                          <svg width="24" height="24" viewBox="0 0 24 24" dangerouslySetInnerHTML={{ __html: svgCode }} />
                        </div>
                        <p className="text-[#5A5A5A] text-[16px] leading-[24px] whitespace-nowrap">{title}</p>
                      </div>
                    ))
                  }
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div >
  )
}

export default Rooms