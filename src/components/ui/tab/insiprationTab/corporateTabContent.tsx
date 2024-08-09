import { useWindowSize } from '@/lib/hooks/hooks'
import { PortableText, imageUrlBuilder } from '@/sanity'
import React from 'react'
import { SanityImg } from 'sanity-react-extra'

export const CorporateTabContent: React.FC<any> = ({ options, classnameValue }) => {
  const windowWidth = useWindowSize()?.width ?? 0
  return (
    <>
      {options.title == 'Corporate governance' ? (
        <div className={`${classnameValue}`}>
          <div
            className={`px-6 mx-auto md:mx-[279px] flex flex-col md:items-center md:flex-row gap-6 max-w-[1014px]  pb-[48px] md:pb-[80px]`}
          >
            <div className="w-full md:max-w-[392px] rounded-[16px] overflow-hidden">
              <SanityImg
                className="object-cover w-full md:w-[392px]"
                builder={imageUrlBuilder}
                image={options.primaryImg}
                height={windowWidth >= 768 ? 600 : 300}
                alt={options?.image?.alt ?? 'image'}
                loading="eager"
              />
            </div>
            <div className="w-full md:pl-6">
              <h2 className="text-grey-dark text-[18px] md:text-[20px] font-semibold leading-[22px] md:leading-[24px] tracking-[0.32px] mb-2">
                {options?.title}
              </h2>
              <div className="w-full text-base  font-normal leading-6 text-grey-9">
                <PortableText blocks={options?.description} />
              </div>
            </div>
          </div>
        </div>
      ) : (
        <section className={`bg-alice-blue px-6 py-8 md:py-[48px] md:px-[175px] `}>
          <div className="max-w-[1016px] mx-auto flex flex-col it gap-[64px] md:gap-[96px]">
            <div
              className={`w-full flex flex-col gap-6 items-center ${
                options?.alignImage ? 'md:flex-row-reverse' : 'md:flex-row'
              }`}
            >
              <div className="w-full md:w-[50%] rounded-xl overflow-hidden">
                {/* <Image src="/doctor.png" width={400} height={400} alt="" className="w-full" /> */}
                <SanityImg
                  className="w-full"
                  builder={imageUrlBuilder}
                  image={options?.primaryImg}
                  alt="image"
                  loading="eager"
                  width={400}
                  height={400}
                />
              </div>
              <div
                className={`w-full md:w-[50%] flex flex-col gap-4  ${
                  options?.alignImage ? 'pr-0 md:pr-[48px]' : 'pl-0 md:pl-[48px]'
                }`}
              >
                <p className="text-grey-dark text-[20px] font-semibold leading-[36px]tracking-[-0.28px]">
                  {options?.title}
                </p>
                <p className="text-grey-9 text-base leading-[24px]">
                  <PortableText blocks={options?.description} />
                </p>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  )
}
