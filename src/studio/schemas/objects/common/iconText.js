import { AiOutlineMedicineBox } from 'react-icons/ai'

export default {
  name: 'iconText',
  title: 'Icon with text',
  type: 'object',
  icon: AiOutlineMedicineBox,
  fields: [
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
      name: 'text',
      type: 'text',
    },
  ],
  preview: {
    select: {
      title: 'text',
      media: 'icon',
    },
  },
}
