import { VscSymbolEvent } from 'react-icons/vsc'

export default {
  name: 'message',
  title: 'Message',
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
          title: 'Alt Text',
          type: 'string',
        },
      ],
    },
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {
      name: 'designation',
      title: 'Designation',
      type: 'string',
    },
    {
      name: 'company',
      title: 'Company',
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
