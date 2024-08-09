// @ts-ignore
import { useWindowSize } from '@/lib/hooks'
import { imageUrlBuilder } from '@/sanity'
import { motion } from 'framer-motion'
import { useRouter } from 'next/router'
import React from 'react'
import { SanityImg } from 'sanity-react-extra'
import style from '@/styles/Home.module.css'
import { GTAEvent } from '@/lib/gtag'

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

const AccordianCard = ({
  _id,
  title,
  slug,
  primaryImg,
  seo,
  index,
  active,
  handleClick,
  gtag_event,
  gtag_content_name,
  gtag_content_type,
  gtag_cta_button,
}: any) => {
  const windowWidth = useWindowSize()?.width ?? 0

  const { asPath } = useRouter()
  const handleButton = (
    gtag_event: any,
    gtag_content_name: any,
    gtag_content_type: any,
    gtag_cta_button: any,
  ) => {
    GTAEvent(gtag_event, {
      content_name: gtag_content_name !== '' ? gtag_content_name : null,
      content_type: gtag_content_type !== '' ? gtag_content_type : null,
      cta_button: gtag_cta_button !== '' ? gtag_cta_button : null,
    })
  }

  return (
    <>
      {windowWidth >= 720 ? (
        <motion.a
          href={`/insights/${slug?.current}`}
          onClick={() =>
            handleButton(gtag_event, gtag_content_name, gtag_content_type, gtag_cta_button)
          }
          variants={fadeIn('right', 'spring', index * 0.5, 0.75)}
          className={`relative ${
            active === _id ? 'lg:flex-[3.5] flex-[10]' : 'lg:flex-[0.5] flex-[2]'
          } flex items-center justify-center lg:min-w-[270px] h-[600px] transition-[flex] duration-[0.7s] ease-out-flex cursor-pointer relative `}
          // whileHover={() => handleClick(_key)}
          onMouseEnter={() => handleClick(_id)}
        >
          {/* gradient */}
          <div
            className={`w-full h-full absolute inset-0 z-[2] home-more-insights-gr rounded-xl`}
          />
          {primaryImg && (
            <SanityImg
              className="absolute w-full h-full object-cover rounded-[12px] object-top aspect-[6/5]"
              builder={imageUrlBuilder}
              image={primaryImg}
              alt={primaryImg?.alt ?? 'image'}
              loading="eager"
            />
          )}

          {active !== _id ? (
            <h3
              className={`${
                asPath == '/home' && style.montserrat
              } text-off-white font-montserrat text-[20px]  font-semibold leading-[24px] lg:tracking-[-0.28px] absolute lg:bottom-5  lg:origin-[0,0] px-5 z-10 accordian__card-elipsis`}
            >
              {title}
            </h3>
          ) : (
            <motion.div
              key={`${_id}-description`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.9 }}
              className="absolute bottom-0 p-5 flex gap-1 md:gap-[6px]  justify-start w-full flex-col rounded-b-[24px] z-10 accordion-bg"
            >
              {' '}
              <h2
                className={`${
                  asPath == '/home' && style.montserrat
                } font-montserrat mt-[24px] text-off-white text-[20px] font-semibold leading-[24px] tracking-[-0.28px]`}
              >
                {title}
              </h2>
              <p className="text-off-white text-[16px] font-normal leading-[24px] ">
                {seo?.description}
              </p>
            </motion.div>
          )}
        </motion.a>
      ) : (
        <motion.a
          href={`/insights/${slug?.current}`}
          variants={fadeIn('right', 'spring', index * 0.5, 0.75)}
          className={`relative ${
            active === _id ? 'lg:flex-[3.5] flex-[10]' : 'lg:flex-[0.5] flex-[2]'
          } flex items-center justify-center lg:min-w-[270px] h-[600px] transition-[flex] duration-[0.7s] ease-out-flex cursor-pointer relative `}
          // whileHover={() => handleClick(_key)}
          onClick={() => {
            handleClick(_id)
            handleButton(gtag_event, gtag_content_name, gtag_content_type, gtag_cta_button)
          }}
        >
          {/* gradient */}
          <div
            className={`w-full h-full absolute inset-0 z-[2] home-more-insights-gr rounded-xl  !bg-[#000000] !opacity-50`}
          />
          {primaryImg && (
            <SanityImg
              className="absolute w-full h-full object-cover rounded-[12px] object-top aspect-[6/5]"
              builder={imageUrlBuilder}
              image={primaryImg}
              alt={primaryImg?.alt ?? 'image'}
              loading="eager"
            />
          )}

          {active !== _id ? (
            <h3
              className={`${
                asPath == '/home' && style.montserrat
              } text-off-white text-[18px] lg:text-[20px] font-montserrat font-semibold leading-[22px] lg:leading-[24px] lg:tracking-[0.32px] absolute lg:bottom-10  lg:origin-[0,0] px-5 z-10 accordian__card-elipsis`}
            >
              {title}
            </h3>
          ) : (
            <motion.div
              onClick={() => {
                handleButton(gtag_event, gtag_content_name, gtag_content_type, gtag_cta_button)
              }}
              key={`${_id}-description`}
              initial={{ opacity: 0 }}
              animate={{ opacity: active === _id ? 1 : 0 }} // Fade in when active
              exit={{ opacity: 0 }}
              transition={{ duration: 0.9 }}
              className="absolute bottom-0 p-5 flex gap-1 md:gap-[6px]  justify-start w-full flex-col rounded-b-[24px] z-10"
            >
              {' '}
              <h2
                className={`${
                  asPath == '/home' && style.montserrat
                } font-montserrat mt-[24px] text-off-white text-[20px] font-semibold leading-[24px] tracking-[-0.28px]`}
              >
                {title}
              </h2>
              <p className="text-off-white text-[16px] font-normal leading-[24px] ">
                {seo?.description}
              </p>
            </motion.div>
          )}
        </motion.a>
      )}
    </>
  )
}

export default AccordianCard
