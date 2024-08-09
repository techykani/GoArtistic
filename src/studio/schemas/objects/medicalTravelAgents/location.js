export default {
  name: 'medicalTravelAgents.location',
  title: 'Location',
  type: 'document',
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
      name: 'locationName',
      title: 'Location Name',
      type: 'string',
    },
    {
      name: 'country',
      title: 'Country',
      type: 'string',
    },
    {
      name: 'address',
      title: 'Address',
      type: 'text',
    },
    {
      name: 'mobileNumber',
      title: 'Mobile Number',
      type: 'string',
    },
    {
      name: 'email',
      title: 'Email',
      type: 'string',
    },
    {
      name: 'whatsapp',
      title: 'Whatsapp Number',
      type: 'string',
    },
    {
      name: 'locationLink',
      title: 'Location Map Link',
      type: 'string',
    },
    {
      name: 'latitude',
      title: 'Latitude',
      type: 'number',
    },
    {
      name: 'longitude',
      title: 'Longitude',
      type: 'number',
    },
  ],
}
