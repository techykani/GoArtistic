import { VscSymbolEvent } from 'react-icons/vsc'

export default {
  name: 'pillars',
  title: 'Pillars',
  type: 'object',
  icon: VscSymbolEvent,
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
      name: 'pillarList',
      title: 'Pillar List',
      type: 'array',
      of: [
        {
          type: 'pillar.details',
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
