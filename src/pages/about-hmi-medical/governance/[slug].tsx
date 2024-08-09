import { GetServerSideProps, GetServerSidePropsContext } from 'next'
import { groq } from 'next-sanity'
import { SanityProps } from 'next-sanity-extra'
import { sanityStaticProps, useSanityQuery, sanityClient } from '@/sanity'
import { pageQuery } from '@/lib/query'
import Profile from '@/components/leadership/leadersDetail/Profile'

const query = pageQuery(groq`
 *[_type == "management" && slug.current == $slug][0] {
  _id,
  ...,
  "site": *[_type == 'site' && language == 'en-my'][0] {
                  ...,
                },
  "leaders":  *[_type == 'leadership'][0] {
		
        sections [][1] {
        
       _type == "leadership.members" => {
     
      "tab": tab{
        executiveLeadershipContent{
          "leaders": leaders[]->{
            profileImage,
            name,
             "slug": slug.current,
            designation
          }
        },
      }
    }
        }
}     
}
`)

export const getServerSideProps: GetServerSideProps = async (
  context: GetServerSidePropsContext,
) => {
  const pathsQuery = groq`*[_type == 'management' && defined(slug.current)][].slug.current`
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
      <Profile page={page} />
    </main>
  )
}
