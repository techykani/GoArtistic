import { FaBriefcaseMedical } from 'react-icons/fa'

export default {
  name: 'banner',
  title: 'Banner',
  type: 'object',
  icon: FaBriefcaseMedical,
  fields: [
    {
      name: 'bannerImage',
      title: 'Banner Image',
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
      name: 'smallBannerImage',
      title: 'Small Banner Image',
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
      name: 'tagline',
      title: 'Tagline',
      type: 'string',
    },
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'secondaryTitle',
      title: 'Secondary Title',
      type: 'string',
    },
    {
      name: 'secondaryDescription',
      title: 'Secondary Description',
      type: 'text',
    },
  ],
  preview: {
    select: {
      title: 'title',
      media: 'bannerImage',
    },
  },
}
