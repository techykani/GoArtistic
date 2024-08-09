import { useWindowSize } from '@/lib/hooks'
import { PortableText } from '@/sanity'
import { FaArrowRight } from 'react-icons/fa'
import Link from 'next/link'
import { LinkAngleRight } from '@/components/ui'
import clsx from 'clsx'

export interface HeroProps {
  title: string
  tagline: string
  cta: CTAButton
  description: string
  classNameValues?: string
}

export const TitleTaglineDescriptionCta: React.FC<HeroProps> = ({
  title,
  tagline,
  description,
  cta,
  classNameValues,
}) => {
  const windowWidth = useWindowSize()?.width ?? 0

  return (
    <div className={`z-20 relative text-off-white mx-0  ${classNameValues}`}>
      <div className="w-full pb-[48px]">
        <p className="text-xs font-bold leading-[18px] md:leading-[28px] text-off-white tracking-[2.16px] uppercase mb-2 title-text">
          {title}
        </p>
        <div className=" md:flex flex-col lg:flex-row lg:gap-[100px] lg2:gap-[129px] pr-6 md:pr-0">
          <h2 className="w-full text-[28px] md:text-[36px] text-off-white font-semibold leading-[36px] md:leading-[44px] tracking-[-0.28px] md:tracking-[-0.36px] mb-2 md:mb-4 tagline-text lg:w-[391px]">
            {tagline}
          </h2>
          <div className="md:mt-auto">
            <div className="md:max-w-[400px] text-base text-light-neutral  font-normal leading-[24px] mb-4 description-text">
              <PortableText blocks={description} />
            </div>
            {cta && (
              <div className="w-full">
                <LinkAngleRight
                  href={cta?.href ?? ''}
                  className={clsx(
                    'flex pr-6 text-off-white bg-transparent rounded-lg align-baseline font-semibold items-center lg:text-left transition-colors duration-150 text-base group leading-5',
                  )}
                  color="white"
                  gtag_event="select_content"
                  gtag_content_name={tagline}
                  gtag_content_type={title}
                  gtag_cta_button={cta?.title}
                >
                  {cta?.title}{' '}
                </LinkAngleRight>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
