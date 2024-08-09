import { GrView, GrArticle } from 'react-icons/gr'
import {
  FaMoneyCheckAlt,
  FaHome,
  FaRegHospital,
  FaThList,
  FaLocationArrow,
  FaBriefcaseMedical,
  FaPlane,
  FaUserClock,
} from 'react-icons/fa'
import { MdHomeRepairService } from 'react-icons/md'
import { CgUserList, CgWebsite } from 'react-icons/cg'
import { RiServiceFill } from 'react-icons/ri'
import { GoPackage, GoPerson } from 'react-icons/go'
import { RiHotelLine } from 'react-icons/ri'
import { GiAirplaneDeparture, GiLoveInjection } from 'react-icons/gi'
import { BsCardChecklist, BsBuilding } from 'react-icons/bs'
import { FcSearch } from 'react-icons/fc'
import { GrServices } from 'react-icons/gr'
import { MdOutlineGroups2 } from 'react-icons/md'
import {
  MdLocalHospital,
  MdMedicalServices,
  MdContentPaste,
  MdOutlineBed,
  MdOutlineMedicalServices,
  MdContactMail,
} from 'react-icons/md'
import { FcAbout } from 'react-icons/fc'
import { SiVirtualbox } from 'react-icons/si'
import { GrLineChart } from 'react-icons/gr'
import { FaProcedures } from 'react-icons/fa'
import { ImOffice } from 'react-icons/im'
import { IoNewspaperOutline } from 'react-icons/io5'
import { MdWorkOutline } from 'react-icons/md'
import { GrCompliance } from 'react-icons/gr'

const documentPageItem = (S, { schemaType, id, title, icon }) => {
  return S.listItem()
    .title(title)
    .icon(icon)
    .id(id)
    .schemaType(schemaType)
    .child(
      S.documentList()
        .title(title)
        .filter(`_type == "${schemaType}" && (!defined(language) || language == $baseLang)`)
        .params({ baseLang: 'en-my' }),
    )
}

function deskToolNew(S, schema) {
  return S.list()
    .title('Content')
    .id('__root__')
    .items([
      documentPageItem(S, {
        title: 'Site',
        icon: CgWebsite,
        id: 'site',
        schemaType: 'site',
      }),
      S.divider(),
      S.listItem()
        .title('Pages')
        .icon(FaHome)
        .child(
          S.list()
            .title('Pages')
            .items([
              documentPageItem(S, {
                title: 'Home',
                id: 'homePage',
                icon: FaHome,
                schemaType: 'homePage',
              }),

              S.divider(),
              documentPageItem(S, {
                title: 'Explore Our Service',
                id: 'exploreOurService',
                icon: MdHomeRepairService,
                schemaType: 'exploreOurService',
              }),

              S.divider(),
              documentPageItem(S, {
                title: 'Discover Our Brands',
                id: 'discoverOurBrands',
                icon: MdHomeRepairService,
                schemaType: 'discoverOurBrands',
              }),
              S.divider(),
              documentPageItem(S, {
                schemaType: 'search',
                id: 'search',
                title: 'Search Page',
                icon: FcSearch,
              }),

              S.divider(),
              documentPageItem(S, {
                title: 'Sitemap',
                schemaType: 'sitemap',
                id: 'sitemap',
              }),
              S.divider(),
              documentPageItem(S, {
                title: 'Medical Hospitality',
                schemaType: 'medicalHospitalityPage',
                id: 'medicalHospitalityPage',
                icon: FaBriefcaseMedical,
              }),
              S.divider(),
              documentPageItem(S, {
                title: 'Community Engagement',
                schemaType: 'communityEngagement',
                id: 'communityEngagement',
                icon: MdOutlineGroups2,
              }),
              S.divider(),
              documentPageItem(S, {
                title: 'About Us',
                schemaType: 'aboutUs',
                id: 'aboutUs',
                icon: MdOutlineGroups2,
              }),
              S.divider(),
              documentPageItem(S, {
                title: 'Sustainability',
                schemaType: 'sustainability',
                id: 'sustainability',
                icon: GrServices,
              }),
              S.divider(),
              documentPageItem(S, {
                title: 'Medical Travel Agents',
                schemaType: 'medicalTravelAgentsPage',
                id: 'medicalTravelAgentsPage',
                icon: FaPlane,
              }),
              S.divider(),

              documentPageItem(S, {
                title: 'Medical Speciality',
                schemaType: 'medicalSpeciality',
                id: 'medicalSpeciality',
                icon: FaPlane,
              }),
              S.divider(),
              documentPageItem(S, {
                title: 'Contact Us',
                schemaType: 'contactUsPage',
                id: 'contactUsPage',
                icon: FaHome,
              }),
              S.divider(),
              documentPageItem(S, {
                title: 'contact Interim Page',
                schemaType: 'contactInterimPage',
                id: 'contactInterimPage',
                icon: FaHome,
              }),
              S.divider(),
              documentPageItem(S, {
                title: 'PG Screening',
                schemaType: 'pgScreening',
                id: 'pgScreening',
                icon: FaHome,
              }),

              S.divider(),
              documentPageItem(S, {
                title: 'Health Screening',
                schemaType: 'healthScreening',
                id: 'healthScreening',
                icon: FaPlane,
              }),

              S.divider(),
              documentPageItem(S, {
                title: 'Doctor Screen',
                schemaType: 'doctorScreen',
                id: 'doctorScreen',
                icon: FaPlane,
              }),
              S.divider(),
              documentPageItem(S, {
                title: 'Siemens Screens',
                schemaType: 'siemensScreen',
                id: 'siemensScreen',
                icon: FaPlane,
              }),

              S.divider(),
              documentPageItem(S, {
                title: 'Clinic Screen',
                schemaType: 'clinicScreen',
                id: 'clinicScreen',
                icon: FaPlane,
              }),
              S.divider(),
              documentPageItem(S, {
                title: 'Media Screen',
                schemaType: 'mediaScreen',
                id: 'mediaScreen',
                icon: FaPlane,
              }),
              S.divider(),
              documentPageItem(S, {
                title: 'Insight Screen',
                schemaType: 'insightScreen',
                id: 'insightScreen',
                icon: FaPlane,
              }),
              S.divider(),
              documentPageItem(S, {
                title: 'Our GP Services',
                schemaType: 'ourGPServicePage',
                id: 'ourGPServicePage',
                icon: FaUserClock,
              }),

              S.divider(),
              documentPageItem(S, {
                title: 'Urgent Care',
                schemaType: 'urgentCarePage',
                id: 'urgentCarePage',
                icon: FaUserClock,
              }),

              S.divider(),
              documentPageItem(S, {
                title: 'HMI One',
                schemaType: 'hmiOne',
                id: 'hmiOne',
                icon: FaUserClock,
              }),
              S.divider(),
              documentPageItem(S, {
                title: 'Vaccination',
                schemaType: 'vaccination',
                id: 'vaccination',
                icon: FaUserClock,
              }),
              documentPageItem(S, {
                title: 'Day Surgery',
                schemaType: 'daySurgery',
                id: 'daySurgery',
                icon: FaUserClock,
              }),
              S.divider(),
              documentPageItem(S, {
                title: 'Tele Medicine',
                schemaType: 'teleMedicine',
                id: 'teleMedicine',
                icon: FaUserClock,
              }),

              S.divider(),
              documentPageItem(S, {
                title: 'Corporate Care',
                schemaType: 'corporateCare',
                id: 'corporateCare',
                icon: FaUserClock,
              }),

              S.divider(),
              documentPageItem(S, {
                title: 'Careers',
                schemaType: 'careers',
                id: 'careers',
                icon: FaPlane,
              }),
              S.divider(),
              documentPageItem(S, {
                title: 'Accreditations and awards',
                schemaType: 'accreditations',
                id: 'accreditations',
                icon: FaPlane,
              }),
              documentPageItem(S, {
                title: 'Our Story',
                schemaType: 'ourStory',
                id: 'ourStory',
                icon: FaPlane,
              }),
              documentPageItem(S, {
                title: 'Healthier SG',
                schemaType: 'healthierSG',
                id: 'healthierSG',
                icon: FaPlane,
              }),
              documentPageItem(S, {
                title: 'Ethics & Compliance',
                schemaType: 'ethicsAndCompliance',
                id: 'ethicsAndCompliance',
                icon: FaPlane,
              }),
              documentPageItem(S, {
                title: 'Milestones',
                schemaType: 'milestones',
                id: 'milestones',
                icon: FaPlane,
              }),
              S.divider(),
              documentPageItem(S, {
                title: 'Our Leadership',
                schemaType: 'leadership',
                id: 'leadership',
                icon: MdHomeRepairService,
              }),
              documentPageItem(S, {
                title: 'HMI Ecosystem',
                schemaType: 'hmiEcosystemPage',
                id: 'hmiEcosystemPage',
                icon: MdHomeRepairService,
              }),
              documentPageItem(S, {
                title: 'HMI Onecare Clinic',
                schemaType: 'hmiOneCareClinicPage',
                id: 'hmiOneCareClinicPage',
                icon: MdHomeRepairService,
              }),
              documentPageItem(S, {
                title: 'HMI Medical Centre',
                schemaType: 'hmiMedicalCentrePage',
                id: 'hmiMedicalCentrePage',
                icon: MdHomeRepairService,
              }),
              documentPageItem(S, {
                title: 'HMI Institute',
                schemaType: 'hmiInstitutePage',
                id: 'hmiInstitutePage',
                icon: MdHomeRepairService,
              }),
              documentPageItem(S, {
                title: 'Medisave',
                schemaType: 'medisavePage',
                id: 'medisavePage',
                icon: MdHomeRepairService,
              }),
              documentPageItem(S, {
                title: 'Costs',
                schemaType: 'costsPage',
                id: 'costsPage',
                icon: MdHomeRepairService,
              }),
              documentPageItem(S, {
                title: 'Radiology Page',
                schemaType: 'radiologyPage',
                id: 'radiologyPage',
                icon: MdHomeRepairService,
              }),
              documentPageItem(S, {
                title: 'Mission And Vision Page',
                schemaType: 'missionAndVision',
                id: 'missionAndVision',
                icon: MdHomeRepairService,
              }),
              documentPageItem(S, {
                title: 'Model Page',
                schemaType: 'model',
                id: 'model',
                icon: MdHomeRepairService,
              }),
              documentPageItem(S, {
                title: 'Accessing Your Scans Instructions',
                schemaType: 'accessingYourScansInstructions',
                id: 'accessingYourScansInstructions',
                icon: MdHomeRepairService,
              }),
              documentPageItem(S, {
                title: 'HMI logofamily 2024',
                schemaType: 'HMILogofamily',
                id: 'HMILogofamily',
                icon: MdHomeRepairService,
              }),
              documentPageItem(S, {
                title: 'News And Highlights',
                schemaType: 'newsAndHighlights',
                id: 'newsAndHighlights',
                icon: MdHomeRepairService,
              }),
              documentPageItem(S, {
                title: 'Page 404',
                schemaType: 'page404',
                id: 'page404',
                icon: MdHomeRepairService,
              }),
              documentPageItem(S, {
                title: 'Site Maintenance',
                schemaType: 'siteMaintenance',
                id: 'siteMaintenance',
                icon: MdHomeRepairService,
              }),
              S.divider(),
              documentPageItem(S, {
                title: 'Corporate Trainings',
                schemaType: 'corporateTrainings',
                id: 'corporateTrainings',
                icon: MdHomeRepairService,
              }),
            ]),
        ),
      S.divider(),
      documentPageItem(S, {
        title: 'Specialty List',
        icon: RiServiceFill,
        id: 'specialtyList',
        schemaType: 'specialtyList',
      }),
      documentPageItem(S, {
        title: 'Sub Specialty',
        icon: RiServiceFill,
        id: 'subSpecialtyList',
        schemaType: 'subSpecialtyList',
      }),
      documentPageItem(S, {
        title: 'Contact Interim',
        icon: RiServiceFill,
        id: 'contactUsInterim',
        schemaType: 'contactUsInterim',
      }),

      documentPageItem(S, {
        title: 'Clinic Locations',
        icon: RiServiceFill,
        id: 'clinicLocations',
        schemaType: 'clinicLocations',
      }),

      documentPageItem(S, {
        title: 'Media',
        icon: RiServiceFill,
        id: 'media',
        schemaType: 'media',
      }),

      documentPageItem(S, {
        title: 'Insights',
        icon: RiServiceFill,
        id: 'insights',
        schemaType: 'insights',
      }),
      documentPageItem(S, {
        title: 'Announcements',
        icon: RiServiceFill,
        id: 'announcement',
        schemaType: 'announcement',
      }),
      documentPageItem(S, {
        title: 'Package',
        icon: GoPackage,
        id: 'package',
        schemaType: 'package',
      }),
      documentPageItem(S, {
        title: 'Siemens Package',
        icon: GoPackage,
        id: 'siemensPackage',
        schemaType: 'siemensPackage',
      }),
      documentPageItem(S, {
        title: 'Doctor',
        icon: GoPackage,
        id: 'doctor',
        schemaType: 'doctor',
      }),
      documentPageItem(S, {
        title: 'Management',
        icon: GoPackage,
        id: 'management',
        schemaType: 'management',
      }),

      documentPageItem(S, {
        title: 'Entity',
        schemaType: 'entities',
        id: 'entities',
        icon: MdOutlineGroups2,
      }),
      S.divider(),
      documentPageItem(S, {
        title: 'Laboratory Test',
        icon: RiServiceFill,
        id: 'laboratory',
        schemaType: 'laboratory',
      }),
      documentPageItem(S, {
        title: 'Consult Test',
        icon: RiServiceFill,
        id: 'consult',
        schemaType: 'consult',
      }),
      documentPageItem(S, {
        title: 'Clinic Test',
        icon: RiServiceFill,
        id: 'clinic',
        schemaType: 'clinic',
      }),
      documentPageItem(S, {
        title: 'Radiology Test',
        icon: RiServiceFill,
        id: 'radiology',
        schemaType: 'radiology',
      }),
      documentPageItem(S, {
        title: 'Other Test',
        icon: RiServiceFill,
        id: 'other',
        schemaType: 'other',
      }),
      S.divider(),
      documentPageItem(S, {
        title: 'Trainer',
        icon: RiServiceFill,
        id: 'trainer',
        schemaType: 'trainer',
      }),
      documentPageItem(S, {
        title: 'Course',
        icon: RiServiceFill,
        id: 'course',
        schemaType: 'course',
      }),
    ])
}

export default deskToolNew
