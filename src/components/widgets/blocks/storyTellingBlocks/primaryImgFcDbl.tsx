import { SanityImage } from 'sanity-react-extra'
import PrimarySection from '../sections/primarySection'
import Image from 'next/image'
import { urlForImage } from '@/studio/lib/image'

export interface PrimaryImgFcDblProps {
  layout: 'content-left' | 'content-right'
  title: string
  tagline: string
  description: string
  link: CTAButton
  image1: SanityImage
  image2: SanityImage
}

export interface CTAButton {
  text: string
  href: string
}

const PrimaryImgFcDbl = ({
  title,
  tagline,
  description,
  link,
  target,
  btnType,
  arrowVisibility,
  theme,
  customStyle,
  size,
  arrowColor,
  image2,
  image1,
  logo,
  layout

}: any) => {
  return (
    <div className={`container mx-auto flex ${layout === "content-left" ? "md:flex-row-reverse" : "md:flex-row"
      } md: items-center flex-col-reverse gap-6 md:gap-8`}>
      <div className="max-w-[392px] lg:pr-8">
        <PrimarySection
          title={title}
          logo={logo}
          tagline={tagline}
          description={description}
          link={link}
          target={target}
          btnType={btnType}
          arrowVisibility={arrowVisibility}
          theme={theme}
          customStyle={customStyle}
          size={size}
          arrowColor={arrowColor}
        />
      </div>
      <div className="flex gap-4 md:gap-6">
        <div className="w-1/2">
          {image1 && (
            <Image
              src={urlForImage(image1).url()}
              width={392}
              height={588}
              alt={image1?.alt ?? ''}
              quality={100}
              className="aspect-[2/3] rounded-2xl"
              loading="eager"
            />
          )}
        </div>
        <div className="w-1/2 pt-6 md:pt-12">
          {image2 && (
            <Image
              src={urlForImage(image2).url()}
              width={392}
              height={588}
              alt={image2?.alt ?? ''}
              quality={100}
              className="aspect-[2/3] rounded-2xl"
              loading="eager"
            />
          )}
        </div>
      </div>
    </div>
  )
}

export default PrimaryImgFcDbl
