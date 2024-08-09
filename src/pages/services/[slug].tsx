import { GetServerSideProps, GetServerSidePropsContext } from 'next'
import { groq } from 'next-sanity'
import { SanityProps } from 'next-sanity-extra'
import { sanityStaticProps, useSanityQuery, sanityClient } from '@/sanity'
import { pageQuery } from '@/lib/query'
import { renderObjectArray } from 'sanity-react-extra'
import { LandingHero } from '@/components/by-practice/hero'
import { AreaOfPractice } from '@/components/by-practice/areaOfPractice'
import { PracticeLocation } from '@/components/by-practice/practiceLocation'
import { PracticeHead } from '@/components/by-practice/practiceHead'
import { ProceduresAvailable } from '@/components/by-practice/proceduresAvailable'
import { Programmes } from '@/components/by-practice/programmes'
import AboutUs from '@/components/homepage/aboutUs'
import { AreaOfFocus } from '@/components/by-practice/areaOfFocus'

const query = pageQuery(groq`
*[_type == "specialtyList"  && slug.current == $slug][0] {
  ...,
  sections []{
    ...,
    "image": image.asset->url,
     "primaryImg": primaryImg.asset->url,
    "secondaryImg": secondaryImg.asset->url,
    "logo": logo.asset->url,
    options []{
    ...,
      "primaryImg": primaryImg.asset->url,
      "image": image.asset->url,
      cards []{
        ...,
        "primaryImg": primaryImg.asset->url,
      }
    },
     _type == "practice.practiceHead" => {
      doctorList[] {
        title,
        tagline,
        description,
        doctor->{
          _id,
      name,
      designation,
      "photo": photo.asset->url,
       slug,
      specialist -> {
      _id,
      title,
    },
    center [] -> {
      _id,
      name,
    },
    link,
          // Include other fields from doctor reference if needed
        },
        viewButton {
          // Include fields from viewButton if needed
        }
      }
    },
    doctor []-> {
      _id,
      name,
      designation,
      "photo": photo.asset->url,
       slug,
      specialist -> {
      _id,
      title,
    },
    center [] -> {
      _id,
      name,
    },
    link,
    },
    clinicLocations [] -> {
      _id,
      title,
      address,
      description,
      locationImage,
      slug
    },
  }
}
`)

export const getServerSideProps: GetServerSideProps = async (
  context: GetServerSidePropsContext,
) => {
  const pathsQuery = groq`*[_type == 'specialtyList' && defined(slug.current)][].slug.current`
  const slug = context?.params?.slug
  const paths: string[] = await sanityClient('anonymous').fetch(pathsQuery)
  const page = paths.find((path) => path === slug)

  if (!page) {
    return {
      notFound: true,
    }
  }

  return {
    props: await sanityStaticProps({
      context,
      query,

      params: {
        locale: 'en',
        defaultLocale: 'en',
        slug: slug,
      },
    }),
  }
}

export default function Details(props: SanityProps) {
  const { page } = useSanityQuery(query, props).data
  const { sections } = page

  return (
    <main className="overflow-visible">
      {renderObjectArray(sections, {
        'practice.landingHero': LandingHero,
        'practice.practiceTabs': AreaOfFocus,
        'practice.practiceHead': PracticeHead,
        // 'practice.locations': PracticeLocation,
        'practice.proceduresTabs': ProceduresAvailable,
        'practice.programmes': Programmes,
        'practice.about': AboutUs,
      })}
    </main>
  )
}
