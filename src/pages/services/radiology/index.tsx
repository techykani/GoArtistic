import { sanityStaticProps, useSanityQuery } from '@/sanity'
import { groq } from 'next-sanity'
import { renderObjectArray } from 'sanity-react-extra'
import { GetStaticProps, GetStaticPropsContext } from 'next'
import { SanityProps } from 'next-sanity-extra'
import { pageQuery } from '@/lib/query'
import { TitleDescription } from '@/components/sustainability-philosophy/title-description'
import PageBanner from '@/components/widgets/blocks/banners/pageBanner'
import OurPartnerSec from '@/components/about-us/ourPartner'
import { Locations } from '@/components/about-us/Locations'
import { Enquiry } from '@/components/about-us/Enquiry'
import { CTComparision } from '@/components/about-us/CTComparision'
import FAQ from '@/components/about-us/faq'

const query = pageQuery(groq`
   *[_type == 'radiologyPage'][0] {
		...,
		sections[] {
			...,
      media[] -> {
        _id,
        title, slug {current},primaryImg,
        seo{
          description
        }
      },
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

export default function RadiologyPage(props: SanityProps) {
  const { page } = useSanityQuery(query, props).data

  const { sections } = page || { sections: [] }

  if (sections) {
    return (
      <main className="overflow-visible">
        {renderObjectArray(sections, {
          'radiology.landingHero': PageBanner,
          'radiology.titleDescription': TitleDescription,
          'radiology.ourPartner': OurPartnerSec,
          'radiologyPage.faq': FAQ,
          'radiology.ctcomparison': CTComparision,
          'radiology.locations': Locations,
          'medicalHospitalityPage.enquiry': Enquiry,
        })}
      </main>
    )
  }
  return <></>
}
