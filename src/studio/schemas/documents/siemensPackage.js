import { GoPackage } from 'react-icons/go'
import { block } from '../objects/common/editor'
import { MdLink, MdHighlight } from 'react-icons/md'
export default {
  name: 'siemensPackage',
  title: 'Siemens Package',
  type: 'document',
  icon: GoPackage,
  fields:[
    {
      name: 'seo',
      title: 'SEO',
      type: 'seo',
    },
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },

    {
      title: 'Slug',
      name: 'slug',
      type: 'slug',
      options: {
        source: 'title'
      },
    },
   
    {
        name:'packageprice',
        title:'Package Price',
        type: 'string'
    },
    {
      name:'packageprice2',
      title:'Package Price2',
      type: 'string'
  },
    { 
      name: 'packageDescription' ,
      title: 'Package Description',
      type: 'array',
      of: [{ type: 'block' }],
    },
    {
      name:'status',
      title:'Status',
      type: 'boolean'
    },
  ],
preview: {
    select: {
      title: 'seo.title',
      subtitle: 'seo.description',
    },
  },
}