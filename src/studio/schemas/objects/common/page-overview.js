import { AiOutlineHome } from 'react-icons/ai'

export default {
  name: 'common.pageOverview',
  title: 'Page Overview',
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
      subtitle: 'tagline',
      media: 'image',
    },
  },
}
