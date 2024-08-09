import { FaHome } from 'react-icons/fa'
export default {
  name: 'homePage',
  title: 'Home Page',
  type: 'document',
  icon: FaHome,
  fields: [
    {
      name: 'language',
      type: 'string',
      readOnly: true,
      hidden: true,
    },
    {
      name: 'seo',
      title: 'SEO',
      type: 'seo',
    },
    {
      name: 'sections',
      title: 'Sections',
      type: 'array',
      of: [
        { type: 'homePage.hero' },
        { type: 'homePage.popluarSearch' },
        { type: 'homePage.about' },
        { type: 'homePage.network' },
        { type: 'homePage.healthcare' },
        { type: 'homePage.ourSpeciality' },
        { type: 'homePage.sharingMore' },
        { type: 'homePage.community' }
      ],
    },
    
  ],
  preview: {
    select: {
      title: 'seo.title',
      subtitle: 'seo.description',
    },
  },
}
