import { block } from '../objects/common/editor'
export default {
  name: 'clinicLocations',
  title: 'Clinic Locations',
  type: 'document',
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
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {
      name: 'isVisible',
      title: 'Is Visible',
      type: 'boolean',
      description: 'Are you want to show this specialties on Clinic Locations listing page?',
      initialValue: true,
    },
    {
      name: 'route',
      title: 'Find the clinic',
      type: 'object',
      fields: [
        {
          name: 'title',
          title: 'Title',
          type: 'string',
        },
        {
          name: 'addressRoute',
          title: 'Address Route',
          type: 'text',
        },
      ],
    },
    {
      name: 'locationImage',
      title: 'Location Image',
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
      name: 'direction',
      title: 'Direction',
      type: 'string',
      options: {
        list: [
          { title: 'Central', value: 'Central' },
          { title: 'East', value: 'East' },
          { title: 'West', value: 'West' },
          { title: 'North', value: 'North' },
          { title: 'South', value: 'South' },
        ], // &lt;-- predefined values
      },
    },
    {
      name: 'services',
      type: 'array',
      of: [
        {
          type: 'string',
          options: {
            list: [
              { title: 'GP clinics', value: 'GP clinics' },
              { title: 'Specialist centres', value: 'Specialist centres' },
              // { title: 'Urgent care', value: 'Urgent care' },
            ],
          },
        },
      ],
    },
    {
      name: 'center',
      title: 'Our Brands',
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
      name: 'address',
      title: 'Address',
      type: 'text',
    },
    {
      name: 'mapLink',
      title: 'Link to Google Map',
      type: 'text',
    },
    {
      name: 'latitude',
      title: 'Latitude',
      type: 'number',
    },
    {
      name: 'longitude',
      title: 'Longitude',
      type: 'number',
    },
    {
      name: 'mobileNo',
      title: 'Mobile Number',
      type: 'string',
    },
    {
      name: 'whatsappNo',
      title: 'Whatsapp Number',
      type: 'string',
    },
    {
      name: 'email',
      title: 'Email',
      type: 'string',
    },
    {
      name: 'faxNo',
      type: 'string',
    },
    {
      name: 'description',
      type: 'array',
      of: [block],
    },
    // {
    //   name: 'schedule',
    //   title: 'Schedule',
    //   type: 'object',
    //   fields: [
    //     {
    //       name: 'days',
    //       title: 'Days',
    //       type: 'string',
    //     },
    //     {
    //       name: 'startTime',
    //       title: 'Start Time',
    //       type: 'string',
    //     },
    //     {
    //       name: 'endTime',
    //       title: 'End Time',
    //       type: 'string',
    //     },
    //   ],
    // },
    {
      name: 'alertDescription',
      type: 'array',
      of: [block],
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
      name: 'popularsearch',
      title: 'Popular Searches',
      type: 'array',
      of: [{ type: 'link' }],
    },
    {
      name: 'doctorsOnDuty',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'doctor' }],
          validation: (Rule) => Rule.required(),
        },
      ],
    },
    {
      name: 'announcement',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'announcement' }],
          validation: (Rule) => Rule.required(),
        },
      ],
    },
    // {
    //   name: 'link1',
    //   title: 'View Button',
    //   type: 'link',
    // },
    // {
    //   name: 'link2',
    //   title: 'Call Us Button',
    //   type: 'link',
    // },
    {
      name: 'links',
      title: 'Contact info details',
      type: 'object',
      fields: [
        {
          name: 'iconLinks',
          title: 'Contact Links',
          type: 'array',
          of: [{ type: 'iconLink' }],
        },
      ],
    },
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'name',
      media: 'locationImage',
    },
  },
}
