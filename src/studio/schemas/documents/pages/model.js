import { FaBriefcaseMedical } from 'react-icons/fa'

export default {
  name: 'model',
  title: 'Model',
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
          name: 'model.pageBanner',
          title: 'Hero',
          type: 'common.pageBanner',
        },
        {
          name: 'model.titleDescription',
          title: 'Title Description',
          type: 'details.common.titleDescription',
        },
        {
          name: 'model.endoscopy',
          title: 'Endoscopy',
          type: 'endoscopy',
        },
        {
          name: 'model.might',
          title: 'Our Might Values',
          type: 'missionAndVision.might',
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
