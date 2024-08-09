import { AiOutlineSafetyCertificate } from 'react-icons/ai'
import { MdLink, MdHighlight } from 'react-icons/md'

export default {
  name: 'practice.proceduresTabs',
  title: 'Procedures Tabs',
  type: 'object',
  icon: AiOutlineSafetyCertificate,

  fields: [
    { name: 'sectionName', title: 'Section Name', type: 'string' },
    { name: 'sectionTagline', title: 'Section Tagline', type: 'string' },
    {
      title: 'Layout with image',
      name: 'layoutWithImage',
      type: 'boolean',
    },
    {
      name: 'options',
      title: 'Tabs',
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
              type: 'string',
            },
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
              name: 'description',
              title: 'Description',
              type: 'array',
              of: [{ type: 'block' }],
            },
          ],
          preview: {
            select: {
              title: 'entryName',
            },
          },
        },
      ],
    },
  ],
  preview: {
    select: {
      title: 'sectionName',
      subtitle: 'sections[0].tagline',
      media: 'sections[0].thumbnail',
    },
  },
}
