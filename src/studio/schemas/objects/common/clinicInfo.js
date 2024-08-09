export default {
  type: 'document',
  name: 'clinicInfo',
  title: 'Clinic Info',
  fields: [
    {
      name: 'image',
      title: 'Clinic Image',
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
      title: 'Clinic Name',
      type: 'string',
    },
    {
      name: 'address',
      title: 'Address',
      type: 'text',
    },
    {
      name: 'schedule',
      title: 'Schedule',
      type: 'object',
      fields: [
        {
          name: 'days',
          title: 'Days',
          type: 'string',
        },
        {
          name: 'startTime',
          title: 'Start Time',
          type: 'string',
        },
        {
          name: 'endTime',
          title: 'End Time',
          type: 'string',
        },
      ],
    },
    {
      name: 'viewMoreButton',
      title: 'Button',
      type: 'ctaButton',
    },
    {
      name: 'callUsButton',
      title: 'Button',
      type: 'ctaButton',
    },
  ],
}
