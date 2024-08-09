import { FaHome } from 'react-icons/fa'
export default {
  name: 'mediaScreen',
  title: 'Media Screen',
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
          name: 'mediaScreen.landingHero',
          title: 'Hero',
          type: 'common.pageBanner',
        },
        {
          name: 'mediaScreen.titleDescriptionFilters',
          title: 'Title Description',
          type: 'details.common.titleDescriptionFilters',
        },
        {
          name: 'mediaScreen.enquiry',
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
