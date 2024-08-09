import Link from 'next/link'
import { FaArrowRight } from 'react-icons/fa'
import { PortableText, imageUrlBuilder } from '@/sanity'
import { SpecialistsCarousel } from '@/components/ui/carousel'
import { Swiper, SwiperSlide } from 'swiper/react'
import { TitleTaglineDescriptionCta } from '../common/blocks/title-tagline-description.cta'
import { SpecialistsSwiperCards } from '../ui/carousel/specialists-swiper-cards'
import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { SanityImg } from 'sanity-react-extra'
import { useWindowSize } from '@/lib/hooks'
import { GpSwiperCards } from '../ui/carousel/gp-swiper-cards'
import clsx from 'clsx'
import { LinkAngleRight } from '../ui'

interface SpecialistsProps {
  slidesData: any[]
  tagline: string
  title: string
  description: string
  cta: CTAButton
  classNameValues?: string
}

export const ExploreOurSpecialists: React.FC<any> = ({
  tagline,
  title,
  slidesData,
  description,
  button,
  card,
  classNameValues,
}) => {
  const [activeSlideIndex, setActiveSlideIndex] = useState(0)
  const [prevButtonClicked, setPrevButtonClicked] = useState<boolean>(false)

  const windowWidth = useWindowSize()?.width ?? 0
  return (
    <div
      className={`md:flex md:justify-center md:pr-0 py-16 md:py-[80px] relative ${classNameValues}`}
    >
      <div className="md:max-w-[1366px] md:pl-[175px]">
        <TitleTaglineDescriptionCta
          title={title}
          tagline={tagline}
          cta={button}
          description={description}
          classNameValues={classNameValues}
        />
        <motion.div className="relative z-20 ">
          <div className="min-h-[408px]">
            {card && (
              <Swiper
                spaceBetween={10}
                slidesPerView={'auto'}
                pagination={{ clickable: true }}
                slidesOffsetAfter={10}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
                className={`${
                  windowWidth < 1024 && windowWidth >= 768 ? '!pl-[71px]' : ''
                } pt-6 carousel-swiper ${windowWidth < 768 ? '!pl-6' : ''}`}
              >
                {card?.map(({ link, icon, secondaryImg, shortDes, _key }: any) => (
                  <SwiperSlide
                    className={`${
                      windowWidth >= 768 ? '!w-[392px] !mr-[24px]' : '!w-[230px] !mr-[24px]'
                    } h-full `}
                    key={_key}
                  >
                    <div className="flex justify-center">
                      <div className="w-full rounded-[12px] overflow-hidden " key={_key}>
                        <div className=" flex flex-col gap-6 md:gap-8">
                          <div className="relative h-[263px] md:h-[448px]">
                            <SanityImg
                              builder={imageUrlBuilder}
                              image={icon}
                              width={800}
                              height={500}
                              alt={icon?.alt ?? 'image'}
                              loading="eager"
                              className="object-cover w-full h-full rounded-xl"
                            />
                          </div>

                          <div className="w-full flex flex-col gap-2">
                            <div className="w-full">
                              {title && (
                                <LinkAngleRight
                                  href={link?.href ?? ''}
                                  className={clsx(
                                    'flex bg-transparent text-grey-dark rounded-lg align-baseline font-semibold items-center lg:text-left transition-colors duration-150 text-base group leading-[20px]',
                                  )}
                                  color="black"
                                  gtag_event="select_content"
                                  gtag_content_name={tagline}
                                  gtag_content_type={title}
                                  gtag_cta_button={link?.text}
                                >
                                  {link?.text}{' '}
                                </LinkAngleRight>
                              )}
                            </div>
                            <p className="text-grey-8 font-base leading-6">{shortDes}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            )}
          </div>
        </motion.div>
        <div
          className={`h-[60%] bg-deep-9 ${classNameValues} w-full absolute top-0 left-0  xl2:w-[85%] xl2:rounded-r-[16px] z-10 bg-light`}
        />
      </div>
    </div>
  )
}
