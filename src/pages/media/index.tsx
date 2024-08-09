import { SharingMoreMedia } from '@/components/media/sharingMoreMedia'
import { MediaListing } from '@/components/media/mediaListing'
import { pageQuery } from '@/lib/query'
import { sanityStaticProps, useSanityQuery } from '@/sanity'
import { GetStaticProps, GetStaticPropsContext } from 'next'
import { groq } from 'next-sanity'
import { SanityProps } from 'next-sanity-extra'
import { useCallback } from 'react'
import { renderObjectArray } from 'sanity-react-extra'
import PageBanner from '@/components/widgets/blocks/banners/pageBanner'
import Enquiry from '@/components/widgets/blocks/enquiry'

const query = pageQuery(groq`
   *[_type == 'mediaScreen'][0] {
		...,
		sections[] {
			...,
		},
    "media": *[_type == "media"] {
			...,
      // "primaryImg": primaryImg.asset->url,
		},
    "insights": *[_type == "insights"] [0..2]  {
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

export default function Media(props: SanityProps) {
  const {
    page: { sections, media, insights },
  } = useSanityQuery(query, props).data

  return (
    <main className="overflow-visible">
      {renderObjectArray(sections, {
        'mediaScreen.landingHero': PageBanner,
        'mediaScreen.titleDescriptionFilters': useCallback(
          (props: any) => <MediaListing filterDropdownOptions={props} media={media} />,
          [media],
        ),
      })}
      {/* <SharingMoreMedia insights={insights} /> */}
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
