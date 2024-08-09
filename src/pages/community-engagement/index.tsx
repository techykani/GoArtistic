import { sanityStaticProps, useSanityQuery } from '@/sanity'
import { groq } from 'next-sanity'
import { renderObjectArray } from 'sanity-react-extra'
import { GetStaticProps, GetStaticPropsContext } from 'next'
import { SanityProps } from 'next-sanity-extra'
import { pageQuery } from '@/lib/query'
import { CommunityTabs } from '@/components/community-engagement/communityTabs'
import { EventHighlights } from '@/components/community-engagement/eventHighlights'
import { substainabilityApproach } from '@/components/community-engagement/substainabilityApproach'
import PageBanner from '@/components/widgets/blocks/banners/pageBanner'


const query = pageQuery(groq`
   *[_type == 'communityEngagement'][0] {
		...,
		sections[] {
			...,
      media[] -> {
        _id,
        title, slug {current},primaryImg,
        seo{
          description
        }
      }
		}
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

export default function CommunityEngagement(props: SanityProps) {
  const {
    page: { sections },
  } = useSanityQuery(query, props).data
  return (
    <main className="overflow-visible">
      {renderObjectArray(sections, {
        'communityEngagement.landingHero': PageBanner,
        'communityEngagement.communityTabs': CommunityTabs,
        'communityEngagement.eventHighlights': EventHighlights,
        'communityEngagement.substainabilityApproach': substainabilityApproach,
      })}
    </main>
  )
}
