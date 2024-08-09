import { VscSymbolEvent } from 'react-icons/vsc'
import { MdLink } from 'react-icons/md'
export default {
  name: 'ourGPServicesPage.accessibile',
  title: 'Accessible Islandwide ',
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
      title: 'link',
      type: 'link',
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
              title: 'Primary Image',
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
              title: 'Secondary Image',
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
              name: 'subtitle',
              title: 'Sub Title',
              type: 'text',
            },
            {
              name: 'tagline',
              title: 'tagline',
              type: 'text',
            },
            {
              name: 'linkTitle',
              title: 'Link Title',
              type: 'text',
            },
            {
              name: 'links',
              title: 'Links',
              type: 'array',
              of: [
                {
                  name: 'link',
                  title: 'Link',
                  type: 'object',
                  icon: MdLink,
                  fields: [
                    {
                      name: 'link',
                      type: 'link',
                    },
                  ],
                  preview: {
                    select: {
                      title: 'link.text',
                      subtitle: 'shortDes',
                    },
                  },
                },
              ],
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
    },
  },
}
