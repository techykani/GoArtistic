import { GoPerson } from 'react-icons/go'
import { MdLink, MdHighlight } from 'react-icons/md'
import { block } from '../objects/common/editor'

export default {
  name: 'trainer',
  title: 'Trainer',
  type: 'document',
  icon: GoPerson,
  fields: [
    {
      name: 'seo',
      title: 'SEO',
      type: 'seo',
    },
    {
      name: 'photo',
      title: 'Profile Photo',
      type: 'image',
      fields: [
        {
          name: 'alt',
          title: 'Alt Text',
          type: 'string',
        },
      ],
    },
    {
      name: 'name',
      type: 'string',
    },
    {
      title: 'Slug',
      name: 'slug',
      type: 'slug',
      options: {
        source: 'name',
      },
    },
    {
      name: 'trainerType',
      title: 'Trainer Type',
      type: 'string',
      options: {
        list: [{ title: 'Associate', value: 'Associate' }],
      },
    },
    {
      name: 'experience',
      type: 'object',
      fields: [
        {
          name: 'title',
          type: 'string',
        },
        {
          name: 'description',
          type: 'array',
          of: [block],
        },
      ],
    },
    {
      name: 'qualification',
      type: 'object',
      fields: [
        {
          name: 'title',
          type: 'string',
        },
        {
          name: 'description',
          type: 'array',
          of: [block],
        },
      ],
    },
    {
      name: 'courses',
      type: 'object',
      fields: [
        {
          name: 'title',
          type: 'string',
        },
      ],
    },
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'specialist.title',
      media: 'photo',
    },
  },
}
