import { FaPlane } from 'react-icons/fa'

export default {
  name: 'medicalTravelAgents.banner',
  title: 'Banner',
  type: 'object',
  icon: FaPlane,
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
  ],
  preview: {
    select: {
      title: 'title',
      media: 'bannerImage',
    },
  },
}
