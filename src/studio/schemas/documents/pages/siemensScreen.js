import { FaHome } from 'react-icons/fa'
export default {
  name: 'siemensScreen',
  title: 'Siemens Screen',
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
          name: 'siemensScreen.pageBanner',
          title: 'Hero',
          type: 'common.pageBanner',
        },
        {
          name: 'siemensScreen.filter',
          title: 'Filter',
          type: 'common.options',
        },
        {
          name: 'siemensScreen.enquiry',
          title: 'Enquiry Form',
          type: 'contactUsPage.enquiryForm',
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
