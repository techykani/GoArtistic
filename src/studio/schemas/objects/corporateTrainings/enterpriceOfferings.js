export default {
  name: 'enterpriceSolutions',
  title: 'Enterprice Solutions',
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
              name: 'title',
              title: 'title',
              type: 'string',
            },
            {
              name: 'description',
              title: 'description',
              type: 'array',
              of: [{ type: 'block' }],
            },
            {
              name: 'subtitle',
              title: 'subtitle',
              type: 'string',
            },
            {
              name: 'subDescription',
              title: 'Sub Description',
              type: 'array',
              of: [{ type: 'block' }],
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
