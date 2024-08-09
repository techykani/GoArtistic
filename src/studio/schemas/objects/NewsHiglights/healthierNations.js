import { FaHeartbeat } from 'react-icons/fa'
import { MdLink } from 'react-icons/md'
export default {
  name: 'news.healthierNations',
  title: 'Healthier Nations',
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
      type: 'text',
    },
    {
      name: 'cards',
      title: 'Cards',
      type: 'array',
      of: [
        {
          name: 'card',
          title: 'Card',
          type: 'object',
          icon: MdLink,
          fields: [
            {
              name: 'primaryImg',
              title: 'Primary Desktop Image',
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
              name: 'secondaryImg',
              title: 'Primary Mobile Image',
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
              title: 'Title',
              type: 'text',
            },
            {
              name: 'tagline',
              title: 'tagline',
              type: 'text',
            },
            {
              name: 'link',
              type: 'link',
            },
          ],
          preview: {
            select: {
              title: 'title',
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
      media: 'icon_img',
    },
  },
}
