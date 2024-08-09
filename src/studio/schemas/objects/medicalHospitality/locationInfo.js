export default {
  type: 'object',
  name: 'locationObj',
  title: 'Location Object',
  fields: [
    {
      name: 'locationImage',
      title: 'Location Image',
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
      name: 'hospitalName',
      title: 'Hospital Name',
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
  ],
}
