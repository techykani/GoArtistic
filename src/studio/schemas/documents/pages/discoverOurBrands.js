import { FaHome } from 'react-icons/fa'
export default {
  name: 'discoverOurBrands',
  title: 'Discover Our Brands',
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
          name: 'discoverOurBrands.landingHero',
          title: 'Hero',
          type: 'common.pageBanner',
        },
        { type: 'discoverOurBrands.discoverTabs' },
        { type: 'discoverOurBrands.brands' },
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
