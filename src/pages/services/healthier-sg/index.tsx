import { pageQuery } from '@/lib/query'
import { sanityStaticProps, useSanityQuery } from '@/sanity'
import { GetStaticProps, GetStaticPropsContext } from 'next'
import { groq } from 'next-sanity'
import { SanityProps } from 'next-sanity-extra'
import { renderObjectArray } from 'sanity-react-extra'
import PageBanner from '@/components/healthier-sg/pageBanner'
import PageOverview from '@/components/healthier-sg/pageOverview'
import AboutHealthierSG from '@/components/healthier-sg/about'
import HealthierSGProgram from '@/components/healthier-sg/program'
import HealthierSGJourney from '@/components/healthier-sg/journey'
import HealthierSGEnrol from '@/components/healthier-sg/enrol'


const query = pageQuery(groq`
   *[_type == 'healthierSG'][0] {
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

  return (
    <main className="overflow-visible">
      {renderObjectArray(sections, {
        'healthierSG.pageBanner': PageBanner,
        'healthierSG.pageOverview': PageOverview,
        'healthierSG.about': AboutHealthierSG,
        'healthierSG.program': HealthierSGProgram,
        'healthierSG.journey': HealthierSGJourney,
        'healthierSG.enrol': HealthierSGEnrol,
      })}
    </main>
  )
}
