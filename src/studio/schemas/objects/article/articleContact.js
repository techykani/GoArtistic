import { AiOutlineHome } from 'react-icons/ai'

export default {
  name: 'article.articleContact',
  title: 'Contact',
  type: 'object',
  icon: AiOutlineHome,
  fields: [
    {
      name: 'bannerImage',
      title: 'Banner Image',
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
      name: 'bannerTitle',
      title: 'Banner Title',
      type: 'string',
    },
    {
      name: 'bannerEmail',
      title: 'Banner Email',
      type: 'string',
    },
    {
      name: 'bannerEmailValue',
      title: 'Banner Email Value',
      type: 'string',
    },
    {
      name: 'bannerMobile',
      title: 'Banner Mobile',
      type: 'string',
    },
    {
      name: 'bannerMobileValue',
      title: 'Banner Mobile Value',
      type: 'string',
    },
    {
      name: 'cta',
      title: 'Link',
      type: 'link',
    },
  ],
  preview: {
    select: {
      title: 'bannerTitle',
      subtitle: 'bannerEmailValue',
    },
  },
}
