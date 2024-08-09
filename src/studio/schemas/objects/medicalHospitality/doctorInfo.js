import { FaHospitalUser } from 'react-icons/fa'

export default {
  name: 'doctorInfo',
  title: 'Doctor Info',
  type: 'document',
  icon: FaHospitalUser,
  fields: [
    {
      name: 'doctorImage',
      title: 'Doctor Image',
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
      name: 'doctorName',
      title: 'Doctor Name',
      type: 'string',
    },
    {
      name: 'consultantType',
      title: 'Consultant Type',
      type: 'string',
    },
    {
      name: 'doctorField',
      title: 'Doctor Field',
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
      title: 'doctorName',
      media: 'doctorImage',
    },
  },
}
