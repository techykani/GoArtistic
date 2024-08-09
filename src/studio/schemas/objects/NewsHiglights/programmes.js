export default {
  name: 'news.programmes',
  title: 'Join Our Programmes',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
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
  ],
  preview: {
    select: {
      title: 'title',
    },
  },
}
