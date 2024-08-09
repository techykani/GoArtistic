// First, we must import the schema creator
import siteConfig from './documents/site'

// Common objects
import seo from './objects/common/seo'
import ctaButton from './objects/common/ctaButton'
import videoContent from './objects/common/videoContent'
import newsletter from './objects/common/newsletter'
import detailsFile from './objects/common/detailsFile'
import primaryListItem from './objects/common/primarylistItem'
import secondaryListItem from './objects/common/secondaryListItem'
import contentBlockWithImageAndCtaList from './objects/common/contentBlockWithImageAndCtaList'
import singleImgQuickLinkBlock from './objects/common/singleImgQuickLinkBlock'
import singleImgQuickLink from './objects/common/singleImgQuickLink'
import landingHero from './objects/common/landingHero'
import banner from './objects/common/banner'

import iconLink from './objects/common/iconLink'
import iconText from './objects/common/iconText'
import menuItem from './objects/common/menuItem'
import secondaryMenuItem from './objects/common/secondaryMenuItem'
import subMenuItem from './objects/common/submenuItem'
import menuWithSubmenu from './objects/common/menuWithSubmenu'
import point from './objects/common/point'
import link from './objects/common/link'
import pageBanner from './objects/common/page-banner'
import pageOverview from './objects/common/page-overview'

//MMC SITE HOMEPAGE
import homePage from './documents/pages/homePage'
import hero from './objects/homePage/hero'
import popularSearch from './objects/homePage/popularSearch'
import about from './objects/homePage/about'
import network from './objects/homePage/network'
import healthcare from './objects/homePage/healthcare'
import ourSpeciality from './objects/homePage/ourSpeciality'
import ourEntity from './objects/homePage/ourEntity'
import sharingMore from './objects/homePage/sharingMore'
import community from './objects/homePage/community'
import masterCarousel from './objects/homePage/heroCarousel/masterHeadCarousel'

import sitemap from './documents/sitemap'

//MMC SITE EXPLORE OUR SERVICE
import exploreOurService from './documents/pages/exploreOurService'
import gpServices from './objects/exploreOurService/gpServices'
import checkout from './objects/exploreOurService/checkOut'
import ourSpecialists from './objects/exploreOurService/ourSpecialists'
import clinicInfo from './objects/common/clinicInfo'

//MMC SITE DISCOVER OUR SERVICE
import discoverOurBrands from './documents/pages/discoverOurBrands'
import discoverTabs from './objects/discoverOurBrands/discoverTabs'
import option from './objects/discoverOurBrands/option'
import brands from './objects/discoverOurBrands/brands'

//HMI SPECIALITY SCHEMA
import specailtyList from './documents/specialtyList'
import subSpecailtyList from './documents/subSpecialtyList'

//MMC SEARCH PAGE
import search from './documents/pages/search'
import searchContent from './objects/search/searchContent'

import detailsCommonQuestions from './objects/common/listingAndDetails/detailsCommonQuestions'

import detailsTitleCardsSubsections from './objects/common/listingAndDetails/detailsTitleCardsSubsections'
import detailsTitleDescription from './objects/common/listingAndDetails/detailsTitleDescription'
import detailsTitleDescriptionFilters from './objects/common/listingAndDetails/detailsTitleDescriptionFilters'
import detailsTitleDescriptionCards from './objects/common/listingAndDetails/detailsTitleDescriptionCards'
import detailsTitleDescriptionSubsections from './objects/common/listingAndDetails/detailsTitleDescriptionSubsections'
import detailsTitleDescriptionButton from './objects/common/listingAndDetails/detailsTitleDescriptionButton'
import detailsCard from './objects/common/listingAndDetails/detailsCard'
import detailsCTA from './objects/common/listingAndDetails/detailsCTA'
import detailsGetInTouch from './objects/common/listingAndDetails/detailsGetInTouch'
import detailsContactInfo from './objects/common/listingAndDetails/detailsContactInfo'
import detailsTitleDescriptionOthers from './objects/common/listingAndDetails/detailsTitleDescriptionOthers'
import sortFilter from './objects/common/listingAndDetails/sortFilter'
import carouselSection from './objects/common/listingAndDetails/carouselSection'
import formSection from './objects/common/listingAndDetails/detailsForm'
import detailsIconsWithText from './objects/common/listingAndDetails/detailsIconsWithText'

// Contact us page
import contactUsPage from './documents/pages/contactUs'
import contactUsBanner from './objects/contactUs/banner'
import contactUsEnquiry from './objects/contactUs/enquiry'
import contactUsAddress from './objects/contactUs/address'
import contactUsAddressLink from './objects/contactUs/addressLink'
import contactUsEnquiryForm from './objects/contactUs/enquiryForm'
// Contact us page
import contactInterimPage from './documents/pages/contactInterimPage'

// Medical hospitality page
import medicalHospitalityPage from './documents/pages/medicalHospitality'
import medicalHospitalityAbout from './objects/medicalHospitality/about'
import medicalHospitalityAssistance from './objects/medicalHospitality/assistance'
import medicalHospitalityBanner from './objects/medicalHospitality/banner'
import medicalHospitalityDoctorInfo from './objects/medicalHospitality/doctorInfo'
import medicalHospitalityDoctorStories from './objects/medicalHospitality/doctorStories'
import medicalHospitalityEnquiry from './objects/medicalHospitality/enquiry'
import medicalHospitalityLocationInfo from './objects/medicalHospitality/locationInfo'
import medicalHospitalityLocations from './objects/medicalHospitality/locations'
import medicalHospitalitySpecialists from './objects/medicalHospitality/ourSpecialists'
import medicalTabs from './objects/medicalHospitality/medicalTabs/medicalTabs'
import interTomal from './objects/medicalHospitality/medicalTabs/interTomal'
import interTosing from './objects/medicalHospitality/medicalTabs/interTosing'
import singTomal from './objects/medicalHospitality/medicalTabs/singTomal'
import discover from './objects/medicalHospitality/medicalTabs/discover'
// Medical hospitality page

// Medical Travel Agents Page
import medicalTravelAgentsPage from './documents/pages/medicalTravelAgents'
import medicalTravelAgentsBanner from './objects/medicalTravelAgents/banner'
import medicalTravelAgentsTravelAgent from './objects/medicalTravelAgents/travelAgent'
import medicalTravelAgentsTravelTab from './objects/medicalTravelAgents/tab'
import medicalTravelAgentsLocation from './objects/medicalTravelAgents/location'
// Medical Travel Agents Page

//Community Engagement Page
import communityEngagementPage from './documents/pages/communityEngagement'
import eventHighlights from './objects/communityEngagement/eventHiglights'
//Product Overview Page
import practice from './documents/pages/practice'
import practiceHead from './objects/practice/practiceHead'
import proceduresTabs from './objects/practice/proceduresTabs'
import programmes from './objects/practice/programmes'
import locations from './objects/practice/locations'
import aboutPractice from './objects/practice/about'

//sustainability  Page
import sustainability from './documents/pages/sustainability'
import inspirationTabs from './objects/sustainability/inspirationTabs'
import inspirationOption from './objects/sustainability/inspirationOption'

//Article Page
import articleHero from './objects/article/bulletPoints'
import titleDescription from './objects/article/titleDescription'
import videoTitleDescription from './objects/article/videoTitleDescription'
import podcast from './objects/article/podcast'
import titleTable from './objects/common/titleTable'
import source from './objects/article/source'
import contact from './objects/article/articleContact'
import intrestedIn from './objects/article/intrestedIn'
import cards from './objects/article/cards'

//CONTACT INTERIM PAGE
import contactInterim from './documents/contactInterim'

// About Us Page
import aboutUs from './documents/pages/aboutUs'

//Media
import media from './documents/media'
import mediaScreen from './documents/pages/mediaScreen'

import announcement from './documents/announcement'

// vaccination
import vaccination from './documents/pages/vaccination'
import vaccinationOption from './objects/vaccination/vaccinationOption'
import vaccinationTabs from './objects/vaccination/vaccinationTabs'

// medical speciality overview
import medicalSpeciality from './documents/pages/medicalSpeciality'
import SpecialitySearch from './objects/medicalSpecialty/specialtyList'

//package
import screeningpackage from './documents/package'
import packageLocation from './objects/common/packageLocation'
import packageConsult from './objects/common/packageConsult'
import options from './objects/common/stringarrayoptions'
import packagedoctor from './objects/common/packagedoctors'
import laboratory from './documents/laboratory'
import consult from './documents/consult'
import clinicTest from './documents/clinicTest'
import radiology from './documents/radiology'
import others from './documents/other'
import doctor from './documents/doctor'
import doctorScreen from './documents/pages/doctorScreen'
import doctoreFilters from './objects/common/listingAndDetails/doctorFilters'
import siemensScreen from './documents/pages/siemensScreen'
// Our GP Services page
import ourGPServicePage from './documents/pages/ourGPServices'
import GPServiceCheckout from './objects/ourGPServices/checkOut'
import GPServiceEmployeeWellness from './objects/ourGPServices/employeeWellness'
import GPServiceFAQ from './objects/ourGPServices/faq'
import GPServiceHealthCare from './objects/ourGPServices/healthcarePartner'
import accessible from './objects/ourGPServices/accessibile'

// Siemens packages
import siemensPackage from './documents/siemensPackage'

// Urgent care
import UrgentcarePage from './documents/pages/uregentCare'
import UrgentCareCentre from './objects/urgentCare/centre'
import UrgentCarePracticeDoctor from './objects/urgentCare/practiceDoctor'
import specialtyList from './documents/specialtyList'
// Urgent care

// Our Health Screening page
import healthScreening from './documents/pages/healthScreening'

// Our CAREERS page
import careers from './documents/pages/careers'
import careerCommunity from './objects/careers/careerCommunity'

//CLINIC LOCATIONS
import clinicLocations from './documents/clinicLocations'
import clinicScreen from './documents/pages/clinicScreen'
import clinicFilters from './objects/common/listingAndDetails/clinicScreenFilters'

// Tele Medicine
import teleMedicine from './documents/pages/telemedicine'
import virtualWellness from './objects/teleMedicine/virtualWellness'
import benefits from './objects/teleMedicine/benefits'
import telemedicineFAQ from './objects/teleMedicine/faq'
import teleEnquiry from './objects/teleMedicine/enquiry'

//Corporate Care
import corporateCare from './documents/pages/corporateCare'
import enterpriseSolutions from './objects/corporate-care/network'
//accreditations
import accreditations from './documents/pages/accreditations'
import accreditationsTabs from './objects/accreditations/accreditationsTabs'
import accreditationsOptions from './objects/accreditations/accerditationsOptions'

//Insight Screen
import insights from './documents/insights'
import insightScreen from './documents/pages/insightScreen'

//Entities
import entities from './documents/entities'

// our Story
import ourStory from './documents/pages/ourStory'
import message from './objects/ourStory/message'
import milestone from './objects/ourStory/milestone'
import decadeStory from './objects/ourStory/decadeStory'
import events from './objects/ourStory/events'

//OUR LEADERSHIP
import leadership from './documents/pages/leadership'
import leadershipTab from './objects/leadership/leadershipTab'
import leadershipOption from './objects/leadership/option'
import seniorTab from './objects/leadership/seniorTab'
import seniorOption from './objects/leadership/seniorOption'

// HMI Ecosystem
import hmiEcosystemPage from './documents/pages/hmiEcosystem'
import pillars from './objects/hmiEcosystem/pillars'
import pillarDetails from './objects/hmiEcosystem/pillarDetails'

// HMI Onecare Clinic
import hmiOneCareClinicPage from './documents/pages/hmiOnecareClinic'
import hmiOnecareClinicInfo from './objects/hmiOnecareClinic/clinicInfo'

// HMI Medical Centre
import hmiMedicalCentrePage from './documents/pages/hmiMedicalCentre'
import hmiMedicalCentreClinicList from './objects/hmi-medical-centre/clinicList'

//HMI INSTITUTE
import hmiInstitutePage from './documents/pages/hmiInstitute'

//HMI MEDISAVE
import medisave from './documents/pages/medisave'
import medisaveGuide from './objects/medisave/medisaveGuide'
import medisaveGuideTabs from './objects/medisave/medisaveGuideTabs'

//HMI COSTS
import costs from './documents/pages/costs'
import insurancePartners from './objects/costs/insurancePartners'
import treatmentCostEstimation from './objects/costs/treatmentCostEstimation'

// page 404
import page404 from './documents/pages/page404'

// site maintenance
import siteMaintenance from './documents/pages/pageMaintenance'

//PG SCREENING
import pgScreening from './documents/pages/pgScreening'

// Day Surgery
import daySurgery from './documents/pages/daySurgery'
import roomsAndRates from './objects/daySurgery/roomsAndRates'
import endoscopy from './objects/daySurgery/endoscopy'

// HMI INSTITUTE
import trainer from './documents/trainer'
import course from './documents/course'
import corporateTrainings from './documents/pages/corporateTrainings'
import enterpriceSolutions from './objects/corporateTrainings/enterpriceOfferings'

// MILESTONES
import milestones from './documents/pages/milestones'
import quote from './objects/milestones/quote'
import timeline from './objects/milestones/timeline'

// RADIOLOGY
import radiologyPage from './documents/pages/radiologyPage'
import ourPartner from './objects/radiology/ourPartner'
import radiologyFAQ from './objects/radiology/faq'
import ctComparison from './objects/radiology/ctcomparison'

// Healthier SG Pagebanner
import healthierSG from './documents/pages/healthierSG'
import healthierSGPagebanner from './objects/healthierSG/pageBanner'
import healthierSGAbout from './objects/healthierSG/healthierSG'
import healthierSGOverview from './objects/healthierSG/pageOverview'
import healthierSGProgram from './objects/healthierSG/healthierSGProgram'
import healthierSGJourney from './objects/healthierSG/journey'
import enrol from './objects/healthierSG/enrol'

import aboutUsOverview from './objects/aboutUs/overview'

import aboutUsLeadership from './objects/aboutUs/leadership'
//Mission and Vision
import missionPage from './documents/pages/missionAndVision'
import core from './objects/missionAndVision/core'
import might from './objects/missionAndVision/might'

//MODEL
import modelPage from './documents/pages/model'

import management from './documents/leaders'
import ethicsAndCompliance from './documents/pages/ethics&compliance'

// governance
import leadershipMembers from './objects/leadership/members'

import studentReviews from './objects/hmiInstitute/review'
import guidingPrinciple from './objects/sustainability/guidingPrinciple'

//AccessingYourScansInstructions
import accessingYourScansInstructions from './documents/pages/accessingYourScansInstructions'

// HMI One
import hmiOne from './documents/pages/hmiOne'
import hmiOnePageBanner from './objects/hmiOne/pageBanner'
import hmiOneEnquiry from './objects/hmiOne/enquiry'
import membershipBenefits from './objects/hmiOne/benefits'
//newsAndHighlights
import newsAndHighlights from './documents/pages/newsAndHighlights'
import newsNetwork from './objects/NewsHiglights/networkNews'
import pointNews from './objects/common/point-news'
import titleDescriptionLogo from './objects/NewsHiglights/titleDescriptionLogo'
import healthierNations from './objects/NewsHiglights/healthierNations'
import newsProgrammes from './objects/NewsHiglights/programmes'
import newsProgrammesArray from './objects/common/newsProgrammesArr'
import newsHealthier from './objects/NewsHiglights/healthierAsCommunity'

//AccessingYourScansInstructions
import HMILogofamily from './documents/pages/hmiLogofamily'

// Then we give our schema to the builder and provide the result to Sanity
const schemaTypes = [
  //COMMON
  siteConfig,
  seo,
  contentBlockWithImageAndCtaList,
  singleImgQuickLinkBlock,
  singleImgQuickLink,
  ctaButton,
  videoContent,
  newsletter,
  detailsFile,
  primaryListItem,
  secondaryListItem,
  landingHero,
  banner,
  pageBanner,
  pageOverview,

  // SITE HOME PAGE
  homePage,
  hero,
  popularSearch,
  about,
  network,
  healthcare,
  ourSpeciality,
  ourEntity,
  sharingMore,
  community,
  masterCarousel,

  // SITE CONTACT US PAGE
  contactUsPage,
  contactUsBanner,
  contactUsEnquiry,
  contactUsAddress,
  contactUsAddressLink,
  contactUsEnquiryForm,
  contactInterimPage,

  //SITE EXPLORE OUR SERVICE
  exploreOurService,
  gpServices,
  checkout,
  ourSpecialists,
  clinicInfo,

  //SITE DISCOVER OUR SERVICE
  discoverOurBrands,
  discoverTabs,
  option,
  brands,

  secondaryMenuItem,
  subMenuItem,
  point,
  menuItem,
  menuWithSubmenu,
  iconLink,
  iconText,
  link,

  detailsCommonQuestions,
  detailsTitleCardsSubsections,
  detailsTitleDescription,
  detailsTitleDescriptionFilters,
  detailsTitleDescriptionCards,
  detailsTitleDescriptionSubsections,
  detailsTitleDescriptionButton,
  detailsCard,
  detailsCTA,
  detailsGetInTouch,
  detailsContactInfo,
  detailsTitleDescriptionOthers,
  sortFilter,
  carouselSection,
  formSection,
  detailsIconsWithText,

  sitemap,

  //HMI SPECIALITY SCHEMA
  specialtyList,
  subSpecailtyList,
  search,
  searchContent,

  // SITE MEDICAL HOSPITALITY PAGE
  medicalHospitalityPage,
  medicalHospitalityAbout,
  medicalHospitalityAssistance,
  medicalHospitalityBanner,
  medicalHospitalityDoctorInfo,
  medicalHospitalityDoctorStories,
  medicalHospitalityEnquiry,
  medicalHospitalityLocationInfo,
  medicalHospitalityLocations,
  medicalHospitalitySpecialists,
  medicalTabs,
  interTomal,
  interTosing,
  singTomal,
  discover,
  // SITE COMMUNITY ENGAGEMENT PAGE
  communityEngagementPage,
  eventHighlights,

  screeningpackage,
  siemensPackage,
  packageLocation,
  packageConsult,
  options,
  packagedoctor,
  doctor,
  doctorScreen,
  doctoreFilters,
  siemensScreen,
  clinicLocations,
  laboratory,
  consult,
  clinicTest,
  radiology,
  others,
  // SITE PRACTICE PAGE
  practice,
  practiceHead,
  proceduresTabs,
  programmes,
  locations,
  aboutPractice,

  // MEDICAL TRAVEL AGENTS PAGE
  medicalTravelAgentsPage,
  medicalTravelAgentsBanner,
  medicalTravelAgentsTravelAgent,
  medicalTravelAgentsTravelTab,
  medicalTravelAgentsLocation,

  //ARTICLE PAGE
  articleHero,
  titleDescription,
  videoTitleDescription,
  titleTable,
  podcast,
  cards,
  source,
  contact,
  intrestedIn,

  //Media
  media,
  mediaScreen,

  //Announcement
  announcement,

  // vaccination
  vaccination,
  vaccinationOption,
  vaccinationTabs,

  // medical speciality overview
  medicalSpeciality,
  SpecialitySearch,

  // OUR GP SERVICES
  ourGPServicePage,
  GPServiceCheckout,
  GPServiceEmployeeWellness,
  GPServiceFAQ,
  GPServiceHealthCare,
  accessible,
  // OUR GP SERVICES
  UrgentcarePage,
  UrgentCareCentre,
  UrgentCarePracticeDoctor,
  //Contact INTERIM PAGE
  contactInterim,

  // ABOUT US PAGE
  aboutUs,

  //sustainability PAGE
  sustainability,
  inspirationTabs,
  inspirationOption,

  //HEALTH SCREENING
  healthScreening,

  //CAREERS PAGE
  careers,
  careerCommunity,
  // Tele Medicine
  teleMedicine,
  virtualWellness,
  benefits,
  telemedicineFAQ,
  teleEnquiry,

  //Clinics Screen
  clinicScreen,
  clinicFilters,

  // corporate Care
  corporateCare,
  enterpriseSolutions,

  //Accreditations and Awards
  accreditations,
  accreditationsTabs,
  accreditationsOptions,

  //Insights
  insights,
  insightScreen,

  //Entities
  entities,

  // our story
  ourStory,
  message,
  milestone,
  decadeStory,
  events,
  //OUR LEADERSHIP
  leadership,
  leadershipTab,
  leadershipOption,
  seniorTab,
  seniorOption,

  // HMI Ecosystem
  hmiEcosystemPage,
  pillars,
  pillarDetails,

  // HMI Onecare clinic
  hmiOneCareClinicPage,
  hmiOnecareClinicInfo,
  hmiMedicalCentrePage,
  hmiMedicalCentreClinicList,
  hmiInstitutePage,
  medisave,
  medisaveGuide,
  medisaveGuideTabs,

  // COSTS
  costs,
  insurancePartners,
  treatmentCostEstimation,

  //PG SCREENING
  pgScreening,

  // page 404
  page404,

  // site Maintenance
  siteMaintenance,

  // HMI INSTITUTE
  trainer,
  course,
  corporateTrainings,
  enterpriceSolutions,

  // DAY SURGERY
  roomsAndRates,
  daySurgery,
  endoscopy,

  //milestone
  milestones,
  quote,
  timeline,

  // RADIOLOGY
  radiologyPage,
  ourPartner,
  radiologyFAQ,
  ctComparison,

  // Healthier SG
  healthierSG,
  healthierSGPagebanner,
  healthierSGAbout,
  healthierSGOverview,
  healthierSGProgram,
  healthierSGJourney,
  enrol,

  aboutUsOverview,
  aboutUsLeadership,
  //Mission
  missionPage,
  core,
  might,

  //MODEL
  modelPage,

  management,
  ethicsAndCompliance,

  leadershipMembers,
  studentReviews,
  guidingPrinciple,

  //accessingYourScansInstructions
  accessingYourScansInstructions,

  // HMI One
  hmiOne,
  hmiOnePageBanner,
  hmiOneEnquiry,
  membershipBenefits,
  //NEWS AND HIGHLIGHTS
  newsAndHighlights,
  newsNetwork,
  pointNews,
  titleDescriptionLogo,
  healthierNations,
  newsProgrammes,
  newsProgrammesArray,
  newsHealthier,

  //HMILogofamily
  HMILogofamily
]
export { schemaTypes }
