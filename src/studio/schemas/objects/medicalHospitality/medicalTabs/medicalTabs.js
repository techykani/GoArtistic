import { AiOutlineSafetyCertificate } from 'react-icons/ai'

export default {
  name: 'medicalHospitality.medicalTabs',
  title: 'Medical Hospitality Tabs',
  type: 'object',
  icon: AiOutlineSafetyCertificate,

  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'tabSections',
      title: 'Tab Sections',
      type: 'array',
      of: [{ type: 'interTomal' }, { type: 'interTosing' }, { type: 'singTomal' }],
    },
  ],
  preview: {
    select: {
      title: 'title',
    },
  },
}
