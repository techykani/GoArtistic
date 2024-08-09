import { VscSymbolEvent } from 'react-icons/vsc'

export default {
  name: 'exploreOurService.gpServices',
  title: 'GP Services',
  type: 'object',
  icon: VscSymbolEvent,
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
      name: 'link',
      type: 'link',
    },
    {
      name: 'card',
      title: 'card',
      type: 'array',
      of: [{ type: 'point' }],
    },
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'tagline',
    },
  },
}
