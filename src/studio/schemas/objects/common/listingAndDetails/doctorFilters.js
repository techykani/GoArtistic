import { BsFileRichtext } from 'react-icons/bs'
import { block, image, card } from '../editor'
import { MdLink } from 'react-icons/md'

export default {
  name: 'details.common.doctorFilters',
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
      description: 'Parameters for Sort By dropdown filter',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'locations',
          title: 'Locations',
          fields: [
            {
              name: 'name',
              type: 'string',
              title: 'Name',
              description: 'Display name of the sort option',
            },
            {
              name: 'centers',
              type: 'array',
              title: 'Centers',
              of: [{ type: 'string' }],
            },
          ],
        },
      ],
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
