export default {
  name: 'medicalTravelAgents.tab',
  title: 'Tab',
  type: 'document',
  fields: [
    {
      name: 'countryName',
      title: 'Country Name',
      type: 'string',
    },
    {
      name: 'locations',
      title: 'Locations',
      type: 'array',
      of: [{type: 'medicalTravelAgents.location'}]
    }
  ],
}
