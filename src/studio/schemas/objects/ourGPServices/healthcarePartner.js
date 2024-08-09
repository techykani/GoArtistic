export default {
  name: 'ourGPServicesPage.healthcarePartner',
  title: 'Healthcare Partner',
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
      type: 'text',
    },
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
      name: 'secondaryTitle',
      title: 'Secondary Title',
      type: 'string',
    },
    {
      name: 'secondaryDescription',
      title: 'Secondary Description',
      type: 'text',
    },
    {
      name: 'points',
      title: 'List of Points',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'pointTitle',
              title: 'Point Title',
              type: 'string',
            },
          ],
        },
      ],
    },
  ],
}
