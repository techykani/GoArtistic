import { FaClinicMedical } from 'react-icons/fa'
import { MdLink, MdHighlight } from 'react-icons/md'
export default {
  name: 'article.cards',
  title: 'Cards',
  type: 'object',
  icon: FaClinicMedical,
  fields: [
    {
      name: 'brandsimages',
      title: 'Brands Images',
      type: 'array',
      of: [
        {
          name: 'card',
          title: 'Card',
          type: 'object',
          icon: MdLink,
          fields: [
            {
              name: 'brandImg',
              title: 'Brand Images',
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
              name: 'title',
              title: 'Title',
              type: 'string',
            },
            {
              name: 'percentageNumber1',
              title: 'Percentage Number 1',
              type: 'string',
            },
            {
              name: 'percentageNumber',
              title: 'Percentage Number',
              type: 'string',
            },
            {
              name: 'percentageNumber3',
              title: 'Percentage Number 3',
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
              media: 'brandImg',
            },
          },
        },
      ],
    },
  ],
  preview: {
    select: {
      title: 'cards',
    },
  },
}
