import { BsFileRichtext } from 'react-icons/bs'
import { MdLink, MdHighlight } from 'react-icons/md'
import { block, image, card } from '../common/editor'

export default {
  name: 'article.videoTitleDescription',
  title: 'Video, Title, Description & Quote',
  type: 'object',
  icon: BsFileRichtext,
  fields: [
    {
      name: 'videourl',
      type: 'string',
      title: 'Video Url',
    },
    {
      name: 'videoCaption',
      type: 'string',
      title: 'Video Caption',
    },
    {
      name: 'videoDescription',
      title: 'Video Description',
      type: 'array',
      of: [{ type: 'block' }],
    },
    {
      name: 'Quote',
      type: 'object',
      fields: [
        {
          name: 'quotedescription',
          title: 'Quote Description',
          type: 'array',
          of: [{ type: 'block' }],
        },
        {
          name: 'quoteAuthor',
          type: 'string',
          title: 'Quote Author',
        },
        {
          name: 'quoteDomain',
          type: 'string',
          title: 'Quote Domain',
        },
      ],
    },
    {
      name: 'description',
      title: 'Description',
      type: 'array',
      of: [{ type: 'block' }],
    },
  ],
  preview: {
    select: {
      title: 'videourl',
      subtitle: 'description',
      media: 'image'
    },
  },
}
