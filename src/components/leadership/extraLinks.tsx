import { useWindowSize } from '@/lib/hooks'
import { useState, useRef, useEffect } from 'react'
import Title from '../widgets/shared/title'
import Link from 'next/link'
import { Swiper, SwiperSlide } from 'swiper/react'
import { ThreeColCard } from '../widgets/blocks/cards/primaryListingCards/threeColCard'
import Image from 'next/image'
import { GTAEvent } from '@/lib/gtag'
import { urlForImage } from '@/studio/lib/image'

export const ExtraLinks = ({ title, extraLinks }: any) => {
  const [sliderPosition, setSliderPosition] = useState(0)
  const headingRef = useRef<HTMLHeadingElement>(null)
  const windowWidth = useWindowSize()?.width ?? 0
  console.log(extraLinks, 'g')

  useEffect(() => {
    if (headingRef.current) {
      const rect = headingRef.current.getBoundingClientRect()
      const leftPosition = rect.left
      setSliderPosition(leftPosition)
    }
  }, [windowWidth])

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
    <div className="bg-[#F1F6FF] py-[36px] md:py-[60px] flex flex-col gap-6">
      <div className="px-6 md:px-[71px]">
        <div ref={headingRef} className="container mx-auto flex flex-col gap-6">
          <Title headingType="h2" theme="light" tagline={title} />
          {windowWidth >= 1050 && (
            <div className="grid grid-cols-3 gap-6">
              {extraLinks?.slice(0, 3)?.map((links: any) => (
                <Link
                  href={links?.cta?.href ?? ''}
                  className="w-full md:max-w-[392px] h-full bg-[#FEFEFE] rounded-xl flex flex-col overflow-hidden"
                  key={links?._key}
                  style={{ boxShadow: "0px 8px 32px 0px rgba(0, 0, 0, 0.04)" }}
                >
                  {links?.bannerImage && (
                    <div className="w-full max-w-[392px]">
                      <Image
                        src={urlForImage(links?.bannerImage)?.url()}
                        width={392}
                        height={221}
                        alt=""
                        className="aspect-[16/9] w-full"
                        quality={100}
                      />
                    </div>
                  )}
                  <div className="p-6 text-[#5A5A5A] font-semibold leading-[20px]">
                    {links?.title}
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
            {extraLinks?.map(({ _id, bannerImage, title, cta }: any) => (
              <SwiperSlide key={_id} className="!w-[288px]">
                <Link
                  href={cta?.href ?? ''}
                  className="w-full"
                  onClick={() => handleButton('select_content', title, '', '')}
                  style={{ boxShadow: "0px 8px 32px 0px rgba(0, 0, 0, 0.04)" }}
                >
                  <div className="min-w-[288px] max-w-[288px] rounded-xl bg-[white] overflow-hidden h-full">
                    {bannerImage && (
                      <div className="w-full md:max-h-[240px]">
                        <Image
                          src={urlForImage(bannerImage)?.url()}
                          width={392}
                          height={221}
                          alt=""
                          className="aspect-[16/9] w-full"
                          quality={100}
                        />
                      </div>
                    )}
                    <div className="w-full p-4 flex flex-col gap-2">
                      <p className="text-grey-8 font-base leading-6 font-semibold">{title}</p>
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
