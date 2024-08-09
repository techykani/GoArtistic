import { useWindowSize } from '@/lib/hooks'
import { imageUrlBuilder, PortableText } from '@/sanity'
import { SanityImage, SanityImg } from 'sanity-react-extra'
import EyeBrew from '../shared/eyeBrew'
import Title from '../shared/title'

export interface PageBannerProps {
  title: string
  tagline: string
  mobileImage: SanityImage
  desktopImage: SanityImage
}

const PageBanner = ({ title, tagline, mobileImage, desktopImage }: PageBannerProps) => {
  const windowWidth = useWindowSize()?.width ?? 0

  return (
    <>
      <section
        className={`${windowWidth >= 768 ? 'px-[71px] flex items-center' : 'px-[24px] flex items-end pb-[32px]'
          } relative h-[360px]`}
      >
        {/* banner background image */}
        {desktopImage || mobileImage ? (
          <SanityImg
            className="w-full h-full absolute inset-0 z-[-1] object-cover object-right"
            builder={imageUrlBuilder}
            image={windowWidth >= 768 ? desktopImage : mobileImage}
            height={windowWidth >= 768 ? 600 : 300}
            alt="image"
            loading="eager"
          />
        ) : (
          ''
        )}
        {/* gradient */}
        <div className={`w-full h-full absolute inset-0 z-[2] discover-our-brands-hero-gr`} />
        {/* content */}
        <div className="container mx-auto relative z-30 ">
          <div
            className={`${windowWidth >= 768 ? 'w-[496px]' : ''} flex flex-col gap-[6px] md:gap-2`}
          >
            {title && <EyeBrew title={title} theme='dark' />}
            {tagline && <Title headingType="h1" theme='dark' tagline={tagline} />}
          </div>
        </div>
      </section>
    </>
  )
}

export default PageBanner
