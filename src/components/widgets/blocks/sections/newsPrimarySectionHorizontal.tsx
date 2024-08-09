import EyeBrew from '../../shared/eyeBrew'
import ReactPortableText from '../../shared/reactPortableText'
import Title from '../../shared/title'
import BtnWithArrow from '../../shared/buttons/button/btnWithArrow'
import Image from 'next/image'
import { urlForImage } from '@/studio/lib/image'

export interface NewsPrimarySectionProps {
  title: string
  tagline: string
  description: any
  link?: CTAButton
  icon: any
  target: '_self' | '_blank' | '_parent' | '_top'
  btnType: 'primary' | 'secondary' | 'tertiary'
  arrowVisibility: boolean
  theme: 'light' | 'dark'
  customStyle: string
  size: 'medium' | 'small'
  arrowColor: 'white' | 'black'
}

export interface CTAButton {
  text: string
  href: string
}

const NewsPrimarySectionHorizontal = ({
  title,
  tagline,
  description,
  link,
  target,
  icon,
  btnType,
  arrowVisibility,
  theme,
  customStyle,
  size,
  arrowColor,
}: NewsPrimarySectionProps) => {
  return (
    <>
      {tagline && (
        <div className="w-full flex flex-col gap-2">
          {title && <EyeBrew title={title} theme={theme} />}
          <div className="flex flex-col lg:flex-row gap-2 lg:gap-[129px]">
            {tagline && (
              <Title
                headingType="h2"
                theme={theme}
                tagline={tagline}
                className="max-w-[312px] md:min-w-[312px]"
              />
            )}
            {(description || link?.text || icon) && (
              <div className="md:max-w-[392px] flex flex-col gap-4">
                {icon && (
                  <Image
                    src={urlForImage(icon).url()}
                    width={253}
                    height={72}
                    alt={icon?.alt ?? ''}
                    quality={100}
                    className="h-[72px]"
                    loading="eager"
                  />
                )}
                {description && (
                  <div className=" mt-[-45px]">
                    <ReactPortableText content={description} theme={theme} />
                  </div>
                )}
                {link?.text && (
                  <div className="w-full flex">
                    <BtnWithArrow
                      link={link}
                      target={target}
                      rel=""
                      btnType={btnType}
                      arrowVisibility={arrowVisibility}
                      theme={theme}
                      customStyle={customStyle}
                      size={size}
                      arrowColor={arrowColor}
                      gtag_event="select_content"
                      gtag_content_name={tagline}
                      gtag_content_type={title}
                      gtag_cta_button={link?.text}
                    />
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      )}
    </>
  )
}

export default NewsPrimarySectionHorizontal
