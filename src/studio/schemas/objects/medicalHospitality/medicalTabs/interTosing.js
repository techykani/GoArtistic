import { AiOutlineSafetyCertificate } from 'react-icons/ai'

export default {
  name: 'interTosing',
  title: 'International to Singapore',
  type: 'object',
  icon: AiOutlineSafetyCertificate,

  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'sectionsArray',
      title: 'Sections',
      type: 'array',
      of: [
        {
          name: 'medicalHospitalityPage.accessibile',
          title: 'Accessible Islandwide ',
          type: 'ourGPServicesPage.accessibile',
        },
        {
          name: 'medicalHospitalityPage.enquiry',
          title: 'Enquiry',
          type: 'medicalHospitalityPage.enquiry',
        },
      ],
    },
  ],
  preview: {
    select: {
      title: 'title',
    },
  },
}
