import { AiOutlineHome } from 'react-icons/ai'

export default {
  name: 'common.landingHero',
  title: 'Hero',
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
      name: 'image',
      title: 'Image',
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
      name: 'description',
      title: 'Description',
      type: 'text',
    },
    {
      name: 'button',
      title: 'Button',
      type: 'ctaButton',
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
