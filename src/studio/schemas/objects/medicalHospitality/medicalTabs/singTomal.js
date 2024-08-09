import { AiOutlineSafetyCertificate } from 'react-icons/ai'

export default {
  name: 'singTomal',
  title: 'Singapore to Malaysia',
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
          name: 'medicalHospitalityPage.communityTabs',
          title: 'cost of care',
          type: 'discoverOurBrands.discoverTabs',
        },
        {
          name: 'medicalHospitalityPage.network',
          title: 'Regency Care Centre',
          type: 'homePage.network',
        },
        { type: 'medicalHospitalityPage.discover' },
        {
          name: 'medicalHospitalityPage.enrol',
          title: 'Patient Service Centre',
          type: 'homePage.healthcare',
        },
        {
          name: 'medicalHospitalityPage.contactInfo',
          title: 'Contact information',
          type: 'hmiMedicalCentre.ClinicList',
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
