import { AiOutlineSafetyCertificate } from 'react-icons/ai'

export default {
  name: 'discoverOurBrands.discoverTabs',
  title: 'Discover Tabs',
  type: 'object',
  icon: AiOutlineSafetyCertificate,

  fields: [
    { name: 'sectionName', title: 'Section Name', type: 'string' },
    { name: 'sectionTagline', title: 'Section Tagline', type: 'string' },
    {
      name: 'options',
      title: 'Tabs',
      type: 'array',
      of: [{ type: 'discover.option' }],
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
