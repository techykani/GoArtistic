import { ComponentType, useCallback } from 'react'
import dynamic from 'next/dynamic'
import { sanityStaticProps, useSanityQuery, sanityClient } from '@/sanity'
import { groq } from 'next-sanity'
import { renderObjectArray } from 'sanity-react-extra'
import { GetStaticProps, GetStaticPropsContext } from 'next'
import { SanityProps } from 'next-sanity-extra'
import { pageQuery } from '@/lib/query'
import PageBanner from '@/components/widgets/blocks/banners/pageBanner'
import { TitleDescription } from '@/components/medical-hospitality/title-description'
import { DoctorStories } from '@/components/medical-hospitality/doctorStories'
import OurNetwork from '@/components/homepage/ourNetwork'
import SpeacialtySearch from '@/components/discover-our-brands/hmi-medical-centre/specialitySearch'
import MoreInsights from '@/components/discover-our-brands/hmi-medical-centre/moreInsights'

// dynamic imports
const InformativeCard: ComponentType<any> = dynamic(
  () => import('../../components/discover-our-brands/hmi-medical-centre/informativeCard'),
  {
    loading: () => <p>Loading...</p>,
  },
)

const ClinicList: ComponentType<any> = dynamic(
  () => import('../../components/discover-our-brands/hmi-medical-centre/clinicLocations'),
  {
    loading: () => <p>Loading...</p>,
  },
)

const Address: ComponentType<any> = dynamic(() => import('../../components/contact-us/address'), {
  loading: () => <p>Loading...</p>,
})

const query = pageQuery(groq`
   *[_type == 'hmiMedicalCentrePage'][0] {
		...,
		sections[] {
			...,
       points[] {
      ...,
      "icon": icon.asset->url,
      "mobileIcon": mobileIcon.asset->url,
    },
     insights[] -> {
          _id,
          title, slug {current},
          "primaryImg": primaryImg.asset->url,
          seo{
            description 
          }
        },
       doctor [] -> {
        _id,
        name,
        "photo": photo.asset->url,
        designation,
        about,
        slug,
        specialist -> {
          _id,
          title,
        },
      },
		},
     "speciality": *[_type == "specialtyList" && isVisible == true] {
    primaryImg,
      title,
      tagline,
      isVisible,
      slug
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

export default function HMIMedicalCentre(props: SanityProps) {
  const {
    page: { sections, speciality },
  } = useSanityQuery(query, props).data

  return (
    <main className="overflow-visible">
      {renderObjectArray(sections, {
        'hmiMedicalCentrePage.landingHero': PageBanner,
        'hmiMedicalCentrePage.titleDescription': TitleDescription,
        'hmiMedicalCentrePage.clinicInfo': InformativeCard,
        'hmiMedicalCentrePage.doctorStories': DoctorStories,
        'hmiMedicalCentrePage.network': OurNetwork,
        'hmiMedicalCentrePage.search': useCallback(
          (props: any) => (
            <SpeacialtySearch
              description={props?.description}
              tagline={props?.tagline}
              searchPlaceHolder={props?.searchPlaceHolder}
              slidesData={speciality}
              cta={props?.cta}
            />
          ),
          [speciality],
        ),
        'hmiMedicalCentrePage.sharingMore': MoreInsights,
        'hmiMedicalCentrePage.clinicList': ClinicList,
        'hmiMedicalCentrePage.locationInfo': Address,
      })}
    </main>
  )
}
