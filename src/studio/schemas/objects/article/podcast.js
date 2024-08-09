import { AiOutlineHome } from 'react-icons/ai'

export default {
  name: 'article.podcast',
  title: 'Podcast',
  type: 'object',
  icon: AiOutlineHome,
  fields: [
    {
      name: 'podcast',
      title: 'Podcast',
      type: 'string',
    },
  ],
  preview: {
    select: {
      title: 'podcast',
    },
  },
}
