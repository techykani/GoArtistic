import { VscSymbolEvent } from 'react-icons/vsc'

export default {
  name: 'pillar.details',
  title: 'Pillar Details',
  type: 'object',
  icon: VscSymbolEvent,
  fields: [
    {
      name: 'tag',
      title: 'Tag',
      type: 'string',
    },
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
      title: 'Primary Image',
      type: 'image',
      fields: [
        {
          name: 'alt',
          type: 'string',
        },
      ],
    },
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'tagline',
    },
  },
}
