import { BsFileRichtext } from 'react-icons/bs'
import { block } from '../editor'

export default {
  name: 'details.common.titleDescriptionCards',
  title: 'Title & Description & Cards',
  type: 'object',
  icon: BsFileRichtext,
  fields: [
    { name: 'title', title: 'Title', type: 'string' },
    {
      name: 'description',
      title: 'Description',
      type: 'array',
      of: [block],
    },
    {
      name: 'cards',
      type: 'array',
      of: [{ type: 'details.common.card' }],
    },
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'description',
    },
  },
}
