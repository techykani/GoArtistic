import { AiOutlineHome } from 'react-icons/ai'

export default {
  name: 'masterCarousel',
  title: 'Carousel',
  type: 'object',
  icon: AiOutlineHome,
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'text',
    },
    {
      name: 'tagline',
      title: 'Tagline',
      type: 'text',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
    },
    {
      name: 'cta',
      title: 'Link',
      type: 'link',
    },
    {
      name: 'largeScreenBannerImage',
      title: 'Banner videos for laptop screens and above',
      type: 'file',
      accept: 'video/mp4',
    },
    {
      name: 'smallScreenBannerImage',
      title: 'Banner videos for mobile and tabs screens',
      type: 'file',
      accept: 'video/mp4',
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
