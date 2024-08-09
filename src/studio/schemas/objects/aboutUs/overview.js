import { BsJournalMedical } from 'react-icons/bs'
import { MdLink, MdHighlight } from 'react-icons/md'

export default {
  name: 'aboutUs.overview',
  title: 'About Us Overview',
  type: 'object',
  icon: BsJournalMedical,
  fields: [
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
      name: 'data',
      title: 'Data',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'dataTitle',
              title: 'Data Title',
              type: 'text',
            },
            {
              name: 'subTitle',
              title: 'Sub Title',
              type: 'text',
            },
          ],
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
