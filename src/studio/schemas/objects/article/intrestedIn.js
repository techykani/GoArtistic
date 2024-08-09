import { AiOutlineHome } from 'react-icons/ai'

export default {
  name: 'article.intrestedIn',
  title: 'Intrested In',
  type: 'object',
  icon: AiOutlineHome,
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
        name: 'link',
        title: 'View More',
        type: 'link',
      },
  ],
  preview: {
    select: {
      title: 'title',
    },
  },
}
