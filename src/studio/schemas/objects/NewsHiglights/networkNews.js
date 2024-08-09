import { FaHeartbeat } from 'react-icons/fa'

export default {
  name: 'news.networkNews',
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
      name: 'logo',
      title: 'Desktop Logo',
      type: 'image',
    },
    {
      name: 'logoMobile',
      title: 'Mobile Logo',
      type: 'image',
    },
    {
      name: 'desktopIcon',
      title: 'Icon',
      type: 'image',
    },
    {
      name: 'points',
      title: 'Quick Links',
      type: 'array',
      of: [{ type: 'pointNews' }],
    },
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'tagline',
    },
  },
}
