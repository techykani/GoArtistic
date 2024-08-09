import React from 'react'
import clsx from 'clsx'
import Image from 'next/image'
import { SanityImg } from 'sanity-react-extra'
import { imageUrlBuilder } from '@/sanity'
import { useWindowSize } from '@/lib/hooks'
import BtnWithArrow from '@/components/widgets/shared/buttons/button/btnWithArrow'
import { LinkArrowUp } from '@/components/ui/link-arrow-up'
import EyeBrow from '@/components/widgets/shared/eyeBrew'

export const InformativeCard: React.FC<any> = ({ data }) => {
  const windowWidth = useWindowSize()?.width ?? 0
  return (
    <>
      <div className="w-full h-full flex flex-col gap-4" key={data?._id}>
        <div className="flex flex-col gap-8 md:gap-6">
          <div className="w-full relative">
            {data?.primaryImg && (
              <SanityImg
                builder={imageUrlBuilder}
                image={data?.primaryImg}
                alt={data?.primaryImg?.alt ?? 'image'}
                loading="eager"
                className="w-full aspect-[16/9] rounded-xl as"
              />
            )}
            {data?.secondaryImg && (
              <div className="lg:w-[144px] w-[120px] lg:h-[96px] h-[80px] bg-slate-300 absolute right-[33px] bottom-[-23px] rounded-lg overflow-hidden border-[1px] border-[#E6E6E6] flex justify-center items-center">
                <SanityImg
                  builder={imageUrlBuilder}
                  image={data?.secondaryImg}
                  alt={data?.secondaryImg?.alt ?? 'image'}
                  loading="eager"
                  width={144}
                  className="rounded-lg w-full"
                />
              </div>
            )}
          </div>
          <div className="w-full flex flex-col gap-2">
            {data?.subtitle && (
              <p className="uppercase text-xs font-bold text-grey-9 leading-[18px] tracking-[2.4px] mb-[-4px]">
                {data?.subtitle}
              </p>
            )}
            <h3
              className={`text-primary-blue-new text-[18px] font-montserrat font-semibold leading-[22px] tracking-[-0.28px] ${
                windowWidth >= 768 && windowWidth <= 1014 && 'h-[72px]'
              }`}
            >
              {data?.title}
            </h3>
            <p className="text-grey-9 md:text-grey-8 text-base leading-6">{data?.tagline}</p>
          </div>
          <div className="flex flex-col gap-3">
            {/* <EyeBrow title={data?.linkTitle} /> */}
            <div className="w-full text-grey-dark grid md:grid-cols-2 gap-3">
              {data?.links?.map((link: any, i: any) => (
                <>
                  {link?.link?.text === 'Visit website' || link?.link?.text === 'Explore more' ? (
                    <LinkArrowUp
                      href={link?.link?.href ?? ''}
                      openInNewTab={true}
                      key={i}
                      className={clsx(
                        'flex  rounded-lg align-baseline font-semibold  items-center lg:text-left transition-colors duration-150 text-base group w-full md:w-[48%] !pt-[4px]',
                      )}
                      color="black"
                      gtag_event="select_content"
                      gtag_content_name={data?.tagline}
                      gtag_content_type={data?.title}
                      gtag_cta_button={link?.link?.text}
                    >
                      {link?.link?.text}{' '}
                    </LinkArrowUp>
                  ) : (
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
                      gtag_content_name={data?.tagline}
                      gtag_content_type={data?.title}
                      gtag_cta_button={link?.link?.text}
                    />
                  )}
                </>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
