import { RiTeamFill } from 'react-icons/ri'

export default {
  name: 'details.common.team',
  title: 'Team',
  type: 'object',
  icon: RiTeamFill,
  fields: [
    { name: 'title', title: 'Title', type: 'string' },

   
  ],
  preview: {
    select: {
      title: 'title',
    },
  },
}
