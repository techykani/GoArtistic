import { FaHome } from 'react-icons/fa'
export default {
  name: 'corporateTrainings',
  title: 'Corporate Trainings',
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
        { type: 'discoverOurBrands.brands' },
        {
          name: 'corporateTrainings.enterpriceSolutions',
          title: 'Enterprice Solutions',
          type: 'enterpriceSolutions',
        },
        {
          name: 'corporateTrainings.hmiHealthTalkSeries',
          title: 'HMI Health Talks Series',
          type: 'homePage.healthcare',
        },
        {
          name: 'urgentCare.enquiry',
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
