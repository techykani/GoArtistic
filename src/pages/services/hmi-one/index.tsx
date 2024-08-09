import { pageQuery } from '@/lib/query'
import { sanityStaticProps, useSanityQuery } from '@/sanity'
import { GetStaticProps, GetStaticPropsContext } from 'next'
import { groq } from 'next-sanity'
import { SanityProps } from 'next-sanity-extra'
import { renderObjectArray } from 'sanity-react-extra'
import { VaccinationSubsidies } from '@/components/vaccination/vaccinationSubsidies'

import { PageBanner } from '@/components/hmi-one/pageBanner'
import { OurOfferings } from '@/components/hmi-one/ourOfferings'
import { FAQ } from '@/components/hmi-one/faq'
import { Enquiry } from '@/components/hmi-one/enquiry'
import { Membership } from '@/components/hmi-one/membership'

const query = pageQuery(groq`
   *[_type == 'hmiOne'][0] {
		...,
		sections[] {
          ...,
          membershipPlans[] {
            ...,
            benefits[] {
              ...,
            benefit {
              ...,
              downloadableContents {
                ...,
                "pdfFile": pdfFile.asset->url,
}
            }
            }
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
  const { page } = useSanityQuery(query, props).data
  const { sections } = page || { sections: [] }
  if (sections) {
    return (
      <main className="overflow-visible">
        {renderObjectArray(sections, {
          'hmiOne.pageBanner': PageBanner,
          'homePage.network': OurOfferings,
          'ourGPServicesPage.faq': FAQ,
          'hmiOne.membershipBenefits': Membership,
          'hmiOne.enquiry': Enquiry,
        })}
      </main>
    )
  }
  return <></>
}
