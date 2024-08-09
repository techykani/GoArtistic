import { FaWpforms } from 'react-icons/fa'
import { block, image, card } from '../editor'

export default {
  name: 'details.common.formSection',
  title: 'Details Form',
  type: 'object',
  icon: FaWpforms,
  fields: [
    { name: 'title', title: 'Title', type: 'string' },
    {
      name: 'hubspotFormIdSelector',
      title: 'Id name to select the hubspot form',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'hubspotFormRegion',
      title: 'Hubspot Form Region',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'hubspotFormPortalId',
      title: 'Hubspot Form Portal ID',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'hubspotFormId',
      title: 'Hubspot Form Id',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'description',
    },
  },
}
