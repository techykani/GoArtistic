import { VscSymbolEvent } from 'react-icons/vsc'

export default {
  name: 'quote',
  title: 'Quote',
  type: 'object',
  icon: VscSymbolEvent,
  fields: [
    {
      name: 'milestoneQuote',
      title: 'quote',
      type: 'text',
    },
    {
      name: 'author',
      title: 'Author',
      type: 'string',
    },
  ],
  preview: {
    select: {
      title: 'milestoneQuote',
      subtitle: 'author',
    },
  },
}
