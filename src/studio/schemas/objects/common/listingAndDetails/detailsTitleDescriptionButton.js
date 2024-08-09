import { BsFileRichtext } from 'react-icons/bs'
import { block, image } from '../editor'

export default {
  name: 'details.common.titleDescriptionButton',
  title: 'Title, Description & Button',
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
      name: 'link',
      type: 'link',
    },
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'description',
    },
  },
}
