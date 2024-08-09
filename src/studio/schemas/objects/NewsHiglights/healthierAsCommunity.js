export default {
  name: 'news.healthierAsCommunity',
  title: 'Healthier As Community',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'tagline',
      title: 'Tagline',
      type: 'string',
    },
    {
      name: 'icon',
      title: 'Icon',
      type: 'image',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'array',
      of: [{ type: 'block' }],
    },
    {
      name: 'points',
      title: 'Quick Links',
      type: 'array',
      of: [{ type: 'newsProgrammesArr' }],
    },
    {
      name: 'link',
      type: 'link',
    },
  ],
  preview: {
    select: {
      title: 'title',
    },
  },
}
