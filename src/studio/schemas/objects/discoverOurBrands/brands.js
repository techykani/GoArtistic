import { AiOutlineSafetyCertificate } from 'react-icons/ai'
import { MdLink, MdHighlight } from 'react-icons/md'

export default {
  name: 'discoverOurBrands.brands',
  title: 'Brands',
  type: 'object',
  icon: AiOutlineSafetyCertificate,

  fields: [
    { name: 'sectionName', title: 'Section Name', type: 'text' },
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
              title: 'title',
              type: 'text',
            },
          ],
          preview: {
            select: {
              media: 'brandImg',
              title: 'title',
            },
          },
        },
      ],
    },
    {
      name: 'tagline',
      title: 'tagline',
      type: 'text',
    },
    {
      name: 'link',
      type: 'link',
    },
  ],
  preview: {
    select: {
      title: 'sectionName',
    },
  },
}
