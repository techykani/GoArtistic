import style from '@/styles/Home.module.css'
import { useEffect, useRef, useState } from 'react'
import { SanityImg } from 'sanity-react-extra'
import { imageUrlBuilder, PortableText } from '../../../utils/sanity'
import { useWindowSize } from '@/lib/hooks'
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import PrimarySectionHorizontal from '@/components/widgets/blocks/sections/primarySectionHorizontal'
import Link from 'next/link'
import point from '@/studio/schemas/objects/common/point'

export const styles = {
  display: '-webkit-box',
  WebkitBoxOrient: 'vertical',
  WebkitLineClamp: 3,
  overflow: 'hidden',
  textOverflow: 'ellipsis',
} as React.CSSProperties

export const GuidingPrinciple: React.FC<any> = ({
  title,
  description,
  tagline,
  principles,
  cta,
}) => {
  const windowWidth = useWindowSize()?.width ?? 0

  const [sliderPosition, setSliderPosition] = useState(0)

  const headingRef = useRef<HTMLHeadingElement>(null)
  useEffect(() => {
    if (headingRef.current) {
      const rect = headingRef.current.getBoundingClientRect()
      const leftPosition = rect.left
      setSliderPosition(leftPosition)
    }
  }, [windowWidth])

  return (
    <section className="md:px-[71px] px-6 flex flex-col md:gap-12 gap-8 py-12 md:py-[80px] bg-[#FEFEFE]">
      <div className="container mx-auto md:flex md:gap-[129px]">
        <PrimarySectionHorizontal
          title={title}
          tagline={tagline}
          description={description}
          link={cta}
          target="_self"
          btnType="tertiary"
          arrowVisibility={false}
          theme="light"
          customStyle=""
          size="medium"
          arrowColor="black"
        />
      </div>
      <div className={'container mx-auto grid grid-col-1 lg:grid-cols-3 gap-6'}>
        {principles?.map((principle: any, i: number) => (
          <div key={i} className="flex flex-col gap-6">
            <div className="w-full md:min-h-[100px] bg-[#0084C6] rounded-2xl flex flex-col justify-center gap-1 px-[32px] py-[12px]">
              <p
                className={`text-[#FEFEFE] ${style.montserrat} text-center text-[20px] leading-[24px] font-semibold`}
              >
                {principle?.title}
              </p>
              <p className={`text-[#FEFEFE] text-center leading-[24px]`}>{principle?.caption}</p>
            </div>
            {principle?.points && (
              <div className=" grid grid-col-1 gap-6">
                {principle?.points?.map((points: any, index: any) => (
                  <div className={`w-full min-h-[319px] relative h-[319px]`} key={index}>
                    {/* banner background image */}
                    <SanityImg
                      className="h-full w-full absolute inset-0 z-[10] object-cover object-center rounded-2xl"
                      builder={imageUrlBuilder}
                      image={points?.icon}
                      height={windowWidth >= 768 ? 600 : 300}
                      alt="image"
                      loading="eager"
                    />
                    {/* gradient */}
                    <div className=" rounded-xl absolute inset-0 about-us-core-gr z-10" />
                    <div className="px-8 text-[white] absolute z-20 md:max-w-[391px] bottom-[24px]">
                      <p
                        className={`${style.montserrat} text-[20px] font-semibold text-off-white leading-6 mb-1 whitespace-pre-wrap`}
                      >
                        {points?.subTitle}
                      </p>
                      <p className="text-[16px]  text-off-white leading-6 ">{points?.shortDes}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}
