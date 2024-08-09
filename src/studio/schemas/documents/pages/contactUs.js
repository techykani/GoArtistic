import { FaHome } from 'react-icons/fa'

export default {
  name: 'contactUsPage',
  title: 'Contact Us',
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
          name: 'contactUsPage.pageBanner',
          title: 'Hero',
          type: 'common.pageBanner',
        },
        { type: 'contactUsPage.enquiry' },
        { type: 'contactUsPage.address' },
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
