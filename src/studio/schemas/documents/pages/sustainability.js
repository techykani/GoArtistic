import { FaHome } from 'react-icons/fa'
export default {
  name: 'sustainability',
  title: 'Sustainability Philosophy',
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
          name: 'sustainability.landingHero',
          title: 'Hero',
          type: 'common.pageBanner',
        },
        {
          name: 'sustainability.titleDescription',
          title: 'Title Description',
          type: 'common.pageOverview',
        },
        {
          type: 'sustainability.guidingPrinciple',
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
