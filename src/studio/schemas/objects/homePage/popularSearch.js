import { BsFillInfoSquareFill } from 'react-icons/bs'

export default {
  name: 'homePage.popluarSearch',
  title: 'Popular Search',
  type: 'object',
  icon: BsFillInfoSquareFill,
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'placeholder',
      title: 'Placeholder',
      type: 'string',
    },
    {
      name: 'popularsearch',
      title: 'Popular Searches',
      type: 'array',
      of: [{ type: 'link' }],
    },
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'tagline',
      media: 'primaryImg',
    },
  },
}
