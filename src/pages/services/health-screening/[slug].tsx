import { GetServerSideProps, GetServerSidePropsContext } from 'next'
import { groq } from 'next-sanity'
import { SanityProps } from 'next-sanity-extra'
import { sanityStaticProps, useSanityQuery, sanityClient } from '@/sanity'
import { pageQuery } from '@/lib/query'
import HealthScreenProfile from '@/components/health-screening/healthScreenProfile'

const query = pageQuery(groq`
*[_type == "package" && slug.current == $slug][0] {
  _id,
  ...,
  "iconurl": iconurl.asset->url,
  entities[] {
    ...,
entity -> {
  name,
  entity
}
  },
  test  {
    ...,
    addons {
      ...,
    },
    addons {
      ...,
    },
    preferredTest {
      ...,
    },
    consultTest[] {
      labTitle,
        _key,
        labTest[] -> {
        _id,
         title,
         _type
      }
      },
      clinic[] -> {
        _id,
        title,
        _type
       },
    laboratoryTest[] {
      labTitle,
        _key,
        labTest[] -> {
        _id,
         title,
         _type
      }
      },
     radiology[] -> {
      _id,
      title,
      _type
     },
     other[] -> {
      _id,
      title,
      _type
     },
  }
 
}
`)

export const getServerSideProps: GetServerSideProps = async (
  context: GetServerSidePropsContext,
) => {
  const pathsQuery = groq`*[_type == 'package' && defined(slug.current)][].slug.current`
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

  return (
    <main className="overflow-visible">
      <HealthScreenProfile props={page}/>
    </main>
  )
}
