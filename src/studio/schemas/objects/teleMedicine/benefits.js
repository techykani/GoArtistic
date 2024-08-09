import { FaClinicMedical } from 'react-icons/fa'

export default {
  name: 'teleMedicine.benefits',
  title: 'Benefits',
  type: 'object',
  icon: FaClinicMedical,
  fields: [
    {
      name: 'tagline',
      title: 'Tagline',
      type: 'array',
      of: [{ type: 'string' }],
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
