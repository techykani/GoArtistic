import { LinkAngleRight } from '@/components/ui'
import clsx from 'clsx'
import { SanityImage } from 'sanity-react-extra'
import EyeBrew from '../../shared/eyeBrew'
import ReactPortableText from '../../shared/reactPortableText'
import Title from '../../shared/title'
import BtnWithArrow from '../../shared/buttons/button/btnWithArrow'
import EyeBrow from '../../shared/eyeBrew'
import Image from 'next/image'
import { urlForImage } from '@/studio/lib/image'

export interface PrimarySectionProps {
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
  arrowColor: 'white' | 'blue' | 'black'
  logo: SanityImage
}

export interface CTAButton {
  text: string
  href: string
}

const PrimarySection = ({
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
  logo,
}: PrimarySectionProps) => {
  return (
    <div className="flex flex-col gap-4">
      <div className="w-full flex flex-col gap-2">
        {title && <EyeBrow title={title} theme={theme} className="" />}

        {logo && (
          <Image
            src={urlForImage(logo).url()}
            width={118}
            height={118}
            alt={logo?.alt ?? ''}
            quality={100}
            className="rounded-2xl"
            loading="eager"
          />
        )}

        {tagline && <Title headingType="h2" tagline={tagline} theme={theme} />}
        {description && (
          <div className="mt-[-24px]">
            <ReactPortableText content={description} theme={theme} />
          </div>
        )}
      </div>
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
            gtag_cta_button={link.text}
          />
        </div>
      )}
    </div>
  )
}

export default PrimarySection
