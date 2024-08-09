export default {
  name: 'ourGPServicesPage.employeeWellness',
  title: 'Employee Wellness',
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
              title: 'Tab Description',
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
            {
              name: 'cta',
              title: 'Link',
              type: 'link',
            },
          ],
        },
      ],
    },
  ],
}
