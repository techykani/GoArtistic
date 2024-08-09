import { VscSymbolEvent } from 'react-icons/vsc'

export default {
  name: 'milestone',
  title: 'Milestone',
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
      name: 'decade',
      title: 'Decade',
      type: 'array',
      of: [
        {
          type: 'milestone.decadeStory',
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
