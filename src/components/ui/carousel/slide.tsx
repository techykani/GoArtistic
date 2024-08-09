import { CAROUSEL_LAYOUT_ANIMATION_DURATION } from '@/lib/constants'
import { useWindowSize } from '@/lib/hooks'
import { imageUrlBuilder, PortableText } from '@/sanity'
import clsx from 'clsx'
import { format } from 'date-fns'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { useRef, useState, useEffect } from 'react'
import { SanityImg } from 'sanity-react-extra'
import { Button } from '../button'
import { ListingPageListItemsSchedule } from '@/components/listing-and-details-pages/listing-pages-items-schedule'

interface SlideProps extends CarouselDataProps {
  index: number
  activeSlideIndex: number
  ctaTitle?: string
  prevButtonClicked: boolean
  bgColor?: string
  endDate?: any
  medicalSpecialtiesDetails?: boolean
}

export const Slide: React.FC<SlideProps> = ({
  image,
  title,
  type,
  shortDes,
  startsAt,
  endsAt,
  endDate,
  index,
  ctaTitle,
  activeSlideIndex,
  slug,
  prevButtonClicked,
  bgColor = 'bg-white',
  path,
  medicalSpecialtiesDetails,
}) => {
  const slideActivePrevEl = index === (activeSlideIndex === 0 ? 4 : activeSlideIndex - 1)
  const windowWidth = useWindowSize()?.width ?? 0
  const isBigScreen = windowWidth >= 1280

  const mainDivVariants = {
    active: isBigScreen
      ? { x: '-360px', y: '-30px', height: 320, opacity: 1 }
      : { x: '-252px', y: '-25px', height: 280, opacity: 1 },
    inactive: slideActivePrevEl
      ? { x: '-300px', y: 0, height: 250, opacity: 0 }
      : { x: 0, y: 0, height: 250, opacity: 1 },
  }

  return (
    <div
      className={clsx(
        'grid grid-cols-13 rounded-l bg-transparent h-full',
        activeSlideIndex === index
          ? 'absolute top-0'
          : 'relative w-[90%] xl:w-full ml-auto xl:ml-0',
      )}
    >
      {activeSlideIndex === index && (
        <div
          className={clsx(
            'absolute w-[700px] h-[700px] inset-0 translate-y-[-50px] translate-x-[-550px]',
            bgColor,
          )}
        ></div>
      )}

      <motion.div
        initial={{ scale: 0, x: 0 }}
        animate={{
          scale: index === activeSlideIndex ? 1 : 0,
          x: isBigScreen ? '-330px' : '-217px',
        }}
        transition={{ duration: CAROUSEL_LAYOUT_ANIMATION_DURATION }}
        className={clsx(
          'absolute  z-[1] rounded-lg w-[490px] h-[300px] xl:w-[530px] xl:h-[330px]',
          index === activeSlideIndex ? 'bg-white shadow-raise' : 'bg-transparent',
          prevButtonClicked ? 'origin-bottom-left' : 'origin-bottom-right',
        )}
      />

      <motion.div
        animate={index === activeSlideIndex ? 'active' : 'inactive'}
        variants={mainDivVariants}
        transition={{ duration: CAROUSEL_LAYOUT_ANIMATION_DURATION }}
        className={clsx(
          'rounded-lg relative slide-image',
          index === activeSlideIndex && !medicalSpecialtiesDetails
            ? 'col-span-6 aspect-[4/5] shadow-raise z-10'
            : index === activeSlideIndex && medicalSpecialtiesDetails
            ? 'col-span-6 w-52 h-52 z-10 shadow-raise bg-white'
            : 'col-span-13 aspect-[17/21]',
        )}
      >
        {image && (
          <SanityImg
            className={clsx(
              'absolute w-full h-full rounded-lg',
              !medicalSpecialtiesDetails ? 'object-cover' : 'object-contain p-4',
            )}
            image={image}
            builder={imageUrlBuilder}
            width={600}
            alt={title}
          />
        )}
      </motion.div>

      {activeSlideIndex === index ? (
        <motion.div
          transition={{ duration: 1 }}
          className={clsx(
            'col-span-13 lg:col-span-7 flex flex-col justify-start mt-7 items-start space-y-4 w-[255px] translate-x-[-137px] xl:translate-x-[-200px] 2xl:translate-x-[-220px] z-10',
          )}
          initial={{ opacity: 0 }}
          animate={{
            opacity: index === activeSlideIndex ? 1 : 0,
          }}
        >
          <div className="flex w-full">
            <div className="flex flex-col flex-1">
              {type && (
                <motion.span
                  className="mb-3 font-semibold text-body-sm text-neutral-600"
                  transition={{ duration: CAROUSEL_LAYOUT_ANIMATION_DURATION }}
                >
                  {type === 'Centres of Excellence' ? 'Centre of Excellence' : type}
                </motion.span>
              )}

              <motion.a
                transition={{ duration: CAROUSEL_LAYOUT_ANIMATION_DURATION }}
                className="font-medium text-copper-500 text-head-3"
              >
                {title?.length > 28 ? `${title?.slice(0, 25)}...` : title}
              </motion.a>
              <p className="visible block mt-1 text-neutral-700 text-body-sm">
                {shortDes && shortDes?.length > 200 ? `${shortDes?.slice(0, 200)}...` : shortDes}
              </p>
            </div>
          </div>
          <span className="text-sm text-neutral-700">
            {/* {readTime && (
            <div className="flex space-x-2">
              <img src="/icons/clock.svg" alt="clock image" />
              <span>{readTime}</span>
            </div>
          )} */}
            {startsAt && endsAt && (
              <div className="flex items-center space-x-2 text-body-sm">
                <svg
                  width="11"
                  height="12"
                  viewBox="0 0 11 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3.55212 6.75C3.69275 6.75 3.83337 6.63281 3.83337 6.46875V5.53125C3.83337 5.39062 3.69275 5.25 3.55212 5.25H2.61462C2.45056 5.25 2.33337 5.39062 2.33337 5.53125V6.46875C2.33337 6.63281 2.45056 6.75 2.61462 6.75H3.55212ZM6.08337 6.46875V5.53125C6.08337 5.39062 5.94275 5.25 5.80212 5.25H4.86462C4.70056 5.25 4.58337 5.39062 4.58337 5.53125V6.46875C4.58337 6.63281 4.70056 6.75 4.86462 6.75H5.80212C5.94275 6.75 6.08337 6.63281 6.08337 6.46875ZM8.33337 6.46875V5.53125C8.33337 5.39062 8.19275 5.25 8.05212 5.25H7.11462C6.95056 5.25 6.83337 5.39062 6.83337 5.53125V6.46875C6.83337 6.63281 6.95056 6.75 7.11462 6.75H8.05212C8.19275 6.75 8.33337 6.63281 8.33337 6.46875ZM6.08337 8.71875V7.78125C6.08337 7.64062 5.94275 7.5 5.80212 7.5H4.86462C4.70056 7.5 4.58337 7.64062 4.58337 7.78125V8.71875C4.58337 8.88281 4.70056 9 4.86462 9H5.80212C5.94275 9 6.08337 8.88281 6.08337 8.71875ZM3.83337 8.71875V7.78125C3.83337 7.64062 3.69275 7.5 3.55212 7.5H2.61462C2.45056 7.5 2.33337 7.64062 2.33337 7.78125V8.71875C2.33337 8.88281 2.45056 9 2.61462 9H3.55212C3.69275 9 3.83337 8.88281 3.83337 8.71875ZM8.33337 8.71875V7.78125C8.33337 7.64062 8.19275 7.5 8.05212 7.5H7.11462C6.95056 7.5 6.83337 7.64062 6.83337 7.78125V8.71875C6.83337 8.88281 6.95056 9 7.11462 9H8.05212C8.19275 9 8.33337 8.88281 8.33337 8.71875ZM10.5834 2.625C10.5834 2.01562 10.0677 1.5 9.45837 1.5H8.33337V0.28125C8.33337 0.140625 8.19275 0 8.05212 0H7.11462C6.95056 0 6.83337 0.140625 6.83337 0.28125V1.5H3.83337V0.28125C3.83337 0.140625 3.69275 0 3.55212 0H2.61462C2.45056 0 2.33337 0.140625 2.33337 0.28125V1.5H1.20837C0.575562 1.5 0.083374 2.01562 0.083374 2.625V10.875C0.083374 11.5078 0.575562 12 1.20837 12H9.45837C10.0677 12 10.5834 11.5078 10.5834 10.875V2.625ZM9.45837 10.7344C9.45837 10.8281 9.38806 10.875 9.31775 10.875H1.349C1.25525 10.875 1.20837 10.8281 1.20837 10.7344V3.75H9.45837V10.7344Z"
                    fill="#A78148"
                  />
                </svg>
                <div className="">
                  <b>FROM {format(new Date(startsAt), 'd LLLL YYY')}</b>
                  <span> untill {format(new Date(endsAt), 'd LLLL YYY')} </span>
                </div>
              </div>
            )}
            <ListingPageListItemsSchedule endDate={endDate} />
          </span>
          <Link href={``}>
            <Button
              size="sm"
              variant="solid"
              color="primary"
              className="font-semibold text-button-sm lg:mb-6 px-4 py-3 absolute bottom-[77px] xl:bottom-[42px]"
            >
              {ctaTitle}
            </Button>
          </Link>
        </motion.div>
      ) : (
        <div className="col-span-13 flex flex-col w-[220px]">
          {type && (
            <span className="text-body-sm !text-neutral-600 font-semibold mb-1">
              {type === 'Centres of Excellence' ? 'Centre of Excellence' : type}
            </span>
          )}

          <a
            href={``}
            className="!text-neutral-700 hover:!text-copper-500 text-head-4 font-medium transition-colors duration-200"
          >
            {title?.length > 40 ? `${title?.slice(0, 40)}...` : title}
          </a>
        </div>
      )}
    </div>
  )
}
