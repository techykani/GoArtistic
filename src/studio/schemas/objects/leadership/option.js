import { BsJournalMedical } from 'react-icons/bs'
import { block } from '../../objects/common/editor'

export default {
  name: 'leadership.option',
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
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {
      name: 'designation',
      title: 'Designation',
      type: 'string',
    },
    {
      name: 'image',
      title: 'image',
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
      name: 'about',
      type: 'object',
      fields: [
        {
          name: 'title',
          type: 'string',
        },
        {
          name: 'description',
          type: 'array',
          of: [block],
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
