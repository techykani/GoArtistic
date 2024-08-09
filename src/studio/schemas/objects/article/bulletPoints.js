import { AiOutlineHome } from 'react-icons/ai'

export default {
  name: 'article.bulletPoints',
  title: 'Bullet Points',
  type: 'object',
  icon: AiOutlineHome,
  fields: [
    {
      name: 'points',
      title: 'Points',
      type: 'array',
      of: [{ type: 'block' }],
    },
  ],
  preview: {
    select: {
      title: 'points',
    },
  },
}
