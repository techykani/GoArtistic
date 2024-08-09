import { BsJournalMedical } from 'react-icons/bs'
import { MdLink, MdHighlight } from 'react-icons/md'

export default {
  name: 'accerditations.option',
  title: 'Option',
  type: 'object',
  icon: BsJournalMedical,
  fields: [
    {
      name: 'entryName',
      title: 'Entry Name',
      type: 'string',
    },
    {
        name: 'accerditations',
        title: 'Title & List',
        type: 'object',
        icon: BsJournalMedical,
        fields: [
    {
        name: 'accerditationsName',
        title: 'Accerditations Title',
        type: 'string',
      },
    {
      name: 'accerditationsLink',
      title: 'Accerditations',
      type: 'array',
      of: [
        {
          name: 'accerditations',
          title: 'Card',
          type: 'object',
          icon: MdLink,
          fields: [
            { 
              name: 'primaryImg' ,
              title: 'Primary Image',
              type: 'image'
            },
            { 
              name: 'title' ,
              title: 'Title',
              type: 'string'
            },
            { 
              name: 'description' ,
              title: 'Description',
              type: 'array',
              of: [{ type: 'block' }],
            },
            {
              name:'year',
              title:'Year',
              type: 'string'
            },
          ],
          preview: {
            select: {
              title: 'title'
            },
          },
        },
      ],
    },
]
    },
    {
        name: 'awards',
        title: 'Title & List',
        type: 'object',
        icon: BsJournalMedical,
        fields: [
    {
        name: 'awardsName',
        title: 'Awards Title',
        type: 'string',
      },
    {
        name: 'awardsLink',
        title: 'Awards',
        type: 'array',
        of: [
          {
            name: 'awards',
            title: 'Card',
            type: 'object',
            icon: MdLink,
            fields: [
              { 
                name: 'primaryImg' ,
                title: 'Primary Image',
                type: 'image'
              },
              { 
                name: 'title' ,
                title: 'Title',
                type: 'string'
              },
              { 
                name: 'description' ,
                title: 'Description',
                type: 'array',
                of: [{ type: 'block' }],
              },
              {
                name:'year',
                title:'Year',
                type: 'string'
              },
            ],
            preview: {
              select: {
                title: 'title'
              },
            },
          },
        ],
      },
    ]
}
  ],

  preview: {
    select: {
      title: 'entryName',
      subtitle: 'description',
      media: 'icon_img',
    },
  },
}
