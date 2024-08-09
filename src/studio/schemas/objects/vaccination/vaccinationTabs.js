import { AiOutlineSafetyCertificate } from 'react-icons/ai'

export default {
  name: 'vaccination.vaccinationTab',
  title: 'vaccination Tab',
  type: 'object',
  icon: AiOutlineSafetyCertificate,

  fields: [
    { name: 'sectionName', title: 'Section Name', type: 'string' },
    { name: 'sectionTagline', title: 'Section Tagline', type: 'string' },
    {
      name: 'options',
      title: 'Tabs',
      type: 'array',
      of: [{ type: 'vaccination.vaccinationOption' }],
    },
  ],
  preview: {
    select: {
      title: 'sectionName',
      subtitle: 'sections[0].tagline',
      media: 'sections[0].thumbnail',
    },
  },
}
