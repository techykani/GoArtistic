import { sanityStaticProps, useSanityQuery } from '@/sanity'
import { groq } from 'next-sanity'
import { ComponentType, useCallback } from 'react'
import { renderObjectArray } from 'sanity-react-extra'
import { GetStaticProps, GetStaticPropsContext } from 'next'
import { SanityProps } from 'next-sanity-extra'
import { pageQuery } from '@/lib/query'
import { HealthScreenings } from '@/components/explore-our-services/healthScreenings'
import UrgentCare from '@/components/explore-our-services/urgentCare'
// import OurSpecialistSection from '@/components/explore-our-services/ourSpecialistSection'
import PageBanner from '@/components/widgets/blocks/banners/pageBanner'
import GPServices from '@/components/explore-our-services/gpServices'
// import Enquiry from '@/components/widgets/blocks/enquiry'
import dynamic from 'next/dynamic'

// dynamic imports
// const GPServices: ComponentType<any> = dynamic(() => import('../../components/explore-our-services/gpServices'), {
//   loading: () => <p>Loading...</p>,
// })

const OurSpecialistSection: ComponentType<any> = dynamic(
  () => import('../../components/explore-our-services/ourSpecialistSection'),
  {
    loading: () => <p>Loading...</p>,
  },
)

// const UrgentCare: ComponentType<any> = dynamic(() => import('../../components/explore-our-services/urgentCare'), {
//   loading: () => <p>Loading...</p>,
// })

const Enquiry: ComponentType<any> = dynamic(
  () => import('../../components/widgets/blocks/enquiry'),
  {
    loading: () => <p>Loading...</p>,
  },
)

const query = pageQuery(groq`
   *[_type == 'exploreOurService'][0] {
		...,
		sections[] {
			...,
      specialtyList[] -> {
        _id,
        tagline,
        title,
        HomeImg,
        primaryImg,
        slug
      },
      clinicLocations [] -> {
        _id,
        title,
        address,
        mobileNo,
        description,
       slug,
      locationImage,
      link1,
      link2,
      mobileNo
      },
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

export default function ExploreOurServices(props: SanityProps) {
  const {
    page: { sections },
  } = useSanityQuery(query, props).data

  return (
    <main className="overflow-visible">
      {renderObjectArray(sections, {
        'exploreOurService.landingHero': PageBanner,
        'exploreOurService.gpServices': useCallback(
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
        'exploreOurService.healthScreenings': HealthScreenings,
        'exploreOurService.specialists': OurSpecialistSection,
        'exploreOurService.urgentCare': UrgentCare,
        'medicalHospitalityPage.enquiry': Enquiry,
      })}
    </main>
  )
}
