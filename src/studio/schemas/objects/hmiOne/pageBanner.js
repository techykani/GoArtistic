import { AiOutlineHome } from 'react-icons/ai'

export default {
  name: 'hmiOne.pageBanner',
  title: 'Page Banner',
  type: 'object',
  icon: AiOutlineHome,
  fields: [
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
      name: 'logo',
      title: 'logo',
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
      name: 'mobileImage',
      title: 'Mobile Image',
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
      name: 'desktopImage',
      title: 'Desktop Image',
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
      name: 'linkForAppStore',
      title: 'Link For App Store',
      type: 'string',
    },
    {
      name: 'linkForPlaystore',
      title: 'Link For Play Store',
      type: 'string',
    },
  ],
  preview: {
    select: {
      title: 'tagline',
      subtitle: 'description',
      media: 'image',
    },
  },
}
