import { FaHeartbeat } from 'react-icons/fa'

export default {
  name: 'homePage.network',
  title: 'Explore Network',
  type: 'object',
  icon: FaHeartbeat,
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'tagline',
      title: 'Tagline',
      type: 'text',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'array',
      of: [{ type: 'block' }],
    },
    {
      name: 'points',
      title: 'Quick Links',
      type: 'array',
      of: [{ type: 'point' }],
    },

    {
      name: 'cta',
      title: 'Link',
      type: 'link',
    },
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'tagline',
    },
  },
}
