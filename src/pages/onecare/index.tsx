import { ComponentType } from 'react'
import dynamic from 'next/dynamic'
import { sanityStaticProps, useSanityQuery, sanityClient } from '@/sanity'
import { groq } from 'next-sanity'
import { renderObjectArray } from 'sanity-react-extra'
import { GetStaticProps, GetStaticPropsContext } from 'next'
import { SanityProps } from 'next-sanity-extra'
import { pageQuery } from '@/lib/query'
import PageBanner from '@/components/widgets/blocks/banners/pageBanner'
import { TitleDescription } from '@/components/medical-hospitality/title-description'
import GPServices from '@/components/explore-our-services/gpServices'
import { useCallback } from 'react'
import { Programmes } from '@/components/day-surgery/programmes'

// dynamic imports
const InformativeCard: ComponentType<any> = dynamic(
  () => import('../../components/discover-our-brands/hmi-onecare-clinic/informativeCard'),
  {
    loading: () => <p>Loading...</p>,
  },
)

const ClinicLocationsList: ComponentType<any> = dynamic(
  () => import('../../components/discover-our-brands/hmi-onecare-clinic/clinicLocations'),
  {
    loading: () => <p>Loading...</p>,
  },
)

const query = pageQuery(groq`
   *[_type == 'hmiOneCareClinicPage'][0] {
		...,
		sections[] {
			...,
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

export default function HMIOneCareClinic(props: SanityProps) {
  const {
    page: { sections, clinics },
  } = useSanityQuery(query, props).data

  return (
    <main className="overflow-visible">
      {renderObjectArray(sections, {
        'hmiOneCareClinicPage.landingHero': PageBanner,
        'hmiOneCareClinicPage.titleDescription': TitleDescription,
        'hmiOneCareClinicPage.clinicInfo': InformativeCard,
        'hmiOneCareClinicPage.ourGPClinics': useCallback(
          (props: any) => <ClinicLocationsList props={props} clinics={clinics} />,
          [clinics],
        ),
        'hmiOneCareClinicPage.gpServices': useCallback(
          (props: any) => (
            <GPServices
              tagline={props.tagline}
              title={props.title}
              description={props.description}
              button={props.button}
              card={props.card}
              brandsimages={props.brandsimages}
              className="bg-[#F3F3F3]"
              carouselType="imageWithContent"
              theme="dark"
              isGP={true}
              contentWidth="max-w-[1014px]"
            />
          ),
          [],
        ),
        'hmiOneCareClinicPage.programmes': Programmes,
      })}
    </main>
  )
}
