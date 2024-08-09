import Image from 'next/image'
import { SanityImage } from 'sanity-react-extra'
import { urlForImage } from '@/studio/lib/image'
import PrimarySection from '../sections/primarySection'

export interface PrimaryTxtFcProps {
  title: string
  tagline: string
  image: SanityImage
  description: any
  link: CTAButton
  layout: 'content-left' | 'content-right'
  loading: 'lazy' | 'eager'
  imgQuality: number
}

export interface CTAButton {
  text: string
  href: string
}

const PrimaryTxtFc = ({
  title,
  tagline,
  image,
  description,
  link,
  layout,
  target,
  btnType,
  arrowVisibility,
  theme,
  customStyle,
  size,
  arrowColor,
  contentWidth,
  loading,
  imgQuality,
}: any) => {
  return (
    <div
      className={`${
        layout == 'content-right' ? 'md:flex-row' : ' md:flex-row-reverse'
      } container mx-auto flex flex-col md:items-center gap-6`}
    >
      {/* image section */}
      {image && (
        <div className="w-full md:w-1/2 lg:max-w-[496px] lg:min-w-[496px]">
          <Image
            src={urlForImage(image).url()}
            width={496}
            height={413}
            alt=""
            loading={loading}
            quality={imgQuality}
            className="w-full aspect-[6/5] rounded-xl"
          />
        </div>
      )}
      {/* content section */}
      <div
        className={`w-full md:w-1/2 lg:w-full flex flex-col gap-4 ${
          layout == 'content-right' ? 'xl:pl-12' : ' xl:pr-12'
        }`}
      >
        <PrimarySection
          title={title}
          tagline={tagline}
          logo=""
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
    </div>
  )
}

export default PrimaryTxtFc
