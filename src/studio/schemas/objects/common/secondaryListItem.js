import { GiSevenPointedStar } from 'react-icons/gi'

export default {
  name: 'common.secondaryListItem',
  title: 'Secondary List Item',
  type: 'object',
  icon: GiSevenPointedStar,
  fields: [
    {
      name: 'icon',
      title: 'Icon',
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
      name: 'description',
      title: 'Description',
      type: 'text',
    },
    {
      name: 'href',
      title: 'Href',
      type: 'string',
    },
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'description',
      media: 'icon',
    },
  },
}
