import { FaBriefcaseMedical } from 'react-icons/fa'

export default {
  name: 'practice',
  title: 'Practice',
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
          name: 'practice.landingHero', 
          title: 'Hero', 
          type: 'common.landingHero'
      },
      {
        name: 'practice.practiceTabs', 
        title: 'Practice Tabs', 
        type: 'discoverOurBrands.discoverTabs'
      },
      {type: 'practice.practiceHead'},
      {type: 'practice.proceduresTabs'},
      { type: 'medicalHospitalityPage.locations' },
      { type: 'practice.programmes' },
      {
        name: 'practice.practiceEnquiry', 
        title: 'Practice Enquiry', 
        type: 'medicalHospitalityPage.enquiry'
      }
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
