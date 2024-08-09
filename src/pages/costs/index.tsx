import { ComponentType } from 'react'
import dynamic from 'next/dynamic'
import { sanityStaticProps, useSanityQuery, sanityClient } from '@/sanity'
import { groq } from 'next-sanity'
import { renderObjectArray } from 'sanity-react-extra'
import { GetStaticProps, GetStaticPropsContext } from 'next'
import { SanityProps } from 'next-sanity-extra'
import { pageQuery } from '@/lib/query'
import PageBanner from '@/components/widgets/blocks/banners/pageBanner'
import { TitleDescription } from '@/components/medical-hospitality/title-description'
import { InsurancePartners } from '@/components/costs/InsurancePartners'
import { TreatmentCostEstimation } from '@/components/costs/TreatmentCostEstimation'

const Enquiry: ComponentType<any> = dynamic(
  () => import('../../components/widgets/blocks/enquiry'),
  {
    loading: () => <p>Loading...</p>,
  },
)

const query = pageQuery(groq`
   *[_type == 'costsPage'][0] {
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

export default function HMIOneCareClinic(props: SanityProps) {
  const {
    page: { sections },
  } = useSanityQuery(query, props).data

  return (
    <main className="overflow-visible">
      {renderObjectArray(sections, {
        'costs.landingHero': PageBanner,
        'costs.titleDescription': TitleDescription,
        'costs.treatmentCostEstimation': TreatmentCostEstimation,
        'costs.insurancePartners': InsurancePartners,
        'medicalHospitalityPage.enquiry': Enquiry,
      })}
    </main>
  )
}
