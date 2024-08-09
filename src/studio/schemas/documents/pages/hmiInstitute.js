import { FaBriefcaseMedical } from 'react-icons/fa'

export default {
  name: 'hmiInstitutePage',
  title: 'HMI Institute',
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
          name: 'hmiInstitutePage.landingHero',
          title: 'Hero',
          type: 'common.pageBanner',
        },
        {
          name: 'hmiInstitutePage.titleDescription',
          title: 'Title Description',
          type: 'common.pageOverview',
        },
        {
          name: 'hmiInstitutePage.clinicInfo',
          title: 'Clinic Info',
          type: 'homeOnecareClinic.ClinicInfo',
        },
        {
          name: 'hmiInstitutePage.locationInfo',
          title: 'Location Info',
          type: 'contactUsPage.address',
        },
        { type: 'homePage.community' },
        { type: 'hmiInstitute.reviews' },
        {
          name: 'hmiInstitutePage.journey',
          title: 'Learn By Doing',
          type: 'homePage.community',
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
