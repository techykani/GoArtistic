import { AiOutlineHome } from 'react-icons/ai'

export default {
  name: 'article.source',
  title: 'Source',
  type: 'object',
  icon: AiOutlineHome,
  fields: [
    {
        name: 'sourceTitle',
        title: 'sourceTitle',
        type: 'string',
      },
      {
        name: 'source',
        title: 'Description',
        type: 'array',
        of: [{ type: 'block' }]
      },
  ],
  preview: {
    select: {
      title: 'sourceTitle',
    },
  },
}
