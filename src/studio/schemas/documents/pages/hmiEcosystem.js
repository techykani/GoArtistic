import { FaHome } from 'react-icons/fa'
export default {
  name: 'hmiEcosystemPage',
  title: 'HMI Ecosystem Page',
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
        { name: 'hmiEcosystem.pageBanner', title: 'Hero', type: 'common.pageBanner' },
        { name: 'hmiEcosystem.PageOverview', title: 'Page Overview', type: 'common.pageOverview' },
        {
          name: 'hmiEcosystem.investmentPotential',
          title: 'Investment Potential',
          type: 'common.singleImgQuickLink',
        },
        {
          name: 'hmiEcosystem.pillars',
          title: 'Pillars',
          type: 'pillars',
        },
        {
          name: 'hmiEcosystem.achievement',
          title: 'Achievement',
          type: 'homePage.sharingMore',
        },
        {
          name: 'hmiEcosystem.enquiry',
          title: 'Enquiry',
          type: 'medicalHospitalityPage.enquiry',
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
