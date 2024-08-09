import { GrTextWrap } from 'react-icons/gr'
import { block } from '../editor'

export default {
  name: 'details.common.card',
  title: 'Card',
  type: 'object',
  icon: GrTextWrap,
  fields: [
    { name: 'title', title: 'Title', type: 'string' },
    {
      name: 'description',
      title: 'Description',
      type: 'array',
      of: [block],
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
    { name: 'imageRight', title: 'Image Right', type: 'boolean' },
    {
      name: 'link',
      type: 'link',
    },
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'description',
      media: 'image',
    },
  },
}
