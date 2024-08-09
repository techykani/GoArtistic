import locationObj from './locationInfo'

export default {
  name: 'medicalHospitalityPage.locations',
  title: 'Locations',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'locations',
      title: 'Locations',
      type: 'array',
      of: [locationObj],
    },
    {
      name: 'link',
      type: 'link',
    },
  ],
  preview: {
    select: {
      title: 'title',
    },
  },
}
