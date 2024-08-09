import { BsJournalMedical } from 'react-icons/bs'
import { block } from '../../objects/common/editor'
import { type } from 'os'

export default {
  name: 'leadership.members',
  title: 'Members',
  type: 'object',
  icon: BsJournalMedical,
  fields: [
    {
      name: 'sectionName',
      title: 'Section Name',
      type: 'string',
      initialValue: 'Members',
    },
    {
      name: 'tab',
      Title: 'Tab',
      type: 'object',
      fields: [
        {
          name: 'executiveLeadershipContent',
          Title: 'Executive Leadership Content',
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
              name: 'leaders',
              type: 'array',
              title: 'Leaders',
              of: [
                {
                  type: 'reference',
                  to: [{ type: 'management' }],
                },
              ],
            },
          ],
        },
        {
          name: 'boardOfDirectorsContent',
          Title: 'Board Of Directors Content',
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
              name: 'subTitle',
              title: 'Sub Title',
              type: 'string',
            },
            {
              name: 'boards',
              Title: 'Boards',
              type: 'array',
              of: [
                {
                  type: 'object',
                  fields: [
                    {
                      name: 'boardName',
                      title: 'Board Name',
                      type: 'string',
                    },
                    {
                      name: 'boardMembers',
                      title: 'Board Members',
                      type: 'array',
                      of: [
                        {
                          type: 'object',
                          fields: [
                            {
                              name: 'memberName',
                              title: 'Member Name',
                              type: 'string',
                            },
                            {
                              name: 'caption',
                              title: 'Caption',
                              type: 'text',
                            },
                          ],
                          preview: {
                            select: {
                              title: 'memberName',
                              subtitle: 'caption',
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
        },
      ],
    },
  ],

  preview: {
    select: {
      title: 'sectionName', // Changed 'tabName' to 'tab.tabContent.title' to match the schema structure
      subtitle: '', // Adjusted to match the schema structure
      media: 'image',
    },
  },
}
