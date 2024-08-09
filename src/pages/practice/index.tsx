import { sanityStaticProps, useSanityQuery, sanityClient } from '@/sanity'
import { groq } from 'next-sanity'
import { renderObjectArray } from 'sanity-react-extra'
import { GetStaticProps, GetStaticPropsContext } from 'next'
import { SanityProps } from 'next-sanity-extra'
import { pageQuery } from '@/lib/query'
import { LandingHero } from '@/components/by-practice/hero'
import { AreaOfPractice } from '@/components/by-practice/areaOfPractice'
import { PracticeLocation } from '@/components/by-practice/practiceLocation'
import { PracticeHead } from '@/components/by-practice/practiceHead'
import { ProceduresAvailable } from '@/components/by-practice/proceduresAvailable'
import { Programmes } from '@/components/by-practice/programmes'
import { Enquiry } from '@/components/medical-hospitality/enquiry'

const query = pageQuery(groq`
   *[_type == 'practice'][0] {
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

export default function Home(props: SanityProps) {
  const {
    page: { sections },
  } = useSanityQuery(query, props).data

  return (
    <main className="overflow-visible">
      {renderObjectArray(sections, {
        'practice.landingHero': LandingHero,
        'practice.practiceTabs': AreaOfPractice,
        'practice.practiceHead': PracticeHead,
        'medicalHospitalityPage.locations': PracticeLocation,
        'practice.proceduresTabs': ProceduresAvailable,
        'practice.programmes': Programmes,
        'practice.practiceEnquiry': Enquiry,
      })}
    </main>
  )
}
