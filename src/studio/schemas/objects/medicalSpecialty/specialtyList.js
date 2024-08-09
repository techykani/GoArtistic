import { BsFillInfoSquareFill } from 'react-icons/bs'

export default {
  name: 'medicalSpecialty.search',
  title: 'Specialty Search',
  type: 'object',
  icon: BsFillInfoSquareFill,
  fields: [
    {
      name: 'tagline',
      title: 'Tagline',
      type: 'text',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'array',
      of: [{ type: 'block' }],
    },
    {
      name: 'searchPlaceHolder',
      title: 'PlaceHolder',
      type: 'text',
    },
    {
      name: 'cta',
      title: 'Link',
      type: 'link',
    },
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'tagline',
      media: 'primaryImg',
    },
  },
}
