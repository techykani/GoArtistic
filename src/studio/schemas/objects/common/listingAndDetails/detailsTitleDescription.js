import { BsFileRichtext } from 'react-icons/bs'
import { block, image, card } from '../editor'

export default {
  name: 'details.common.titleDescription',
  title: 'Title & Description',
  type: 'object',
  icon: BsFileRichtext,
  fields: [
    { name: 'title', title: 'Title', type: 'string' },
    {
      name: 'description',
      title: 'Description',
      type: 'array',
      of: [block, image, card],
    },
    {
      name: 'extraInfo',
      title: 'Extra Info',
      type: 'array',
      of: [block],
    },
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'description',
    },
    prepare({ title, subtitle }) {
      return {
        title: `${title}`,
        media: <BsFileRichtext />,
      }
    },
  },
}
