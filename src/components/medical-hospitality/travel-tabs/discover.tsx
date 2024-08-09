import { useWindowSize } from '@/lib/hooks'
import { useState, useRef, useEffect } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import clsx from 'clsx'
import Image from 'next/image'
import { urlForImage } from '@/studio/lib/image'
import Link from 'next/link'
import { Navigation } from 'swiper'
import { LeftArrow } from '@/icons/leftArrow'
import { RightArrow } from '@/icons/rightArrow'
import EyeBrew from '@/components/widgets/shared/eyeBrew'
import Title from '@/components/widgets/shared/title'
import { LinkAngleRight } from '@/components/ui'
import ReactPortableText from '@/components/widgets/shared/reactPortableText'
import BtnWithArrow from '@/components/widgets/shared/buttons/button/btnWithArrow'
import { SwiperTab } from './swiperTab'

const Discover: React.FC<any> = ({ tagline, title, description, cta, card, tabs }) => {
  const [prevEl, setPrevEl] = useState<HTMLElement | null>(null)
  const [nextEl, setNextEl] = useState<HTMLElement | null>(null)
  const [selectedOption, setSelectedOption] = useState(tabs[0])
  const [selectedIndex, setSelectedIndex] = useState<number>(0)
  const [sliderPosition, setSliderPosition] = useState(0)
  const headingRef = useRef<HTMLHeadingElement>(null)
  const windowWidth = useWindowSize()?.width ?? 0
  useEffect(() => {
    if (headingRef.current) {
      const rect = headingRef.current.getBoundingClientRect()
      const leftPosition = rect.left
      setSliderPosition(leftPosition)
    }
  }, [windowWidth])
  return (
    <div className={`py-12 md:py-20 relative bg-[#FEFEFE]`}>
      <div className={`w-full pb-[32px] md:pb-[24px] px-6 md:px-[71px] z-20 relative `}>
        <div ref={headingRef} className={`max-w-[1014px] mx-auto flex flex-col gap-2`}>
          {tagline && (
            <div className="w-full flex flex-col gap-2">
              {title && <EyeBrew title={title} theme="light" />}
              <div className="flex flex-col lg:flex-row gap-2 lg:gap-[129px]">
                {tagline && (
                  <Title
                    headingType="h2"
                    theme="light"
                    tagline={tagline}
                    className="max-w-[392px] md:min-w-[392px]"
                  />
                )}
                {(description || cta?.text) && (
                  <div className="md:max-w-[392px] flex flex-col gap-4">
                    {description && (
                      <div className=" mt-[-24px]">
                        <ReactPortableText content={description} theme="light" />
                      </div>
                    )}
                    {cta?.text && (
                      <div className="w-full flex">
                        <BtnWithArrow
                          link={cta}
                          target="_self"
                          rel=""
                          btnType="tertiary"
                          arrowVisibility={false}
                          theme="light"
                          customStyle=""
                          size="medium"
                          arrowColor="black"
                          gtag_event="select_content"
                          gtag_content_name={tagline}
                          gtag_content_type={title}
                          gtag_cta_button={cta}
                        />
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
      <div className={'relative z-20'} style={{ paddingLeft: sliderPosition }}>
        <SwiperTab
          options={tabs}
          selectedIndex={selectedIndex}
          setSelectedOption={setSelectedOption}
          setSelectedIndex={setSelectedIndex}
        />
      </div>
      <div className={'relative z-20'}>
        <div className="min-h-[408px] relative">
          {selectedOption?.card && (
            <Swiper
              spaceBetween={24}
              slidesPerView={'auto'}
              pagination={{ clickable: true }}
              navigation={{
                prevEl,
                nextEl,
              }}
              modules={[Navigation]}
              slidesOffsetAfter={windowWidth >= 768 ? 71 : 24}
              onSlideChange={() => console.log('slide change')}
              onSwiper={(swiper) => console.log(swiper)}
              className={`carousel-swiper`}
              style={{ paddingLeft: sliderPosition }}
            >
              {selectedOption?.card?.map(({ _key, icon, link, shortDes }: any) => (
                <SwiperSlide
                  key={_key}
                  className={`${windowWidth >= 768 ? '!w-[392px] ' : '!w-[230px] '} h-full `}
                >
                  <Link href={link?.href ?? ''} className={`w-full flex flex-col gap-4`}>
                    <div className="w-full  relative ">
                      {icon && (
                        <Image
                          src={urlForImage(icon).url()}
                          width={windowWidth >= 768 ? 392 : 230}
                          height={windowWidth >= 768 ? 448 : 263}
                          alt={icon?.alt ?? 'image'}
                          loading="eager"
                          className="h-full object-cover rounded-xl overflow-hidden"
                        />
                      )}
                      <div className="specialist-card-gr absolute inset-0 rounded-xl overflow-hidden" />
                    </div>
                    {title && tagline && (
                      <div className="w-full flex flex-col gap-2">
                        <div className="w-full">
                          {title && (
                            <LinkAngleRight
                              href={link?.href ?? ''}
                              className={clsx(
                                'flex bg-transparent text-grey-dark rounded-lg align-baseline font-semibold items-center lg:text-left transition-colors duration-150 text-base  group leading-5 ',
                              )}
                              color="black"
                              gtag_event="select_content"
                              gtag_content_name={tagline}
                              gtag_content_type={title}
                              gtag_cta_button={link?.text}
                            >
                              {link?.text ?? ''}{' '}
                            </LinkAngleRight>
                          )}
                        </div>
                        <p className="text-[#6E6E6E] text-base leading-6">{shortDes}</p>
                      </div>
                    )}
                  </Link>
                </SwiperSlide>
              ))}
            </Swiper>
          )}
        </div>
        <div className="w-full px-6 md:px-[71px] absolute top-[50%] transform -translate-y-1/2 z-50">
          <div className="container mx-auto flex justify-between">
            <button
              aria-label="arrow-left-previous-slide"
              className="w-[50px] h-[50px] rounded-full bg-off-white flex justify-center items-center relative"
              ref={(node) => setPrevEl(node)}
            >
              <LeftArrow />
            </button>
            <button
              aria-label="arrow-right-next-slide"
              className="w-[50px] h-[50px] rounded-full bg-off-white flex justify-center items-center"
              ref={(node) => setNextEl(node)}
            >
              <RightArrow />
            </button>
          </div>
        </div>
      </div>
      <div
        style={
          windowWidth >= 768
            ? { marginRight: sliderPosition }
            : { marginRight: sliderPosition - 24 }
        }
        className={`h-[500px] md:h-[580px] bg-[#F1F6FF] absolute inset-0 md:rounded-r-[100px] z-10 bg-light`}
      />
    </div>
  )
}

export default Discover
