import { DiscoverHero } from '@/components/discover-our-brands/discover-hero'
import { FAQ } from '@/components/gp-services/faq'
import { CorporateHealthcare } from '@/components/health-screening/corporateHealthcare'
import { CorporateHealthcareScreening } from '@/components/health-screening/corporateHealthcareScreening'
import { ScreeningList } from '@/components/health-screening/screeningList/screeningList'
import PageBanner from '@/components/widgets/blocks/banners/pageBanner'
import { pageQuery } from '@/lib/query'
import { sanityStaticProps, useSanityQuery } from '@/sanity'
import { GetStaticProps, GetStaticPropsContext } from 'next'
import { groq } from 'next-sanity'
import { SanityProps } from 'next-sanity-extra'
import { useCallback, useEffect, useState } from 'react'
import { renderObjectArray } from 'sanity-react-extra'
import { useRouter } from 'next/router'
import MakeAnEnquirySec from '@/components/contact-us/makeAnEnquiry'
import { SiemensList } from '@/components/siemens-screening/siemensList'
const query = pageQuery(groq`
   *[_type == 'siemensScreen'][0] {
		...,
		sections[] {
			...,
		},
    "siemensPackages": *[_type == "siemensPackage"]  {
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

export default function SiemensScreening(props: SanityProps) {
  const {
    page: { sections, siemensPackages },
  } = useSanityQuery(query, props).data

  return (
    <main className="overflow-visible">
      {renderObjectArray(sections, {
        'siemensScreen.pageBanner': PageBanner,
        'siemensScreen.filter': useCallback(
          (props: any) => (
            <SiemensList
              packages={siemensPackages}
            />
          ),
          [siemensPackages],
        ),
        'siemensScreen.enquiry': MakeAnEnquirySec,
      })}
    </main>
  )
}
