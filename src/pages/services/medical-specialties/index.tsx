import SpeacialtySearch from '@/components/medical-specialty-overview/specialitySearch'
import PageBanner from '@/components/widgets/blocks/banners/pageBanner'
import Enquiry from '@/components/widgets/blocks/enquiry'
import { pageQuery } from '@/lib/query'
import { sanityStaticProps, useSanityQuery } from '@/sanity'
import { GetStaticProps, GetStaticPropsContext } from 'next'
import { groq } from 'next-sanity'
import { SanityProps } from 'next-sanity-extra'
import { useCallback } from 'react'
import { renderObjectArray } from 'sanity-react-extra'

const query = pageQuery(groq`
*[_type == 'medicalSpeciality'][0] {
  ...,
  sections[] {
    ...,
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

export default function MedicalSpecialityOverview(props: SanityProps) {
  const {
    page: { sections, speciality },
  } = useSanityQuery(query, props).data

  return (
    <main>
      {renderObjectArray(sections, {
        'medicalSpeciality.pageBanner': PageBanner,
        'medicalSpecialty.search': useCallback(
          (props: any) => (
            <SpeacialtySearch
              description={props?.description}
              tagline={props?.tagline}
              searchPlaceHolder={props?.searchPlaceHolder}
              slidesData={speciality}
            />
          ),
          [speciality],
        ),

        // 'medicalHospitalityPage.enquiry': useCallback(
        //   (props: any) => (
        //     <Enquiry
        //       classNames="bg-light-neutral"
        //       bannerImage={props?.bannerImage}
        //       smallBannerImage={props?.smallBannerImage}
        //       title={props?.title}
        //       description={props?.description}
        //       button={props?.button}
        //     />
        //   ),
        //   [],
        // ),
        'medicalHospitalityPage.enquiry': Enquiry
      })}
    </main>
  )
}
