import { ComponentType } from 'react'
import dynamic from 'next/dynamic'
import { sanityStaticProps, useSanityQuery, sanityClient } from '@/sanity'
import { groq } from 'next-sanity'
import { renderObjectArray } from 'sanity-react-extra'
import { GetStaticProps, GetStaticPropsContext } from 'next'
import { SanityProps } from 'next-sanity-extra'
import { pageQuery } from '@/lib/query'
import PageBanner from '@/components/widgets/blocks/banners/pageBanner'
import { MedisaveGuide } from '@/components/medisave/MedisaveGuide'
import { MedisaveGuideTabs } from '@/components/medisave/MedisaveGuideTabs'

// dynamic imports
const Enquiry: ComponentType<any> = dynamic(
  () => import('../../components/widgets/blocks/enquiry'),
  {
    loading: () => <p>Loading...</p>,
  },
)

const query = pageQuery(groq`
   *[_type == 'medisavePage'][0] {
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
    page: { sections, clinics },
  } = useSanityQuery(query, props).data

  return (
    <main className="overflow-visible">
      {renderObjectArray(sections, {
        'medisave.landingHero': PageBanner,
        'medisave.medisaveGuide': MedisaveGuide,
        'medisave.medisaveGuideTabs': MedisaveGuideTabs,
        'medicalHospitalityPage.enquiry': Enquiry,
      })}
    </main>
  )
}
