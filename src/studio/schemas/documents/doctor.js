import { GoPerson } from 'react-icons/go'
import { MdLink, MdHighlight } from 'react-icons/md'
import { block } from '../objects/common/editor'

export default {
  name: 'doctor',
  title: 'Doctor',
  type: 'document',
  icon: GoPerson,
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
    // {
    //   name: 'contactNo',
    //   type: 'string',
    // },
    {
      name: 'designation',
      type: 'string',
    },
    {
      name: 'doctortype',
      title: 'Doctor Type',
      type: 'string',
      options: {
        list: [
          { title: 'Resident', value: 'Resident' },
          { title: 'Sessional', value: 'Sessional' },
          { title: 'GP', value: 'GP' },
          { title: 'Visiting', value: 'Visiting' },
        ],
      },
    },
    {
      name: 'doctorpractice',
      title: 'Doctor Practice',
      type: 'string',
      options: {
        list: [
          { title: 'General practice', value: 'General practice' },
          { title: 'Specialists', value: 'Specialists' },
        ], // &lt;-- predefined values
      },
    },
    {
      name: 'specialist',
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
      name: 'subSpeciality',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'subSpecialtyList' }],
          validation: (Rule) => Rule.required(),
        },
      ],
    },
    {
      name: 'center',
      title: 'Medical Center',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'entities' }],
          validation: (Rule) => Rule.required(),
        },
      ],
    },
    {
      name: 'location',
      title: 'Location',
      type: 'string',
      options: {
        list: [
          { title: 'Singapore', value: 'Singapore' },
          { title: 'Malaysia', value: 'Malaysia' },
        ], // &lt;-- predefined values
      },
    },
    {
      name: 'clinicLocations',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'clinicLocations' }],
          validation: (Rule) => Rule.required(),
        },
      ],
    },
    {
      name: 'photo',
      title: 'Profile Photo',
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
      name: 'is_ip_consultant',
      title: 'In-Person Consultant',
      type: 'boolean',
    },
    {
      name: 'is_screening_consultant',
      title: 'Screening Consultant',
      type: 'boolean',
    },
    {
      name: 'is_Virtual_consultant',
      title: 'Tele Consultant',
      type: 'boolean',
    },
    {
      name: 'is_healthier_SG',
      title: 'Healthier SG',
      type: 'boolean',
    },
    {
      name: 'about',
      type: 'object',
      fields: [
        {
          name: 'title',
          type: 'string',
        },
        {
          name: 'description',
          type: 'array',
          of: [block],
        },
      ],
    },
    {
      name: 'moreabout',
      type: 'object',
      fields: [
        {
          name: 'title',
          title: 'Title',
          type: 'string',
        },
        {
          name: 'options',
          title: 'Tabs',
          type: 'array',
          of: [
            {
              name: 'card',
              title: 'Card',
              type: 'object',
              icon: MdLink,
              fields: [
                {
                  name: 'entryName',
                  title: 'Entry Name',
                  type: 'string',
                },
                {
                  name: 'title',
                  title: 'Title',
                  type: 'string',
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
                  title: 'entryName',
                },
              },
            },
          ],
        },
        {
          name: 'language',
          title: 'Languages',
          type: 'array',
          of: [{ type: 'string' }],
        },
        // {
        //   name: 'clinicShortQualify',
        //   title: 'Description Qualification',
        //   type: 'array',
        //   of: [{ type: 'block' }],
        // },
      ],
    },
    {
      name: 'entity',
      title: 'Entity',
      type: 'string',
    },
    {
      name: 'baseentity',
      title: 'Base Entity',
      type: 'string',
    },
    {
      name: 'isVisible',
      title: 'Is Visible',
      type: 'boolean',
      description: 'Are you want to show this doctors on Doctors listing page?',
      initialValue: true,
    },
    {
      name: 'cta',
      title: 'Appointment/Contact Button',
      type: 'link',
    },
    {
      name: 'ctaProfile',
      title: 'View profile Button',
      type: 'link',
    },
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'specialist.title',
      media: 'photo',
    },
  },
}
