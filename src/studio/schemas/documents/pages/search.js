import { FcSearch } from 'react-icons/fc'

export default {
  name: 'search',
  title: 'Search',
  type: 'document',
  i18n: true,
  icon: FcSearch,
  fields: [
    {
      name: 'seo',
      title: 'SEO',
      type: 'seo',
    },
    {
      name: 'sections',
      title: 'Sections',
      type: 'array',
      of: [{ type: 'search.searchContent' }],
    },
  ],
  preview: {
    select: {
      title: 'seo.title',
      subtitle: 'seo.description',
    },
  },
}
