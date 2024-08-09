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
// lib

// utils
import MakeAnEnquirySec from '@/components/contact-us/makeAnEnquiry'
import Address from '@/components/contact-us/address'
import PageBanner from '@/components/widgets/blocks/banners/pageBanner'
import MakeAnEnquiryContactSec from '@/components/contact-us/makeAnEnquiryContactSec'
// utils

const query = pageQuery(groq`
   *[_type == 'contactUsPage'][0]{
    ...,
    sections[] {
			...,
		},
    "entities": *[_type == "entities"]  {
			...,
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

const Contacts = (props: SanityProps) => {
  const {
    page: { sections, entities },
  } = useSanityQuery(query, props).data

  return (
    <>
      {renderObjectArray(sections, {
        'contactUsPage.pageBanner': PageBanner,
        'contactUsPage.enquiry': useCallback(
          (props: any) => (
            <MakeAnEnquiryContactSec
              notification={props?.notification}
              formTitle={props?.formTitle}
              formDescription={props?.formDescription}
              formId={props?.formId}
              entities={entities}
            />
          ),
          [entities],
        ),
        'contactUsPage.address': Address,
      })}
    </>
  )
}

export default Contacts
