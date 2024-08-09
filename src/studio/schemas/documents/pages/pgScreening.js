import { FaHome } from 'react-icons/fa'

export default {
  name: 'pgScreening',
  title: 'PG Screening',
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
          name: 'pgScreening.pageBanner',
          title: 'Hero',
          type: 'common.pageBanner',
        },
        {
          name: 'pgScreening.enquiryForm',
          title: 'Enquiry Form',
          type: 'contactUsPage.enquiryForm',
        },
        // { type: 'contactUsPage.address' },
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
