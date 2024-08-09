import { FaHome } from 'react-icons/fa'

export default {
  name: 'aboutUs',
  title: 'About Us',
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
          name: 'aboutUs.pageBanner',
          title: 'Page Banner',
          type: 'common.pageBanner',
        },
        {
          type: 'aboutUs.overview',
        },
        {
          type: 'aboutUs.leadership',
        },
        {
          name: 'aboutUs.aboutsection',
          title: 'About',
          type: 'homePage.about',
        },
        {
          name: 'aboutUs.guidingprinciples',
          title: 'Guiding principles',
          type: 'homePage.community',
        },
        {
          name: 'aboutUs.milestones',
          title: 'Milestones & Achievements',
          type: 'homePage.healthcare',
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
