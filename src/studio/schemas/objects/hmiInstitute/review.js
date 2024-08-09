import { VscSymbolEvent } from 'react-icons/vsc'

export default {
  name: 'hmiInstitute.reviews',
  title: 'HMI Institute Reviews',
  type: 'object',
  icon: VscSymbolEvent,
  fields: [
    {
      name: 'tagline',
      title: 'Tagline',
      type: 'text',
    },
    {
      name: 'cta',
      title: 'link',
      type: 'link',
    },
    {
      name: 'rating',
      title: 'Rating',
      type: 'object',
      fields: [
        {
          name: 'ratingNumber',
          title: 'Rating Number',
          type: 'string',
        },
        {
          name: 'caption',
          title: 'Caption',
          type: 'string',
        },
      ],
    },
    {
      name: 'studentReview',
      title: 'Student Review',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'ratingNumber',
              title: 'Rating Number',
              type: 'number',
            },
            {
              name: 'caption',
              title: 'Caption',
              type: 'string',
            },
            {
              name: 'cta',
              title: 'link',
              type: 'link',
            },
            {
              name: 'studentImage',
              title: 'Student Image',
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
              name: 'studentName',
              title: 'Student Name',
              type: 'string',
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
