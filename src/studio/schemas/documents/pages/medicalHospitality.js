import { FaBriefcaseMedical } from 'react-icons/fa'

export default {
  name: 'medicalHospitalityPage',
  title: 'Medical Hospitality',
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
          name: 'medicalHospitalityPage.pageBanner',
          title: 'Hero',
          type: 'common.pageBanner',
        },
        {
          name: 'medicalHospitalityPage.titleDescription',
          title: 'Title Description',
          type: 'details.common.titleDescription',
        },
        { type: 'medicalHospitality.medicalTabs' },
        // { type: 'medicalHospitalityPage.about' },
        // { type: 'medicalHospitalityPage.doctorStories' },
        // { type: 'homePage.ourSpeciality' },
        // { type: 'practice.locations' },
        // { type: 'medicalHospitalityPage.assistance' },
        // { type: 'medicalHospitalityPage.enquiry' },
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
