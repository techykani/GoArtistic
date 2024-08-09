import { useWindowSize } from '@/lib/hooks'
import { useState, useRef, useEffect } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { NewsBuzz } from '../widgets/blocks/cards/primaryListingCards/news-buzz'
import Image from 'next/image'
import { urlForImage } from '@/studio/lib/image'
import NewsNetworkHorizontal from '../widgets/blocks/sections/newsNetworkHorizontal'

const OurNetwork = ({
  tagline,
  cta,
  points,
  desktopIcon,
  description,
  title,
  logo,
  logoMobile,
}: any) => {
  console.log(logoMobile)
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
    <section className={`w-full py-[48px] md:py-[80px] flex flex-col gap-8 relative`}>
      <div className={`px-6 md:px-[71px] flex flex-col gap-2`}>
        <div ref={headingRef} className="container">
          <NewsNetworkHorizontal
            title={title}
            icon={logo}
            mobileIcon={logoMobile}
            tagline={tagline}
            description={description}
            link={cta}
            target={'_blank'}
            btnType={'secondary'}
            arrowVisibility={false}
            theme={'light'}
            customStyle={''}
            size={'medium'}
            arrowColor={'white'}
          />
        </div>
      </div>
      {windowWidth >= 1366 && (
        <>
          {desktopIcon && (
            <Image
              src={urlForImage(desktopIcon).url()}
              width={157}
              height={140}
              alt={desktopIcon?.alt ?? ''}
              quality={100}
              style={{ right: sliderPosition + 57, position: 'absolute' }}
              className="w-[157px] h-[140px] mt-[130px]"
              loading="eager"
            />
          )}

          <div className="container mx-auto flex gap-4">
            {points?.map(({ _id, Icon, shortDes, link, video }: any) => (
              <div key={_id} className="w-1/4">
                <NewsBuzz
                  Icon={Icon}
                  shortDes={shortDes}
                  link={link}
                  video={video}
                  gtag_event="select_content"
                  gtag_content_name={tagline}
                  gtag_content_type={link?.text}
                  gtag_cta_button=""
                />
              </div>
            ))}
          </div>
        </>
      )}
      {windowWidth < 1366 && (
        <div className="">
          <Swiper
            spaceBetween={24}
            slidesPerView={'auto'}
            pagination={{ clickable: true }}
            slidesOffsetAfter={windowWidth < 1366 ? 24 : 71}
            onSlideChange={(e) => console.log('slide change', e)}
            onSwiper={(swiper) => console.log(swiper)}
            className="carousel-swiper grid grid-flow-col "
            style={{ paddingLeft: sliderPosition }}
          >
            {points?.map(({ _id, Icon, shortDes, link, video }: any) => (
              <SwiperSlide key={_id} className="!w-[288px]">
                <NewsBuzz
                  Icon={Icon}
                  shortDes={shortDes}
                  link={link}
                  video={video}
                  gtag_event="select_content"
                  gtag_content_name={tagline}
                  gtag_content_type={link?.text}
                  gtag_cta_button=""
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      )}
      {desktopIcon && (
        <Image
          src={urlForImage(desktopIcon).url()}
          width={157}
          height={140}
          alt={desktopIcon?.alt ?? ''}
          quality={100}
          style={{ right: sliderPosition + 57, position: 'absolute' }}
          className="w-[157px] h-[140px] bottom-0 z-[100] lg:hidden"
          loading="eager"
        />
      )}
    </section>
  )
}

export default OurNetwork
