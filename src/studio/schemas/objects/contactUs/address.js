// import { BiSolidLocationPlus } from 'react-icons/bi'

export default {
  name: 'contactUsPage.address',
  title: 'Address',
  type: 'object',
  // icon: BiSolidLocationPlus,
  fields: [
    {
      name: 'title',
      title: 'Address Title',
      type: 'string',
    },
    {
      name: 'description',
      title: 'Enquiry Description',
      type: 'string',
    },
    {
      name: 'items',
      title: 'Contact Items',
      type: 'array',
      of: [{ type: 'addressLink' }],
    },
    {
      name: 'socialMedia',
      title: 'Social Media',
      type: 'array',
      of: [
        {
          name: 'icon',
          title: 'Social Media Icons',
          type: 'image',
          fields: [
            {
              name: 'alt',
              title: 'Alt Text',
              type: 'string',
            },
            {
              name: 'cta',
              title: 'Link',
              type: 'url',
            },
          ],
        },
      ],
    },
    {
      name: 'location',
      title: 'Enquiry Map',
      type: 'string',
    },
    {
      name: 'caption',
      title: 'Caption',
      type: 'string',
    },
  ],
  preview: {
    select: {
      title: 'title',
    },
  },
}
