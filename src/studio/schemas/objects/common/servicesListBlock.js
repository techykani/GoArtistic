import { SiReasonstudios } from 'react-icons/si'

export default {
  name: 'common.services',
  title: 'Services',
  type: 'object',
  icon: SiReasonstudios,
  fields: [
    {
      name: 'tagline',
      type: 'string',
    },

    {
      name: 'description',
      type: 'text',
    },

    {
      name: 'services',
      type: 'array',
      of: [{ name: 'service', type: 'common.primaryListItem' }],
    },
  ],
  preview: {
    select: {
      title: 'tagline',
      subtitle: 'description',
    },
  },
}
