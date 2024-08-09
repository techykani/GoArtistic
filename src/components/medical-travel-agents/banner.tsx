import { useWindowSize } from '@/lib/hooks'
import { LandingPageHero } from '../common/blocks/landing-page-hero'
import { isEmpty } from 'lodash'

export const Banner: React.FC<any> = ({ bannerImage, smallBannerImage, tagline, title }) => {
  const windowWidth = useWindowSize()?.width ?? 0
  const img =
    windowWidth > 700 ? bannerImage : !isEmpty(smallBannerImage) ? smallBannerImage : bannerImage;    
  return (
    <>
      <LandingPageHero title={title} tagline={tagline} image={img} />
    </>
  )
}
