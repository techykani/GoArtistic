import { MdOutlineMedicalServices } from 'react-icons/md'
import { block } from '../objects/common/editor'

export default {
  name: 'media',
  title: 'Media',
  type: 'document',
  icon: MdOutlineMedicalServices,
  fields: [
    {
      name: 'seo',
      title: 'SEO',
      type: 'seo',
    },
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      title: 'Slug',
      name: 'slug',
      type: 'slug',
      options: {
        source: 'title',
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'publishedAt',
      title: 'Published At',
      type: 'datetime',
    },
    // {
    //   name: 'calendar',
    //   type: 'object',
    //   fields: [
    //     {
    //       name: 'date',
    //       title: 'Date',
    //       type: 'string',
    //       validation: (Rule) => Rule.required(),
    //       options: {
    //         list: [
    //           { title: '01', value: '01' },
    //           { title: '02', value: '02' },
    //           { title: '03', value: '03' },
    //           { title: '04', value: '04' },
    //           { title: '05', value: '05' },
    //           { title: '06', value: '06' },
    //           { title: '07', value: '07' },
    //           { title: '08', value: '08' },
    //           { title: '09', value: '09' },
    //           { title: '10', value: '10' },
    //           { title: '11', value: '11' },
    //           { title: '12', value: '12' },
    //           { title: '13', value: '13' },
    //           { title: '14', value: '14' },
    //           { title: '15', value: '15' },
    //           { title: '16', value: '16' },
    //           { title: '17', value: '17' },
    //           { title: '18', value: '18' },
    //           { title: '19', value: '19' },
    //           { title: '20', value: '20' },
    //           { title: '21', value: '21' },
    //           { title: '22', value: '22' },
    //           { title: '23', value: '23' },
    //           { title: '24', value: '24' },
    //           { title: '25', value: '25' },
    //           { title: '26', value: '26' },
    //           { title: '27', value: '27' },
    //           { title: '28', value: '28' },
    //           { title: '29', value: '29' },
    //           { title: '30', value: '30' },
    //           { title: '31', value: '31' },
    //         ], // &lt;-- predefined values
    //       },
    //     },
    //     {
    //       name: 'month',
    //       title: 'Month',
    //       type: 'string',
    //       validation: (Rule) => Rule.required(),
    //       options: {
    //         list: [
    //           { title: 'Jan', value: 'Jan' },
    //           { title: 'Feb', value: 'Feb' },
    //           { title: 'Mar', value: 'Mar' },
    //           { title: 'Apr', value: 'Apr' },
    //           { title: 'May', value: 'May' },
    //           { title: 'Jun', value: 'Jun' },
    //           { title: 'Jul', value: 'Jul' },
    //           { title: 'Aug', value: 'Aug' },
    //           { title: 'Sept', value: 'Sept' },
    //           { title: 'Oct', value: 'Oct' },
    //           { title: 'Nov', value: 'Nov' },
    //           { title: 'Dec', value: 'Dec' },
    //         ], // &lt;-- predefined values
    //       },
    //     },
    //     {
    //       name: 'year',
    //       title: 'Year',
    //       type: 'string',
    //       validation: (Rule) => Rule.required(),
    //     },
    //     {
    //       name: 'minutes',
    //       title: 'Minutes',
    //       type: 'string',
    //     },
    //   ],
    // },
    {
      name: 'author',
      type: 'reference',
      to: [{ type: 'doctor' }],
    },
    {
      name: 'speciality',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'specialtyList' }],
          validation: (Rule) => Rule.required(),
        },
      ],
    },
    {
      name: 'primaryImg',
      title: 'Primary Image',
      type: 'image',
      fields: [
        {
          name: 'alt',
          title: 'Alt Text',
          type: 'string',
        },
      ],
    },
    {
      name: 'tag',
      title: 'Tag',
      type: 'string',
      options: {
        list: [
          { title: 'News', value: 'News' },
          { title: 'Events', value: 'Events' },
          { title: 'Videos', value: 'Videos' },
        ], // &lt;-- predefined values
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'center',
      title: 'Medical Center',
      type: 'reference',
      to: [{ type: 'entities' }],
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'topic',
      title: 'Topic Type',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'overviewPoints',
      title: 'Article Description Points',
      type: 'array',
      of: [block],
    },
    {
      name: 'sections',
      title: 'Article Sections',
      type: 'array',
      of: [
        // { type: 'article.bulletPoints' },
        { type: 'article.imageTitleDescription' },
        { type: 'article.videoTitleDescription' },
        { type: 'titleTable' },
        { type: 'article.cards' },
        { type: 'article.podcast' },
        { type: 'article.source' },
        { type: 'article.articleContact' },
        { type: 'article.intrestedIn' },
      ],
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
