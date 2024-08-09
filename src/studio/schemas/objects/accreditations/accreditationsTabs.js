import { AiOutlineSafetyCertificate } from 'react-icons/ai'

export default {
  name: 'accreditations.accreditationsTabs',
  title: 'Accreditations Tabs',
  type: 'object',
  icon: AiOutlineSafetyCertificate,

  fields: [
    { name: 'sectionName', title: 'Section Name', type: 'string' },
    { name: 'sectionTagline', title: 'Section Tagline', type: 'text' },
    {
      name: 'options',
      title: 'Tabs',
      type: 'array',
      of: [{ type: 'accerditations.option' }],
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
