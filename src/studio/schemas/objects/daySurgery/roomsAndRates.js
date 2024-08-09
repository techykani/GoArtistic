export default {
  name: 'roomsAndRates',
  title: 'Rooms And Rates',
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
      name: 'roomImages',
      title: 'Room Images',
      type: 'array',
      of: [
        {
          type: 'image',
          fields: [
            {
              name: 'alt',
              title: 'Alt Text',
              type: 'string',
            },
          ],
        },
      ],
    },
    {
      name: 'roomName',
      title: 'Room Name',
      type: 'string',
    },
    {
      name: 'priceRange',
      title: 'Price Range',
      type: 'object',
      fields: [
        {
          name: 'minPrice',
          title: 'Minimum Price',
          type: 'number',
          validation: Rule => Rule.required().min(0),
        },
        {
          name: 'maxPrice',
          title: 'Maximum Price',
          type: 'number',
          validation: Rule => Rule.required().min(Rule.valueOfField('minPrice')),
        },
      ],
      preview: {
        select: {
          minPrice: 'priceRange.minPrice',
          maxPrice: 'priceRange.maxPrice',
        },
        prepare: ({ minPrice, maxPrice }) => ({
          title: `Price: $${minPrice} - $${maxPrice}`,
        }),
      },
    },
    {
      name: 'amenitiesAndServices',
      title: 'Amenities And Services',
      type: 'array',
      of: [{
        type: 'object',
        fields: [
          {
            name: 'title',
            title: 'Title',
            type: 'string',
          },
          {
            name: 'amenities',
            title: 'Amenities',
            type: 'array',
            of: [
              {
                type: 'object',
                fields: [
                  {
                    name: 'title',
                    title: 'Title',
                    type: 'string',
                  },
                  {
                    name: 'svgCode',
                    title: 'SVG Code',
                    type: 'text',
                  },
                ],
              },
            ],
          },
        ]
      }
      ],
    },
  ],
};
