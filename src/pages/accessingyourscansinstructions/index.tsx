import { sanityStaticProps, useSanityQuery } from '@/sanity'
import { groq } from 'next-sanity'
import { GetStaticProps, GetStaticPropsContext } from 'next'
import { SanityProps } from 'next-sanity-extra'
import { pageQuery } from '@/lib/query'
import { Banner } from '@/components/accessingYourScansInstructions/banner'

const query = pageQuery(groq`
   *[_type == 'accessingYourScansInstructions'][0] {
		...,
		sections[] {
			...,
		},   
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

export default function AccessingYourScansInstructions(props: SanityProps) {
  const { page } = useSanityQuery(query, props).data

  const { DocumentImg } = page || { page: [] }

  if (DocumentImg) {
    return (
      <main className="overflow-visible">
        <Banner docImage={DocumentImg} />
      </main>
    )
  }
  return <></>
}
