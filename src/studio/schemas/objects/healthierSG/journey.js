import { FaClinicMedical } from 'react-icons/fa'

export default {
  name: 'healthierSG.journey',
  title: 'Healthier SG Journey',
  type: 'object',
  icon: FaClinicMedical,
  fields: [
    {
      name: 'tagline',
      title: 'Tagline',
      type: 'text',
    },
    {
      name: 'steps',
      title: 'Steps',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'title',
              title: 'Title',
              type: 'text',
            },
            {
              name: 'subTitle',
              title: 'SubTitle',
              type: 'string',
            },
            {
              name: 'description',
              title: 'Description',
              type: 'array',
              of: [{ type: 'block' }],
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
      media: 'image',
    },
  },
}
