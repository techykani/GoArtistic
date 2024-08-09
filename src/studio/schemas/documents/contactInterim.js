import { MdOutlineMedicalServices } from 'react-icons/md'
import { block } from '../objects/common/editor'
export default {
  name: 'contactUsInterim',
  title: 'Contact Us Interim',
  type: 'document',
  icon: MdOutlineMedicalServices,
  fields: [
    {
      name: 'seo',
      title: 'SEO',
      type: 'seo',
    },
    {
      name: 'isVisible',
      title: 'Is Visible',
      type: 'boolean',
      description: 'Are you want to show this specialties on Medical specialties listing page?',
      initialValue: true,
    },
    {
      name: 'listingImg',
      title: 'Listing Image',
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
      name: 'title',
      title: 'Title',
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
      name: 'jobType',
      title: 'Job Type',
      type: 'array',
      of: [
        {
          type: 'string',
        },
      ],
    },
    {
      name: 'center',
      title: 'Center',
      type: 'string',
    },
    {
      name: 'eyebrow',
      title: 'Eyebrow Title',
      type: 'string',
    },
    {
      name: 'location',
      title: 'Location',
      type: 'string',
      options: {
        list: [
          { title: 'Singapore', value: 'Singapore' },
          { title: 'Malaysia', value: 'Malaysia' },
        ], // &lt;-- predefined values
      },
    },
    {
      name: 'sort',
      title: 'Sort',
      type: 'number',
    },
    {
      name: 'callUsbutton',
      title: 'Call Us Button',
      type: 'ctaButton',
    },
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'jobType[0]',
      media: 'listingImg',
    },
  },
}
