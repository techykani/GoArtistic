import { FaHome } from 'react-icons/fa'

export default {
  name: 'leadership',
  title: 'Our Leadership',
  type: 'document',
  icon: FaHome,
  fields: [
    {
      name: 'language',
      type: 'string',
      readOnly: true,
      hidden: true,
    },
    {
      name: 'seo',
      title: 'SEO',
      type: 'seo',
    },
    {
      name: 'sections',
      title: 'Sections',
      type: 'array',
      of: [
        {
          name: 'leadership.landingHero',
          title: 'Hero',
          type: 'common.pageBanner',
        },
        { type: 'leadership.members' },
        {
          name: 'leadership.extraLinks',
          title: 'Leadership Extra Links',
          type: 'object',
          fields: [
            {
              title: 'Title',
              name: 'title',
              type: 'text',
            },
            {
              title: 'Extra Links',
              name: 'extraLinks',
              type: 'array',
              of: [
                {
                  type: 'object',
                  fields: [
                    {
                      name: 'bannerImage',
                      title: 'Banner Image',
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
                      title: 'Title',
                      name: 'title',
                      type: 'text',
                    },
                    {
                      name: 'cta',
                      title: 'link',
                      type: 'link',
                    },
                  ],
                  preview: {
                    select: {
                      title: 'title',
                      subtitle: 'description',
                    },
                  },
                },
              ],
            },
          ],
          preview: {
            select: {
              title: 'title',
              subtitle: 'description',
            },
          },
        },
      ],
    },
  ],
  preview: {
    select: {
      title: 'seo.title',
      subtitle: 'seo.description',
    },
  },
}
