import { FaBriefcaseMedical } from 'react-icons/fa'

export default {
  name: 'costsPage',
  title: 'Costs',
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
          name: 'costs.landingHero',
          title: 'Hero',
          type: 'common.pageBanner',
        },

        {
          name: 'costs.titleDescription',
          title: 'Title Description',
          type: 'details.common.titleDescription',
        },

        {
          name: 'costs.treatmentCostEstimation',
          title: 'Treatment cost estimation',
          type: 'treatmentCostEstimation',
        },

        { type: 'medicalHospitalityPage.enquiry' },

        {
          name: 'costs.insurancePartners',
          title: 'Insurance partners',
          type: 'insurancePartners',
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
