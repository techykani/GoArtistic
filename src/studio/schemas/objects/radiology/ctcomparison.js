import { BsJournalMedical } from 'react-icons/bs'
import { MdLink, MdHighlight } from 'react-icons/md'

export default {
  name: 'radiology.ctcomparison',
  title: 'CT Comparison',
  type: 'object',
  icon: BsJournalMedical,
  fields: [
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
    { name: 'table', title: 'Table', type: 'table' },
    {
      name: 'importantText',
      title: 'Important Text',
      type: 'array',
      of: [{ type: 'block' }],
    },
  ],

  preview: {
    select: {
      title: 'title',
      subtitle: 'description',
    },
  },
}
