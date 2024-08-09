import { MdLink } from 'react-icons/md'
import { VscSymbolEvent } from 'react-icons/vsc'

export default {
  name: 'exploreOurService.ourSpecialists',
  title: 'Our Specialists',
  type: 'object',
  icon: VscSymbolEvent,
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
      name: 'description',
      title: 'Description',
      type: 'array',
      of: [{ type: 'block' }],
    },
    {
      name: 'cta',
      title: 'Link',
      type: 'link',
    },
    {
      name: 'brandsimages',
      title: 'Brands Images',
      type: 'array',
      of: [
        {
          name: 'card',
          title: 'Card',
          type: 'object',
          icon: MdLink,
          fields: [
            {
              name: 'brandImg',
              title: 'Brand Images',
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
              title: 'title',
              type: 'text',
            },
          ],
          preview: {
            select: {
              media: 'brandImg',
              title: 'title',
            },
          },
        },
      ],
    },
    {
      name: 'card',
      title: 'card',
      type: 'array',
      of: [{ type: 'point' }],
    },
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'tagline',
    },
  },
}
