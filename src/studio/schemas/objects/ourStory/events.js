import { VscSymbolEvent } from 'react-icons/vsc'

export default {
  name: 'milestone.events',
  title: 'Events',
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
    {
      name: 'imageCaption',
      title: 'Image Caption',
      type: 'string',
    },
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'tagline',
    },
  },
}
