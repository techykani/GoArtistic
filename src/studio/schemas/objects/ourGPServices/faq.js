export default {
  name: 'ourGPServicesPage.faq',
  title: 'FAQ',
  type: 'document',
  fields: [
    {
      name: 'tagline',
      title: 'Tagline',
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
    {
      name: 'cta',
      title: 'Link',
      type: 'link',
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
  ],
}
