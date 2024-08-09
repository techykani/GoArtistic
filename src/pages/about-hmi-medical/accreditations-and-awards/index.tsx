import { pageQuery } from '@/lib/query'
import { sanityStaticProps, useSanityQuery } from '@/sanity'
import { GetStaticProps, GetStaticPropsContext } from 'next'
import { groq } from 'next-sanity'
import { SanityProps } from 'next-sanity-extra'
import { renderObjectArray } from 'sanity-react-extra'
import { DiscoverHero } from '@/components/discover-our-brands/discover-hero'
import { AccreditationsAndAwardsPage } from '@/components/accreditations/accreditations'
import PageBanner from '@/components/widgets/blocks/banners/pageBanner'

const query = pageQuery(groq`
   *[_type == 'accreditations'][0] {
		...,
		sections[] {
			...,
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
        'accreditations.landingHero': PageBanner,
        'accreditations.accreditationsTabs': AccreditationsAndAwardsPage,
      })}
    </main>
  )
}
