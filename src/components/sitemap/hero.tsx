import { SlantedShape } from '@/components/ui'
import { useWindowSize } from '@/lib/hooks'
import { SanityImg } from 'sanity-react-extra'
import { imageUrlBuilder } from '@/sanity'
import React from 'react'
import clsx from 'clsx'
import { pageTitleStandard } from '@/lib/helpers'
import { useRouter } from 'next/router'

interface HeroProps {
  description?: string
  title?: string
  image?: ImageAlt
  slantColor?: string
  imageHeight?: number
  cta?: CTAButton
  breadcrumbTitle?: string
  slantClassName?: string
}

export const Hero: React.FC<HeroProps> = ({
  description,
  title,
  image,
  slantColor = 'bg-green-10',
  imageHeight = 400,
  cta,
  breadcrumbTitle,
  slantClassName,
}) => {
  const windowWidth = useWindowSize()?.width ?? 0
  const router = useRouter()

  return (
    <section className="container relative h-full mb-5 navbar-space">
      <SlantedShape
        className={clsx('!w-full absolute !h-[250px] lg:!h-[60vh]', slantColor, slantClassName)}
        slant="down-left"
        customValue={23}
      />

      <div className="relative z-20 pt-6">
        {/* <Breadcrumb title={breadcrumbTitle} /> */}
        {title && (
          <h1 className="mt-6 mb-2 font-medium text-center xl:text-head-1 text-res-head-1 text-heading">
            {title}
          </h1>
        )}
        {description && (
          <p
            className={clsx(
              'text-center max-w-3xl mx-auto text-body-l text-neutral-700',
              !image && 'mb-12',
            )}
          >
            {description}
          </p>
        )}

        {image && (
          <div className={clsx('flex justify-center', description ? 'mt-8 mb-6' : 'mt-6 mb-0')}>
            <SanityImg
              className="rounded-lg object-cover w-full lg:w-auto aspect-[16/9] md:aspect-auto"
              builder={imageUrlBuilder}
              image={image}
              height={windowWidth < 1024 ? 155 : imageHeight}
              alt={image.alt}
            />
          </div>
        )}
        {cta && (
          <button className="lg:hidden w-full bg-green-500 text-white py-4 rounded-[4px] text-button-sm font-semibold mb-10">
            {cta?.title}
          </button>
        )}
      </div>
    </section>
  )
}
