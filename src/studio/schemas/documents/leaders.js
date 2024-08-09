import { GoPerson } from 'react-icons/go'
import { MdLink, MdHighlight } from 'react-icons/md'
import { block } from '../objects/common/editor'

export default {
  name: 'management',
  title: 'Management',
  type: 'document',
  icon: GoPerson,
  fields: [
    {
      name: 'seo',
      title: 'SEO',
      type: 'seo',
    },
    {
      name: 'profileImage',
      title: 'Profile Image',
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
      title: 'Name',
      type: 'text',
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
      name: 'introDescription',
      title: 'Intro Description',
      type: 'array',
      of: [{ type: 'block' }],
    },
    {
      name: 'designation',
      title: 'Designation',
      type: 'text',
    },
    {
      name: 'executiveLeaders',
      title: 'Executive Leaders',
      type: 'boolean',
    },
    {
      name: 'board',
      title: 'Board',
      type: 'string',
      options: {
        list: [
          { title: 'General', value: 'general' },
          { title: 'HMI Entity Board Members', value: 'hmiEntityBoardMembers' },
          { title: 'Singapore Advisory Board Members', value: 'singaporeAdvisoryBoardMembers' },
          { title: 'Medical Directors', value: 'medicalDirectors' },
        ],
      },
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
