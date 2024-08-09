import React from 'react'
import { SanityImg } from 'sanity-react-extra'
import { imageUrlBuilder } from '@/sanity'
import { useWindowSize } from '@/lib/hooks'
import BtnWithExitArrow from '@/components/widgets/shared/buttons/button/btnWithExitArrow'
import BtnWithArrow from '@/components/widgets/shared/buttons/button/btnWithArrow'

export const InformativeCard: React.FC<any> = ({
  _id,
  primaryImg,
  secondaryImg,
  title,
  tagline,
  links,
  linkTitle,
}) => {
  const windowWidth = useWindowSize()?.width ?? 0
  return (
    <>
      <div
        className="w-full h-full flex flex-col md:flex-row gap-4 py-12 px-6 md:px-[71px] md:py-20 container"
        key={_id}
      >
        <div className="flex flex-col md:flex-row gap-6 px-6">
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

          </div>
          <div className="w-full flex flex-col justify-center gap-6 md:pl-8">

            <div className='flex flex-col gap-2 md:gap-6'>
              {secondaryImg && (
                <div className="w-[122px] ">
                  <SanityImg
                    builder={imageUrlBuilder}
                    image={secondaryImg}
                    alt={secondaryImg?.alt ?? 'image'}
                    loading="eager"
                    width={144}
                    className="w-full"
                  />
                </div>
              )}
              <p className="text-grey-9 md:text-grey-8 text-base leading-6">{tagline}</p>
            </div>
            <div className="w-full text-grey-dark">
              {/* <span className="text-xs font-bold leading-[18px] tracking-[2.4px] uppercase section__tag-title">
                {linkTitle}
              </span> */}
              <div className="flex flex-col md:flex-row md:flex-wrap justify-between">
                {links?.map((link: any, i: any) => (
                  <div className="md:w-1/2 first:mt-0 mt-3" key={i}>
                    <BtnWithArrow
                      link={link?.link}
                      target="_blank"
                      rel="noopener noreferrer"
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
