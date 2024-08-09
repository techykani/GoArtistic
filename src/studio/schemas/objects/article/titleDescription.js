import { BsFileRichtext } from 'react-icons/bs'
import { MdLink, MdHighlight } from 'react-icons/md'
import { block, image, card } from '../common/editor'

export default {
  name: 'article.imageTitleDescription',
  title: 'Image, Title & Description',
  type: 'object',
  icon: BsFileRichtext,
  fields: [
    {
      name: 'image',
      type: 'image',
      title: 'Image',
      fields: [
        {
          name: 'alt',
          title: 'Alt Text',
          type: 'string',
        },
      ],
    },
    {
      name: 'imageCaption',
      type: 'string',
      title: 'Image Caption',
    },
    {
      name: 'title',
      type: 'string',
      title: 'Title',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'array',
      of: [{ type: 'block' }],
    },
    // {
    //   name: 'description3',
    //   title: 'Description',
    //   type: 'string',
    // },

    // {
    //   name: 'video',
    //   type: 'string',
    //   title: 'Video',
    // },
    // {
    //   name: 'videoText',
    //   type: 'string',
    //   title: 'Video Text',
    // },
    // {
    //   name: 'paragraph',
    //   type: 'text',
    //   title: 'Paragraph',
    // },
    // {
    //   name: 'quotes',
    //   type: 'text',
    //   title: 'Quotes',
    // },
    // {
    //   name: 'quotesAuthor',
    //   type: 'string',
    //   title: 'Quotes Author',
    // },
    // {
    //   name: 'quotesPosition',
    //   type: 'string',
    //   title: 'Quotes Position',
    // },
    // {
    //   name: 'paragraph2',
    //   title: 'Paragraph2',
    //   type: 'array',
    //   of: [{ type: 'block' }],
    // },
    // {
    //   name: 'podcast',
    //   type: 'string',
    //   title: 'Podcast',
    // },
    // {
    //   name: 'firstColumnStyle',
    //   title: 'Include heightlighter on the first column ',
    //   type: 'boolean',
    // },
    // { name: 'table', title: 'Table', type: 'table' },
    // { name: 'image', title: 'Image', type: 'image' },
    // { name: 'imageContent', title: 'Image Content', type: 'string' },
    // { name: 'imageHeader', title: 'Image Header', type: 'string' },
    // { name: 'imagePara', title: 'Image Para', type: 'array', of: [{ type: 'block' }] },
    // {
    //   name: 'brandsimages',
    //   title: 'Brands Images',
    //   type: 'array',
    //   of: [
    //     {
    //       name: 'card',
    //       title: 'Card',
    //       type: 'object',
    //       icon: MdLink,
    //       fields: [
    //         {
    //           name: 'brandImg',
    //           title: 'Brand Images',
    //           type: 'image',
    //         },
    //         {
    //           name: 'title',
    //           title: 'Title',
    //           type: 'string',
    //         },
    //         {
    //           name: 'percentageNumber1',
    //           title: 'Percentage Number 1',
    //           type: 'string',
    //         },
    //         {
    //           name: 'percentageNumber',
    //           title: 'Percentage Number',
    //           type: 'string',
    //         },
    //         {
    //           name: 'percentageNumber3',
    //           title: 'Percentage Number 3',
    //           type: 'string',
    //         },
    //         {
    //           name: 'tagline',
    //           title: 'Tagline',
    //           type: 'text',
    //         },
    //       ],
    //       preview: {
    //         select: {
    //           title: 'title',
    //           media: 'brandImg',
    //         },
    //       },
    //     },
    //   ],
    // },
    // { name: 'imageHeader2', title: 'Image Header2', type: 'string' },
    // { name: 'imagePara2', title: 'Image Para2', type: 'array', of: [{ type: 'block' }] },
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'description',
      media: 'image',
    },
  },
}
