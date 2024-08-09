import { FaHome } from 'react-icons/fa'

export default {
  name: 'communityEngagement',
  title: 'community Engagement',
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
          name: 'communityEngagement.landingHero',
          title: 'Hero',
          type: 'common.pageBanner',
        },
        {
          name: 'communityEngagement.communityTabs',
          title: 'Community Engagement Tabs',
          type: 'discoverOurBrands.discoverTabs',
        },
        {
          type: 'communityEngagement.eventHighlights',
        },
        {
          name: 'communityEngagement.substainabilityApproach',
          title: 'Substainability Approach',
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
