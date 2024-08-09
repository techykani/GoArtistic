import { GrServices } from 'react-icons/gr'
export default {
  name: 'titleTable',
  title: 'Table subsection',
  type: 'object',
  icon: GrServices,
  fields: [
    { name: 'title', title: 'Title', type: 'string' },
    {
      name: 'firstColumnStyle',
      title: 'Include heightlighter on the first column ',
      type: 'boolean',
    },
    { name: 'table', title: 'Table', type: 'table' },
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'description',
    },
  },
}
