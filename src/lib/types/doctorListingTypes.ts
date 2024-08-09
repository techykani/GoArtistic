import { SanityImage } from 'sanity-react-extra'

export interface IDoctorsList {
  _id: string
  consultation_hours: ConsultationHour[]
  field_of_expertise: string
  image: SanityImage
  is_vertual_consultant?: boolean
  name: string
  slug: Slug
  doc_count: number
}

export interface SearchDoctorsTypes {
  consultationFilterVariables: string[]
  sortParameters: string[]
  moreFilterButtonTitle: string
  moreFilterGenderFilterTitle: string
  moreFilterGenderParameters: string[]
  moreFilterLanguageFilterTitle: string
  moreFilterLanguageParameters: string[]
}

interface Detail {
  _key: string
  title: string
  description: PortableText
}
interface About {
  description: string
  title: string
}

export interface DoctorDetailsTypes {
  level: string
  breadcrumbTitle: string
  image: SanityImage
  name: string
  field_of_expertise: string
  consultation_hours: ConsultationHour[]
  is_virtual_consultant: boolean
  slug: Slug
  about: About
  details: Detail[]
  location: string
  telephone: string[]
  doctor_specialties: {title:string}[]
}
export interface Option {
  _key: string
  entryName: string
}
export interface MakeAppointmentProps {
  clinicLocation: string
  phoneNumber: string
  options: Option[]
  title: string
  description: string
  icon: SanityImage
  ctaButton: CTAButton
}

export interface MakeAppointmentSection {
  consultation_hours: PortableText
  clinicLocation: string
  phoneNumber: string
  title: string
  description: string
  icon: SanityImage
  ctaButton: CTAButton
  encoremedIframeUrl: string
}
