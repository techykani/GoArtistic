import { FaHome } from 'react-icons/fa'
export default {
  name: 'daySurgery',
  title: 'Day Surgery',
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
          name: 'daySurgery.landingHero',
          title: 'Hero',
          type: 'common.pageBanner',
        },
        {
          name: 'daySurgery.pageOverview',
          title: 'Page Overview',
          type: 'common.pageOverview',
        },
        {
          name: 'daySurgery.ourFacilities',
          title: 'Our Facilities',
          type: 'common.singleImgQuickLink',
        },
        {
          name: 'daySurgery.proceduresAvailable',
          title: 'Procedures Available',
          type: 'ourGPServicesPage.faq',
        },
        {
          name: 'daySurgery.milestone',
          title: 'Mile Stone',
          type: 'homePage.about',
        },
        {
          name: 'daySurgery.endoscopy',
          title: 'Endoscopy',
          type: 'endoscopy',
        },
        {
          name: 'daySurgery.roomsAndRates',
          title: 'Rooms And Rates',
          type: 'roomsAndRates',
        },
        {
          name: 'daySurgery.programmes',
          title: 'Programmes & schemes',
          type: 'practice.programmes',
        },
        {
          name: 'daySurgery.enquiry',
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
