import { GiSevenPointedStar } from 'react-icons/gi'

export default {
  name: 'common.primaryListItem',
  title: 'Primary List Item',
  type: 'object',
  icon: GiSevenPointedStar,
  fields: [
    {
      name: 'icon',
      type: 'image',
      fields: [
        {
          name: 'alt',
          title: 'Alt Text',
          type: 'string',
        },
      ],
    },
    {
      name: 'title',
      type: 'string',
    },
    {
      name: 'description',
      type: 'text',
    },

    {
      name: 'ctas',
      title: 'CTA',
      type: 'array',
      of: [
        {
          name: 'button',
          title: 'Button',
          type: 'ctaButton',
        },
      ],
    },
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'description',
      media: 'icon',
    },
  },
}
