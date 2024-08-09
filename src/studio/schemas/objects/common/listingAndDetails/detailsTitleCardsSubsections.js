import { BsFileRichtext } from 'react-icons/bs'
import { block } from '../editor'
export default {
  name: 'details.common.titleCardsSubsections',
  title: 'Title & Cards & Subsections',
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
      name: 'subsections',
      type: 'array',
      of: [{ type: 'details.common.titleDescriptionCards' }],
    },
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'description',
    },
  },
}
