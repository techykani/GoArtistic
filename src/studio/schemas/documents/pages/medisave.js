import { FaBriefcaseMedical } from 'react-icons/fa'

export default {
  name: 'medisavePage',
  title: 'Medisave',
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
          name: 'medisave.landingHero',
          title: 'Hero',
          type: 'common.pageBanner',
        },

        { name: 'medisave.medisaveGuide', title: 'Guide', type: 'medisave.medisaveGuide' },

        {
          name: 'medisave.medisaveGuideTabs',
          title: 'Guide Tabs',
          type: 'medisave.medisaveGuideTabs',
        },

        { type: 'medicalHospitalityPage.enquiry' },
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
