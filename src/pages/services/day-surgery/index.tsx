import { sanityStaticProps, useSanityQuery } from '@/sanity'
import { groq } from 'next-sanity'
import { useCallback } from 'react'
import { renderObjectArray } from 'sanity-react-extra'
import { GetStaticProps, GetStaticPropsContext } from 'next'
import { SanityProps } from 'next-sanity-extra'
import { pageQuery } from '@/lib/query'
import { HealthcarePartner } from '@/components/gp-services/healthCarePartner'
import { FAQ } from '@/components/gp-services/faq'
import WellnessSection from '@/components/gp-services/wellnessSection'
import PageBanner from '@/components/widgets/blocks/banners/pageBanner'
import HealthBenefitsSec from '@/components/corporateCare/healthBenefits'
import { ProceduresAvailable } from '@/components/day-surgery/proceduresAvailable'
import Milestone from '@/components/day-surgery/milestone'
import { Endoscopy } from '@/components/day-surgery/endoscopy'
import { Programmes } from '@/components/day-surgery/programmes'
import Enquiry from '@/components/widgets/blocks/enquiry'
import PageOverview from '@/components/day-surgery/pageOverview'
import Rooms from '@/components/day-surgery/rooms'
import RapidRelief from '@/components/day-surgery/rapidRelief'

const query = pageQuery(groq`
   *[_type == 'daySurgery'][0] {
		...,
		sections[] {
			...,
      "priceRange": {
      "minPrice": priceRange.minPrice,
      "maxPrice": priceRange.maxPrice
    },
		}
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

export default function GPServices(props: SanityProps) {
  const { page } = useSanityQuery(query, props).data

  const { sections } = page || { sections: [] }

  if (sections) {
    return (
      <main className="overflow-visible">
        {renderObjectArray(sections, {
          'daySurgery.landingHero': PageBanner,
          'daySurgery.pageOverview': PageOverview,
          'daySurgery.ourFacilities': HealthBenefitsSec,
          'daySurgery.proceduresAvailable': ProceduresAvailable,
          'daySurgery.milestone': Milestone,
          'daySurgery.endoscopy': RapidRelief,
          'daySurgery.programmes': Programmes,
          'daySurgery.enquiry': Enquiry,
          'daySurgery.roomsAndRates': Rooms,
        })}
      </main>
    )
  }
  return <></>
}
