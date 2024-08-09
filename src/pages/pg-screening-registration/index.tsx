import React from 'react'

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
// lib

// utils
import MakeAnEnquirySec from '@/components/contact-us/makeAnEnquiry'
import Address from '@/components/contact-us/address'
import PageBanner from '@/components/widgets/blocks/banners/pageBanner'
// utils

const query = pageQuery(groq`
   *[_type == 'pgScreening'][0]{
    ...
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

const PGScreening = (props: SanityProps) => {
  const {
    page: { seo, sections },
  } = useSanityQuery(query, props).data

  return (
    <>
      {renderObjectArray(sections, {
        'pgScreening.pageBanner': PageBanner,
        'pgScreening.enquiryForm': MakeAnEnquirySec,
      })}
    </>
  )
}

export default PGScreening
