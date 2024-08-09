import { AiOutlineSafetyCertificate } from 'react-icons/ai'

export default {
  name: 'leadership.seniorTab',
  title: 'Senior Management Tabs',
  type: 'object',
  icon: AiOutlineSafetyCertificate,

  fields: [
    { name: 'sectionName', title: 'Section Name', type: 'string' },
    {
      name: 'options',
      title: 'Tabs',
      type: 'array',
      of: [{ type: 'senior.option' }],
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
