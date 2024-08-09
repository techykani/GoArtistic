import { FaHeartbeat } from 'react-icons/fa'

export default {
  name: 'corporateCare.enterpriseSolutions',
  title: 'Enterprise Solutions',
  type: 'object',
  icon: FaHeartbeat,
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
      name: 'points',
      title: 'Quick Links',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'containAppLinks',
              title: 'Does it Contain Links to Download App',
              type: 'boolean',
              description: 'True - If the card contains links to download apps',
              initialValue: false,
            },
            {
              name: 'cta',
              title: 'External Link',
              type: 'link',
              hidden: ({ parent }) => parent?.containAppLinks === true,
            },
            {
              name: 'linkTOAppStore',
              title: 'Link To App Store',
              type: 'link',
              hidden: ({ parent }) => !parent?.containAppLinks,
            },
            {
              name: 'linkToPlayStore',
              title: 'Link To Play Store',
              type: 'link',
              hidden: ({ parent }) => !parent?.containAppLinks,
            },
            {
              name: 'subTitle',
              title: 'Subtitle',
              type: 'text',
            },
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
              name: 'shortDes',
              title: 'Short Description',
              type: 'text',
            },
          ],
          preview: {
            select: {
              title: 'subTitle',
              subtitle: 'shortDes',
            },
          },
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
