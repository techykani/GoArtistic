import { SanityImg } from 'sanity-react-extra'
import { PortableText, imageUrlBuilder } from '@/sanity'
import clsx from 'clsx'
import { useWindowSize } from '@/lib/hooks'
import PrimarySection from '../sections/primarySection'
import Image from 'next/image'
import { urlForImage } from '@/studio/lib/image'

export interface SecondaryFlexProps {
  title: string
  tagline: string
  description: any
  link: CTAButton
  target: '_self' | '_blank' | '_parent' | '_top'
  btnType: 'primary' | 'secondary' | 'tertiary'
  arrowVisibility: boolean
  theme: 'light' | 'dark'
  customStyle: string
  size: 'medium' | 'small'
  arrowColor: 'white' | 'black'
  image: any
}

export interface CTAButton {
  text: string
  href: string
}

export const SecondaryFlex = ({
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
  image,
  layout,
  contentWidth,
  secondaryImg,
}: any) => {
  return (
    <>
      <div
        className={`${contentWidth} mx-auto flex flex-col md:items-center ${layout == 'content-right' ? 'md:flex-row' : 'md:flex-row-reverse'
          } gap-6 `}
      >
        <div className="w-full h-full md:w-[50%] rounded-[16px] overflow-hidden">
          <div className="w-full relative">
            {image && (
              <Image
                width={600}
                height={500}
                src={urlForImage(image).url()}
                className="aspect-[6/5] object-cover"
                alt={image.alt ?? 'image'}
                loading="lazy"
              />
            )}
            {secondaryImg && (
              <div className="lg:w-[144px] w-[120px] lg:h-[96px] h-[80px] bg-off-white px-3 py-2 absolute right-[18px] bottom-[18px] rounded-lg overflow-hidden border-[1px] border-[#E6E6E6] flex justify-center items-center">
                <SanityImg
                  builder={imageUrlBuilder}
                  image={secondaryImg}
                  alt={secondaryImg?.alt ?? 'image'}
                  loading="eager"
                  width={144}
                  className="rounded-lg w-full"
                />
              </div>
            )}
          </div>
        </div>
        <div
          className={`w-full md:w-[50%] flex flex-col gap-4 ${contentWidth == 'max-w-[1016px]' && layout == 'content-right' && 'md:pl-12'
            } ${contentWidth == 'max-w-[1016px]' && layout == 'content-left' && 'md:pr-12'} 
                ${contentWidth == 'container' && layout == 'content-left' && 'md:pr-8'}    ${contentWidth == 'container' && layout == 'content-right' && 'md:pl-8'
            }`}
        >
          <PrimarySection
            title={title}
            tagline={tagline}
            description={description}
            link={link}
            target={target}
            logo=""
            btnType={btnType}
            arrowVisibility={arrowVisibility}
            theme={theme}
            customStyle={customStyle}
            size={size}
            arrowColor={arrowColor}
          />
        </div>
      </div>
    </>
  )
}
