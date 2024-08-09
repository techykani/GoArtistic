import { GoPerson } from 'react-icons/go'
import { MdLink, MdHighlight } from 'react-icons/md'
import { block } from '../objects/common/editor'

export default {
  name: 'course',
  title: 'Course',
  type: 'document',
  icon: GoPerson,
  fields: [
    {
      name: 'seo',
      title: 'SEO',
      type: 'seo',
    },
    {
      name: 'title',
      type: 'string',
    },
    {
      title: 'Slug',
      name: 'slug',
      type: 'slug',
      options: {
        source: 'title',
      },
    },
    {
      name: 'author',
      type: 'reference',
      to: [{ type: 'trainer' }],
    },
    {
      name: 'description',
      type: 'array',
      of: [block],
    },
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'author.name',
      media: 'photo',
    },
  },
}
