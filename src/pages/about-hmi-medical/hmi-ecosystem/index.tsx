import { pageQuery } from '@/lib/query'
import { sanityStaticProps, useSanityQuery } from '@/sanity'
import { GetStaticProps, GetStaticPropsContext } from 'next'
import { groq } from 'next-sanity'
import { SanityProps } from 'next-sanity-extra'
import { renderObjectArray } from 'sanity-react-extra'
import Enquiry from '@/components/widgets/blocks/enquiry'
import InvestmentPotential from '@/components/hmiEcosystem/investmentPotential'
import Pillars from '@/components/hmiEcosystem/pillars'
import { SharingMoreMedia } from '@/components/media/sharingMoreMedia'
import PageBanner from '@/components/widgets/blocks/banners/pageBanner'
import PageOverview from '@/components/hmiEcosystem/pageOverview'


const query = pageQuery(groq`
   *[_type == 'hmiEcosystemPage'][0] {
		...,
		sections[] {
			...,
      insights[] -> {
        _id,
        title, slug {current},primaryImg,
        seo{
          description
        }
      }
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
        'hmiEcosystem.pageBanner': PageBanner,
        'hmiEcosystem.PageOverview': PageOverview,
        'hmiEcosystem.investmentPotential': InvestmentPotential,
        'hmiEcosystem.pillars': Pillars,
        'hmiEcosystem.achievement': SharingMoreMedia,
        'hmiEcosystem.enquiry': Enquiry,
      })}
    </main>
  )
}
