import { AiOutlineMedicineBox } from 'react-icons/ai'

export default {
  name: 'specialityFilter',
  title: 'Speciality Filter',
  type: 'object',
  icon: AiOutlineMedicineBox,
  fields: [
    {
      name: 'dropdownTitle',
      title: 'DropdownTitle',
      type: 'string',
    },
    {
      title: 'Add Filter Variables',
      name: 'filterVariables',
      type: 'array',
      of: [{ type: 'string' }],
    },
  ],
  preview: {
    select: {
      title: 'link.text',
      subtitle: 'shortDes',
    },
  },
}
