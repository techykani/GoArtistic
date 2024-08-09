import { BsJournalMedical } from 'react-icons/bs'
import { MdLink, MdHighlight } from 'react-icons/md'

export default {
  name: 'inspiration.option',
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
      name: 'caption',
      title: 'Caption',
      type: 'string',
    },

    {
      name: 'singleImageQuickLink',
      title: 'Single Image',
      type: 'array',
      of: [
        {
          name: 'singleImage',
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
              name: 'title',
              title: 'Title',
              type: 'text',
            },
            {
              name: 'description',
              title: 'Description',
              type: 'array',
              of: [{ type: 'block' }],
            },
            {
              name: 'quoteName',
              title: 'Quote Name',
              type: 'string',
            },
            {
              name: 'quoteCaption',
              title: 'Quote Caption',
              type: 'string',
            },
            {
              name: 'quoteDomain',
              title: 'Quote Domain',
              type: 'string',
            },
            {
              name: 'alignImage',
              title: 'Left or Right Image',
              type: 'boolean',
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
              name: 'title',
              title: 'Title',
              type: 'text',
            },
            {
              name: 'link',
              type: 'link',
            },
            {
              name: 'tagline',
              title: 'Tagline',
              type: 'text',
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
      title: 'entryName',
      subtitle: 'description',
      media: 'icon_img',
    },
  },
}
