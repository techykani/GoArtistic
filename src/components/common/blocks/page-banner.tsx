import { useWindowSize } from '@/lib/hooks'
import { imageUrlBuilder, PortableText } from '@/sanity'
import { SanityImage, SanityImg } from 'sanity-react-extra'

export interface HeroProps {
  title: string
  tagline: string
  mobileImage: SanityImage
  desktopImage: SanityImage
}

export const PageBanner: React.FC<HeroProps> = ({ title, tagline, mobileImage, desktopImage }) => {
  const windowWidth = useWindowSize()?.width ?? 0

  return (
    <>
      {windowWidth >= 720 ? (
        <section className="px-[71px] py-[104px] relative">
          {/* banner background image */}
          <SanityImg
            className="w-full h-full absolute inset-0 z-[-1] object-cover object-right"
            builder={imageUrlBuilder}
            image={desktopImage}
            height={windowWidth >= 768 ? 600 : 300}
            alt="image"
            loading="eager"
          />
          {/* gradient */}
          <div className={`w-full h-full absolute inset-0 z-[2] discover-our-brands-hero-gr`} />

          <div className="container mx-0 relative z-30 ">
            <div className="w-[496px] flex flex-col gap-2">
              <p className="text-off-white text-xs font-bold leading-[18px] tracking-[2.4px] uppercase">
                {title}
              </p>
              <h2 className="w-full text-off-white text-[48px] font-semibold leading-[56px] tracking-[-0.48px] mb-0 whitespace-pre-line">
                {tagline}
              </h2>
            </div>
          </div>
        </section>
      ) : (
        <section className="px-6 pt-[156px] pb-[32px]  relative">
          {/* banner background image */}
          <SanityImg
            className="w-full h-full absolute inset-0 z-[-1] object-cover object-center"
            builder={imageUrlBuilder}
            image={mobileImage}
            height={windowWidth >= 768 ? 600 : 300}
            alt="image"
            loading="eager"
          />
          {/* gradient */}
          <div className={`w-full h-full absolute inset-0 z-[2] discover-our-brands-hero-gr`} />
          <div className="container mx-auto relative z-30 ">
            <div className=" flex flex-col gap-2">
              <p className="text-off-white text-xs font-bold leading-[18px] tracking-[2.4px] uppercase">
                {title}
              </p>
              <h2 className="w-full text-off-white text-[36px]  font-semibold leading-[44px]  tracking-[-0.36px]">
                {tagline}
              </h2>
            </div>
          </div>
        </section>
      )}
    </>
  )
}
