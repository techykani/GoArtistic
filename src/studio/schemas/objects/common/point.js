import { AiOutlineMedicineBox } from 'react-icons/ai'

export default {
  name: 'point',
  title: 'Quick Links',
  type: 'object',
  icon: AiOutlineMedicineBox,
  fields: [
    {
      name: 'link',
      type: 'link',
    },
    {
      name: 'subTitle',
      type: 'text',
    },
    {
      name: 'icon',
      title: 'Icon',
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
      name: 'mobileIcon',
      title: 'Mobile Icon',
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
      name: 'shortDes',
      title: 'Short Description',
      type: 'text',
    },
  ],
  preview: {
    select: {
      title: 'subTitle',
      subtitle: 'shortDes',
    },
  },
}
