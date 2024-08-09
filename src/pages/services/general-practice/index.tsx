import { ComponentType } from 'react'
import dynamic from 'next/dynamic'
import { sanityStaticProps, useSanityQuery } from '@/sanity'
import { groq } from 'next-sanity'
import { useCallback } from 'react'
import { renderObjectArray } from 'sanity-react-extra'
import { GetStaticProps, GetStaticPropsContext } from 'next'
import { SanityProps } from 'next-sanity-extra'
import { pageQuery } from '@/lib/query'
import { HealthcarePartner } from '@/components/gp-services/healthCarePartner'
import { FAQ } from '@/components/gp-services/faq'
import WellnessSection from '@/components/gp-services/wellnessSection'
import PageBanner from '@/components/widgets/blocks/banners/pageBanner'
import { Accessibile } from '@/components/gp-services/accessibile'
import { InsurancePartners } from '@/components/costs/InsurancePartners'
import AboutHealthierSG from '@/components/gp-services/about'
import { Enquiry } from '@/components/gp-services/Enquiry'
// dynamic imports
const InformativeCard: ComponentType<any> = dynamic(
  () => import('../../../components/discover-our-brands/hmi-onecare-clinic/informativeCard'),
  {
    loading: () => <p>Loading...</p>,
  },
)

const query = pageQuery(groq`
   *[_type == 'ourGPServicePage'][0] {
		...,
		sections[] {
			...,
      clinicLocations [] -> {
        _id,
        title,
        address,
        commonButton,
        mobileNo,
        description,
       slug,
      locationImage,
      link,
      mobileNo
      },
		},
    "clinics": *[_type == "clinicLocations"]  {
			...,
            "locationImage": locationImage.asset->url,
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

export default function GPServices(props: SanityProps) {
  const {
    page: { sections },
  } = useSanityQuery(query, props).data

  return (
    <main className="overflow-visible">
      {renderObjectArray(sections, {
        'ourGPServicesPage.landingHero': PageBanner,
        // 'ourGPServicesPage.healthcarePartner': HealthcarePartner,
        'ourGPServicesPage.clinicInfo': InformativeCard,
        'ourGPServicesPage.about': AboutHealthierSG,
        'ourGPServicesPage.employeeWellness': useCallback(
          (props: any) => (
            <WellnessSection
              title={props?.title}
              description={props?.description}
              tabs={props.tabs}
              classNameValues={'bg-light-neutral-1'}
            />
          ),
          [],
        ),
        'ourGPServicesPage.insurancePartners': InsurancePartners,
        'ourGPServicesPage.enquiry': Enquiry,
        // 'ourGPServicesPage.faq': FAQ,
      })}
    </main>
  )
}
