import { block } from '../objects/common/editor'
import { AiOutlineMedicineBox } from 'react-icons/ai'

export default {
  name: 'site',
  title: 'Site Config',
  type: 'document',
  groups: [
    {
      name: 'navbar',
      title: 'Navbar',
    },
    {
      name: 'footer',
      title: 'Footer',
    },
    {
      name: 'notificationBar',
      title: 'Notification Bar',
    },
  ],
  fields: [
    {
      name: 'language',
      type: 'string',
      readOnly: true,
      hidden: true,
    },
    {
      name: 'logo',
      title: 'Logo',
      type: 'image',
      fields: [
        {
          name: 'alt',
          title: 'Alt Text',
          type: 'string',
        },
        {
          name: 'title',
          title: 'Image Title',
          description: 'This will show when someone hover over the image',
          type: 'string',
        },
      ],
      group: 'navbar',
    },
    {
      name: 'ogImage',
      type: 'image',
      title: 'Default SEO Image',
      options: {
        accept: 'image/png, image/jpeg, image/webp',
      },
    },

    {
      name: 'favicon',
      type: 'image',
      title: 'Favicon',
      options: {
        accept: 'image/png, image/jpeg, image/webp',
      },
    },
    {
      name: 'singaporeMenu',
      type: 'document',
      title: 'Menu list',
      fields: [
        {
          name: 'menus',
          type: 'array',
          title: 'Menus',
          of: [
            {
              type: 'object',
              name: 'menuItem',
              title: 'Menu Item',
              fields: [
                {
                  name: 'menuTitle',
                  type: 'string',
                  title: 'Menu Title',
                },
                {
                  name: 'menuHref',
                  type: 'string',
                  title: 'Menu Href',
                },
                {
                  name: 'categories',
                  type: 'array',
                  title: 'Categories',
                  of: [
                    {
                      type: 'object',
                      name: 'category',
                      title: 'Category',
                      fields: [
                        {
                          name: 'categoryTitle',
                          type: 'string',
                          title: 'Category Title',
                        },
                        {
                          name: 'categoryType',
                          type: 'object',
                          title: 'Category Type',
                          fields: [
                            {
                              title: 'Choose Type',
                              name: 'Type',
                              type: 'string',
                              options: {
                                list: [
                                  'Submenu with icon',
                                  'Submenu with image',
                                  'Submenu with text',
                                ],
                              },
                            },
                          ],
                        },
                        {
                          name: 'submenuList',
                          type: 'array',
                          title: 'Submenu List',
                          of: [
                            {
                              type: 'object',
                              name: 'submenuItem',
                              title: 'Submenu Item',
                              fields: [
                                {
                                  name: 'title',
                                  type: 'string',
                                  title: 'Title',
                                },
                                {
                                  name: 'href',
                                  type: 'string',
                                  title: 'Href',
                                },
                                {
                                  name: 'icon',
                                  type: 'image',
                                  title: 'Icon',
                                },
                                {
                                  name: 'image',
                                  type: 'image',
                                  title: 'Image',
                                },
                                {
                                  name: 'linkIcon',
                                  title: 'Link Icon',
                                  type: 'image',
                                },
                              ],
                            },
                          ],
                        },
                      ],
                    },
                  ],
                },
                {
                  name: 'summaryTitle',
                  type: 'string',
                  title: 'Summary Title',
                },
                {
                  name: 'summaryImage',
                  type: 'image',
                  title: 'Summary Image',
                },
                {
                  name: 'summaryDescription',
                  type: 'text',
                  title: 'Summary Description',
                },
                {
                  name: 'ctaButton',
                  title: 'CTA Button',
                  type: 'object',
                  fields: [
                    {
                      name: 'ctaButton',
                      title: 'CTA Button',
                      type: 'ctaButton',
                    },
                    {
                      name: 'icon',
                      title: 'Icon',
                      type: 'image',
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },

    // {
    //   name: 'regionalMenu',
    //   type: 'document',
    //   title: 'Menu list for Regional location',
    //   fields: [
    //     {
    //       name: 'menus',
    //       type: 'array',
    //       title: 'Menus',
    //       of: [
    //         {
    //           type: 'object',
    //           name: 'menuItem',
    //           title: 'Menu Item',
    //           fields: [
    //             {
    //               name: 'menuTitle',
    //               type: 'string',
    //               title: 'Menu Title',
    //             },
    //             {
    //               name: 'menuHref',
    //               type: 'string',
    //               title: 'Menu Href',
    //             },
    //             {
    //               name: 'categories',
    //               type: 'array',
    //               title: 'Categories',
    //               of: [
    //                 {
    //                   type: 'object',
    //                   name: 'category',
    //                   title: 'Category',
    //                   fields: [
    //                     {
    //                       name: 'categoryTitle',
    //                       type: 'string',
    //                       title: 'Category Title',
    //                     },
    //                     {
    //                       name: 'categoryType',
    //                       type: 'object',
    //                       title: 'Category Type',
    //                       fields: [
    //                         {
    //                           title: 'Choose Type',
    //                           name: 'Type',
    //                           type: 'string',
    //                           options: {
    //                             list: [
    //                               'Submenu with icon',
    //                               'Submenu with image',
    //                               'Submenu with text',
    //                             ],
    //                           },
    //                         },
    //                       ],
    //                     },
    //                     {
    //                       name: 'submenuList',
    //                       type: 'array',
    //                       title: 'Submenu List',
    //                       of: [
    //                         {
    //                           type: 'object',
    //                           name: 'submenuItem',
    //                           title: 'Submenu Item',
    //                           fields: [
    //                             {
    //                               name: 'title',
    //                               type: 'string',
    //                               title: 'Title',
    //                             },
    //                             {
    //                               name: 'href',
    //                               type: 'string',
    //                               title: 'Href',
    //                             },
    //                             {
    //                               name: 'icon',
    //                               type: 'image',
    //                               title: 'Icon',
    //                             },
    //                             {
    //                               name: 'image',
    //                               type: 'image',
    //                               title: 'Image',
    //                             },
    //                             {
    //                               name: 'linkIcon',
    //                               title: 'Link Icon',
    //                               type: 'image',
    //                             },
    //                           ],
    //                         },
    //                       ],
    //                     },
    //                   ],
    //                 },
    //               ],
    //             },
    //             {
    //               name: 'summaryTitle',
    //               type: 'string',
    //               title: 'Summary Title',
    //             },
    //             {
    //               name: 'summaryImage',
    //               type: 'image',
    //               title: 'Summary Image',
    //             },
    //             {
    //               name: 'summaryDescription',
    //               type: 'text',
    //               title: 'Summary Description',
    //             },
    //             {
    //               name: 'ctaButton',
    //               title: 'CTA Button',
    //               type: 'object',
    //               fields: [
    //                 {
    //                   name: 'ctaButton',
    //                   title: 'CTA Button',
    //                   type: 'ctaButton',
    //                 },
    //                 {
    //                   name: 'icon',
    //                   title: 'Icon',
    //                   type: 'image',
    //                 },
    //               ],
    //             },
    //           ],
    //         },
    //       ],
    //     },
    //   ],
    // },
    {
      name: 'navTop',
      title: 'Navbar Top Informations',
      type: 'object',
      group: 'navbar',
      options: {
        collapsible: true, // Makes the whole fieldset collapsible
        collapsed: true, // Defines if the fieldset should be collapsed by default or not
      },
      fields: [
        {
          name: 'location',
          title: 'Location',
          type: 'object',
          fields: [
            {
              name: 'icon',
              title: 'Icon',
              type: 'image',
            },
            {
              name: 'title',
              title: 'Title',
              type: 'string',
            },
          ],
        },
        {
          name: 'language',
          title: 'Language',
          type: 'object',
          fields: [
            {
              name: 'icon',
              title: 'Icon',
              type: 'image',
            },
            {
              name: 'title',
              title: 'Title',
              type: 'string',
            },
            {
              name: 'list',
              title: 'List',
              type: 'array',
              of: [
                {
                  type: 'object',
                  fields: [
                    {
                      name: 'itemTitle',
                      title: 'Item Title',
                      type: 'string',
                    },
                  ],
                },
              ],
            },
          ],
        },

        {
          name: 'topbarNavList',
          type: 'array',
          title: 'Top bar List',
          of: [
            {
              type: 'object',
              name: 'menuItem',
              title: 'Menu Item',
              fields: [
                {
                  name: 'menuTitle',
                  type: 'string',
                  title: 'Menu Title',
                },
                {
                  name: 'menuHref',
                  type: 'string',
                  title: 'Menu Href',
                },

                {
                  name: 'submenuList',
                  type: 'array',
                  title: 'Submenu List',
                  of: [
                    {
                      type: 'object',
                      name: 'submenuItem',
                      title: 'Submenu Item',
                      fields: [
                        {
                          name: 'title',
                          type: 'string',
                          title: 'Title',
                        },
                        {
                          name: 'href',
                          type: 'string',
                          title: 'Href',
                        },
                      ],
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          name: 'announcement',
          title: 'Announcement',
          type: 'object',
          fields: [
            {
              name: 'title',
              title: 'Title',
              type: 'string',
            },
            {
              name: 'link',
              type: 'string',
              title: 'Link',
            },
          ],
        },
      ],
    },
    {
      name: 'footer',
      title: 'Footer',
      type: 'object',
      group: 'footer',
      fields: [
        {
          name: 'logo',
          title: 'Logo',
          type: 'image',
          fields: [
            {
              name: 'alt',
              title: 'Alt Text',
              type: 'string',
            },
            {
              name: 'title',
              title: 'Image Title',
              description: 'This will show when someone hover over the image',
              type: 'string',
            },
          ],
        },
        {
          name: 'footerSections',
          type: 'array',
          title: 'Footer Sections',
          of: [
            {
              name: 'footerSection',
              type: 'object',
              title: 'Footer Section',
              fields: [
                {
                  name: 'sectionTitle',
                  type: 'string',
                  title: 'Section Title',
                },
                {
                  name: 'subSections',
                  type: 'array',
                  title: 'Subsections',
                  of: [
                    {
                      name: 'subSection',
                      type: 'object',
                      title: 'Subsection',
                      fields: [
                        {
                          name: 'subsectionTitle',
                          type: 'string',
                          title: 'Subsection Title',
                        },
                        {
                          name: 'subsectionURL',
                          type: 'string',
                          title: 'Subsection URL',
                        },
                      ],
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          name: 'address',
          title: 'Address',
          type: 'object',
          fields: [
            { type: 'string', name: 'title' },
            {
              name: 'address',
              type: 'array',
              of: [{ type: 'block' }],
            },
            {
              name: 'iconLinks',
              title: 'Icons with link',
              type: 'array',
              of: [{ type: 'iconLink' }],
            },
          ],
        },
        {
          name: 'downloadAppLink',
          title: 'Download HMI App',
          type: 'object',
          fields: [
            { type: 'string', name: 'title' },
            {
              name: 'iconLinks',
              title: 'Icons with link',
              type: 'array',
              of: [{ type: 'iconLink' }],
            },
          ],
        },
        {
          name: 'footerBottom',
          title: 'Footer Bottom',
          type: 'array',
          of: [
            {
              name: 'iconAndLink',
              title: 'Icon And link',
              type: 'object',
              icon: AiOutlineMedicineBox,
              fields: [
                {
                  name: 'icon',
                  title: 'Icon',
                  type: 'image',
                },
                {
                  name: 'href',
                  type: 'string',
                  title: 'URL',
                },
                { type: 'string', name: 'title' },
              ],
              preview: {
                select: {
                  title: 'title',
                  media: 'icon',
                },
              },
            },
            { type: 'link' },
          ],
        },
        {
          name: 'ctaButton',
          title: 'CTA Button',
          type: 'object',
          fields: [
            {
              name: 'ctaButton',
              title: 'CTA Button',
              type: 'ctaButton',
            },
            {
              name: 'icon',
              title: 'Icon',
              type: 'image',
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
    {
      name: 'notificationBar',
      title: 'Notification Bar',
      type: 'object',
      group: 'notificationBar',
      fields: [
        {
          name: 'icon',
          title: 'Icon',
          type: 'image',
        },
        {
          name: 'text',
          type: 'array',
          of: [block],
        },
      ],
    },
  ],
  preview: {
    select: {
      media: 'logo',
    },
    prepare({ media }) {
      return {
        title: 'Site Config',
        media,
      }
    },
  },
}
