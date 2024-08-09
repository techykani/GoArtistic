import { FaBriefcaseMedical } from 'react-icons/fa'

export default {
  name: 'hmiMedicalCentrePage',
  title: 'HMI Onecare clinic',
  type: 'document',
  icon: FaBriefcaseMedical,
  fields: [
    {
      name: 'language',
      type: 'string',
      readOnly: true,
      hidden: true,
    },
    {
      name: 'seo',
      title: 'SEO',
      type: 'seo',
    },
    {
      name: 'sections',
      title: 'Sections',
      type: 'array',
      of: [
        {
          name: 'hmiMedicalCentrePage.landingHero',
          title: 'Hero',
          type: 'common.pageBanner',
        },
        {
          name: 'hmiMedicalCentrePage.titleDescription',
          title: 'Title Description',
          type: 'details.common.titleDescription',
        },
        {
          name: 'hmiMedicalCentrePage.clinicInfo',
          title: 'Clinic Info',
          type: 'homeOnecareClinic.ClinicInfo',
        },
        {
          name: 'hmiMedicalCentrePage.doctorStories',
          title: 'Our Specialist Doctors',
          type: 'medicalHospitalityPage.doctorStories',
        },
        {
          name: 'hmiMedicalCentrePage.network',
          title: 'Our Network',
          type: 'homePage.network',
        },
        {
          name: 'hmiMedicalCentrePage.search',
          title: 'Specialty Search',
          type: 'medicalSpecialty.search',
        },
        {
          name: 'hmiMedicalCentrePage.sharingMore',
          title: 'Speciality Care',
          type: 'homePage.sharingMore',
        },
        {
          name: 'hmiMedicalCentrePage.clinicList',
          title: 'Clinic List',
          type: 'hmiMedicalCentre.ClinicList',
        },
        {
          name: 'hmiMedicalCentrePage.locationInfo',
          title: 'Location Info',
          type: 'contactUsPage.address',
        },
      ],
    },
  ],
  preview: {
    select: {
      title: 'seo.title',
      subtitle: 'seo.description',
    },
  },
}
