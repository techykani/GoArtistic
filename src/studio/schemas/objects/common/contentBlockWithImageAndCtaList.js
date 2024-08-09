import { MdOutlineRateReview } from 'react-icons/md'

export default {
  name: 'common.contentBlockWithImageAndCtaList',
  title: 'Content Block With Image And Cta List',
  type: 'object',
  icon: MdOutlineRateReview,
  fields: [
    {
      name: 'primaryImg',
      title: 'Primary Image',
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
      name: 'secondaryImg',
      title: 'Secondary Image',
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
      name: 'title',
      title: 'Title',
      type: 'string',
    },

    {
      title: 'Slug',
      name: 'slug',
      type: 'slug',
      options: {
        source: 'title',
      },
    },
    {
      name: 'tagline',
      title: 'Tagline',
      type: 'string',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'array',
      of: [{ type: 'block' }],
    },

    {
      name: 'info',
      title: 'Additional Info',
      type: 'array',
      of: [{ type: 'block' }],
    },

    {
      name: 'points',
      title: 'Quick Links',
      type: 'array',
      of: [{ type: 'point' }],
    },
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'tagline',
      media: 'primaryImg',
    },
  },
}
