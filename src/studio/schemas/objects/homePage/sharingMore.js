import { FaClinicMedical } from 'react-icons/fa'

export default {
  name: 'homePage.sharingMore',
  title: 'Sharing More',
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
      name: 'insights',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'insights' }],
          validation: (Rule) => Rule.required(),
        },
      ],
    },
    {
      name: 'button',
      title: 'Button',
      type: 'ctaButton',
    },
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'tagline',
    },
  },
}
