export default {
  name: 'medicalTravelAgents.travelAgent',
  title: 'Travel Agent',
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
      name: 'map',
      title: 'Map',
      type: 'string',
    },
    {
      name: 'locations',
      title: 'Locations',
      type: 'array',
      of: [{ type: 'medicalTravelAgents.location' }],
    },
  ],
}
