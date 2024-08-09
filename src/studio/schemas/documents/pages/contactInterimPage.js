import { FaHome } from 'react-icons/fa'

export default {
  name: 'contactInterimPage',
  title: 'Contact Interim Page',
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
          name: 'contactInterimPage.pageBanner',
          title: 'Hero',
          type: 'common.pageBanner',
        },
        {
          name: 'contactInterimPage.titleDescriptionFilters',
          title: 'Title Description',
          type: 'details.common.titleDescriptionFilters',
        },
        {
          name: 'contactInterimPage.enquiry',
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
