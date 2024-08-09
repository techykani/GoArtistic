import { GetServerSideProps, GetServerSidePropsContext } from 'next'
import { groq } from 'next-sanity'
import { SanityProps } from 'next-sanity-extra'
import { sanityStaticProps, useSanityQuery, sanityClient } from '@/sanity'
import Profile from '@/components/doctor/doctor-bio/profile'
import PracticeLocations from '@/components/doctor/doctor-bio/practiceLocations'
import RelatedInsights from '@/components/doctor/doctor-bio/relatedInsights'
import Location from '@/components/doctor/doctor-bio/location'

const doctorQuery = groq`
  *[_type == "doctor" && slug.current == $slug][0] {
    ...,
    _id,
    "photo": photo.asset->url,
                specialist [] -> {
                  _id,
                  title,
                 },
                 clinicLocations [] -> {
                   _id,
                   title,
                   address,
                   commonButton,
                   mobileNo,
                   description,
                   link,
                  slug
                 },
                 center [] -> {
                  _id,
                  name,
                },
                "site": *[_type == 'site' && language == 'en-my'][0] {
                  ...,
                },
  }
 
`

const insightQuery = groq`
  *[_type == "insights" && ($specialityId in speciality[]._ref || author._ref == $doctorId)][0...3]  {
    ...,
  }
`

export const getServerSideProps: GetServerSideProps = async (
  context: GetServerSidePropsContext,
) => {
  const pathsQuery = groq`*[_type == 'doctor' && defined(slug.current)][].slug.current`
  const slug = context?.params?.slug
  const paths: string[] = await sanityClient('anonymous').fetch(pathsQuery)
  const page = paths.find((path) => path === slug)

  if (!page) {
    return {
      notFound: true,
    }
  }

  const doctorProps = await sanityStaticProps({
    context,
    query: doctorQuery,
    params: {
      locale: 'en-my',
      defaultLocale: 'en-my',
      slug: slug,
    },
  })

  // Extract doctor ID from doctorProps
  let doctorId = doctorProps?.data
  const { _id, specialist }: any = doctorId

  const insightProps = await sanityStaticProps({
    context,
    query: insightQuery,
    params: {
      locale: 'en',
      defaultLocale: 'en',
      slug: slug, // You might need to adjust this depending on your media query
      doctorId: _id,
      specialityId: specialist.map((id: any) => id?._id) || [],
    },
  })

  return {
    props: {
      doctorProps,
      insightProps,
    },
  }
}

export default function Details({
  doctorProps,
  insightProps,
}: {
  doctorProps: SanityProps
  insightProps: SanityProps
}) {
  const { data: doctorPage } = useSanityQuery(doctorQuery, doctorProps)
  const { data: insightPage } = useSanityQuery(insightQuery, insightProps)
  return (
    <main className="overflow-visible">
      <Profile page={doctorPage} />
      {/* {doctorPage?.clinicLocations?.length > 0 && <Location clinics={doctorPage.clinicLocations} />} */}
      {/* {insightPage?.length > 0 && <RelatedInsights article={insightPage} />} */}
    </main>
  )
}
