import { useWindowSize } from '@/lib/hooks'
import { imageUrlBuilder, PortableText } from '@/sanity'
import { SanityImage, SanityImg } from 'sanity-react-extra'
import clsx from 'clsx'
import { FaArrowRight } from 'react-icons/fa'

import Link from 'next/link'
import { LinkAngleRightBtn } from '@/components/ui/link-angle-right-btn'
import Image from 'next/image'
import ArrowOnlyBtn from '@/components/widgets/shared/buttons/button/arrowOnlyBtn'
import { urlForImage } from '@/studio/lib/image'
import { GTAEvent } from '@/lib/gtag'

export interface HeroProps {
  link: CTALink
  shortDes: string
  image: SanityImage
}

interface CTALink {
  href: string
  text: string
}

export const ThreeColCard = ({
  icon,
  shortDes,
  link,
  gtag_event,
  gtag_content_name,
  gtag_content_type,
  gtag_cta_button,
}: any) => {
  const handleButton = (
    gtag_event: any,
    gtag_content_name: any,
    gtag_content_type: any,
    gtag_cta_button: any,
  ) => {
    GTAEvent(gtag_event, {
      content_name: gtag_content_name !== '' ? gtag_content_name : null,
      content_type: gtag_content_type !== '' ? gtag_content_type : null,
      cta_button: gtag_cta_button !== '' ? gtag_cta_button : null,
    })
  }
  return (
    <Link
      href={link?.href ?? ''}
      className="w-full"
      onClick={() =>
        handleButton(gtag_event, gtag_content_name, gtag_content_type, gtag_cta_button)
      }
    >
      <div className="min-w-[288px] max-w-[288px] rounded-xl bg-[white] overflow-hidden h-full">
        <div className="w-full md:max-h-[240px] relative">
          <Image
            src={icon}
            width={288}
            height={240}
            alt=""
            className="aspect-[6/5]"
            quality={100}
          />
          <div className="w-12 h-12 absolute bottom-[-30px] right-6 ">
            <ArrowOnlyBtn
              link={link}
              target="_self"
              btnType="primary"
              theme="light"
              customStyle=""
              size="medium"
              arrowColor="blue"
              gtag_event="select_content"
              gtag_content_name={gtag_content_name}
              gtag_content_type={gtag_content_type}
              gtag_cta_button={gtag_cta_button}
            />
          </div>
        </div>
        <div className="w-full pt-8 px-6 pb-6 flex flex-col gap-2">
          <h3 className="text-grey-dark text-base  font-semibold leading-5">{link?.text}</h3>
          <p className="text-grey-8 font-base leading-6">{shortDes}</p>
        </div>
      </div>
    </Link>
  )
}
