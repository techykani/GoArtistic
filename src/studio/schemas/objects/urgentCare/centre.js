export default {
  name: 'urgentCare.centre',
  title: 'Specialist Centre',
  type: 'document',
  fields: [
    {
      name: 'tagline',
      title: 'Address Tagline',
      type: 'string',
    },
    {
      name: 'title',
      title: 'Address Title',
      type: 'string',
    },
    {
      name: 'description',
      title: 'Address Description',
      type: 'string',
    },
    {
      name: 'items',
      title: 'Contact Items',
      type: 'array',
      of: [{ type: 'addressLink' }],
    },
    {
      name: 'schedules',
      title: 'Schedules',
      type: 'array',
      of: [
        {
          name: 'schedule',
          title: 'Schedule',
          type: 'object',
          fields: [
            { 
              title: 'Icon', 
              name: 'icon', 
              type: 'image' 
            },
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
    },
    
    {
      name: 'location',
      title: 'Enquiry Map',
      type: 'string',
    },
  ],
  preview: {
    select: {
      title: 'title',
    },
  },
}
