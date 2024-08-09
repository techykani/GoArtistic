import { FaHeartbeat } from 'react-icons/fa'
import { MdLink, MdHighlight } from 'react-icons/md'

export default {
  name: 'insurancePartners',
  title: 'Insurance partners',
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
      name: 'ctas',
      title: 'Ctas',
      type: 'array',
      of: [
        {
          name: 'cta',
          title: 'Link',
          type: 'link',
        },
      ],
    },
    {
      name: 'tabs',
      title: 'Tabs',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'tabName',
              title: 'Tab Name',
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
