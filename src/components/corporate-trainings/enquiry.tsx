import { SanityImage, SanityImg } from 'sanity-react-extra'
import { imageUrlBuilder } from '@/sanity'
import { useWindowSize } from '@/lib/hooks'
import BtnWithArrowEnquiry from '../widgets/shared/buttons/button/btnWithArrowEnquiry'
import { GTAEvent } from '@/lib/gtag'
import Link from 'next/link'
import Title from '../widgets/shared/title'


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

  const handleButton = (gtag_event: any, form_name: any) => {
    GTAEvent(gtag_event, {
      form_name: form_name !== '' ? form_name : null,
    })
  }

  return (
    <section className="bg-[white] px-6 md:px-[71px] py-12 md:py-20">
      <div className={`w-full relative rounded-xl container mx-auto`}>
        {bannerImage || smallBannerImage ? (
          <SanityImg
            className="w-full h-full absolute rounded-xl inset-0  object-cover object-top  md:object-top-[40px]"
            builder={imageUrlBuilder}
            image={windowWidth < 768 ? smallBannerImage : bannerImage}
            alt="image"
            loading="eager"
          />
        ) : (
          ''
        )}
        <div
          // className={`w-full h-full absolute inset-0 rounded-xl z-[2] ${windowWidth < 768
          //   ? 'hmi-institute-sm-enquiry-gr'
          //   : 'hmi-institute-enquiry-gr'
          //   } `}
          className={`w-full h-full absolute inset-0 rounded-xl z-[2]`}
        />
        <div className="px-6 pt-[109px] pb-[32px] md:px-20 md:py-12 flex flex-col gap-6 md:flex-row md:justify-between md:items-center rounded-xl relative z-10 text-off-white  min-h-[214px]">
          <div className="flex flex-col gap-2 justify-center max-w-[519px]">
            {title && (
              <Title
                headingType="h3"
                tagline={title}
                theme="light"
                className="!text-[18px] md:!text-[26px] !leading-[22px] md:!leading-[32px] !font-bold"
              />
            )}
            {description && <p className="leading-[24px]">{description}</p>}
          </div>
          {cta?.text && (
            <div className="justify-end">
              <Link
                onClick={() => handleButton("form_start", cta?.text)}
                href={cta?.href ?? ''}
                target="_self"
                className={`font-semibold rounded-full leading-[20px] gap-2 flex items-center justify-center group text-[#FEFEFE] text-[14px] bg-[#0957CB] hover:bg-[#0745A3] border-[2px] border-[#0957CB] hover:border-[#0745A3] py-2 px-6 transition-all duration-150`}
              >
                {cta?.text}
              </Link>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

export default Enquiry
