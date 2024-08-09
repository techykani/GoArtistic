import { LeftArrow } from "@/icons/leftArrow"
import { RightArrow } from "@/icons/rightArrow"
import { urlForImage } from "@/studio/lib/image"
import { card } from "@/studio/schemas/objects/common/editor"
import Image from "next/image"
import { useState } from "react"
import { Navigation } from "swiper"
import { Swiper, SwiperSlide } from "swiper/react"

const SwipeRooms = ({ images }: any) => {

  const [prevEl, setPrevEl] = useState<HTMLElement | null>(null)
  const [nextEl, setNextEl] = useState<HTMLElement | null>(null)

  return (
    <div className={' relative z-20 h-full'}>
      <div className="h-full relative">
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
          className={`carousel-swiper h-full`}
        >
          {images.map((image: any, i: number) => (
            <SwiperSlide
              key={1}
              className="bg-slate-300 !h-[250px] overflow-hidden"
            >
              <Image src={urlForImage(image).url()} alt="" width={703} height={569} className="object-cover h-full" />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="w-full px-6 md:px-[71px] absolute top-[50%] transform -translate-y-1/2 z-50">
        <div className="container mx-auto flex justify-between">
          <button
            aria-label="arrow-left-previous-slide"
            className="w-[36px] h-[36px] rounded-full bg-off-white flex justify-center items-center relative"
            ref={(node) => setPrevEl(node)}
          >
            <LeftArrow />
          </button>
          <button
            aria-label="arrow-right-next-slide"
            className="w-[36px] h-[36px] rounded-full bg-off-white flex justify-center items-center"
            ref={(node) => setNextEl(node)}
          >
            <RightArrow />
          </button>
        </div>
      </div>
    </div>
  )
}

export default SwipeRooms