import { FaClinicMedical } from 'react-icons/fa'

export default {
  name: 'teleMedicine.enquiry',
  title: 'Enquiry',
  type: 'object',
  icon: FaClinicMedical,
  fields: [
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
      name: 'btn1',
      title: 'btnWithImg1',
      type: 'object',
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
          name: 'href',
          title: 'href',
          type: 'string',
          initialValue: '/',
        },
      ],
    },
    {
      name: 'btn2',
      title: 'btnWithImg2',
      type: 'object',
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
          name: 'href',
          title: 'href',
          type: 'string',
          initialValue: '/',
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
