import { VscSymbolEvent } from 'react-icons/vsc'

export default {
  name: 'carouselSection',
  title: 'Carousel Section',
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
      type: 'string',
    },
    {
      name: 'buttonTitle',
      title: 'Button Title',
      type: 'string',
    },
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'tagline',
    },
    prepare({ title, subtitle }) {
      return {
        title: title,
        subtitle,
        media: <VscSymbolEvent />,
      }
    },
  },
}
