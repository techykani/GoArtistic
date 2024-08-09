import { useWindowSize } from '@/lib/hooks'
import { PortableText } from '@/sanity'
import { FaArrowRight } from 'react-icons/fa'
import Link from 'next/link'
import { LinkAngleRight } from '@/components/ui'
import clsx from 'clsx'
import EyeBrew from '../../shared/eyeBrew'
import Title from '../../shared/title'

export interface CarouselContentProps {
  title?: string
  tagline?: string
  button?: CTAButton
  description?: string
  contentWidth?: string
  headingRef?: any
  theme?: 'dark' | 'light'
}

export const CarouselContent = ({
  title,
  tagline,
  description,
  button,
  contentWidth,
  headingRef,
  theme,
}: CarouselContentProps) => {
  const windowWidth = useWindowSize()?.width ?? 0

  return (
    <div ref={headingRef} className={`${contentWidth} mx-auto flex flex-col gap-2`}>
      {title && <EyeBrew title={title} theme={theme} className="" />}
      <div className="flex flex-col lg:flex-row gap-2 lg:gap-[129px]">
        {tagline && (
          <Title headingType="h2" theme={theme} tagline={tagline} className="lg:w-[391px]" />
        )}
        {description && (
          <div className="md:mt-auto">
            <div
              className={`md:max-w-[391px] text-base  font-normal leading-[24px] description-text ${
                theme == 'light' ? 'text-light-neutral' : 'text-grey-9'
              }`}
            >
              <PortableText blocks={description} />
            </div>
            {button && (
              <div className="w-full mt-4 py-[14px]">
                <LinkAngleRight
                  href={button?.href ?? ''}
                  className={clsx(
                    `flex pr-6 ${
                      theme == 'light' ? 'text-light-neutral' : 'text-grey-9'
                    } bg-transparent rounded-lg align-baseline font-semibold items-center lg:text-left transition-colors duration-150 text-base group leading-5`,
                  )}
                  color={theme == 'light' ? 'white' : 'black'}
                  gtag_event="select_content"
                  gtag_content_name={''}
                  gtag_content_type={''}
                  gtag_cta_button={button.title}
                >
                  {button?.title}{' '}
                </LinkAngleRight>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  )
}
