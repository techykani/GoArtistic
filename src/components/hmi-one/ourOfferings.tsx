import { useWindowSize } from '@/lib/hooks'
import { useState, useRef, useEffect } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import BtnWithArrow from '../widgets/shared/buttons/button/btnWithArrow'
import { ThreeColCard } from '../widgets/blocks/cards/primaryListingCards/threeColCard'
import Title from '../widgets/shared/title'
import ReactPortableText from '../widgets/shared/reactPortableText'
import Image from 'next/image'
import { urlForImage } from '@/studio/lib/image'
import Link from 'next/link'
import { GTAEvent } from '@/lib/gtag'

export const OurOfferings = ({ tagline, cta, points, description }: any) => {
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
    <section style={{ background: "linear-gradient(101deg, #0957CB 6.5%, #00D494 91.65%)" }} className=" py-12 md:py-20 flex flex-col gap-6 md:gap-8">
      <div className="px-6 md:px-[71px]">
        <div ref={headingRef} className="container mx-auto md:flex items-center gap-[128px]">
          {tagline && <Title tagline={tagline} headingType="h2" theme="dark" />}
          {description && (
            <div className="md:mt-[-24px] mt-[-10px]">
              <ReactPortableText content={description} theme="dark" />
            </div>
          )}
        </div>
      </div>
      {windowWidth >= 1366 && (
        <div className="container mx-auto flex gap-4">
          {points?.map(({ _id, icon, shortDes, link }: any) => (
            <div key={_id} className="w-1/4 bg-[white] rounded-xl  overflow-hidden">
              <div

                className="w-full"
                onClick={() =>
                  handleButton("select_content", tagline, link.text, '')
                }
              >
                <div className="w-full h-full">
                  <div className="w-full md:max-h-[240px] relative">
                    <Image
                      src={urlForImage(icon).url()}
                      width={288}
                      height={240}
                      alt=""
                      className="w-full"
                      quality={100}
                    />
                  </div>
                  <div className="w-full pt-8 px-6 pb-6 flex flex-col gap-2">
                    <h3 className="text-grey-dark text-base  font-semibold leading-5">{link?.text}</h3>
                    <p className="text-grey-8 font-base leading-6">{shortDes}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
      {windowWidth < 1366 && (
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
            {points?.map(({ _id, icon, shortDes, link }: any) => (
              <SwiperSlide key={_id} className="!w-[288px] bg-[white] rounded-xl  overflow-hidden">
                <div
                  className="w-full "
                  onClick={() =>
                    handleButton("select_content", tagline, link.text, '')
                  }
                >
                  <div className="w-full h-full">
                    <div className="w-full md:max-h-[240px] relative">
                      <Image
                        src={urlForImage(icon).url()}
                        width={288}
                        height={240}
                        alt=""
                        className="w-full"
                        quality={100}
                      />
                    </div>
                    <div className="w-full pt-8 px-6 pb-6 flex flex-col gap-2">
                      <h3 className="text-grey-dark text-base  font-semibold leading-5">{link?.text}</h3>
                      <p className="text-grey-8 font-base leading-6">{shortDes}</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      )}
      {cta && <div className="w-full flex justify-center">
        <BtnWithArrow
          link={cta}
          target="_self"
          rel=""
          btnType="primary"
          arrowVisibility={true}
          theme="dark"
          customStyle=""
          size="medium"
          arrowColor="blue"
          gtag_event="select_content"
          gtag_content_name={tagline}
          gtag_content_type=""
          gtag_cta_button={cta.text}
        />
      </div>}
    </section>
  )
}


