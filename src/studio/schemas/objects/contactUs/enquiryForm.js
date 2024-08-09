// import { BiSolidPhoneCall } from 'react-icons/bi'

export default {
  name: 'contactUsPage.enquiryForm',
  title: 'Enquiry Form',
  type: 'object',
  // icon: BiSolidPhoneCall,
  fields: [
    {
      name: 'formTitle',
      title: 'Enquiry Form Title',
      type: 'string',
    },
    {
      name: 'formDescription',
      title: 'Enquiry Description',
      type: 'array',
      of: [{ type: 'block' }],
    },
    {
      name: 'notification',
      title: 'Enquiry Form notify',
      type: 'string',
    },
    {
      name: 'formId',
      title: 'Expat No Id',
      type: 'string',
    },
    {
      name: 'formIdYes',
      title: 'Expat Yes Id',
      type: 'string',
    },
    {
      name: 'formIdNo',
      title: 'PG Staff No Id',
      type: 'string',
    },
  ],
  preview: {
    select: {
      title: 'formTitle',
      subtitle: 'formDescription',
    },
  },
}
