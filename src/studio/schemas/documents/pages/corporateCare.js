import { FaHome } from 'react-icons/fa'
export default {
  name: 'corporateCare',
  title: 'Corporate Care',
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
          name: 'corporateCare.pageBanner',
          title: 'Hero',
          type: 'common.pageBanner',
        },
        {
          name: 'corporateCare.pageOverview',
          title: 'Title Description',
          type: 'common.pageOverview',
        },
        {
          name: 'corporateCare.healthScreenings',
          title: 'Healthy Benifits',
          type: 'common.singleImgQuickLink',
        },
        {
          name: 'corporateCare.guidingPrinciple',
          title: 'Sustainability',
          type: 'homePage.community',
        },
        {
          name: 'corporateCare.corporateTabs',
          title: 'Tabs',
          type: 'sustainability.inspirationTabs',
        },
        { type: 'corporateCare.enterpriseSolutions' },
        // { type: 'homePage.network' },
        {
          name: 'corporateCare.enquiry',
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
