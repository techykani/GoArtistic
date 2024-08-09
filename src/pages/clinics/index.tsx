import { ClinicListing } from '@/components/clinics/clinicListing'
import { DiscoverHero } from '@/components/discover-our-brands/discover-hero'
import PageBanner from '@/components/widgets/blocks/banners/pageBanner'
import Enquiry from '@/components/widgets/blocks/enquiry'
import { pageQuery } from '@/lib/query'
import { sanityStaticProps, useSanityQuery } from '@/sanity'
import { GetStaticProps, GetStaticPropsContext } from 'next'
import { groq } from 'next-sanity'
import { SanityProps } from 'next-sanity-extra'
import { useCallback } from 'react'
import { renderObjectArray } from 'sanity-react-extra'

const query = pageQuery(groq`
   *[_type == 'clinicScreen'][0] {
		...,
		sections[] {
			...,
		},
    "clinics": *[_type == "clinicLocations" && isVisible == true]  {
			...,
            "locationImage": locationImage.asset->url,
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

export default function Clinics(props: SanityProps) {
  const {
    page: { sections, clinics, centers },
  } = useSanityQuery(query, props).data
  console.log(props, 'props')
  return (
    <main className="overflow-visible">
      {renderObjectArray(sections, {
        'clinicScreen.landingHero': PageBanner,
        'clinicScreen.titleDescriptionFilters': useCallback(
          (props: any) => <ClinicListing filterDropdownOptions={props} clinics={clinics} />,
          [clinics],
        ),
        'clinicScreen.enquiry': Enquiry,
      })}
    </main>
  )
}
