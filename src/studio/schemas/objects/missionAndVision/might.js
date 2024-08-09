import { FaClinicMedical } from 'react-icons/fa'
import { MdLink } from 'react-icons/md'
export default {
  name: 'missionAndVision.might',
  title: 'Our Might Values',
  type: 'object',
  icon: FaClinicMedical,
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'mightValues',
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
              name: 'image',
              title: 'image',
              type: 'image',
              fields: [
                {
                  name: 'alt',
                  title: 'Alt Text',
                  type: 'string',
                },
              ],
            },
            {
              name: 'href',
              title: 'URL',
              type: 'string',
            },
          ],
          preview: {
            select: {
              title: 'title',
              media: 'image',
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
