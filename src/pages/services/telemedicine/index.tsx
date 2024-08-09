import PageOverViewSec from '@/components/services/telemedicine/pageOverview'
import VirtualWellnessSec from '../../../components/services/telemedicine/virtualWellness'
import OurDoctorsSec from '@/components/services/telemedicine/ourDoctors'
import BenefitsSec from '@/components/services/telemedicine/benefits'
import EnquirySec from '@/components/services/telemedicine/enquiry'
import { GetStaticProps, GetStaticPropsContext } from 'next'
import { sanityStaticProps, useSanityQuery } from '@/sanity'
import { pageQuery } from '@/lib/query'
import { groq } from 'next-sanity'
import { SanityProps } from 'next-sanity-extra'
import { renderObjectArray } from 'sanity-react-extra'
import { HealthFAQ } from '@/components/services/telemedicine/healthFAQ'
import PageBanner from '@/components/widgets/blocks/banners/pageBanner'

const query = pageQuery(groq`
*[_type == 'teleMedicine'][0] {
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

const TeleMedicine = (props: SanityProps) => {
  const {
    page: { sections },
  } = useSanityQuery(query, props).data
  return (
    <main className="overflow-visible">
      {renderObjectArray(sections, {
        'common.pageBanner': PageBanner,
        'common.pageOverview': PageOverViewSec,
        'teleMedicine.virtualWellness': VirtualWellnessSec,
        'teleMedicine.ourDoctors': OurDoctorsSec,
        'teleMedicine.benefits': BenefitsSec,
        'teleMedicine.faq': HealthFAQ,
        'teleMedicine.enquiry': EnquirySec,
      })}
    </main>
  )
}

export default TeleMedicine
