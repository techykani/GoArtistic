import { FaHome } from 'react-icons/fa'
export default {
  name: 'doctorScreen',
  title: 'Doctor Screen',
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
          name: 'doctorScreen.pageBanner',
          title: 'Hero',
          type: 'common.pageBanner',
        },
        {
          name: 'doctorScreen.titleDescriptionFilters',
          title: 'Title Description',
          type: 'details.common.doctorFilters',
        },
        {
          name: 'doctorScreen.enquiry',
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
