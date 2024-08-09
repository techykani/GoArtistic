import { DiscoverHero } from '@/components/discover-our-brands/discover-hero'
import { InsightListing } from '@/components/insights/insightListing'
import { SharingMoreMedia } from '@/components/insights/sharingMoreMedia'
import PageBanner from '@/components/widgets/blocks/banners/pageBanner'
import Enquiry from '@/components/widgets/blocks/enquiry'
import { pageQuery } from '@/lib/query'
import { sanityStaticProps, useSanityQuery } from '@/sanity'
import { GetStaticProps, GetStaticPropsContext } from 'next'
import { groq } from 'next-sanity'
import { SanityProps } from 'next-sanity-extra'
import { useCallback } from 'react'
import { renderObjectArray } from 'sanity-react-extra'

const query = pageQuery(groq`
   *[_type == 'insightScreen'][0] {
		...,
		sections[] {
			...,
		},
    "insights": *[_type == "insights"]  {
			...,
      "primaryImg": primaryImg.asset->url,
		},
    "media": *[_type == "media"] [0..2]  {
			...,
      "primaryImg": primaryImg.asset->url,
		},
}`)

export const getStaticProps: GetStaticProps = async (context: GetStaticPropsContext) => ({
  props: await sanityStaticProps({
    context,
    query,
    params: {
      locale: 'en',
      defaultLocale: 'en',
    },
  }),
  revalidate: 10,
})

export default function Insights(props: SanityProps) {
  const {
    page: { sections, insights, media },
  } = useSanityQuery(query, props).data

  return (
    <main className="overflow-visible">
      {renderObjectArray(sections, {
        'mediaScreen.landingHero': PageBanner,
        'mediaScreen.titleDescriptionFilters': useCallback(
          (props: any) => <InsightListing filterDropdownOptions={props} media={insights} />,
          [insights],
        ),
      })}
      {/* <SharingMoreMedia insights={media} /> */}
      <Enquiry
        bannerImage={sections[2].bannerImage}
        smallBannerImage={sections[2].smallBannerImage}
        title={sections[2].title}
        description={sections[2].description}
        cta={sections[2].cta}
      />
    </main>
  )
}
