import { MdOutlineRateReview } from 'react-icons/md'

export default {
  name: 'common.singleTestimonialWithVid',
  title: 'Single Testimonial With Video',
  type: 'object',
  icon: MdOutlineRateReview,
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {
      name: 'role',
      title: 'Role',
      type: 'string',
    },

    {
      name: 'quote',
      title: 'Quote',
      type: 'text',
    },
    {
      name: 'thumbnailImg',
      title: 'Thumbnail',
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
      name: 'video',
      type: 'videoContent',
      title: 'Video',
    },
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'quote',
      media: 'thumbnailImg',
    },
    prepare(selection) {
      const { subtitle, media } = selection
      return {
        title: 'Testimonial',
        media: media,
        subtitle: subtitle,
      }
    },
  },
}
