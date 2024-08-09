export default {
  name: 'medicalHospitalityPage.assistance',
  title: 'Assistance',
  type: 'document',
  fields: [
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      fields: [
        {
          name: 'alt',
          title: 'Alt Text',
          type: 'string',
        },
      ],
    },
    {
      name: 'smallImage',
      title: 'Small Image',
      type: 'image',
      fields: [
        {
          name: 'alt',
          title: 'Alt Text',
          type: 'string',
        },
      ],
    },
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
    },
    {
      type: 'object',
      name: 'listItem',
      title: 'List Item',
      fields: [
        {
          name: 'tagline',
          title: 'Tagline',
          type: 'string',
        },
        {
          name: 'description',
          title: 'Description',
          type: 'text',
        },
        {
          name: 'list',
          title: 'List',
          type: 'array',
          of: [{ type: 'point' }],
        },
      ],
    },
  ],

  preview: {
    select: {
      title: 'title',
    },
  },
}
