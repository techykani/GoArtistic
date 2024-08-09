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
  image3: SanityImage
}

export interface CTAButton {
  text: string
  href: string
}

const NewsPrimaryImg = ({
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
  image3,
  logo,
  layout,
}: any) => {
  return (
    <div className="px-6 md:px-[71px]">
      <div
        className={`container mx-auto flex ${
          layout === 'content-left' ? 'md:flex-row-reverse' : 'md:flex-row'
        } flex-col-reverse items-center  gap-8`}
      >
        <div className="max-w-[462px] text-center lg:text-left md:py-16">
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

          {image3 && (
            <Image
              src={urlForImage(image3).url()}
              width={266}
              height={242}
              alt={image3?.alt ?? ''}
              quality={100}
              className="w-[266px] md:hidden mx-auto pt-8"
              loading="eager"
            />
          )}
        </div>
        <div className="flex gap-4 md:gap-6 items-center lg:pt-0 pt-12">
          <div className="w-full md:pt-6">
            {image1 && (
              <Image
                src={urlForImage(image1).url()}
                width={349}
                height={216}
                alt={image1?.alt ?? ''}
                quality={100}
                className="aspect-[2/3] rounded-2xl lg:w-[349px] lg:h-[216px] w-[258px] h-[156px] shrink-0"
                loading="eager"
              />
            )}
          </div>
          <div className="w-full hidden md:block">
            {image2 && (
              <Image
                src={urlForImage(image2).url()}
                width={392}
                height={588}
                alt={image2?.alt ?? ''}
                quality={100}
                className="aspect-[2/3] rounded-2xl w-[291px] h-[320px] md:mt-[3rem]"
                loading="eager"
              />
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default NewsPrimaryImg
