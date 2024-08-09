import { SanityImg } from 'sanity-react-extra'
import { imageUrlBuilder } from '@/sanity'
import { useRouter } from 'next/router'
import { useWindowSize } from '@/lib/hooks'
import Link from 'next/link'
import EyeBrew from '@/components/widgets/shared/eyeBrew'
import Title from '@/components/widgets/shared/title'
import PageBanner from '@/components/widgets/blocks/banners/pageBanner'

export const Hero: React.FC<any> = ({
  bannerImage,
  smallBannerImage,
  tagline,
  title,
  secondaryTitle,
  secondaryDescription,
  classNameValues,
}) => {
  const router = useRouter()
  const windowWidth = useWindowSize()?.width ?? 0

  return (
    <>
      <div className={`block`}>
        <div>
          <PageBanner title={title} tagline={tagline} mobileImage={smallBannerImage} desktopImage={bannerImage} />
        </div>
        {(secondaryTitle || secondaryDescription) && (
          <div className="px-6 md:px-[71px] py-12 md:py-16  bg-secondary-deep text-off-white">
            <div className="md:container w-full md:w-[808px] flex justify-center flex-col items-center">
              <h1 className="text-[28px] md:text-4xl font-semibold leading-9 md:leading-[44px] tracking-[-0.28px] md:tracking-[-0.36px] text-center ">
                {secondaryTitle}
              </h1>
              <p className="pt-4 text-base text-center text-light-neutral leading-6 font-normal">
                {secondaryDescription}
              </p>
            </div>
          </div>
        )}
      </div>
    </>
  )
}
