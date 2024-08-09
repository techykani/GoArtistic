import { useWindowSize } from '@/lib/hooks'
import { LandingPageHero } from '../common/blocks/landing-page-hero'
import { isEmpty } from 'lodash'

export const DiscoverHero: React.FC<any> = ({ title, tagline, image, mobileImage }) => {
  const windowWidth = useWindowSize()?.width ?? 0
  const img = windowWidth > 700 ? image : !isEmpty(mobileImage) ? mobileImage : image
  return (
    <>
      <LandingPageHero title={title} tagline={tagline} image={img} />
    </>
  )
}
