import { FaBriefcaseMedical } from 'react-icons/fa'

export default {
  name: 'page404',
  title: 'Page 404',
  type: 'document',
  icon: FaBriefcaseMedical,
  fields: [
    {
      name: 'language',
      type: 'string',
      readOnly: true,
      hidden: true,
    },
    {
      name: 'seo',
      title: 'SEO',
      type: 'seo',
    },

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
      name: 'button',
      title: 'Button',
      type: 'ctaButton',
    },
    {
      name: 'mobileImg',
      title: 'Mobile Image',
      type: 'image',
      fields: [
        {
          name: 'alt',
          type: 'string',
        },
      ],
    },
    {
      name: 'desktopImg',
      title: 'Desktop Image',
      type: 'image',
      fields: [
        {
          name: 'alt',
          type: 'string',
        },
      ],
    },
  ],

  preview: {
    select: {
      title: 'seo.title',
      subtitle: 'seo.description',
    },
  },
}
