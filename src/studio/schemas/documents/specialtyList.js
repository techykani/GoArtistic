import { MdOutlineMedicalServices } from 'react-icons/md'

export default {
  name: 'specialtyList',
  title: 'Specialty List',
  type: 'document',
  icon: MdOutlineMedicalServices,
  fields: [
    {
      name: 'seo',
      title: 'SEO',
      type: 'seo',
    },
    {
      name: 'isVisible',
      title: 'Is Visible',
      type: 'boolean',
      description: 'Are you want to show this specialties on Medical specialties listing page?',
      initialValue: true,
    },
    {
      name: 'isVisibleFilter',
      title: 'Is Visible in Filters',
      type: 'boolean',
      description: 'Are you want to show this specialties on Filters?',
      initialValue: true,
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
      name: 'tagline',
      title: 'Tagline',
      type: 'text',
      validation: (Rule) => Rule.required(),
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
      name: 'HomeSecondaryImg',
      title: 'Home swiper Secondary Icon',
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
      name: 'sections',
      title: 'Practice Sections',
      type: 'array',
      of: [
        {
          name: 'practice.landingHero',
          title: 'Hero',
          type: 'common.landingHero',
        },
        {
          name: 'practice.practiceTabs',
          title: 'Practice Tabs',
          type: 'discoverOurBrands.discoverTabs',
        },
        { type: 'practice.practiceHead' },
        { type: 'practice.proceduresTabs' },
        { type: 'practice.locations' },
        { type: 'practice.programmes' },
        { type: 'practice.about' },
        {
          name: 'practice.practiceEnquiry',
          title: 'Practice Enquiry',
          type: 'medicalHospitalityPage.enquiry',
        },
      ],
    },
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'tagline',
    },
  },
}
