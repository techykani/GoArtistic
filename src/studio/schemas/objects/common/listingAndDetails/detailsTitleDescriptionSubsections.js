import { BsFileRichtext } from 'react-icons/bs'
import { block } from '../editor'

export default {
  name: 'details.common.titleDescriptionSubsections',
  title: 'Title & Description & Subsections',
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
      of: [{ type: 'details.common.titleDescription' }],
    },
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'description',
    },
  },
}
