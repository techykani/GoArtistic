import { GiLetterBomb } from 'react-icons/gi'

export default {
  name: 'common.newsletter',
  title: 'Reports',
  type: 'object',
  icon: GiLetterBomb,
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
      name: 'fileList',
      title: 'File',
      type: 'array',
      of: [
        {
          type: 'details.file',
        },
        {
          type: 'image',
          name: 'partnerLogo',
          title: 'Partners',
          fields: [
            {
              name: 'alt',
              type: 'string',
              title: 'Alternative Text',
              description: 'Alternative text for the image',
            },
          ],
        },
      ],
    },
    {
      name: 'icon',
      title: 'Icon',
      type: 'image',
    },
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'tagline',
    },
    prepare(selection) {
      const { title, tagline } = selection
      return {
        title: `Reports | ${title}`,
        subtitle: tagline,
        media: <GiLetterBomb />,
      }
    },
  },
}
