import { useWindowSize } from '@/lib/hooks'
import { useState, useRef, useEffect } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import BtnWithArrow from '../widgets/shared/buttons/button/btnWithArrow'
import { ThreeColCard } from '../widgets/blocks/cards/primaryListingCards/threeColCard'
import Title from '../widgets/shared/title'
import ReactPortableText from '../widgets/shared/reactPortableText'

const OurNetwork = ({ tagline, cta, points, description }: any) => {
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
    <section className="blue-gradient_bg py-12 md:py-20 flex flex-col gap-6 md:gap-8">
      <div className="px-6 md:px-[71px]">
        <div ref={headingRef} className="container mx-auto md:flex items-center gap-[128px]">
          <Title tagline={tagline} headingType="h2" theme="dark" />
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
            <div key={_id} className="w-1/4">
              <ThreeColCard
                icon={icon}
                shortDes={shortDes}
                link={link}
                gtag_event="select_content"
                gtag_content_name={tagline}
                gtag_content_type={link.text}
                gtag_cta_button=""
              />
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
              <SwiperSlide key={_id} className="!w-[288px]">
                <ThreeColCard
                  icon={icon}
                  shortDes={shortDes}
                  link={link}
                  gtag_event="select_content"
                  gtag_content_name={tagline}
                  gtag_content_type={link.text}
                  gtag_cta_button=""
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      )}
      <div className="w-full flex justify-center">
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
      </div>
    </section>
  )
}

export default OurNetwork
