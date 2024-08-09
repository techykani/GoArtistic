import { GoPackage } from 'react-icons/go'
import { block } from '../objects/common/editor'
import { MdLink, MdHighlight } from 'react-icons/md'
export default {
  name: 'package',
  title: 'Package',
  type: 'document',
  icon: GoPackage,
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
    },

    {
      title: 'Slug',
      name: 'slug',
      type: 'slug',
      options: {
        source: 'title',
      },
    },
    {
      name: 'shortDes',
      title: 'Package Summary',
      type: 'text',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'array',
      of: [{ type: 'block' }],
    },
    {
      name: 'category',
      title: 'Package Category',
      type: 'string',
      options: {
        list: [
          { title: 'General', value: 'GP Screening' },
          { title: 'Specialist', value: 'Specialist Screening' },
        ], // &lt;-- predefined values
      },
    },
    // {
    //   name: 'packagedetails',
    //   title: 'Package Details',
    //   type: 'array',
    //   of: [block],
    // },
    // {
    //     name:'packagePrice',
    //     title:'Package Price',
    //     type: 'number'
    // },
    // {
    //     name:'gender',
    //     title:'gender',
    //     type: 'string'
    // },
    {
      name: 'gender',
      title: 'Gender',
      type: 'string',
      options: {
        list: [
          { title: 'Any', value: 'Any' },
          { title: 'Male', value: 'Male' },
          { title: 'Female', value: 'Female' },
        ], // &lt;-- predefined values
      },
    },
    // {
    //     name:'age',
    //     title:'age',
    //     type: 'string'
    // },
    {
      name: 'ageV',
      type: 'array',
      of: [
        {
          type: 'string',
          options: {
            list: [
              { title: 'Below 30', value: 'Below 30' },
              { title: '30 to 40', value: '30 to 40' },
              { title: 'Above 40', value: 'Above 40' },
            ], // &lt;-- predefined values
          },
        },
      ],
    },
    // {
    //   name: 'specificconcern',
    //   title: 'Specific Concern',
    //   type: 'string',
    // },
    {
      name: 'specificconcern',
      type: 'array',
      of: [
        {
          type: 'string',
          options: {
            list: [
              { title: 'Bone & Joint Health', value: 'Bone & Joint Health' },
              { title: 'Digestive & Colorectal Health', value: 'Digestive & Colorectal Health' },
              { title: 'Heart Conditions', value: 'Heart Conditions' },
              { title: 'Liver Conditions', value: 'Liver Conditions' },
              { title: 'Kidney & Renal Health', value: 'Kidney & Renal Health' },
              { title: 'Sleep Health', value: 'Sleep Health' },
              { title: 'Chronic Health Conditions', value: 'Chronic Health Conditions' },
            ], // &lt;-- predefined values
          },
        },
      ],
    },
    {
      name: 'entities',
      title: 'Entities',
      type: 'array',
      of: [
        {
          name: 'entityForm',
          title: 'Entity Form',
          type: 'object',
          icon: MdLink,
          fields: [
            {
              name: 'entity',
              type: 'reference',
              to: [{ type: 'entities' }],
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'link',
              title: 'Redirecting URL / Form Id',
              type: 'string',
            },
          ],
          preview: {
            select: {
              title: 'entity.name',
              subtitle: 'link',
            },
          },
        },
      ],
    },
    {
      name: 'test',
      type: 'object',
      fields: [
        {
          name: 'consultHeader',
          title: 'Consult Header Title',
          type: 'string',
        },
        {
          name: 'consultTest',
          type: 'array',
          of: [
            {
              type: 'package.consult',
            },
          ],
        },
        {
          name: 'clinicTestHeader',
          title: 'Clinic Test Header Title',
          type: 'string',
        },
        {
          name: 'clinic',
          type: 'array',
          of: [
            {
              type: 'reference',
              to: [{ type: 'clinic' }],
              validation: (Rule) => Rule.required(),
            },
          ],
        },
        {
          name: 'laboratoryHeader',
          title: 'Laboratory Header Title',
          type: 'string',
        },
        {
          name: 'laboratoryTest',
          type: 'array',
          of: [
            {
              type: 'package.location',
            },
          ],
        },
        {
          name: 'radiologyHeader',
          title: 'Radiology Header Title',
          type: 'string',
        },
        {
          name: 'radiology',
          type: 'array',
          of: [
            {
              type: 'reference',
              to: [{ type: 'radiology' }],
              validation: (Rule) => Rule.required(),
            },
          ],
        },
        {
          name: 'otherHeader',
          title: 'Other Header Title',
          type: 'string',
        },
        {
          name: 'other',
          type: 'array',
          of: [
            {
              type: 'reference',
              to: [{ type: 'other' }],
              validation: (Rule) => Rule.required(),
            },
          ],
        },
        {
          name: 'addons',
          type: 'object',
          fields: [
            {
              name: 'title',
              title: 'Title',
              type: 'string',
            },
            {
              name: 'addon',
              title: 'Add Ons',
              type: 'array',
              of: [
                {
                  type: 'object',
                  fields: [
                    {
                      name: 'title',
                      title: 'Title',
                      type: 'string',
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          name: 'preferredTest',
          title: 'Choose your preferred test',
          type: 'object',
          fields: [
            {
              name: 'menTitle',
              title: 'Title',
              type: 'string',
            },
            {
              name: 'men',
              title: 'For Men',
              type: 'array',
              of: [
                {
                  type: 'object',
                  fields: [
                    {
                      name: 'title',
                      title: 'Title',
                      type: 'string',
                    },
                  ],
                },
              ],
            },
            {
              name: 'womeTitle',
              title: 'Title',
              type: 'string',
            },
            {
              name: 'women',
              title: 'For Women',
              type: 'array',
              of: [
                {
                  type: 'object',
                  fields: [
                    {
                      name: 'title',
                      title: 'Title',
                      type: 'string',
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },

    // {
    //     name: 'packagedoctors',
    //     title: 'Package Doctors',
    //     type: 'array',
    //     of: [{type: 'package.doctor'}]
    // },
    // {
    //     name:'calendarcode',
    //     title:'Calendar Color Code',
    //     type: 'string'
    // },
    {
      name: 'packagelocation',
      title: 'Package Location',
      type: 'string',
    },
    // {
    //     name:'complimentarytests',
    //     title:'Complimentary Tests',
    //     type: 'array',
    //     of: [{type:'common.options'}],
    // },
    // {
    //     name:'packagebasicchoice',
    //     title:'Package Basic Choice',
    //     type: 'string'
    // },
    // {
    //     name:'optionaltopup',
    //     title:'Optional Topup',
    //     type: 'string'
    // },
    // {
    //     name:'optionaltopupprice',
    //     title:'Optional Topup Price',
    //     type: 'number'
    // },
    {
      name: 'packageprice',
      title: 'Package Price',
      type: 'string',
    },
    {
      name: 'packagestartdate',
      title: 'Package Start Date',
      type: 'date',
    },
    {
      name: 'packageenddate',
      title: 'Package End Date',
      type: 'date',
    },
    {
      name: 'iconurl',
      title: 'Icon Url',
      type: 'image',
    },
    {
      name: 'status',
      title: 'Status',
      type: 'boolean',
    },
    {
      name: 'canbook',
      title: 'Can Book',
      type: 'boolean',
    },
    {
      name: 'featured',
      title: 'Featured',
      type: 'boolean',
    },
    {
      name: 'premium',
      title: 'Premium',
      type: 'boolean',
    },
    // {
    //   name:'featuredsort',
    //   title:'Featured Sort',
    //   type: 'number'
    // },
    {
      name: 'lowtohigh',
      title: 'Sort Low to High',
      type: 'number',
    },
    // {
    //   name:'hightolow',
    //   title:'Sort High to Low',
    //   type: 'number'
    // },
    {
      name: 'link',
      title: 'Book/Contact',
      type: 'link',
    },
    {
      name: 'terms',
      type: 'object',
      fields: [
        {
          name: 'title',
          title: 'Terms & Condition',
          type: 'string',
        },
        {
          name: 'description',
          title: 'Terms & Condition',
          type: 'array',
          of: [block],
        },
      ],
    },
  ],
  preview: {
    select: {
      title: 'seo.title',
      subtitle: 'seo.description',
    },
  },
}
