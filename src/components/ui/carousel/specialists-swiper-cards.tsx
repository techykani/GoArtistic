import { Link, LinkAngleRight } from '@/components/ui'
import { useWindowSize } from '@/lib/hooks'
import { imageUrlBuilder } from '@/sanity'
import { SanityImage, SanityImg } from 'sanity-react-extra'
import { FaArrowRight } from 'react-icons/fa'
import clsx from 'clsx'
import { LinkAngleRightBtn } from '../link-angle-right-btn'

export interface HeroProps {
  title: string
  tagline: string
  primaryImg: SanityImage
  secondaryImg: SanityImage
  description?: PortableText[]
  link: any
}

export const SpecialistsSwiperCards: React.FC<HeroProps> = ({
  title,
  tagline,
  primaryImg,
  secondaryImg,
  link,
}) => {
  const windowWidth = useWindowSize()?.width ?? 0

  return (
    <div className="w-full ">
      <div className={`w-full rounded-xl bg-[white] overflow-hidden flex flex-col gap-6 md:gap-8`}>
        <div className="w-full h-[263px] md:h-[448px] md:max-h-[448px] relative ">
          {primaryImg && (
            <SanityImg
              builder={imageUrlBuilder}
              image={primaryImg}
              width={400}
              alt={primaryImg?.alt ?? 'image'}
              loading="eager"
              className="h-full object-cover rounded-xl overflow-hidden"
            />
          )}

          <div className="w-[96px] md:w-[128px] h-[96px] md:h-[128px] absolute bottom-[-30px] right-6 flex items-center justify-center rounded-full">
            {secondaryImg && (
              <SanityImg
                builder={imageUrlBuilder}
                image={secondaryImg}
                width={400}
                alt={secondaryImg?.alt ?? 'image'}
                loading="eager"
                className="h-full"
              />
            )}
          </div>
        </div>
        {title && tagline && (
          <div className="w-full flex flex-col gap-2">
            <div className="w-full">
              {title && (
                <LinkAngleRight
                  href={`/services/${link?.current}`}
                  className={clsx(
                    'flex bg-transparent text-grey-dark rounded-lg align-baseline font-semibold items-center lg:text-left transition-colors duration-150 text-base md:text-xl group leading-5 md:leading-[24px]',
                  )}
                  color="black"
                  gtag_event="select_content"
                  gtag_content_name={tagline}
                  gtag_content_type={title}
                  gtag_cta_button={title}
                >
                  {title}{' '}
                </LinkAngleRight>
              )}
            </div>
            <p className="text-grey-9 text-base leading-6">{tagline}</p>
          </div>
        )}
      </div>
    </div>
  )
}
