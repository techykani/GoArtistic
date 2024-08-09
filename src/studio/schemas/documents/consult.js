import { MdOutlineMedicalServices } from 'react-icons/md'

export default {
  name: 'consult',
  title: 'Consult Test',
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
      validation: (Rule) => Rule.required()
    },
  ],
  preview: {
    select: {
      title: 'title',
    },
  },
}
