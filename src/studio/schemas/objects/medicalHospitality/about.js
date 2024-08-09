import { FaBriefcaseMedical } from 'react-icons/fa'

export default {
  name: 'medicalHospitalityPage.about',
  title: 'About',
  type: 'object',
  icon: FaBriefcaseMedical,
  fields: [
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
      name: 'smallImage',
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
      name: 'description',
      title: 'Description',
      type: 'text',
    },
    {
      name: 'button',
      title: 'Button',
      type: 'object',
      fields: [
        {
          name: 'title',
          title: 'Button Title',
          type: 'string',
        },
        {
          name: 'icon',
          title: 'Button Icon',
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
          name: 'link',
          title: 'Button Link',
          type: 'string',
        },
      ],
    },
  ],
  preview: {
    select: {
      title: 'title',
      media: 'smallImage',
    },
  },
}
