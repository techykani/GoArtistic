import { AiOutlineSafetyCertificate } from 'react-icons/ai'

export default {
  name: 'leadership.tab',
  title: 'Leadership Tabs',
  type: 'object',
  icon: AiOutlineSafetyCertificate,

  fields: [
    { name: 'sectionName', title: 'Section Name', type: 'string' },
    {
      name: 'options',
      title: 'Tabs',
      type: 'array',
      of: [{ type: 'leadership.option' }],
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
