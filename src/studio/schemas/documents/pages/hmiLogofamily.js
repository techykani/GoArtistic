import { FaHome } from 'react-icons/fa'

export default {
  name: 'HMILogofamily',
  title: 'HMI Logo Family',
  type: 'document',
  icon: FaHome,
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
      name: 'noLayout',
      title: 'Hide Header and Footer',
      type: 'boolean',
      description: 'Are you want to show Header and Footer?',
      initialValue: true,
    },
    {
      name: 'DocumentImg',
      title: 'Document Step Image',
      type: 'image',
      fields: [
        {
          name: 'alt',
          title: 'Alt Text',
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
