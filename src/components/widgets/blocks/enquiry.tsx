import { SanityImage, SanityImg } from 'sanity-react-extra'
import { imageUrlBuilder } from '@/sanity'
import { useRouter } from 'next/router'
import { useWindowSize } from '@/lib/hooks'
import { LinkAngleRight } from '@/components/ui'
import clsx from 'clsx'
import Title from '../shared/title'
import BtnWithArrow from '../shared/buttons/button/btnWithArrow'
import BtnWithArrowEnquiry from '../shared/buttons/button/btnWithArrowEnquiry'

export interface EnquiryProps {
  bannerImage: SanityImage
  smallBannerImage: SanityImage
  title: string
  description: string
  cta: CTAButton
}
export interface CTAButton {
  icon: SanityImage
  ctaButton: any
  text: string
  href: string
}

const Enquiry = ({ bannerImage, smallBannerImage, title, description, cta }: EnquiryProps) => {
  const windowWidth = useWindowSize()?.width ?? 0
  return (
    <section className="bg-[white] px-6 md:px-[71px] py-12 md:py-20">
      <div className={`w-full relative rounded-xl container mx-auto`}>
        {bannerImage || smallBannerImage ? (
          <SanityImg
            className="w-full h-full absolute rounded-xl inset-0  object-cover object-top md:object-center"
            builder={imageUrlBuilder}
            image={windowWidth < 768 ? smallBannerImage : bannerImage}
            alt="image"
            loading="eager"
          />
        ) : (
          ''
        )}
        <div
          className={`w-full h-full absolute inset-0 rounded-xl z-[2] ${
            windowWidth < 768
              ? 'medical-hospitality-sm-enquiry-gr'
              : 'medical-hospitality-enquiry-gr'
          } `}
        />
        <div className="px-6 py-8 md:px-20 md:py-12 flex flex-col gap-6 md:flex-row md:justify-between md:items-center rounded-xl relative z-10 text-off-white  min-h-[214px]">
          <div className="flex flex-col gap-2 justify-center max-w-[519px]">
            {title && (
              <Title
                headingType="h3"
                tagline={title}
                theme="dark"
                className="!text-[18px] md:!text-[26px] !leading-[22px] md:!leading-[32px]"
              />
            )}
            {description && <p className="leading-[24px]">{description}</p>}
          </div>
          {cta?.text && (
            <div className="justify-end">
              <BtnWithArrowEnquiry
                link={cta}
                target="_self"
                btnType="secondary"
                arrowVisibility={true}
                theme="dark"
                customStyle=""
                size="medium"
                arrowColor="white"
                gtag_event="form_start"
                form_name={cta?.text}
              />
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

export default Enquiry
