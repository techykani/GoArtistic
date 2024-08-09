import { MdHomeRepairService } from 'react-icons/md'

export default {
  name: 'urgentCarePage',
  title: 'Urgent care',
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
          name: 'urgentCare.landingHero',
          title: 'Hero',
          type: 'common.pageBanner',
        },
        {
          name: 'urgentCare.pageOverview',
          title: 'Page Overview',
          type: 'common.pageOverview',
        },
        {
          name: 'urgentCare.employeeWellness',
          title: 'Urgent Care',
          type: 'ourGPServicesPage.employeeWellness',
        },
        {
          name: 'urgentCare.practiceDoctor',
          title: 'Practice Doctor',
          type: 'urgentCare.practiceDoctor',
        },
        {
          name: 'urgentCare.centre',
          title: 'Specialist Centre',
          type: 'urgentCare.centre',
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
