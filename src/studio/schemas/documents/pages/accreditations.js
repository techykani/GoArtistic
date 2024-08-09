import { FaHome } from 'react-icons/fa'
export default {
  name: 'accreditations',
  title: 'Accreditations and Awards',
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
      name: 'sections',
      title: 'Sections',
      type: 'array',
      of: [
        {
          name: 'accreditations.landingHero',
          title: 'Hero',
          type: 'common.pageBanner',
        },
        { type: 'accreditations.accreditationsTabs' },
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
