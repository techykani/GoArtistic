import { type } from 'os'
import { AiOutlineHome } from 'react-icons/ai'

export default {
  name: 'hmiOne.membershipBenefits',
  title: 'Membership Benefits',
  type: 'object',
  icon: AiOutlineHome,
  fields: [
    {
      name: 'tagline',
      title: 'Tagline',
      type: 'text',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'array',
      of: [{ type: 'block' }],
    },
    {
      name: 'membershipPlans',
      title: 'Membership Plans',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'planName',
              title: 'Name of the Plan',
              type: 'string',
            },
            {
              name: 'price',
              title: 'Price',
              type: 'object',
              fields: [
                {
                  name: 'usualPrice',
                  title: 'Usual Price',
                  type: 'object',
                  fields: [
                    {
                      name: 'title',
                      title: 'Title',
                      type: 'string',
                    },
                    {
                      name: 'priceValue',
                      title: 'Price Value',
                      type: 'string',
                    },
                  ],
                },
                {
                  name: 'limitedTimePrice',
                  title: 'Limited Time Price',
                  type: 'object',
                  fields: [
                    {
                      name: 'title',
                      title: 'Title',
                      type: 'string',
                    },
                    {
                      name: 'priceValue',
                      title: 'Price Value',
                      type: 'string',
                    },
                  ],
                },
              ],
            },
            {
              name: 'benefits',
              title: 'Benefits',
              type: 'array',
              of: [
                {
                  type: 'object',
                  fields: [
                    {
                      name: 'icon',
                      title: 'Icon',
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
                      name: 'benefit',
                      title: 'Benefit',
                      type: 'object',
                      fields: [
                        {
                          name: 'commonKey',
                          title: 'Common key word to compare the benefits',
                          type: 'string',
                        },
                        {
                          name: 'subtitle',
                          title: 'Subtitle',
                          type: 'string',
                        },
                        {
                          name: 'description',
                          title: 'Description',
                          type: 'string',
                        },
                        {
                          name: 'downloadableContents',
                          title: 'DownLoadable Contents',
                          type: 'object',
                          fields: [
                            {
                              name: 'text',
                              title: 'Text',
                              type: 'string',
                            },
                            {
                              name: 'pdfFile',
                              title: 'PDF File',
                              type: 'file',
                              options: {
                                accept: '.pdf',
                              },
                            },
                          ],
                        },
                      ],
                    },
                  ],
                  preview: {
                    select: {
                      title: 'benefit.subtitle',
                      subtitle: 'benefit.description',
                      media: 'image',
                    },
                  },
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
      title: 'tagline',
      subtitle: 'description',
      media: 'image',
    },
  },
}
