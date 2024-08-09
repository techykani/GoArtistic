import { VscSymbolEvent } from 'react-icons/vsc'

export default {
  name: 'homePage.ourSpeciality',
  title: 'Our Speciality',
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
      name: 'cta',
      title: 'link',
      type: 'link',
    },
    {
      name: 'specialtyList',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'specialtyList' }],
          validation: (Rule) => Rule.required(),
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
