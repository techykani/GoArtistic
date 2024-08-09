import { SanityImage } from 'sanity-react-extra'
import { ClinicalService } from './clinicalServiceListingTypes'
export interface CentresOfExcellence {
  _id: string
  description: string
  slug: Slug
  smImage?: SanityImage
  image?: SanityImage
  title: string
  getInTouch: GetInTouch
  scrollspySections: ScrollspySections
}

export interface Team {
  teamMembers: Doctor[]
  title?: string
  _key: string
}

export interface TeamMember {
  teamMembers: Doctor[]
}

export interface Card {
  _key: string
  title: string
  description?: string
  image?: SanityImage
  link?: Link
  imageRight: boolean
}
export interface Subsection {
  _key: string
  title: string
  description?: PortableText
  cards?: Card[]
}

interface DetailsOthers {
  _key: string
  _type: string
  description?: PortableText
  title: string
  image?: SanityImage
  link?: Link
  imageRight: boolean
}

export interface DetialsFile {
  type: string
  icon: SanityImage
  filename: string
}

interface UploadFile {
  title: string
  file: any
}

interface IconWithText {
  icon: SanityImage
  text: PortableText[]
  _key: string
}

interface IconsWithText {
  title: string
  iconsWithText: IconWithText[]
}

export interface ScrollspySection {
  _key: string
  _type: string
  description?: string
  title: string
  sectionName?: string
  subtitle?: string
  image?: SanityImage
  images?: SanityImage[]
  cta: CTAButton
  subsections?: Subsection[]
  cards?: Card[]
  teams?: Team[]
  contactInfos: ContactInfo[]
  opningHour: OpeningHour
  commonQuestions: DetailsCommonQuestions[]
  others: DetailsOthers[]
  tableOfContent: Table
  mobileTableOfContent: Table
  subDescription: PortableText
  fileList?: Array<SanityImage | DetialsFile>
  link?: Link
  list: ClinicalService[]
  searchTitle: string
  searchPlaceholder: string
  searchDescription: string
  searchDomain: string
  tooltips: Array<string>
  pageTitle: string
  extraInfo: PortableText
  hubspotFormIdSelector: string
  hubspotFormRegion: string
  hubspotFormPortalId: string
  hubspotFormId: string
  table: Table
  firstColumnStyle: boolean
  uploadFile: UploadFile
  iconText: IconsWithText
  clinicalServices: ClinicalService[]
}

export interface ScrollspySections {
  title?: string
  sections: ScrollspySection[]
}
