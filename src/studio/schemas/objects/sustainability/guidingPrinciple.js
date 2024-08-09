import { FaClinicMedical } from 'react-icons/fa'

export default {
  name: 'sustainability.guidingPrinciple',
  title: 'Sustainability',
  type: 'object',
  icon: FaClinicMedical,
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'mobileTitle',
      title: 'Mobile Title',
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
      name: 'principles',
      title: 'Principles',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'title',
              title: 'Title',
              type: 'string',
            },
            {
              name: 'caption',
              title: 'Caption',
              type: 'string',
            },
            {
              name: 'points',
              title: 'Quick Links',
              type: 'array',
              of: [{ type: 'point' }],
            },
          ],
        },
      ],
    },
    {
      name: 'cta',
      title: 'Link',
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
