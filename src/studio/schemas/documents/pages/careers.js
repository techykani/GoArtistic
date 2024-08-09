import { FaHome } from 'react-icons/fa'
export default {
  name: 'careers',
  title: 'Careers',
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
          name: 'careers.landingHero',
          title: 'Hero',
          type: 'common.pageBanner',
        },
        {
          name: 'careers.titleDescription',
          title: 'Title Description',
          type: 'details.common.titleDescription',
        },
        {
          type: 'career.community',
        },
        {
          name: 'careers.description',
          title: 'Description',
          type: 'homePage.healthcare',
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
