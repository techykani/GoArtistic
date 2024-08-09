import { FaHome } from 'react-icons/fa'
export default {
  name: 'clinicScreen',
  title: 'Clinic Screen',
  type: 'document',
  icon: FaHome,
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
          name: 'clinicScreen.landingHero',
          title: 'Hero',
          type: 'common.pageBanner',
        },
        {
          name: 'clinicScreen.titleDescriptionFilters',
          title: 'Filters',
          type: 'details.common.clinicScreenFilters',
        },
        {
          name: 'clinicBioScreen.programmes',
          title: 'Programmes',
          type: 'practice.programmes',
        },
        {
          name: 'clinicScreen.enquiry',
          title: 'Enquiry',
          type: 'medicalHospitalityPage.enquiry',
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
