import React from 'react'

// next
import { GetStaticProps, GetStaticPropsContext } from 'next'
// next

// sanity
import { groq } from 'next-sanity'
import { sanityStaticProps, useSanityQuery } from '@/sanity'
import { renderObjectArray, SanityImg } from 'sanity-react-extra'
import { SanityProps } from 'next-sanity-extra'
import { TitleDescription } from '@/components/medical-hospitality/title-description'
// sanity

// lib
import { pageQuery } from '@/lib/query'
import PageBanner from '@/components/widgets/blocks/banners/pageBanner'
import { TravelTabs } from '@/components/medical-hospitality/travel-tabs'
// lib

const query = pageQuery(groq`
   *[_type == 'medicalHospitalityPage'][0]{
    ...,
    sections[] {
			...,
        points[] {
      ...,
      "icon": icon.asset->url,
      "mobileIcon": mobileIcon.asset->url,
    },
      specialtyList[] -> {
        _id,
        tagline,
        title,
        "HomeImg": HomeImg.asset->url,
        "HomeSecondaryImg": HomeSecondaryImg.asset->url,
        slug
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
   }
`)

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

const MedicalSpeciality = (props: SanityProps) => {
  const {
    page: { sections, speciality },
  } = useSanityQuery(query, props).data || {}

  return (
    <>
      {renderObjectArray(sections, {
        'medicalHospitalityPage.pageBanner': PageBanner,
        'medicalHospitalityPage.titleDescription': TitleDescription,
        'medicalHospitality.medicalTabs': TravelTabs,
      })}
    </>
  )
}

export default MedicalSpeciality
