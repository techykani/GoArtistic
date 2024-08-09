import { AiOutlineMedicineBox } from 'react-icons/ai'

export default {
  name: 'addressLink',
  title: 'Address Links',
  type: 'object',
  icon: AiOutlineMedicineBox,
  fields: [
    {
      title: 'Icon',
      name: 'icon',
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
      title: 'Name',
      name: 'name',
      type: 'string',
    },
    {
      name: 'link',
      title: 'Link',
      type: 'string',
    },
    {
      title: 'Type',
      name: 'type',
      type: 'string',
      options: {
        list: [
          { title: 'Mobile', value: 'tel' },
          { title: 'Email', value: 'email' },
          { title: 'Whatsapp', value: 'whatsapp' },
          { title: 'location', value: 'location' },
          { title: 'General Enqueries', value: 'generalEnqueries' },
          { title: 'Feedback', value: 'feedback' },
          { title: 'Satellite Clinic', value: 'satelliteClinic' },
        ],
      },
    },
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'link Name',
    },
  },
}
