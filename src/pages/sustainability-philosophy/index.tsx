import { sanityStaticProps, useSanityQuery } from '@/sanity'
import { groq } from 'next-sanity'
import { renderObjectArray } from 'sanity-react-extra'
import { GetStaticProps, GetStaticPropsContext } from 'next'
import { SanityProps } from 'next-sanity-extra'
import { pageQuery } from '@/lib/query'
import { TitleDescription } from '@/components/sustainability-philosophy/title-description'
import { GuidingPrinciple } from '@/components/sustainability-philosophy/guidingPrinciple'
import { InspirationTab } from '@/components/sustainability-philosophy/inspirationTab'
import { Reports } from '@/components/sustainability-philosophy/reports'
import { EventHighlights } from '@/components/sustainability-philosophy/eventHighlights'
import PageBanner from '@/components/widgets/blocks/banners/pageBanner'

const query = pageQuery(groq`
   *[_type == 'sustainability'][0] {
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

export default function Home(props: SanityProps) {
  const {
    page: { sections },
  } = useSanityQuery(query, props).data

  return (
    <main className="overflow-visible">
      {renderObjectArray(sections, {
        'sustainability.landingHero': PageBanner,
        'sustainability.titleDescription': TitleDescription,
        'sustainability.guidingPrinciple': GuidingPrinciple,
        // 'sustainability.inspirationTabs': InspirationTab,
        // 'communityEngagement.eventHighlights': EventHighlights,
        // 'sustainability.reports': Reports,
      })}
    </main>
  )
}
