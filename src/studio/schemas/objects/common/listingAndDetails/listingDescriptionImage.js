import { BsFileRichtext } from 'react-icons/bs'
import { block } from '../editor'

export default {
  name: 'listing.common.descriptionImage',
  title: 'Description & Image',
  type: 'object',
  icon: BsFileRichtext,
  fields: [
    {
      name: 'description',
      title: 'Description',
      type: 'array',
      of: [block],
    },
    {
      name: 'image',
      type: 'image',
      title: 'Image',
      fields: [
        {
          name: 'alt',
          title: 'Alternative Text',
          description: 'Important for SEO and accessibility',
          type: 'string',
        },
      ],
    },
    {
      name: 'smImage',
      title: 'Small Image',
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
      subtitle: 'description',
    },
  },
}
