import { FaClinicMedical } from 'react-icons/fa'

export default {
  name: 'communityEngagement.eventHighlights',
  title: 'Event Highlights',
  type: 'object',
  icon: FaClinicMedical,
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'tagline',
      title: 'Tagline',
      type: 'string',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'array',
      of: [{ type: 'block' }],
    },
    {
      name: 'media',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'media' }],
          validation: (Rule) => Rule.required(),
        },
      ],
    },
    {
      name: 'cta',
      title: 'link',
      type: 'link',
    },
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'tagline',
    },
  },
}
