import { FaHeartbeat } from 'react-icons/fa'

export default {
  name: 'practice.practiceHead',
  title: 'Practice Head',
  type: 'object',
  icon: FaHeartbeat,
  fields: [
    {
      name: 'doctorList',
      title: 'Doctor List',
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
              name: 'doctor',
              title: 'Practice Doctor',
              type: 'reference',
              to: [{ type: 'doctor' }],
            },
            {
              name: 'viewButton',
              title: 'View Button',
              type: 'ctaButton',
            },
          ],
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
