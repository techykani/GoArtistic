import { BsJournalMedical } from 'react-icons/bs'
import { MdLink, MdHighlight } from 'react-icons/md'

export default {
  name: 'aboutUs.leadership',
  title: 'Our Leadership',
  type: 'object',
  icon: BsJournalMedical,
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
      name: 'leaders',
      type: 'array',
      title: 'Leaders',
      of: [
        {
          type: 'reference',
          to: [{ type: 'management' }],
        },
      ],
    },
  ],

  preview: {
    select: {
      title: 'title',
      subtitle: 'description',
      media: 'icon_img',
    },
  },
}
