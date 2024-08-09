import { pageQuery } from '@/lib/query'
import { sanityStaticProps, useSanityQuery } from '@/sanity'
import { GetStaticProps, GetStaticPropsContext } from 'next'
import { groq } from 'next-sanity'
import { SanityProps } from 'next-sanity-extra'
import { renderObjectArray } from 'sanity-react-extra'
import PageBanner from '@/components/widgets/blocks/banners/pageBanner'
import HealthTalkSeries from '@/components/corporate-trainings/healthTalkSeries'
import Enquiry from '@/components/corporate-trainings/enquiry'
import Brands from '@/components/corporate-trainings/clients'
import { EnterpriceSolutions } from '@/components/corporate-trainings/enterpriceOfferings'


const query = pageQuery(groq`
   *[_type == 'corporateTrainings'][0] {
		...,
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
        'corporateCare.pageBanner': PageBanner,
        'urgentCare.enquiry': Enquiry,
        'discoverOurBrands.brands': Brands,
        'corporateTrainings.enterpriceSolutions': EnterpriceSolutions,
        'corporateTrainings.hmiHealthTalkSeries': HealthTalkSeries,
      })}
    </main>
  )
}
