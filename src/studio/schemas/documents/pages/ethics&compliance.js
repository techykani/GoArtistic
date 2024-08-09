import { MdHomeRepairService } from 'react-icons/md'

export default {
  name: 'ethicsAndCompliance',
  title: 'Ethics & Compliance',
  type: 'document',
  icon: MdHomeRepairService,
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
          name: 'ethics.landingHero',
          title: 'Hero',
          type: 'common.pageBanner',
        },
        {
          name: 'ethics',
          title: 'Ethics',
          type: 'object',
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
              name: 'cta',
              title: 'link',
              type: 'link',
            },
            {
              name: 'detail',
              title: 'Detail',
              type: 'array',
              of: [
                {
                  type: 'object',
                  fields: [
                    {
                      name: 'subTitle',
                      title: 'Sub Title',
                      type: 'string',
                    },
                    {
                      name: 'detail',
                      title: 'Detail',
                      type: 'array',
                      of: [{ type: 'block' }],
                    },
                  ],
                },
              ],
            },
          ],
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
