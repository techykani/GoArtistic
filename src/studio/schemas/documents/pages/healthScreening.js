import { FaHome } from 'react-icons/fa'
export default {
  name: 'healthScreening',
  title: 'Health Screening',
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
          name: 'healthScreening.landingHero',
          title: 'Hero',
          type: 'common.pageBanner',
        },
        {
          name: 'healthScreening.guidingPrinciple',
          title: 'Facilities',
          type: 'homePage.community',
        },
        {
          name: 'healthScreening.filter',
          title: 'Filter',
          type: 'common.options',
        },
        {
          name: 'healthScreening.screening',
          title: 'Health Screening',
          type: 'homePage.healthcare',
        },
        {
          name: 'healthScreening.corporateHealth',
          title: 'Corporate Health Screening',
          type: 'homePage.healthcare',
        },
        { type: 'ourGPServicesPage.faq' },
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
