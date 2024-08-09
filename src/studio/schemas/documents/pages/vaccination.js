import { GiLoveInjection } from 'react-icons/gi'

export default {
  name: 'vaccination',
  title: 'Vaccination',
  type: 'document',
  i18n: true,
  icon: GiLoveInjection,
  fields: [
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
          name: 'vaccination.pageBanner',
          title: 'Hero',
          type: 'common.pageBanner',
        },
        {
          name: 'vaccination.pageOverview',
          title: 'Title Description',
          type: 'common.pageOverview',
        },
        { type: 'vaccination.vaccinationTab' },
        {
          name: 'vaccination.enquiry',
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
