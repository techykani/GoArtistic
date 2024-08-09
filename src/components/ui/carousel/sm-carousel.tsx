import React, { Dispatch, SetStateAction, useState } from 'react'
import { Swiper } from 'swiper/react'
import { Navigation, A11y, Autoplay } from 'swiper'
import { AnimateSharedLayout } from 'framer-motion'
import clsx from 'clsx'
import { RightArrow } from '@/icons/rightArrow'
import { LeftArrow } from '@/icons/leftArrow'
import { useWindowSize } from '@/lib/hooks'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/autoplay'
import 'swiper/css/a11y'

interface CarouselProps {
  setActiveSlideIndex: Dispatch<SetStateAction<number>>
  children: React.ReactNode
}

const styles = {
  smNavBtn:
    'z-30 transform  rounded-full flex justify-center items-center bg-white h-[40px] w-[40px] shadow-listContainer transition-all duration-150 cursor-pointer hover:shadow-point',
}

export const SmCarousel: React.FC<CarouselProps> = ({ children }) => {
  const windowWidth = useWindowSize()?.width ?? 0

  const [prevEl, setPrevEl] = useState<HTMLElement | null>(null)
  const [nextEl, setNextEl] = useState<HTMLElement | null>(null)

  return (
    <div className="relative overflow-hidden">
      {windowWidth < 1280 && (
        <div className="flex items-center justify-center w-full my-3 space-x-5">
          <button
            aria-label="arrow-left-previous-slide"
            className={styles.smNavBtn}
            ref={(node) => setPrevEl(node)}
          >
            <LeftArrow className="w-[14px]" color="#909498" />
          </button>
          <button
            aria-label="arrow-right-next-slide"
            className={styles.smNavBtn}
            ref={(node) => setNextEl(node)}
          >
            <RightArrow className="w-[14px]" color="#909498" />
          </button>
        </div>
      )}
      <Swiper
        grabCursor
        slidesPerView={1}
        spaceBetween={20}
        speed={500}
        loop
        className="!py-10 !px-8"
        modules={[Navigation, A11y, Autoplay]}
        navigation={{
          prevEl,
          nextEl,
        }}
      >
        {children}
      </Swiper>
    </div>
  )
}
