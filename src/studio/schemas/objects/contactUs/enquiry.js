// import { BiSolidPhoneCall } from "react-icons/bi";

export default {
  name: 'contactUsPage.enquiry',
  title: 'Make an enquiry',
  type: 'object',
  // icon: BiSolidPhoneCall,
  fields: [
    {
      name: 'title',
      title: 'Enquiry Title',
      type: 'string',
    },
    {
      name: 'description',
      title: 'Enquiry Description',
      type: 'array',
      of: [{ type: 'block' }],
    },

    {
      name: 'enquiries',
      title: 'Enquiry List',
      type: 'array',
      of: [{ type: 'string' }],
    },
    {
      name: 'formTitle',
      title: 'Enquiry Form Title',
      type: 'string',
    },
    {
      name: 'formDescription',
      title: 'Enquiry Form Description',
      type: 'array',
      of: [{ type: 'block' }],
    },
    {
      name: 'formId',
      title: 'Enquiry Form Id (Hubspot)',
      type: 'string',
    },
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'tagline',
      media: 'primaryImg',
    },
  },
}
