import { GetServerSideProps, GetServerSidePropsContext } from 'next'
import { groq } from 'next-sanity'
import { SanityProps } from 'next-sanity-extra'
import { sanityStaticProps, useSanityQuery, sanityClient } from '@/sanity'
import { pageQuery } from '@/lib/query'
import Position from '@/components/careers/position'

const query = pageQuery(groq`
   *[_type == "jobDetail"  && slug.current == $slug][0] {
            ...,
					}
  `)

export const getServerSideProps: GetServerSideProps = async (
  context: GetServerSidePropsContext,
) => {
  const pathsQuery = groq`*[_type == 'jobDetail' && defined(slug.current)][].slug.current`
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
    <Position page={page} />
  </main>
  )
}
