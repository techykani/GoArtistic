import { HiCursorClick } from 'react-icons/hi'

export default {
  name: 'details.common.CTA',
  title: 'CTA',
  type: 'object',
  icon: HiCursorClick,
  fields: [
    { name: 'title', title: 'Title', type: 'string' },
    { name: 'subtitle', title: 'Subtitle', type: 'string' },
    { name: 'description', title: 'Description', type: 'text' },
    {
      name: 'cta',
      title: 'Link',
      type: 'link',
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      fields: [
        {
          name: 'alt',
          title: 'Alternative Text',
          description: 'Important for SEO and accessibility',
          type: 'string',
        },
      ],
    },
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'subtitle',
      media: 'image',
    },
  },
}
