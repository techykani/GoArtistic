import MessageFromCEO from '@/components/our-story/messageFromCEO'
import { CarouselListing } from '@/components/our-story/carouselListing'
import { pageQuery } from '@/lib/query'
import { sanityStaticProps, useSanityQuery } from '@/sanity'
import { GetStaticProps, GetStaticPropsContext } from 'next'
import { groq } from 'next-sanity'
import { SanityProps } from 'next-sanity-extra'
import { renderObjectArray } from 'sanity-react-extra'
import OurMileStone from '@/components/our-story/ourMilestone'
import PageBanner from '@/components/widgets/blocks/banners/pageBanner'

const query = pageQuery(groq`
   *[_type == 'ourStory'][0] {
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

export default function OurStory(props: SanityProps) {
  const {
    page: { sections },
  } = useSanityQuery(query, props).data

  return (
    <main className="overflow-visible">
      {renderObjectArray(sections, {
        'ourStory.pageBanner': PageBanner,
        'ourStory.message': MessageFromCEO,
        'career.community': CarouselListing,
        'ourStory.milestones': OurMileStone,
      })}
    </main>
  )
}
