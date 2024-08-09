import { GetStaticProps, GetStaticPropsContext } from 'next'
import { groq } from 'next-sanity'
import { SanityProps } from 'next-sanity-extra'
import { pageQuery } from '@/lib/query'
import { sanityStaticProps, useSanityQuery } from '@/sanity'
import { SearchMain } from '@/components/listing-and-details-pages/search/search-main'
import { renderObjectArray } from 'sanity-react-extra'

const query = pageQuery(groq`
  *[_type == "search"][0] {
	    ...,
      sections[] {
        ...,
      }
	}
  `)

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

export default function Search(props: SanityProps) {
  const { page } = useSanityQuery(query, props).data
  const { sections } = page
  return (
    <main>
      {renderObjectArray(sections, {
        'search.searchContent': SearchMain,
      })}
    </main>
  )
}
