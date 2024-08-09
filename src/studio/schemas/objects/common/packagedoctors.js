export default{
  name: 'package.doctor',
  title: 'Package Doctor',
  type: 'object',
  fieldsets: [{ name: 'pkgdoct', title: 'Package Doctors' }],
  fields:[
    {
        name:'colorcode',
        title:'Calendar Code',
        type: 'string'
    },
    {
        name:'doctor',
        title:'Doctor Name',
        type: 'string'
    }

  ]

}