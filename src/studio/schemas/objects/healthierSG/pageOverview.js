import { AiOutlineHome } from 'react-icons/ai'

export default {
  name: 'healthierSG.pageOverview',
  title: 'Healthier SG Page Overview',
  type: 'object',
  icon: AiOutlineHome,
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'text',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
    },
    {
      name: 'cta',
      title: 'link',
      type: 'link',
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
