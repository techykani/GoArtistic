import { RiQuestionMark } from 'react-icons/ri'
import { block } from '../editor'

export default {
  name: 'details.common.commonQuestions',
  title: 'Common Questions',
  type: 'object',
  icon: RiQuestionMark,
  fields: [
    { name: 'title', title: 'Title', type: 'string' },
    {
      name: 'description',
      title: 'Description',
      type: 'array',
      of: [block],
    },
    {
      name: 'commonQuestions',
      title: 'Common Questions',
      type: 'array',
      of: [
        {
          name: 'commonQuestion',
          title: 'Common Question',
          type: 'object',
          icon: RiQuestionMark,
          fields: [
            {
              name: 'question',
              type: 'string',
            },
            {
              name: 'answer',
              type: 'array',
              of: [block],
            },
          ],
          preview: {
            select: {
              title: 'question',
              subtitle: 'answer',
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
    prepare({ title, subtitle }) {
      return {
        title: title,
        subtitle,
        media: <RiQuestionMark />,
      }
    },
  },
}
