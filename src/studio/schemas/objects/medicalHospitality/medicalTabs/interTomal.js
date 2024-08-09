import { AiOutlineSafetyCertificate } from 'react-icons/ai'

export default {
  name: 'interTomal',
  title: 'International to Malaysia',
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
        { type: 'medicalHospitalityPage.about' },
        {
          name: 'medicalHospitalityPage.guidingPrinciple',
          title: 'Malaysia',
          type: 'homePage.community',
        },
        { type: 'medicalHospitalityPage.discover' },
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
