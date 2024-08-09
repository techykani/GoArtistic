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
import { JobListing } from '@/components/careers/jobListing'
import { Enquiry } from '@/components/careers/Enquiry'

const query = pageQuery(groq`
   *[_type == 'contactInterimPage'][0]{
    ...,
    sections[] {
			...,
		},
    "contact": *[_type == "contactUsInterim"] | order(sort asc) {
			...,
      "listingImg": listingImg.asset->url
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

const ContactUs = (props: SanityProps) => {
  const {
    page: { sections, contact },
  } = useSanityQuery(query, props).data

  return (
    <>
      {renderObjectArray(sections, {
        'contactInterimPage.pageBanner': PageBanner,
        'contactInterimPage.titleDescriptionFilters': useCallback(
          (props: any) => <JobListing title={props.title} contact={contact} />,
          [contact],
        ),
        'contactInterimPage.enquiry': Enquiry,
      })}
    </>
  )
}

export default ContactUs
