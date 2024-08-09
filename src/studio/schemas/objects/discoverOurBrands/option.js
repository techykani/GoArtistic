import { BsJournalMedical } from 'react-icons/bs'
import { MdLink, MdHighlight } from 'react-icons/md'

export default {
  name: 'discover.option',
  title: 'Option',
  type: 'object',
  icon: BsJournalMedical,
  fields: [
    {
      name: 'entryName',
      title: 'Entry Name',
      type: 'string',
    },
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'description',
      title: 'Description',
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
      title: 'entryName',
      subtitle: 'description',
      media: 'icon_img',
    },
  },
}
