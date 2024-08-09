import { SlantedShape, Description, Link, LinkAngleRight } from '@/components/ui'
import { useWindowSize } from '@/lib/hooks'
import { imageUrlBuilder, PortableText } from '@/sanity'
import { SanityImage, SanityImg } from 'sanity-react-extra'
import clsx from 'clsx'
import { FaArrowRight } from 'react-icons/fa'
import { LinkAngleRightBtn } from '@/components/ui/link-angle-right-btn'

export interface HeroProps {
  title: string
  tagline: string
  image: SanityImage
  button?: any
  description?: PortableText[]
  classNameValues?: string
}

export const SingleImageAndCtaBlock: React.FC<HeroProps> = ({
  title,
  tagline,
  image,
  description,
  button,
  classNameValues,
}) => {
  const windowWidth = useWindowSize()?.width ?? 0

  return (
    <div
      className={`container mx-auto flex flex-col md:items-center md:flex-row gap-6 ${classNameValues}`}
    >
      <div className="w-full md:w-[50%] rounded-[16px] overflow-hidden">
        {image && (
          <SanityImg
            className="object-cover w-full"
            builder={imageUrlBuilder}
            image={image}
            height={windowWidth >= 768 ? 600 : 300}
            alt={image.alt ?? 'image'}
            loading="eager"
          />
        )}
      </div>
      <div className="w-full md:w-[50%] lg:pl-[32px]">
        <p className="text-xs font-bold leading-[18px] tracking-[2.4px] uppercase mb-2 section__tag-title">
          {title}
        </p>
        <h2 className="text-primary-blue-new font-montserrat text-[26px] md:text-[32px] leading-[32px] md:leading-[38px] tracking-[-0.28px] md:tracking-[0.32px] font-bold mb-2">
          {tagline}
        </h2>
        <div className="md:w-full text-base font-normal leading-6 text-grey-9 md:text-grey-8">
          <PortableText blocks={description} />
        </div>
        <div className="w-full mt-4">
          <LinkAngleRight
            href={button?.href ?? ''}
            className={clsx(
              'flex text-grey-9 rounded-lg align-baseline font-semibold leading-5  items-center lg:text-left transition-colors duration-150 text-base group',
            )}
            color="black"
            gtag_event="select_content"
            gtag_content_name={''}
            gtag_content_type={'position'}
            gtag_cta_button={button?.title}
          >
            {button?.title}{' '}
          </LinkAngleRight>
        </div>
      </div>
    </div>
  )
}
