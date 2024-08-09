import CorporateHealthScreening from '@/components/corporateCare/corporateHealthScreening'
import EnterpriseSolutions from '@/components/corporateCare/enterpriseSolutions'
import { pageQuery } from '@/lib/query'
import { sanityStaticProps, useSanityQuery } from '@/sanity'
import { GetStaticProps, GetStaticPropsContext } from 'next'
import { groq } from 'next-sanity'
import { SanityProps } from 'next-sanity-extra'
import { renderObjectArray } from 'sanity-react-extra'

import ExploreOurCorporateTraining from '@/components/corporateCare/exploreTraining'
import PageOverView from '@/components/widgets/blocks/pageOverview'
import HealthBenefitsSec from '@/components/corporateCare/healthBenefits'
import Enquiry from '@/components/widgets/blocks/enquiry'
import PageBanner from '@/components/widgets/blocks/banners/pageBanner'
import PageOverview from '@/components/corporateCare/pageOverview'

const query = pageQuery(groq`
   *[_type == 'corporateCare'][0] {
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

const CorporateCarePage = (props: SanityProps) => {
  const {
    page: { sections },
  } = useSanityQuery(query, props).data

  return (
    <main className="overflow-visible">
      {renderObjectArray(sections, {
        'corporateCare.pageBanner': PageBanner,
        'corporateCare.pageOverview': PageOverview,
        'corporateCare.healthScreenings': HealthBenefitsSec,
        'corporateCare.guidingPrinciple': CorporateHealthScreening,
        'corporateCare.enterpriseSolutions': EnterpriseSolutions,
        // 'corporateCare.enquiry': Enquiry,
        'corporateCare.corporateTabs': ExploreOurCorporateTraining,
      })}
    </main>
  )
}

export default CorporateCarePage
