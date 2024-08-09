import { FaBriefcaseMedical } from 'react-icons/fa'

export default {
  name: 'hmiOneCareClinicPage',
  title: 'HMI Onecare clinic',
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
          name: 'hmiOneCareClinicPage.landingHero',
          title: 'Hero',
          type: 'common.pageBanner',
        },
        {
          name: 'hmiOneCareClinicPage.titleDescription',
          title: 'Title Description',
          type: 'details.common.titleDescription',
        },
        {
          name: 'hmiOneCareClinicPage.clinicInfo',
          title: 'Clinic Info',
          type: 'homeOnecareClinic.ClinicInfo',
        },
        {
          name: 'hmiOneCareClinicPage.gpServices',
          title: 'GP Services',
          type: 'exploreOurService.ourSpecialists',
        },
        {
          name: 'hmiOneCareClinicPage.ourGPClinics',
          title: 'Our GP Clinics',
          type: 'details.common.titleDescriptionButton',
        },
        {
          name: 'hmiOneCareClinicPage.programmes',
          title: 'Programmes & schemes',
          type: 'practice.programmes',
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
