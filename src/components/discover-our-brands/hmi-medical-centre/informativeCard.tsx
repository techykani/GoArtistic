import React from 'react'
import { SanityImg } from 'sanity-react-extra'
import { imageUrlBuilder } from '@/sanity'
import { useWindowSize } from '@/lib/hooks'
import BtnWithArrow from '@/components/widgets/shared/buttons/button/btnWithArrow'
import Image from 'next/image'
import { urlForImage } from '@/studio/lib/image'

const InformativeCard: React.FC<any> = ({
  _id,
  primaryImg,
  secondaryImg,
  teritaryImg,
  title,
  tagline,
  links,
  linkTitle,
}) => {
  const windowWidth = useWindowSize()?.width ?? 0
  return (
    <>
      <div
        className="w-full h-full flex flex-col md:flex-row gap-4 py-12 px-6 md:px-[71px] md:py-20 bg-[#FEFEFE]"
        key={_id}
      >
        <div className="flex flex-col md:flex-row gap-6 px-6 container">
          <div className="w-full relative">
            {primaryImg && (
              <SanityImg
                builder={imageUrlBuilder}
                image={primaryImg}
                alt={primaryImg?.alt ?? 'image'}
                loading="eager"
                className="w-full rounded-xl as"
              />
            )}
            {/* {secondaryImg && (
              <div className="lg:w-[144px] w-[120px] lg:h-[96px] h-[80px] bg-off-white px-3 py-2 absolute right-[18px] bottom-[18px] rounded-lg overflow-hidden border-[1px] border-[#E6E6E6] flex justify-center items-center">
                <SanityImg
                  builder={imageUrlBuilder}
                  image={secondaryImg}
                  alt={secondaryImg?.alt ?? 'image'}
                  loading="eager"
                  width={144}
                  className="rounded-lg w-full"
                />
              </div>
            )} */}
          </div>
          <div className="w-full flex flex-col justify-center lg:gap-6 gap-4 md:pl-8">
            <div className="flex flex-wrap items-center gap-3">
              {secondaryImg && (
                <div className="lg:w-[152px] w-[210px]">
                  <SanityImg
                    builder={imageUrlBuilder}
                    image={secondaryImg}
                    alt={secondaryImg?.alt ?? 'image'}
                    loading="eager"
                    width={152}
                    className="rounded-lg w-full"
                  />
                </div>
              )}

              <p className="text-[#AAA] text-[12px] font-medium my-auto ">IS NOW</p>
              {teritaryImg && (
                <div className="w-[180px]  h-[61px]">
                  <SanityImg
                    builder={imageUrlBuilder}
                    image={teritaryImg}
                    alt={teritaryImg?.alt ?? 'image'}
                    loading="eager"
                    width={180}
                    className="rounded-lg w-full"
                  />
                </div>
              )}
            </div>

            {title && (
              <h3
                className={`text-primary-blue-new text-[26px] md:text-[32px] font-montserrat font-bold leading-[32px] tracking-[0.32px] ${
                  windowWidth >= 768 && windowWidth <= 1014 && 'h-[72px]'
                }`}
              >
                {title}
              </h3>
            )}
            <p className="text-grey-9 md:text-grey-8 text-base leading-6">{tagline}</p>
            <div className="w-full text-grey-dark">
              <span className="text-xs font-bold leading-[18px] tracking-[2.4px] uppercase section__tag-title">
                {linkTitle}
              </span>
              <div className="flex flex-col md:flex-row md:flex-wrap justify-between">
                {links?.map((link: any, i: any) => (
                  <div className="md:w-1/2  mt-3" key={i}>
                    <BtnWithArrow
                      link={link?.link}
                      target="_self"
                      rel=""
                      btnType="tertiary"
                      arrowVisibility={true}
                      theme="light"
                      customStyle=""
                      size="medium"
                      arrowColor="black"
                      gtag_event="select_content"
                      gtag_content_name={tagline}
                      gtag_content_type={title}
                      gtag_cta_button={link?.link?.text}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default InformativeCard
