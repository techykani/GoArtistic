export default{
  name: 'package.location',
  title: 'Location Details',
  type: 'object',
  fieldsets: [{ name: 'pkgloc', title: 'Location Details' }],
  fields:[
    {
        name:'labTitle',
        title:'Lab Title',
        type: 'string'
    },
    {
      name: 'labTest',
        type: 'array',
        of: [
          {
            type: 'reference',
            to: [{ type: 'laboratory' }],
            validation: (Rule) => Rule.required(),
          },
        ],
  },

  ]

}