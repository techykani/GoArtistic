import { BsJournalMedical } from 'react-icons/bs'
import { block } from '../../objects/common/editor'

export default {
  name: 'senior.option',
  title: 'Option',
  type: 'object',
  icon: BsJournalMedical,
  fields: [
    {
      name: 'tabName',
      title: 'Tab Name',
      type: 'string',
    },
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'management',
      title: 'Senior Management',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'officerName',
              title: 'Officer Name',
              type: 'string',
            },
            {
              name: 'image',
              title: 'Image',
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
              name: 'designation',
              title: 'Designation',
              type: 'string',
            },
          ],
        },
      ],
    },
  ],

  preview: {
    select: {
      title: 'tabName',
      subtitle: 'designation',
      media: 'image',
    },
  },
}
