import React, { useCallback } from 'react'
import { GetStaticProps, GetStaticPropsContext } from 'next'
// sanity
import { groq } from 'next-sanity'
import { sanityStaticProps, useSanityQuery } from '@/sanity'
import { renderObjectArray, SanityImg } from 'sanity-react-extra'
import { SanityProps } from 'next-sanity-extra'
// lib
import { pageQuery } from '@/lib/query'
import PageBanner from '@/components/widgets/blocks/banners/pageBanner'
import OurNetwork from '@/components/news-highlights/ourNetwork'
import Milestone from '@/components/news-highlights/milestone'
import { HealthierNations } from '@/components/news-highlights/HealthierNation'
import { Locations } from '@/components/news-highlights/Locations'
import { HealthierAsCommunity } from '@/components/news-highlights/healthierAsCommunity'

const query = pageQuery(groq`
   *[_type == 'newsAndHighlights'][0]{
    ...,
    sections[] {
			...,
       points[] {
      ...,
      "Icon": Icon.asset->url,
      "video": video.asset->url,
    },
		},
   }
`)

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

const NewsAndHighlights = (props: SanityProps) => {
  const { page } = useSanityQuery(query, props).data
  const { sections } = page || { sections: [] }

  if (sections) {
    return (
      <>
        {renderObjectArray(sections, {
          'news.pageBanner': PageBanner,
          'news.networkNews': OurNetwork,
          'news.titleDescriptionLogo': Milestone,
          'news.healthierNations': HealthierNations,
          'news.programmes': Locations,
          'news.healthierAsCommunity': HealthierAsCommunity,
        })}
      </>
    )
  }
  return <></>
}
export default NewsAndHighlights
