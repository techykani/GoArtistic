import { imageUrlBuilder } from '@/sanity'
import Image from 'next/image'
import { SanityImg } from 'sanity-react-extra'
import BtnWithArrow from '../widgets/shared/buttons/button/btnWithArrow'
import Title from '../widgets/shared/title'
import Link from 'next/link'

export const ContactUs: React.FC<any> = ({
  bannerImage,
  bannerTitle,
  bannerEmail,
  bannerEmailValue,
  bannerMobile,
  bannerMobileValue,
  cta,
}) => {
  return (
    <div className=" px-6 md:px-[71px] pb-[32px] md:pb-[60px]">
      <div className="container mx-auto relative rounded-2xl overflow-hidden min-h-[199px] flex items-center">
        {bannerImage && (
          <SanityImg
            builder={imageUrlBuilder}
            image={bannerImage}
            alt={bannerImage?.alt ?? 'image'}
            loading="eager"
            className="absolute top-0 right-0 bottom-0 z-10 w-full h-full object-cover object-right"
          />
        )}
        <div className="article-contact-gr absolute inset-0 z-30"></div>
        <div className="flex flex-col lg:flex-row lg:items-center md:justify-between gap-6 relative z-40 px-6 md:px-[80px] py-8 w-full">
          <div className=" flex flex-col gap-4">
            {bannerTitle && (
              <Title
                headingType="h3"
                tagline={bannerTitle}
                theme="dark"
                className="!text-[18px] md:!text-[26px] !leading-[22px] md:!leading-[32px]"
              />
            )}
            <div className="flex flex-col gap-4 md:flex-row md:gap-[64px]">
              {bannerEmail && bannerEmailValue && (
                <p className="text-off-white text-base  leading-[24px] ">
                  {bannerEmail} <br />
                  <Link
                    href={`mailto:${bannerEmailValue}`}
                    className="font-semibold hover:underline"
                  >
                    {bannerEmailValue}
                  </Link>
                </p>
              )}
              {bannerMobile && bannerMobileValue && (
                <p className="text-off-white text-base leading-[24px] ">
                  {bannerMobile} <br />
                  <Link
                    href={`tel:${bannerMobileValue.replace(/\s/g, '')}`}
                    className="font-semibold hover:underline"
                  >
                    {' '}
                    {bannerMobileValue}
                  </Link>
                </p>
              )}
            </div>
          </div>
          {cta?.text && (
            <div className="justify-end">
              <BtnWithArrow
                link={cta}
                target="_self"
                rel=""
                btnType="secondary"
                arrowVisibility={true}
                theme="dark"
                customStyle="text-off-white"
                size="medium"
                arrowColor="white"
                gtag_event="select_content"
                gtag_content_name={''}
                gtag_content_type={bannerTitle}
                gtag_cta_button={cta?.text}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
