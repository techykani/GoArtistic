import { VscSymbolEvent } from 'react-icons/vsc'

export default {
  name: 'medicalHospitalityPage.ourSpecialists',
  title: 'Our Specialists',
  type: 'object',
  icon: VscSymbolEvent,
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'tagline',
      title: 'Tagline',
      type: 'text',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'array',
      of: [{ type: 'block' }],
    },
    {
      name: 'cta',
      title: 'Link',
      type: 'link',
    },
    {
      name: 'card',
      title: 'card',
      type: 'array',
      of: [{ type: 'point' }],
    },
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'tagline',
    },
  },
}
