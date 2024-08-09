import { sanityStaticProps, useSanityQuery, sanityClient } from '@/sanity'
import { groq } from 'next-sanity'
import { renderObjectArray } from 'sanity-react-extra'
import { GetStaticProps, GetStaticPropsContext } from 'next'
import { SanityProps } from 'next-sanity-extra'
import { pageQuery } from '@/lib/query'
import { PracticeDoctor } from '@/components/urgentCare/practiceDoctor'
// import SpecialistCentre from '@/components/urgentCare/centre'
import PageBanner from '@/components/widgets/blocks/banners/pageBanner'
import PageOverview from '@/components/urgentCare/pageOverview'
import RapidRelief from '@/components/urgentCare/rapidRelief'
// import Enquiry from '@/components/widgets/blocks/enquiry'
import { ComponentType } from 'react'
import dynamic from 'next/dynamic'

// dynamic imports
const SpecialistCentre: ComponentType<any> = dynamic(() => import('../../../components/urgentCare/centre'), {
  loading: () => <p>Loading...</p>,
})


const Enquiry: ComponentType<any> = dynamic(() => import('../../../components/widgets/blocks/enquiry'), {
  loading: () => <p>Loading...</p>,
})

const query = pageQuery(groq`
   *[_type == 'urgentCarePage'][0] {
		...,
		sections[] {
			...,
      doctor -> {
        _id,
        name,
        designation,
        "photo": photo.asset->url,
        center [] -> {
          _id,
          name,
        },
         slug,
        specialist -> {
        _id,
        title
      },
    }
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

export default function UrgentCare(props: SanityProps) {
  const {
    page: { sections },
  } = useSanityQuery(query, props).data

  return (
    <main className="overflow-visible">
      {renderObjectArray(sections, {
        'urgentCare.landingHero': PageBanner,
        'urgentCare.pageOverview': PageOverview,
        'urgentCare.employeeWellness': RapidRelief,
        'urgentCare.practiceDoctor': PracticeDoctor,
        'urgentCare.centre': SpecialistCentre,
        'urgentCare.enquiry': Enquiry,
      })}
    </main>
  )
}
