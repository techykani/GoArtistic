import { VscSymbolEvent } from 'react-icons/vsc'

export default {
  name: 'ourGPServicesPage.checkOut',
  title: 'Check out our GP clinics',
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
      name: 'link',
      type: 'ctaButton',
    },
    {
      name: 'list',
      title: 'Clinics',
      type: 'array',
      of: [{ type: 'clinicInfo' }],
    },
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'tagline',
    },
  },
}
