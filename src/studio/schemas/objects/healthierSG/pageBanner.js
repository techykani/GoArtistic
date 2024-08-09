import { AiOutlineHome } from 'react-icons/ai'

export default {
  name: 'healthierSG.pageBanner',
  title: 'Page Banner',
  type: 'object',
  icon: AiOutlineHome,
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
      name: 'mobileBannerImage',
      title: 'Mobile Banner Image',
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
      name: 'desktopBannerImage',
      title: 'Desktop Banner Image',
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
      name: 'logos',
      title: 'Logos',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'logoName',
              title: 'Logo Name',
              type: 'string',
            },
            {
              name: 'logo',
              title: 'Logo Image',
              type: 'image',
              fields: [
                {
                  name: 'alt',
                  title: 'Alt Text',
                  type: 'string',
                },
              ],
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
