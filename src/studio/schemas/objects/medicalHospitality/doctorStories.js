// schemas/medicalInfo.js

export default {
  name: 'medicalHospitalityPage.doctorStories',
  title: 'Doctor Stories',
  type: 'document',
  fields: [
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
      name: 'button',
      title: 'Button',
      type: 'link',
    },
    {
      name: 'doctor',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'doctor' }],
          validation: (Rule) => Rule.required(),
        },
      ],
    },
  ],
  preview: {
    select: {
      title: 'title',
    },
  },
}
