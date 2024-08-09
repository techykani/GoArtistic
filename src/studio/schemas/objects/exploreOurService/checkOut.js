import { VscSymbolEvent } from 'react-icons/vsc'

export default {
  name: 'exploreOurService.checkOut',
  title: 'Check out our GP clinics',
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
      name: 'clinicLocations',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'clinicLocations' }],
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
