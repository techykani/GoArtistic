import { DoctorListing } from '@/components/doctor/doctorListing'
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
   *[_type == 'doctorScreen'][0] {
		...,
		sections[] {
			...,
		},
    "doctors": *[_type == "doctor"]  {
			...,
      "photo": photo.asset->url,
      specialist [] -> {
        _id,
        title,
      },
      subSpeciality [] -> {
        _id,
        title
      },
      center [] -> {
        _id,
        name,
      }
		},
    "speciality": *[_type == "specialtyList" && isVisibleFilter == true]  {
			...,
		},
    "centers": *[_type == "entities"]  {
			...,
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

export default function HealthScreening(props: SanityProps) {
  const {
    page: { sections, doctors, speciality, centers },
  } = useSanityQuery(query, props).data

  return (
    <main className="overflow-visible">
      {renderObjectArray(sections, {
        'doctorScreen.pageBanner': PageBanner,
        'doctorScreen.titleDescriptionFilters': useCallback(
          (props: any) => (
            <DoctorListing
              filterDropdownOptions={props}
              specialities={speciality}
              centers={centers}
              doctors={doctors}
            />
          ),
          [doctors, centers, speciality],
        ),
        'doctorScreen.enquiry': Enquiry,
      })}
    </main>
  )
}
