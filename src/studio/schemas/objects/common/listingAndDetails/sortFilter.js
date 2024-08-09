import { MdOutlineFilterAlt } from 'react-icons/md'

export default {
  name: 'common.sortFilter',
  title: 'Sort Filter',
  type: 'object',
  icon: MdOutlineFilterAlt,
  fields: [
    {
      name: 'sortParameter',
      title: 'Sort By',
      type: 'array',
      description: 'List down the parameters for Sort By dropdown filter',
      of: [{ type: 'string' }],
    },
  ],
  preview: {
    prepare: () => {
      return {
        title: 'Sort By Different Parameters',
        media: <MdOutlineFilterAlt />,
      }
    },
  },
}
