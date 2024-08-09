import { FaHome } from 'react-icons/fa'

export default {
  name: 'newsAndHighlights',
  title: 'News And Highlights',
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
          name: 'news.pageBanner',
          title: 'Page Banner',
          type: 'common.pageBanner',
        },
        { type: 'news.networkNews' },
        { type: 'news.titleDescriptionLogo' },
        { type: 'news.healthierNations' },
        { type: 'news.programmes' },
        { type: 'news.healthierAsCommunity' },
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
