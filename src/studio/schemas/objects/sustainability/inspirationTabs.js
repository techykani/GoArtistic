import { AiOutlineSafetyCertificate } from 'react-icons/ai'

export default {
  name: 'sustainability.inspirationTabs',
  title: 'Inspiration Tabs',
  type: 'object',
  icon: AiOutlineSafetyCertificate,

  fields: [
    { name: 'sectionName', title: 'Section Name', type: 'string' },
    { name: 'sectionTagline', title: 'Section Tagline', type: 'string' },
    {
      name: 'options',
      title: 'Tabs',
      type: 'array',
      of: [{ type: 'inspiration.option' }],
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
