import { LinkAngleRight } from '@/components/ui'
import { imageUrlBuilder } from '@/sanity'
import clsx from 'clsx'
import { SanityImage, SanityImg } from 'sanity-react-extra'
import EyeBrew from '../shared/eyeBrew'
import ReactPortableText from '../shared/reactPortableText'
import Title from '../shared/title'

export interface OneImageFlexHalfProps {
  title: string
  tagline: string
  image: SanityImage
  description: any
  button: CTAButton
  layout: 'content-left' | 'content-right'
}

export interface CTAButton {
  icon: SanityImage
  ctaButton: any
  title: string
  href: string
}

const OneImageFlexHalf = ({
  image,
  description,
  tagline,
  title,
  button,
  layout,
}: OneImageFlexHalfProps) => {
  return (
    <div
      className={`${
        layout == 'content-left' ? 'lg:flex-row' : ' lg:flex-row-reverse'
      } container mx-auto flex flex-col lg:items-center gap-6`}
    >
      {/* image section */}
      {image && (
        <div className="w-full lg:w-1/2">
          <SanityImg
            className="w-full md:min-h-[500px] rounded-[16px] object-cover"
            builder={imageUrlBuilder}
            image={image}
            alt={image.alt ?? 'image'}
            loading="eager"
          />
        </div>
      )}
      {/* content section */}
      <div
        className={`w-full lg:w-1/2 flex flex-col gap-4 ${
          layout == 'content-left' ? 'lg:pl-8' : ' lg:pr-8'
        }`}
      >
        <div className="w-full flex flex-col gap-2">
          {title && <EyeBrew title={title} theme="light" />}
          {tagline && <Title headingType="h2" tagline={tagline} theme="light" />}
          {description && (
            <div className="mt-[-24px]">
              <ReactPortableText content={description} />
            </div>
          )}
        </div>
        {button?.title && (
          <div className="w-full py-[14px]">
            <LinkAngleRight
              href={''}
              className={clsx(
                'flex bg-surface-light-neutral-1 text-grey-dark rounded-lg align-baseline font-semibold  items-center lg:text-left transition-colors duration-150 text-base group',
              )}
              color="black"
              gtag_event="select_content"
              gtag_content_name={tagline}
              gtag_content_type={title}
              gtag_cta_button={button?.title}
            >
              {button?.title}
            </LinkAngleRight>
          </div>
        )}
      </div>
    </div>
  )
}

export default OneImageFlexHalf
