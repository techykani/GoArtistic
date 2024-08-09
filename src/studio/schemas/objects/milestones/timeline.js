import { title } from 'process'
import { VscSymbolEvent } from 'react-icons/vsc'

export default {
  name: 'milestones.timeline',
  title: 'Milestones Timeline',
  type: 'object',
  icon: VscSymbolEvent,
  fields: [
    {
      name: 'timeline',
      title: 'Timeline',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'title',
              title: 'Title',
              type: 'string',
            },
            {
              name: 'caption',
              title: 'Caption',
              type: 'string',
            },
            {
              name: 'description',
              title: 'Description',
              type: 'array',
              of: [{ type: 'block' }],
            },
            {
              name: 'imagesList',
              title: 'Images List',
              type: 'array',
              of: [
                {
                  type: 'object',
                  fields: [
                    {
                      name: 'mobileImage',
                      title: 'Mobile Image',
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
                      name: 'desktopImage',
                      title: 'Desktop Image',
                      type: 'image',
                      fields: [
                        {
                          name: 'alt',
                          title: 'Alt Text',
                          type: 'string',
                        },
                      ],
                    },
                  ],
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
      title: 'milestoneQuote',
      subtitle: 'author',
    },
  },
}
