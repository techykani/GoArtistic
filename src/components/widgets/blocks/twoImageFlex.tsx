import { useWindowSize } from '@/lib/hooks'
import { imageUrlBuilder, PortableText } from '@/sanity'
import { SanityImg } from 'sanity-react-extra'
import EyeBrew from '@/components/widgets/shared/eyeBrew'
import Title from '@/components/widgets/shared/title'
import ReactPortableText from '@/components/widgets/shared/reactPortableText'

export interface HeroProps {
  title: string
  tagline: string
  points: Point[]
  description?: PortableText[]
}

export const TwoImageFlex: React.FC<HeroProps> = ({ title, tagline, description, points }) => {
  const windowWidth = useWindowSize()?.width ?? 0

  return (
    <div className="container mx-auto flex flex-col gap-8 md:gap-12">
      <div className="w-full flex flex-col gap-2">
        <EyeBrew title={title} theme='light' />

        <div className="flex flex-col lg:flex-row gap-2 lg:gap-[129px]">
          <Title headingType="h2" theme='light' tagline={tagline} className="max-w-[392px]" />
          <div className="max-w-[392px] mt-[-24px]">
            <ReactPortableText content={description} />
          </div>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row gap-6">
        {points.map((point) => (
          <div
            key={point.link?.text}
            className="w-full min-h-[468px] md:min-h-[500px] lg:w-1/2 rounded-xl flex items-end relative overflow-hidden cursor-pointer"
          >
            {/* banner background image */}
            <SanityImg
              className="w-full h-full absolute inset-0 z-[2] object-cover object-center"
              builder={imageUrlBuilder}
              image={windowWidth >= 639 ? point.icon : point.mobileIcon}
              height={windowWidth >= 768 ? 600 : 300}
              alt="image"
              loading="eager"
            />
            {/* gradient */}
            <div className={`w-full h-full absolute inset-0 z-[3] home-communities-gr`} />
            <div className=" pb-6 md:pb-9 px-6 md:px-8 relative z-20 flex flex-col gap-[8px] md:gap-[6px]">
              <Title tagline={point.link?.text} theme='dark' headingType="h4" />
              <p className="text-[16px] text-off-white leading-[24px] ">{point.shortDes}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
