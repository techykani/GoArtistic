import { FaHeartbeat } from 'react-icons/fa'

export default {
  name: 'news.titleDescriptionLogo',
  title: 'Title Description Logo',
  type: 'object',
  icon: FaHeartbeat,
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'array',
      of: [{ type: 'block' }],
    },
    {
      name: 'primaryImg',
      title: 'Primary Desktop Icon',
      type: 'image',
    },
    {
      name: 'secondaryImg',
      title: 'Secondary Desktop Icon',
      type: 'image',
    },
    {
      name: 'secondaryMobileImg',
      title: 'Secondary Mobile Icon',
      type: 'image',
    },
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'tagline',
    },
  },
}
