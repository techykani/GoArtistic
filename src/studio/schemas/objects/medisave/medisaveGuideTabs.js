import { FaClinicMedical } from 'react-icons/fa'

export default {
  name: 'medisave.medisaveGuideTabs',
  title: 'MediSave Guide Tab',
  type: 'object',
  icon: FaClinicMedical,
  fields: [
    {
      name: 'tabs',
      title: 'Tabs',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'tabName',
              title: 'Tab Name',
              type: 'string',
            },

            {
              name: 'faqs',
              title: 'FAQs',
              type: 'array',
              of: [
                {
                  type: 'object',
                  fields: [
                    {
                      name: 'faqQuestion',
                      title: 'FAQ Question',
                      type: 'string',
                    },
                    {
                      name: 'faqQuestionCTA',
                      title: 'FAQ Question CTA',
                      type: 'string',
                    },
                    {
                      name: 'faqAnswer',
                      title: 'FAQ Answer',
                      type: 'array',
                      of: [{ type: 'block' }],
                    },
                  ],
                },
              ],
            },

            {
              name: 'faqDescription',
              title: 'FAQ Description',
              type: 'array',
              of: [{ type: 'block' }],
            },
          ],
        },
      ],
    },
  ],

  preview: {
    select: {
      title: 'title',
      subtitle: 'tagline',
      media: 'image',
    },
  },
}
