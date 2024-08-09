import { MdOutlineContactPhone, MdHighlight } from 'react-icons/md'
import { block } from './editor'

export default {
  name: 'contactInfo',
  title: 'Contact Info',
  type: 'object',
  icon: MdOutlineContactPhone,
  fields: [
    { name: 'title', title: 'Title', type: 'string' },
    {
      name: 'contactInfo',
      title: 'Contact Info',
      type: 'array',
      of: [
        {
          name: 'contactInfo',
          title: 'Contact Info',
          type: 'object',
          fields: [
            { name: 'icon', title: 'Icon', type: 'image' },
            { name: 'description', type: 'array', of: [block] },
          ],
          preview: {
            select: {
              media: 'icon',
              title: 'description',
            },
          },
        },
      ],
    },

    {
      name: 'opningHour',
      title: 'Opinging Hour',
      type: 'object',
      fields: [
        { name: 'icon', title: 'Icon', type: 'image' },
        {
          name: 'description',
          title: 'Description',
          type: 'array',
          of: [block],
        },
      ],
    },
  ],

  preview: {
    select: {
      title: 'title',
    },
  },
}
