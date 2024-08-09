import { GetServerSideProps, GetServerSidePropsContext } from 'next'
import { groq } from 'next-sanity'
import { SanityProps } from 'next-sanity-extra'
import { sanityStaticProps, useSanityQuery, sanityClient } from '@/sanity'
import { pageQuery } from '@/lib/query'
import Profile from '@/components/clinics/clinic-bio/profile'
import { renderObjectArray } from 'sanity-react-extra'
import { Programmes } from '@/components/clinics/clinic-bio/programmes'

const query = pageQuery(groq`
   *[_type == "clinicLocations"  && slug.current == $slug][0] {
    ...,
    "locationImage": locationImage.asset->url,
    doctorsOnDuty [] -> {
      _id,
      name,
      "photo": photo.asset->url,
      designation,
      specialist -> {
        _id,
        title,
     
      },              
      moreabout {
        options[]
      },
      slug
    },
    announcement[] -> {
      _id,
      title,
       calendar,
      "primaryImg": primaryImg.asset->url,
      tag
    },
    "clinics": *[_type == "clinicScreen"][0]  {
      ...,
      sections[]{
        ...,
      }
    },             
	}`)

export const getServerSideProps: GetServerSideProps = async (
  context: GetServerSidePropsContext,
) => {
  const pathsQuery = groq`*[_type == 'clinicLocations' && defined(slug.current)][].slug.current`
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
  const { clinics, announcement } = page
  const { sections } = clinics

  return (
    <main className="overflow-visible">
      <Profile page={page} />
      {/* <Programmes clinics={clinics}/> */}
      {renderObjectArray(sections, {
        'clinicBioScreen.programmes': Programmes,
      })}
      {/* {page?.announcement?.length && <RelatedInsights article={page.announcement} type="clinicBio" />} */}
    </main>
  )
}
