import { MdHomeRepairService } from 'react-icons/md'

export default {
  name: 'ourGPServicePage',
  title: 'Our GP Service',
  type: 'document',
  icon: MdHomeRepairService,
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
        {
          name: 'ourGPServicesPage.landingHero',
          title: 'Hero',
          type: 'common.pageBanner',
        },
        {
          name: 'ourGPServicesPage.clinicInfo',
          title: 'One care medical',
          type: 'homeOnecareClinic.ClinicInfo',
        },
        // {
        //   name: 'ourGPServicesPage.accessibile',
        //   title: 'Accessible Islandwide ',
        //   type: 'ourGPServicesPage.accessibile',
        // },
        {
          name: 'ourGPServicesPage.healthcarePartner',
          title: 'Health Care Partner',
          type: 'ourGPServicesPage.healthcarePartner',
        },
        {
          name: 'ourGPServicesPage.employeeWellness',
          title: 'Employee Wellness',
          type: 'ourGPServicesPage.employeeWellness',
        },
        {
          name: 'ourGPServicesPage.checkOut',
          title: 'Clinic Info',
          type: 'exploreOurService.checkOut',
        },
        {
          name: 'ourGPServicesPage.titleDescriptionFilters',
          title: 'Title Description',
          type: 'details.common.CTA',
        },
        {
          name: 'ourGPServicesPage.about',
          title: 'Healthier SG',
          type: 'healthierSG.about',
        },
        {
          name: 'ourGPServicesPage.insurancePartners',
          title: 'Programmess & Schemes',
          type: 'insurancePartners',
        },
        {
          name: 'ourGPServicesPage.faq',
          title: 'FAQ',
          type: 'ourGPServicesPage.faq',
        },
        {
          name: 'ourGPServicesPage.enquiry',
          title: 'Enquiry',
          type: 'medicalHospitalityPage.enquiry',
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
