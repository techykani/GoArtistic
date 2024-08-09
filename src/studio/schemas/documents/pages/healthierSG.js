import { MdHomeRepairService } from 'react-icons/md'

export default {
  name: 'healthierSG',
  title: 'Healthier SG',
  type: 'document',
  icon: MdHomeRepairService,
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
          type: 'healthierSG.pageBanner',
        },
        {
          type: 'healthierSG.pageOverview',
        },
        {
          type: 'healthierSG.about',
        },
        {
          type: 'healthierSG.program',
        },
        {
          type: 'healthierSG.journey',
        },
        {
          type: 'healthierSG.enrol',
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
