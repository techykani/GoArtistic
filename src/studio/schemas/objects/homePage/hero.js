import { AiOutlineHome } from 'react-icons/ai'

export default {
  name: 'homePage.hero',
  title: 'Hero',
  type: 'object',
  icon: AiOutlineHome,
  fields: [
    {
      name: 'masterHead',
      title: 'Master Head',
      type: 'array',
      of: [{ type: 'masterCarousel' }],
    },
  ],
  preview: {
    select: {
      title: 'Master Head',
      subtitle: 'tagline',
      media: 'image',
    },
  },
}
