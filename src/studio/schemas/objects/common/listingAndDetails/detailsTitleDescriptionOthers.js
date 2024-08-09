import { BsFileRichtext } from 'react-icons/bs'
import { block } from '../editor'
export default {
  name: 'details.common.titleDescriptionOthers',
  title: 'Title & Description & Others',
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
    
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'description',
    },
  },
}
