import { AiOutlineMedicineBox } from 'react-icons/ai'

export default {
  name: 'iconLink',
  title: 'Icon with link',
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
      name: 'link',
      type: 'link',
    },
  ],
  preview: {
    select: {
      title: 'link.text',
      subtitle: 'link.href',
    },
  },
}
