import { BsFileRichtext } from 'react-icons/bs'
import { block, image, card } from '../editor'

export default {
  name: 'details.common.titleDescriptionFilters',
  title: 'Title, Description & Filters',
  type: 'object',
  icon: BsFileRichtext,
  fields: [
    { name: 'title', title: 'Title', type: 'string' },
    {
      name: 'description',
      title: 'Description',
      type: 'array',
      of: [block, image, card],
    },
    {
      name: 'extraInfo',
      title: 'Extra Info',
      type: 'array',
      of: [block],
    },
    {
      name: 'specialistFilter',
      title: 'Filter Specialist',
      description: 'List down the parameters for Sort By dropdown filter',
      type: 'array',
      of: [{ type: 'string' }],
    },
    {
      name: 'titleFilter',
      title: 'Filter Title',
      description: 'List down the parameters for Sort By dropdown filter',
      type: 'array',
      of: [{ type: 'string' }],
    },
    {
      name: 'locationFilter',
      title: 'Filter Location',
      description: 'List down the parameters for Sort By dropdown filter',
      type: 'array',
      of: [{ type: 'string' }],
    },
    {
      name: 'centerFilter',
      title: 'Filter Center',
      description: 'List down the parameters for Sort By dropdown filter',
      type: 'array',
      of: [{ type: 'string' }],
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
