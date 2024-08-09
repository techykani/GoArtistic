import { Link, LinkAngleRight } from '@/components/ui'
import { useWindowSize } from '@/lib/hooks'
import { imageUrlBuilder } from '@/sanity'
import { SanityImage, SanityImg } from 'sanity-react-extra'
import { FaArrowRight } from 'react-icons/fa'
import clsx from 'clsx'
import Image from 'next/image'
import { urlForImage } from '@/studio/lib/image'
import { GTAEvent } from '@/lib/gtag'
import { isEmpty } from 'lodash'

export interface HeroProps {
  title: string
  tagline: string
  primaryImg: SanityImage
  secondaryImg: SanityImage
  description?: PortableText[]
  link: any
  isGP: boolean
  gtag_event: string
  gtag_content_name: string
  gtag_content_type: string
  gtag_cta_button: string
}

export const CarouselCard: React.FC<HeroProps> = ({
  title,
  tagline,
  primaryImg,
  secondaryImg,
  link,
  isGP,
  gtag_event,
  gtag_content_name,
  gtag_content_type,
  gtag_cta_button,
}) => {
  const windowWidth = useWindowSize()?.width ?? 0
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
      href={title && isGP ? `${link?.href ?? ''}` : `/services/${link?.current}`}
      className={`w-full rounded-xl  overflow-hidden flex flex-col gap-4`}
      onClick={() =>
        handleButton(gtag_event, gtag_content_name, gtag_content_type, gtag_cta_button)
      }
    >
      <div className="w-full h-[263px] md:h-[448px] md:max-h-[448px] relative ">
        {primaryImg && (
          <Image
            src={urlForImage(primaryImg).url()}
            width={windowWidth >= 768 ? 392 : 230}
            height={windowWidth >= 768 ? 448 : 263}
            alt={primaryImg?.alt ?? 'image'}
            loading="eager"
            className="h-full object-cover rounded-xl overflow-hidden"
          />
        )}
        <div className="specialist-card-gr absolute inset-0 rounded-xl overflow-hidden" />
      </div>
      {title && tagline && (
        <div className="w-full flex flex-col gap-2">
          <div className="w-full">
            {title && isGP == false && (
              <LinkAngleRight
                href={`/services/${link?.current}`}
                className={clsx(
                  'flex bg-transparent text-grey-dark rounded-lg align-baseline font-semibold items-center lg:text-left transition-colors duration-150 text-base  group leading-5',
                )}
                color="black"
                gtag_event={gtag_event}
                gtag_content_name={gtag_content_name}
                gtag_content_type={gtag_content_type}
                gtag_cta_button={gtag_cta_button}
              >
                {title}{' '}
              </LinkAngleRight>
            )}
            {title && isGP && (
              <LinkAngleRight
                href={link?.href ?? ''}
                className={clsx(
                  'flex bg-transparent text-grey-dark rounded-lg align-baseline font-semibold items-center lg:text-left transition-colors duration-150 text-base  group leading-5 ',
                )}
                color="black"
                gtag_event={gtag_event}
                gtag_content_name={gtag_content_name}
                gtag_content_type={gtag_content_type}
                gtag_cta_button={gtag_cta_button}
              >
                {title}{' '}
              </LinkAngleRight>
            )}
          </div>
          <p className="text-[#6E6E6E] text-base leading-6">{tagline}</p>
        </div>
      )}
    </Link>
  )
}
