import { FaHome } from 'react-icons/fa'
export default {
  name: 'radiologyPage',
  title: 'RadiologyPage',
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
          name: 'radiology.landingHero',
          title: 'Hero',
          type: 'common.pageBanner',
        },
        {
          name: 'radiology.titleDescription',
          title: 'Title Description',
          type: 'common.pageOverview',
        },
        {
          name: 'radiology.ourPartner',
          title: 'Our Partner',
          type: 'radiology.ourPartner',
        },
        {
          name: 'radiologyPage.faq',
          title: 'FAQ',
          type: 'radiologyPage.faq',
        },
        {
          name: 'radiology.ctcomparison',
          title: 'CT Comparison',
          type: 'radiology.ctcomparison',
        },

        {
          name: 'radiology.locations',
          title: 'Locations',
          type: 'practice.locations',
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
