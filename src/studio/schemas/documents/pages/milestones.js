import { FaHome } from 'react-icons/fa'

export default {
  name: 'milestones',
  title: 'Milestones',
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
          name: 'milestones.pageBanner',
          title: 'Page Banner',
          type: 'common.pageBanner',
        },
        {
          name: 'milestones.quote',
          title: 'Milestones quote',
          type: 'quote',
        },
        {
          type: 'milestones.timeline',
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
