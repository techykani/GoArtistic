import { sanityStaticProps, useSanityQuery, sanityClient } from '@/sanity'
import { groq } from 'next-sanity'
import { renderObjectArray } from 'sanity-react-extra'
import { GetStaticProps, GetStaticPropsContext } from 'next'
import { SanityProps } from 'next-sanity-extra'
import { pageQuery } from '@/lib/query'
import { InformativeCard } from '@/components/discover-our-brands/hmi-institute/informativeCard'
import PageBanner from '@/components/widgets/blocks/banners/pageBanner'
import { TitleDescription } from '@/components/medical-hospitality/title-description'
// import Address from '@/components/contact-us/address'
import PageOverView from '@/components/widgets/blocks/pageOverview'
import PageOverview from '@/components/hmi-institute/pageOverview'
import Address from '@/components/hmi-institute/address'
import SpecialEnterprices from '@/components/discover-our-brands/hmi-institute/splenterprices'
import { GetOurClinics } from '@/components/discover-our-brands/hmi-institute/journey'
import { Reviews } from '@/components/hmi-institute/reviews'

const query = pageQuery(groq`
   *[_type == 'hmiInstitutePage'][0] {
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

export default function HMIInstitute(props: SanityProps) {
  const {
    page: { sections, clinics },
  } = useSanityQuery(query, props).data

  return (
    <main className="overflow-visible">
      {renderObjectArray(sections, {
        'hmiInstitutePage.landingHero': PageBanner,
        'hmiInstitutePage.titleDescription': PageOverview,
        'hmiInstitutePage.clinicInfo': InformativeCard,
        'homePage.community': SpecialEnterprices,
        'hmiInstitutePage.locationInfo': Address,
        'hmiInstitutePage.journey': GetOurClinics,
        'hmiInstitute.reviews': Reviews,
      })}
    </main>
  )
}
