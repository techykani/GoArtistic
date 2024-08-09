import { BsFileRichtext } from 'react-icons/bs'
import { block } from '../editor'
export default {
  name: 'about.common.titleDescriptionTableSubsection',
  title: 'Title &  Subsections with table',
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
      of: [{ type: 'titleTable' }],
    },
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'description',
    },
    prepare({ title }) {
      return {
        title: `${title}`,

        media: <BsFileRichtext />,
      }
    },
  },
}
