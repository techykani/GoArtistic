import { LinkAngleRightBtn } from '@/components/ui/link-angle-right-btn'
import ArrowOnlyBtn from '@/components/widgets/shared/buttons/button/arrowOnlyBtn'
import ReactPortableText from '@/components/widgets/shared/reactPortableText'
import Title from '@/components/widgets/shared/title'
import { useWindowSize } from '@/lib/hooks'
import { PortableText, imageUrlBuilder } from '@/sanity'
import { useState, useRef, useEffect } from 'react'
import { SanityImg } from 'sanity-react-extra'
import { Swiper } from 'swiper/react'
import { SwiperSlide } from 'swiper/react'

const TypesOfTrainings = ({ caption, cards }: any) => {
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

  const link1 = {
    text: '',
    href: '',
  }
  return (
    <section className="">
      <div className="px-6 md:px-[71px]">
        <div ref={headingRef} className="container mx-auto">
          <h4 className="text-[#3C3C3C] text-[20px] md:text-[28px] font-semibold leading-[24px] md:leading-[36px] md:tracking-[-0.28px] text-center py-8 md:pt-[64px]">
            {caption}
          </h4>
        </div>
      </div>

      <div className="w-full flex flex-col gap-8 md:gap-12">
        <div className=" ">
          {cards && (
            <Swiper
              spaceBetween={24}
              slidesPerView={'auto'}
              pagination={{ clickable: true }}
              slidesOffsetAfter={windowWidth >= 768 ? 71 : 24}
              onSlideChange={() => console.log('slide change')}
              onSwiper={(swiper: any) => console.log(swiper)}
              className={`grid grid-flow-col carousel-swiper `}
              style={{ paddingLeft: sliderPosition }}
            >
              {cards?.map(({ primaryImg, _key, title, description }: any) => (
                <SwiperSlide
                  className={`${windowWidth >= 768 ? '!w-[288px]' : '!w-[230px]'} h-full`}
                  key={_key}
                >
                  <div className="flex justify-center h-full">
                    <div
                      className="w-full rounded-[12px] bg-[white] overflow-hidden md:shadow-megaMenu h-full"
                      key={_key}
                    >
                      <div className="relative h-[191px] md:h-[240px]">
                        <SanityImg
                          builder={imageUrlBuilder}
                          image={primaryImg}
                          width={800}
                          height={500}
                          alt={primaryImg?.alt ?? 'image'}
                          loading="eager"
                          className="object-cover w-full h-full aspect-[6/5]"
                        />
                        {/* <div className="w-12 h-12 absolute bottom-[-24px] right-6 bg-[#00ADE5] hover:bg-[#009CCE] transition duration-200 flex items-center justify-center rounded-full">
                          <LinkAngleRightBtn href={''} color="white">
                            { }{' '}
                          </LinkAngleRightBtn>
                        </div> */}
                        <div className="w-12 h-12 absolute bottom-[-30px] right-6 ">
                          <ArrowOnlyBtn
                            link={link1}
                            target="_self"
                            btnType="primary"
                            theme="light"
                            customStyle=""
                            size="medium"
                            arrowColor="blue"
                            gtag_event="select_content"
                            gtag_content_name={description}
                            gtag_content_type={title}
                            gtag_cta_button={''}
                          />
                        </div>
                      </div>
                      <div className="pt-6 md:pt-8 pb-4 md:pb-6 px-4 md:px-6 flex flex-col gap-2">
                        <p className="text-grey-dark text-[16px] font-semibold leading-[20px]">
                          {title}
                        </p>
                        <div className="mt-[-24px]">
                          <ReactPortableText content={description} />
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          )}
        </div>
      </div>
    </section>
  )
}

export default TypesOfTrainings
