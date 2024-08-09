import { BsFileRichtext } from 'react-icons/bs'
import { block } from '../editor'

export default {
  name: 'details.common.iconTexts',
  title: 'Icon Text',
  type: 'object',
  icon: BsFileRichtext,
  fields: [
    { name: 'title', title: 'Title', type: 'string' },
    {
      name: 'iconText',
      title: 'Icon Text',
      type: 'object',
      fields: [
        { name: 'title', title: 'Title', type: 'string' },
        {
          name: 'iconsWithText',
          title: 'Icons with Text',
          type: 'array',
          of: [
            {
              name: 'iconWithText',
              title: 'Icon with Text',
              type: 'object',
              fields: [
                {
                  name: 'icon',
                  title: 'Icon',
                  type: 'image',
                  fields: [
                    {
                      name: 'alt',
                      title: 'Alternative Text',
                      description: 'Important for SEO and accessibility',
                      type: 'string',
                    },
                  ],
                },
                {
                  name: 'text',
                  type: 'array',
                  of: [block],
                },
              ],
              preview: {
                select: {
                  title: 'text',
                  media: 'icon',
                },
              },
            },
          ],
        },
      ],
    },
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'description',
    },
    prepare({ title, subtitle }) {
      return {
        title: `${title}`,
        media: <BsFileRichtext />,
      }
    },
  },
}
