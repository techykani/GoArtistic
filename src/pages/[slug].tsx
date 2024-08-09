import { sanityClient, sanityStaticProps, useSanityQuery } from '@/sanity'
import { groq } from 'next-sanity'
import { GetServerSideProps, GetServerSidePropsContext } from 'next'
import { withDimensions } from 'sanity-react-extra'
import { SanityProps } from 'next-sanity-extra'
import { intlTypeQuery, pageQuery } from '@/lib/query'


const query = pageQuery(groq`${intlTypeQuery('hubSpotForm', 'slug.current == $slug')} {
      ...,
			"image": ${withDimensions('image')},
    }
  `)

export const getServerSideProps: GetServerSideProps = async (
  context: GetServerSidePropsContext,
) => {
  const pathsQuery = groq`*[_type == 'hubSpotForm' && defined(slug.current)][].slug.current`
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
        locale: context.locale,
        defaultLocale: 'en-my',
        slug: slug,
      },
    }),
  }
}

export default function HubSpotForm(props: SanityProps) {
  const { page } = useSanityQuery(query, props).data
  const { title, breadcrumbTitle, description, image, formID } = page
  return (
    <main>
      
      
    </main>
  )
}
