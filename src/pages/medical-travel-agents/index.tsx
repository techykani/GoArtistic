import React, { useCallback } from 'react'

// next
import { GetStaticProps, GetStaticPropsContext } from 'next'
// next

// sanity
import { groq } from 'next-sanity'
import { sanityStaticProps, useSanityQuery } from '@/sanity'
import { renderObjectArray, SanityImg } from 'sanity-react-extra'
import { SanityProps } from 'next-sanity-extra'
// sanity

// lib
import { pageQuery } from '@/lib/query'

import { About } from '@/components/medical-travel-agents/about'
import PageBanner from '@/components/widgets/blocks/banners/pageBanner'
import Enquiry from '@/components/widgets/blocks/enquiry'
// lib

const query = pageQuery(groq`
*[_type == 'medicalTravelAgentsPage'][0] {
  ...,
  sections[] {
    ...,
    "primaryImg": primaryImg.asset->url,
    "secondaryImg": secondaryImg.asset->url,
    locations[] {
      ...,
      "locationImage": locationImage.asset->url
    }
  }
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

const MedicalTravelAgentsPage = (props: SanityProps) => {
  const {
    page: { sections },
  } = useSanityQuery(query, props).data || {}



  return (
    <div className="">
      {renderObjectArray(sections, {
        'medicalTravelAgents.pageBanner': PageBanner,
        'medicalTravelAgents.travelAgent': About,
        'medicalHospitalityPage.enquiry': Enquiry,
      })}
    </div>
  )
}

export default MedicalTravelAgentsPage
