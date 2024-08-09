import { FaHeartbeat } from 'react-icons/fa'
import { MdLink, MdHighlight } from 'react-icons/md'

export default {
  name: 'treatmentCostEstimation',
  title: 'Treatment cost estimation',
  type: 'object',
  icon: FaHeartbeat,
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'tagline',
      title: 'Tagline',
      type: 'string',
    },
    {
      name: 'tabs',
      title: 'Tabs',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'tabName',
              title: 'Tab Name',
              type: 'string',
            },
            {
              name: 'table',
              title: 'Table',
              type: 'table',
              preview: {
                select: {
                  title: 'entryName.text',
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
      subtitle: 'tagline',
    },
  },
}
