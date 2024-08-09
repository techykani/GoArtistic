import { AiOutlineMedicineBox } from 'react-icons/ai'

export default {
  name: 'newsProgrammesArr',
  title: 'Quick Links',
  type: 'object',
  icon: AiOutlineMedicineBox,
  fields: [
    {
      name: 'icon',
      title: 'Image',
      type: 'image',
    },
    {
      name: 'title',
      type: 'string',
    },
    {
      name: 'tagline',
      type: 'string',
    },
    {
      title: 'Date',
      name: 'date',
      type: 'string',
    },
    {
      title: 'Time',
      name: 'time',
      type: 'string',
    },
    {
      name: 'location',
      type: 'string',
    },
    {
      name: 'link',
      type: 'link',
    },
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'location',
    },
  },
}
