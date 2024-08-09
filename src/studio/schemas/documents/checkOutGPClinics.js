import { MdOutlineMedicalServices } from 'react-icons/md'

export default {
  name: 'checkOutGPClinics',
  title: 'Check out our GP Clinics',
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
      name: 'primaryImg',
      title: 'Primary Image',
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
      name: 'location',
      title: 'Location',
      type: 'object',
      fields: [
        { name: 'locationIcon', title: 'Icon', type: 'image' },
        {
          name: 'description',
          title: 'Description',
          type: 'array',
          of: [{ type: 'block' }],
        },
      ],
    },
    {
      name: 'opningHour',
      title: 'Opinging Hour',
      type: 'object',
      fields: [
        { name: 'hourIcon', title: 'Icon', type: 'image' },
        {
          name: 'description',
          title: 'Description',
          type: 'array',
          of: [{ type: 'block' }],
        },
      ],
    },
    {
      name: 'viewMorebutton',
      title: 'View More Button',
      type: 'ctaButton',
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
      subtitle: 'tagline',
    },
  },
}
