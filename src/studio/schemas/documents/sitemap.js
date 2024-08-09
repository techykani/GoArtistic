// sanity schema for sitemap document

import { MdMap as icon } from 'react-icons/md'

const links = {
  name: 'links',
  type: 'object',
  fields: [
    {
      name: 'name',
      type: 'string',
    },
    {
      name: 'slug',
      type: 'string',
    },
    {
      name: 'child',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'name',
              type: 'string',
            },
            {
              name: 'slug',
              type: 'string',
            },
          ],
        },
      ],
    },
  ],
}

export default {
  // computer name
  name: 'sitemap',
  // visible title
  title: 'Sitemap',
  type: 'document',
  icon,
  fields: [
    {
      name: 'seo',
      title: 'SEO',
      type: 'seo',
    },
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      description: 'Title of the sitemap',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      description: 'Description of the sitemap',
    },
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {
      name: 'sitemap',
      title: 'Sitemap',
      type: 'array',
      of: [links],
    },
  ],

  preview: {
    select: {
      title: 'title',
      pages: 'pages',
    },
  },
}
