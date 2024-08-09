import { FaHome } from 'react-icons/fa'

export default {
  name: 'hmiOne',
  title: 'HMI One',
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
          type: 'hmiOne.pageBanner',
        },
        {
          type: 'homePage.network',
        },
        { type: 'hmiOne.membershipBenefits' },
        // { type: 'ourGPServicesPage.faq' },
        { type: 'hmiOne.enquiry' },
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
