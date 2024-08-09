import { pageQuery } from '@/lib/query'
import { sanityStaticProps, useSanityQuery } from '@/sanity'
import { GetStaticProps, GetStaticPropsContext } from 'next'
import { groq } from 'next-sanity'
import { SanityProps } from 'next-sanity-extra'
import { renderObjectArray } from 'sanity-react-extra'
import PageBanner from '@/components/widgets/blocks/banners/pageBanner'
import { Quotes } from '@/components/milestones/quotes'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { useWindowSize } from '@/lib/hooks'
import { Timeline } from '@/components/milestones/timeline'

const query = pageQuery(groq`
   *[_type == 'milestones'][0] {
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

export default function HMIEcosystem(props: SanityProps) {
  const {
    page: { sections },
  } = useSanityQuery(query, props).data

  const router = useRouter()
  const environment = process.env.NEXT_PUBLIC_ENV

  // useEffect(() => {
  //   // Redirect to home page if not in staging environment
  //   if (environment !== 'staging') {
  //     router.push('/')
  //   }
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [])

  const windowWidth = useWindowSize()?.width ?? 0

  return (
    <main className="overflow-visible">
      {renderObjectArray(sections, {
        'milestones.pageBanner': PageBanner,
        'milestones.quote': Quotes,
        'milestones.timeline': Timeline,
      })}
    </main>
  )
}
