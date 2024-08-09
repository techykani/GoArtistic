import { useWindowSize } from '@/lib/hooks'
import { SanityImage } from 'sanity-react-extra'
import Title from '../../shared/title'
import Image from 'next/image'
import EyeBrow from '../../shared/eyeBrew'
import { urlForImage } from '@/studio/lib/image'

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
        className={`relative h-[360px] md:flex md:items-center flex items-end px-[24px] py-[30px] md:p-[71px]`}
      >
        <div className="w-full h-full absolute inset-0 z-[0] pageBanner_bg_gradient">
          {/* banner background image */}
          {(mobileImage || desktopImage) && (
            <Image
              priority
              src={urlForImage(windowWidth >= 768 ? desktopImage : mobileImage).url()}
              width={1366}
              height={768}
              alt={windowWidth >= 768 ? desktopImage?.alt ?? 'image' : mobileImage?.alt ?? 'image'}
              className="inset-0 object-cover h-full w-full md:object-right"
            />
          )}
        </div>

        <div className="container mx-auto z-10">
          <div className={`md:w-[496px] flex flex-col gap-[6px] md:gap-2`}>
            {title && <EyeBrow title={title} theme="dark" className="banner_textshadows" />}
            {tagline && (
              <Title
                headingType="h1"
                theme="dark"
                tagline={tagline}
                className="banner_textshadows"
              />
            )}
          </div>
        </div>
      </section>
    </>
  )
}

export default PageBanner
