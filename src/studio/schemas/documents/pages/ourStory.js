import { FaBriefcaseMedical } from 'react-icons/fa'

export default {
  name: 'ourStory',
  title: 'Our Story',
  type: 'document',
  icon: FaBriefcaseMedical,
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
          name: 'ourStory.pageBanner',
          title: 'Hero',
          type: 'common.pageBanner',
        },
        {
          name: 'ourStory.message',
          title: 'Message',
          type: 'message',
        },
        {
          type: 'career.community',
        },
        {
          name: 'ourStory.milestones',
          title: 'Our Milestones',
          type: 'milestone',
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
