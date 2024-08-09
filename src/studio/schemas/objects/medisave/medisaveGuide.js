import { FaClinicMedical } from 'react-icons/fa'

export default {
  name: 'medisave.medisaveGuide',
  title: 'MediSave Guide',
  type: 'object',
  icon: FaClinicMedical,
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
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'tagline',
      media: 'image',
    },
  },
}
