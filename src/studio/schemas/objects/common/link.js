import { AiOutlineMedicineBox } from 'react-icons/ai'

export default {
  name: 'link',
  title: 'Link',
  type: 'object',
  icon: AiOutlineMedicineBox,
  fields: [
    {
      name: 'text',
      title: 'Text',
      type: 'text',
    },
    {
      name: 'href',
      title: 'URL',
      type: 'string',
    },
  ],
  preview: {
    select: {
      title: 'text',
      subtitle: 'href',
    },
  },
}
