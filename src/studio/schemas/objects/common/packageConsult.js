export default{
  name: 'package.consult',
  title: 'Consult Test Details',
  type: 'object',
  fieldsets: [{ name: 'pkgloc', title: 'Location Details' }],
  fields:[
    {
        name:'labTitle',
        title:'Consult Title',
        type: 'string'
    },
    {
      name: 'labTest',
      title: 'consult Test',
        type: 'array',
        of: [
          {
            type: 'reference',
            to: [{ type: 'consult' }],
            validation: (Rule) => Rule.required(),
          },
        ],
  },

  ]

}