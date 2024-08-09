export default {
  name: 'practice.locations',
  title: 'Locations',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'clinicLocations',
      type: 'array',
      of: [ 
        {
          type: 'reference',
          to: [{ type: 'clinicLocations' }],
          validation: (Rule) => Rule.required(),
        },
      ],
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
