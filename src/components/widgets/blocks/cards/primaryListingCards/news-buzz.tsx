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

export const NewsBuzz = ({
  Icon,
  shortDes,
  link,
  video,
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
    <div className="min-w-[288px] max-w-[288px] rounded-xl bg-[white] overflow-hidden h-full">
      <div className="w-full md:max-h-[367] relative">
        {video && (
          <video
            src={video}
            width={288}
            height={367}
            className="absolute inset-0 object-cover h-[367px] md:w-[288px]"
            autoPlay
            muted
            loop
            playsInline
          ></video>
        )}
        {Icon && (
          <Image
            src={Icon}
            width={288}
            height={367}
            alt=""
            className="aspect-[4/5]"
            quality={100}
          />
        )}
      </div>
    </div>
  )
}
