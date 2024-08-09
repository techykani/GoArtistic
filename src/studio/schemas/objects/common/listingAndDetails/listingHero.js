import { AiOutlineHome } from 'react-icons/ai'

export default {
  name: 'listing.common.hero',
  title: 'Hero',
  type: 'object',
  icon: AiOutlineHome,
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
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'description',
    },
    prepare({ title, subtitle }) {
      return {
        title: title,
        subtitle,
        media: <AiOutlineHome />,
      }
    },
  },
}
