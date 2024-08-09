export default {
  name: 'healthierSG.program',
  title: 'Healthier SG Program',
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
      name: 'tabs',
      title: 'Tabs',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'tabName',
              title: 'Tab Name',
              type: 'string',
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
              name: 'tabTitle',
              title: 'Tab Title',
              type: 'string',
            },
            {
              name: 'tabDescription',
              title: 'Description',
              type: 'array',
              of: [{ type: 'block' }],
            },
          ],
        },
      ],
    },
  ],
}
