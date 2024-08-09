import { FaFilePdf } from 'react-icons/fa'

export default {
  name: 'details.file',
  type: 'object',
  title: 'PDF',
  icon: FaFilePdf,
  fields: [
    {
      type: 'file',
      name: 'file',
      title: 'Upload File',
    },
    {
      type: 'string',
      name: 'filename',
      title: 'File Name',
    },
    {
      type: 'string',
      name: 'type',
      title: 'File type',
    },
    {
      type: 'image',
      name: 'icon',
      title: 'File Icon',
      fields: [
        {
          name: 'alt',
          title: 'Alt Text',
          type: 'string',
        },
      ],
    },
  ],
}
