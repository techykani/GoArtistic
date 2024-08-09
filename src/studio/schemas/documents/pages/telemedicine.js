import { FaHome } from 'react-icons/fa'

export default {
  name: 'teleMedicine',
  title: 'Tele Medicine',
  type: 'document',
  icon: FaHome,
  fields: [
    {
      name: 'language',
      type: 'string',
      readOnly: true,
      hidden: true,
    },
    {
      name: 'seo',
      title: 'SEO',
      type: 'seo',
    },
    {
      name: 'sections',
      title: 'Sections',
      type: 'array',
      of: [
        { type: 'common.pageBanner' },
        { type: 'common.pageOverview' },
        { type: 'teleMedicine.virtualWellness' },
        {
          name: 'teleMedicine.ourDoctors',
          title: 'Our Doctors',
          type: 'teleMedicine.virtualWellness',
        },
        { type: 'teleMedicine.benefits' },
        { type: 'teleMedicine.faq' },
        { type: 'teleMedicine.enquiry' },
        // { type: 'contactUsPage.enquiry' },
        // { type: 'contactUsPage.address' },
        // { type: 'contactUsPage.enquiryForm' },
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
