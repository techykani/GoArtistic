import { VscSymbolEvent } from 'react-icons/vsc'

export default {
  name: 'milestone.decadeStory',
  title: 'Stories',
  type: 'object',
  icon: VscSymbolEvent,
  fields: [
    {
      name: 'tag',
      title: 'Tag',
      type: 'string',
    },
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'array',
      of: [{ type: 'block' }],
    },
    {
      name: 'primaryImg',
      title: 'Primary Image',
      type: 'image',
      fields: [
        {
          name: 'alt',
          type: 'string',
        },
      ],
    },
    {
      name: 'imageCaption',
      title: 'Image Caption',
      type: 'string',
    },
    {
      name: 'footer',
      title: 'Decade Footer',
      type: 'string',
    },
    {
      name: 'button',
      title: 'Button',
      type: 'ctaButton',
    },
    {
      name: 'Timeline',
      title: 'Time Line',
      type: 'array',
      of: [
        {
          type: 'milestone.events',
        },
      ],
    },
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'tagline',
    },
  },
}
