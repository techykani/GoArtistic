'use client'

// @ts-ignore
import { useWindowSize } from '@/lib/hooks'
import { imageUrlBuilder } from '@/sanity'
import { motion } from 'framer-motion'
import React from 'react'
import { SanityImg } from 'sanity-react-extra'

interface Props {
  id: string
  imgUrl: string
  title: string
  caption: string
  index: number
  active: string
  handleClick: any
}

export const fadeIn = (direction: string, type: string, delay: number, duration: number) => ({
  hidden: {
    x: direction === 'left' ? 100 : direction === 'right' ? -100 : 0,
    y: direction === 'up' ? 100 : direction === 'down' ? -100 : 0,
    opacity: 0,
  },
  show: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: {
      type,
      delay,
      duration,
      ease: 'easeOut',
    },
  },
})

const InsightsAccordian = ({
  _id,
  primaryImg,
  title,
  shortDes,
  index,
  active,
  handleClick,
}: any) => {
  const windowWidth = useWindowSize()?.width ?? 0

  return (
    <>
      {windowWidth >= 720 ? (
        <motion.div
          variants={fadeIn('right', 'spring', index * 0.5, 0.75)}
          className={`relative ${
            active === _id ? 'lg:flex-[3.5] flex-[10]' : 'lg:flex-[0.5] flex-[2]'
          } flex items-center justify-center lg:min-w-[270px] h-[587px] transition-[flex] duration-[0.7s] ease-out-flex cursor-pointer relative `}
          // whileHover={() => handleClick(_key)}
          onMouseEnter={() => handleClick(_id)}
        >
          {/* gradient */}
          <div
            className={`w-full h-full absolute inset-0 z-[2] rounded-xl home-more-insights-gr`}
          />
          {primaryImg && (
            <SanityImg
              className="absolute w-full h-full object-cover rounded-[12px] object-top "
              builder={imageUrlBuilder}
              image={primaryImg}
              alt={primaryImg.alt ?? 'image'}
              loading="eager"
            />
          )}
          {active !== _id ? (
            <h3 className="lg:text-[20px] text-off-white font-montserrat text-[20px]  font-semibold leading-[22px] lg:leading-[24px] lg:tracking-[-0.28px] absolute lg:bottom-5  lg:origin-[0,0] px-5 z-10 accordian__card-elipsis">
              {title}
            </h3>
          ) : (
            <div className="absolute bottom-0 p-5 flex  gap-1 md:gap-[6px] justify-start w-full flex-col rounded-b-[24px] z-10">
              <h2
                className="lg:text-[20px] lg:tracking-[-0.28px]
              font-montserrat mt-[24px] text-off-white text-[20px] font-semibold leading-[22px] lg:leading-[24px] tracking-[-0.28px]"
              >
                {title}
              </h2>
              <p className="text-off-white text-[16px] font-normal leading-[24px]">
                {shortDes}
              </p>
            </div>
          )}
        </motion.div>
      ) : (
        <motion.div
          variants={fadeIn('right', 'spring', index * 0.5, 0.75)}
          className={`relative ${
            active === _id ? 'lg:flex-[3.5] flex-[10]' : 'lg:flex-[0.5] flex-[2]'
          } flex items-center justify-center lg:min-w-[270px] h-[592px] transition-[flex] duration-[0.7s] ease-out-flex cursor-pointer relative `}
          // whileHover={() => handleClick(_key)}
          onClick={() => handleClick(_id)}
        >
          {/* gradient */}
          <div
            className={`w-full h-full absolute inset-0 z-[2] rounded-xl home-more-insights-gr ${
              active !== _id ? '!bg-[#000000] !opacity-50' : 'home-more-insights-gr'
            }`}
          />
          {primaryImg && (
            <SanityImg
              className="absolute w-full h-full object-cover rounded-[12px] object-top "
              builder={imageUrlBuilder}
              image={primaryImg}
              alt={primaryImg.alt ?? 'image'}
              loading="eager"
            />
          )}
          {active !== _id ? (
            <h3
              className="
            text-off-white text-[18px] lg:text-[20px] font-montserrat font-semibold leading-[22px] lg:leading-[24px] lg:tracking-[0.32px] absolute lg:bottom-10  lg:origin-[0,0] px-5 z-10 accordian__card-elipsis"
            >
              {title}
            </h3>
          ) : (
            <div className="absolute bottom-0 p-5 flex gap-1 md:gap-2 justify-start w-full flex-col rounded-b-[24px] z-10">
              <h2
                className="
              mt-[24px] text-off-white text-[18px] lg:text-[20px] font-montserrat font-semibold leading-[22px] lg:leading-[24px] lg:tracking-[0.32px]"
              >
                {title}
              </h2>
              <p className="text-off-white text-[16px] lg:text-[20px] font-normal leading-[24px]">
                {shortDes}
              </p>
            </div>
          )}
        </motion.div>
      )}
    </>
  )
}

export default InsightsAccordian