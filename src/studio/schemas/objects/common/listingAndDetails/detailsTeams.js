import { RiTeamLine } from 'react-icons/ri'
import { block } from '../editor'
export default {
  name: 'details.common.teams',
  title: 'Teams',
  type: 'object',
  icon: RiTeamLine,
  fields: [
    { name: 'title', title: 'Title', type: 'string' },
    { name: 'description', title: 'Description', type: 'array', of: [block] },
    {
      name: 'teams',
      type: 'array',
      of: [{ type: 'details.common.team' }],
    },
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'description',
    },
    prepare({ title }) {
      return {
        title: `${title}`,
        media: <RiTeamLine />,
      }
    },
  },
}
