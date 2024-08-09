import { MdHomeRepairService } from 'react-icons/md'

export default {
  name: 'exploreOurService',
  title: 'Explore Our Service Page',
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
          name: 'exploreOurService.landingHero',
          title: 'Hero',
          type: 'common.pageBanner',
        },
        {
          name: 'exploreOurService.healthScreenings',
          title: 'Health Screenings',
          type: 'common.singleImgQuickLink',
        },
        {
          name: 'exploreOurService.gpServices',
          title: 'GP Services',
          type: 'exploreOurService.ourSpecialists',
        },
        {
          name: 'exploreOurService.specialists',
          title: 'Our Specialists',
          type: 'homePage.ourSpeciality',
        },
        {
          name: 'exploreOurService.urgentCare',
          title: 'urgent Care',
          type: 'common.singleImgQuickLink',
        },
        { type: 'exploreOurService.checkOut' },
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
