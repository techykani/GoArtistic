import { MdLink } from 'react-icons/md'

export default {
  name: 'menuItem',
  title: 'Menu Item',
  type: 'object',
  icon: MdLink,
  fields: [
    {
      name: 'title',
      type: 'string',
    },
    {
      name: 'href',
      title: 'URL',
      type: 'string',
    },
    { name: 'inFooter', title: 'In Footer', type: 'boolean' },
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'href',
    },
  },
}
