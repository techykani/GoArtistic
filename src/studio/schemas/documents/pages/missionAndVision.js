import { FaBriefcaseMedical } from 'react-icons/fa'

export default {
  name: 'missionAndVision',
  title: 'Mission And Vision',
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
      name: 'sections',
      title: 'Sections',
      type: 'array',
      of: [
        {
          name: 'missionAndVision.pageBanner',
          title: 'Hero',
          type: 'common.pageBanner',
        },
        {
          name: 'missionAndVision.titleDescription',
          title: 'Title Description',
          type: 'details.common.titleDescription',
        },
        {
          name: 'missionAndVision.about',
          title: 'Community Pledge',
          type: 'common.singleImgQuickLink',
        },
        { type: 'missionAndVision.core' },
        { type: 'missionAndVision.might' },
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
