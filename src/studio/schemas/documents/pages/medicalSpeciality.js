import { FaHome } from 'react-icons/fa'

export default {
  name: 'medicalSpeciality',
  title: 'Medical Speciality',
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
          name: 'medicalSpeciality.pageBanner',
          title: 'Page Banner',
          type: 'common.pageBanner',
        },
        {
          title: 'Specialty Search',
          type: 'medicalSpecialty.search',
        },
        { type: 'medicalHospitalityPage.enquiry' },
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
