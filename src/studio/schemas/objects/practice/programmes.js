import { FaHeartbeat } from 'react-icons/fa'
import { MdLink, MdHighlight } from 'react-icons/md'

export default {
  name: 'practice.programmes',
  title: 'Practice Programmes',
  type: 'object',
  icon: FaHeartbeat,
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'tagline',
      title: 'Tagline',
      type: 'string',
    },
    {
      name: 'options',
      title: 'Options',
      type: 'array',
      of: [
        {
          name: 'card',
          title: 'Card',
          type: 'object',
          icon: MdLink,
          fields: [
            {
              name: 'entryName',
              title: 'Entry Name',
              type: 'link',
            },
            {
              name: 'image',
              title: 'Image',
              type: 'image',
            },
          ],
          preview: {
            select: {
              title: 'entryName.text',
            },
          },
        },
      ],
    },
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'tagline',
    },
  },
}
