import { About } from '@/components/about-us/about'
import { CoreValues } from '@/components/about-us/coreValues'
import Vision from '@/components/about-us/vision'
import Mission from '@/components/about-us/mission'
import { pageQuery } from '@/lib/query'
import { sanityStaticProps, useSanityQuery } from '@/sanity'
import { GetStaticProps, GetStaticPropsContext } from 'next'
import { groq } from 'next-sanity'
import { SanityProps } from 'next-sanity-extra'
import { renderObjectArray } from 'sanity-react-extra'
import { OurBusiness } from '@/components/about-us/ourBusiness'
import PageBanner from '@/components/widgets/blocks/banners/pageBanner'
import { PageOverview } from '@/components/about-us/pageOverview'
import { GuidingPrinciple } from '@/components/about-us/guidingPrinciple'
import HealthBenefitsSec from '@/components/corporateCare/healthBenefits'
import Milestones from '@/components/about-us/milestone'
import { OurLeadership } from '@/components/about-us/ourLeadership'

const query = pageQuery(groq`
   *[_type == 'aboutUs'][0] {
		...,
    sections[] {
			...,
      entities[] -> {
       ...,
      },
      "leaders": leaders[]->{
            profileImage,
            name,
             "slug": slug.current,
            designation
          }
      
		}
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

export default function Home(props: SanityProps) {
  const {
    page: { sections },
  } = useSanityQuery(query, props).data

  return (
    <main className="overflow-visible">
      {renderObjectArray(sections, {
        'aboutUs.pageBanner': PageBanner,
        'aboutUs.overview': PageOverview,
        'aboutUs.aboutsection': About,
        'aboutUs.guidingprinciples': GuidingPrinciple,
        'aboutUs.milestones': Milestones,
        'aboutUs.leadership': OurLeadership,
      })}
    </main>
  )
}
