import { FaPlane } from 'react-icons/fa'

export default {
  name: 'medicalTravelAgentsPage',
  title: 'Medical Travel Agent',
  type: 'document',
  icon: FaPlane,
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
          name: 'medicalTravelAgents.pageBanner',
          title: 'Hero',
          type: 'common.pageBanner',
        },
        { type: 'medicalTravelAgents.travelAgent' },
        { type: 'medicalTravelAgents.tab' },
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
