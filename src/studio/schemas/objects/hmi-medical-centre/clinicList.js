import { BsJournalMedical } from 'react-icons/bs'
import { block, image, card } from '../common/editor'

export default {
  name: 'hmiMedicalCentre.ClinicList',
  title: 'Clinic Info',
  type: 'object',
  icon: BsJournalMedical,
  fields: [
    { name: 'title', title: 'Title', type: 'string' },
    {
      name: 'description',
      title: 'Description',
      type: 'array',
      of: [block],
    },
    {
      name: 'clinicLocations',
      type: 'array',
      of: [
        {
          type: 'clinicLocations',
        },
      ],
    },
  ],
  preview: {
    select: {
      title: 'title',
    },
  },
}
