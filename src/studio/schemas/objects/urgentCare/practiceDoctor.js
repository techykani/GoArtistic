export default {
  name: 'urgentCare.practiceDoctor',
  title: 'Practice Doctor',
  type: 'document',
  fields: [
    {
      name: 'tagline',
      title: 'Tagline',
      type: 'string',
    },
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
    },
    {
      name: 'doctor',
      title: 'Practice Doctor',
      type: 'reference',
      to: [{ type: 'doctor' }],
    },
  ],
  preview: {
    select: {
      title: 'title',
    },
  },
}
