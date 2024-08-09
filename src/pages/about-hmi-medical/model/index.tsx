import React from 'react'

// next
import { GetStaticProps, GetStaticPropsContext } from 'next'
// next

// sanity
import { groq } from 'next-sanity'
import { sanityStaticProps, useSanityQuery } from '@/sanity'
import { renderObjectArray } from 'sanity-react-extra'
import { SanityProps } from 'next-sanity-extra'
import { TitleDescription } from '@/components/medical-hospitality/title-description'
// sanity

// lib
import { pageQuery } from '@/lib/query'
import PageBanner from '@/components/widgets/blocks/banners/pageBanner'
import HealthBenefitsSec from '@/components/corporateCare/healthBenefits'
import Core from '@/components/mission-and-vision/core'

import RapidRelief from '@/components/day-surgery/rapidRelief'
import { RelatedInsights } from '@/components/mission-and-vision/relatedInsights'

// lib

const query = pageQuery(groq`
   *[_type == 'model'][0]{
    ...,
    sections[] {
			...,
     
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

const Model = (props: SanityProps) => {
  const {
    page: { sections },
  } = useSanityQuery(query, props).data || {}

  return (
    <>
      {renderObjectArray(sections, {
        'model.pageBanner': PageBanner,
        'model.titleDescription': TitleDescription,
        'model.endoscopy': RapidRelief,
        'model.might': RelatedInsights,
      })}
    </>
  )
}

export default Model
