import { GrWaypoint } from 'react-icons/gr'

export default {
  name: 'ctaButton',
  title: 'CTA Button',
  type: 'object',
  icon: GrWaypoint,
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      initialValue: '',
    },
    {
      name: 'href',
      title: 'href',
      type: 'string',
      initialValue: '/',
    },
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'href',
    },
  },
}
