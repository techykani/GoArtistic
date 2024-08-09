import { GetServerSideProps, GetServerSidePropsContext } from 'next'
import { groq } from 'next-sanity'
import { SanityProps } from 'next-sanity-extra'
import { sanityStaticProps, useSanityQuery, sanityClient } from '@/sanity'
import Profile from '@/components/trainer/trainerBio/profile'


const trainerQuery = groq`
*[_type == "trainer" && slug.current == $slug][0]{
  ...,
  "courseList": *[_type == "course" && references(^._id)]{
   ...,
  },
  "site": *[_type == 'site' && language == 'en-my'][0] {
    ...,
  },
}
`

export const getServerSideProps: GetServerSideProps = async (
  context: GetServerSidePropsContext,
) => {
  const pathsQuery = groq`*[_type == 'trainer' && defined(slug.current)][].slug.current`
  const slug = context?.params?.slug
  const paths: string[] = await sanityClient('anonymous').fetch(pathsQuery)
  const page = paths.find((path) => path === slug)

  if (!page) {
    return {
      notFound: true,
    }
  }

  const trainerProps = await sanityStaticProps({
    context,
    query: trainerQuery,
    params: {
      locale: 'en-my',
      defaultLocale: 'en-my',
      slug: slug,
    },
  })

  return {
    props: {
      trainerProps,
    },
  }
}

export default function Details({
  trainerProps,
}: {
  trainerProps: SanityProps

}) {
  const { data } = useSanityQuery(trainerQuery, trainerProps)
  return (
    <main className="overflow-visible">
      <Profile page={data} />
    </main>
  )
}
