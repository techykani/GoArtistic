import { RiUserSearchLine } from 'react-icons/ri'

export default {
  name: 'common.listingPageSymptomChecker',
  title: 'Symptom Checker',
  type: 'object',
  icon: RiUserSearchLine,
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'array',
      of: [{ type: 'block' }],
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
      name: 'smImage',
      title: 'Small Image',
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
      name: 'additionalInfo',
      title: 'Additional Info',
      type: 'text',
    },
    {
      name: 'ctaButton',
      title: 'Cta Button',
      type: 'ctaButton',
    },
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'description',
      media: 'image',
    },
  },
}
