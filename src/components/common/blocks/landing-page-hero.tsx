import { useWindowSize } from '@/lib/hooks'
import { imageUrlBuilder, PortableText } from '@/sanity'
import { SanityImage, SanityImg } from 'sanity-react-extra'


export interface HeroProps {
  title: string
  tagline: string
  image: SanityImage
}

export const LandingPageHero: React.FC<HeroProps> = ({ title, tagline, image }) => {
  const windowWidth = useWindowSize()?.width ?? 0

  return (
    <section className="px-6 md:px-[71px] pt-[156px] pb-[32px] lg:py-[104px] relative">
      {/* banner background image */}
      {image && (
        <SanityImg
          className="w-full h-full absolute inset-0 z-[-1] object-cover object-center"
          builder={imageUrlBuilder}
          image={image}
          height={windowWidth >= 768 ? 600 : 300}
          alt="image"
          loading="eager"
        />
      )}

      {/* gradient */}
      <div className={`w-full h-full absolute inset-0 z-[2] discover-our-brands-hero-gr`} />
      <div className="container mx-auto relative z-30 flex flex-col lg:flex-row gap-8">
        <div className="w-full flex flex-col">
          <div className="lg:w-[496px]">
            <p className="text-off-white text-xs font-bold leading-[18px] tracking-[2.4px] uppercase mb-[6px] md:mb-2">
              {title}
            </p>
            <h2 className="w-[312px] md:w-full text-off-white text-[36px] md:text-[48px] font-semibold leading-[44px] md:leading-[56px] tracking-[-0.36px] md:tracking-[-0.48px] mb-4 md:mb-0">
              {tagline}
            </h2>
          </div>
        </div>
      </div>
    </section>
  )
}
