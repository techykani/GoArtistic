import { MdLink } from 'react-icons/md'

export default {
  name: 'secondaryMenuItem',
  title: 'Secondary Menu Item',
  type: 'object',
  icon: MdLink,
  fields: [
    { name: 'title', type: 'string' },
    {
      name: 'href',
      title: 'URL',
      type: 'string',
    },
    { name: 'highlight', title: 'Highlight', type: 'boolean' },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      fields: [
        {
          name: 'alt',
          title: 'Alt Text',
          type: 'string',
        },
      ],
    },
    { name: 'description', type: 'text' },
    {
      name: 'ctaButton',
      title: 'CTA Button',
      type: 'object',
      fields: [
        {
          name: 'title',
          title: 'Title',
          type: 'string',
          initialValue: 'Make appointment',
        },
        {
          name: 'href',
          title: 'href',
          type: 'string',
          initialValue: '/',
        },
      ],
    },
    { name: 'submenus', title: 'Sub Menus', type: 'array', of: [{ type: 'subMenu' }] },
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'href',
    },
  },
}
