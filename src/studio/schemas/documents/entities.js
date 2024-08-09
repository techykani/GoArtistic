import { MdLink, MdOutlineGroups2 } from 'react-icons/md'
import { block } from '../objects/common/editor'

export default {
  name: 'entities',
  title: 'Entities',
  type: 'document',
  icon: MdOutlineGroups2,
  fields: [
    {
      name: 'seo',
      title: 'SEO',
      type: 'seo',
    },
    {
      name: 'name',
      type: 'string',
    },
    {
      title: 'Slug',
      name: 'slug',
      type: 'slug',
      options: {
        source: 'name',
      },
    },
    {
      name: 'tagline',
      type: 'string',
    },
    {
      name: 'HomeImg',
      title: 'Home swiper Image',
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
      name: 'entity',
      type: 'string',
    },
    {
      name: 'country',
      type: 'string',
    },
    {
      name: 'enquiry',
      title: 'Enquiry',
      type: 'array',
      of: [
        {
          name: 'enquiryForm',
          title: 'Enquiry Form',
          type: 'object',
          icon: MdLink,
          fields: [
            {
              name: 'enquiryList',
              title: 'Enquiry Services',
              type: 'string',
              options: {
                list: [
                  { title: 'Billing / Insurance', value: 'Billing/Insurance' },
                  { title: 'Corporate Healthcare', value: 'Corporate Healthcare' },
                  { title: 'Courses / Student Services', value: 'Courses/Student Services' },
                  { title: 'Doctor-specific Enquiries', value: 'Doctor-specific Enquiries' },
                  { title: 'Employment / Careers', value: 'Employment/Careers' },
                  { title: 'Feedback', value: 'Feedback' },
                  {
                    title: 'Personal Health Screening Packages',
                    value: 'Personal Health Screening Packages',
                  },
                  { title: 'Investor Relations', value: 'Investor Relations' },
                  { title: 'Medical Records', value: 'Medical Records' },
                  { title: 'Services', value: 'Services' },
                  { title: 'Others', value: 'Others' },
                ], // &lt;-- predefined values
              },
            },
            {
              name: 'formId',
              title: 'Form Id',
              type: 'string',
            },
          ],
          preview: {
            select: {
              title: 'enquiryList',
              subtitle: 'formId',
            },
          },
        },
      ],
    },
    {
      name: 'link',
      title: 'Route',
      type: 'object',
      fields: [
        {
          name: 'href',
          title: 'Link',
          type: 'string',
        },
        {
          name: 'target',
          title: 'Target',
          type: 'string',
          options: {
            list: [
              { title: '_self', value: '_self' },
              { title: '_blank', value: '_blank' },
            ], // &lt;-- predefined values
          },
        },
      ],
    },
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'entity',
    },
  },
}
