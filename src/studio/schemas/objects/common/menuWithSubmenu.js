import { MdLink } from 'react-icons/md'

export default {
  name: 'menuWithSubmenu',
  title: 'Menu With Submenu',
  type: 'object',
  icon: MdLink,
  fields: [
    { name: 'title', type: 'string' },
    {
      name: 'href',
      title: 'URL',
      type: 'string',
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      fields: [
        {
          name: 'alt',
          title: 'Alt Text',
          type: 'string',
        },
      ],
    },
    // {
    //   description: 'Select the document list you want to show on the mega menu.',
    //   name: 'document',
    //   title: 'Document',
    //   type: 'string',
    //   options: {
    //     list: [
    //       { title: 'Package', value: 'package' },
    //       { title: 'Centres Of Excellence', value: 'centresOfExcellence' },
    //       { title: 'Specialised Focus', value: 'medicalSpecialty' },
    //       { title: 'Procedure', value: 'procedure' },
    //       { title: 'Clinical Service', value: 'clinicalService' },
    //     ],
    //   },
    // },
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'href',
    },
  },
}
