import { BsJournalMedical } from 'react-icons/bs'
import { MdLink, MdHighlight } from 'react-icons/md'

export default {
  name: 'homeOnecareClinic.ClinicInfo',
  title: 'Clinic Info',
  type: 'object',
  icon: BsJournalMedical,
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
      name: 'teritaryImg',
      title: 'Teritary Image',
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
}
