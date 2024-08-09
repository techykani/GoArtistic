import React, { Dispatch, SetStateAction, useState } from 'react'
import { Swiper } from 'swiper/react'
import { Navigation, A11y, Autoplay } from 'swiper'
import { AnimateSharedLayout } from 'framer-motion'
import clsx from 'clsx'
import { RightArrow } from '@/icons/rightArrow'
import { LeftArrow } from '@/icons/leftArrow'
// import { useWindowSize } from '@/lib/hooks'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/autoplay'
import 'swiper/css/a11y'

interface CarouselProps {
  setActiveSlideIndex: Dispatch<SetStateAction<number>>
  setPrevButtonClicked: Dispatch<SetStateAction<boolean>>
  children: React.ReactNode
  bgColor?: string
}

const styles = {
  navBtn:
    'absolute z-30 top-[46%] transform  rounded-full flex justify-center items-center bg-white h-[64px] w-[64px]  shadow-listContainer transition-all duration-150 cursor-pointer hover:shadow-point -translate-y-1/2',
}

export const Carousel: React.FC<CarouselProps> = ({
  setActiveSlideIndex,
  children,
  setPrevButtonClicked,
  bgColor = 'bg-white',
}) => {
  // const windowWidth = useWindowSize()?.width ?? 0

  // const [prevEl, setPrevEl] = useState<HTMLElement | null>(null)
  // const [nextEl, setNextEl] = useState<HTMLElement | null>(null)

  return (
    <div className="relative">
      <div className="w-full ml-auto overflow-hidden">

        <div className="w-[100%] ml-[0px]">
          <div className="relative w-[100%] ml-auto">
            <Swiper
              grabCursor
              breakpoints={{
                320: {
                  slidesPerView: 1,
                  spaceBetween: 24,
                },
                650: {
                  slidesPerView: 2,
                  spaceBetween: 24,
                }
              }}
              speed={500}
              className="lg:!pt-10 !px-2 md:h-[450px] h-[408px] !overflow-visible carousel-swiper"
              modules={[Navigation, A11y, Autoplay]}
              // navigation={{
              //   prevEl,
              //   nextEl,
              // }}
              onSlideChange={(swiper) => {
                setActiveSlideIndex(swiper.realIndex)
              }}
            >
              {children}
            </Swiper>
          </div>
        </div>
      </div>
      <div>
        {/* <button
          aria-label="arrow-left-previous-slide"
          className={clsx('left-0 translate-x-[-15%] xl:translate-x-[-5%]', styles.navBtn)}
          ref={(node) => setPrevEl(node)}
          onClick={() => setPrevButtonClicked(true)}
        >
          <LeftArrow />
        </button>
        <button
          aria-label="arrow-right-next-slide"
          className={clsx('right-0 translate-x-[15%] xl:translate-x-[5%]', styles.navBtn)}
          ref={(node) => setNextEl(node)}
          onClick={() => setPrevButtonClicked(false)}
        >
          <RightArrow />
        </button> */}
      </div>
    </div>
  )
}
