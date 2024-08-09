import { FaClinicMedical } from 'react-icons/fa'
import { MdLink } from 'react-icons/md'
export default {
  name: 'missionAndVision.core',
  title: 'Our Core Values',
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
      type: 'text',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'array',
      of: [{ type: 'block' }],
    },
    {
      name: 'coreValues',
      title: 'Core Values',
      type: 'array',
      of: [
        {
          name: 'card',
          title: 'cards',
          type: 'object',
          icon: MdLink,
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
          ],
          preview: {
            select: {
              title: 'title',
              subtitle: 'tagline',
            },
          },
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
