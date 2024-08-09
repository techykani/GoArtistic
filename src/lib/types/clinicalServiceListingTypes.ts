import { SanityImage } from 'sanity-react-extra'

export interface ClinicalService {
  _id: string
  description: string
  shortDes?: string
  slug: Slug
  smImage: SanityImage
  image: ImageAlt
  title: string
  sections: ClinicalServiceDetails[]
  tooltips?: string[]
  procedures?: Procedure[]
  schedule?: PortableText
  location: string
  telephone?: string[]
  medicalSpecialties: { title: string }
}

export interface Procedure {
  _id: string
  shortDes?: string
  slug: Slug
  title: string
  estimatedCost?: {
    rows: {
      _type: string
      cells: string[]
    }[]
  }
}

export interface ServiceSection {
  _key: string
  title: string
  description: string
  tableOfContent: Table
}
export interface ClinicalServiceDetails {
  _key: string
  _type: string
  description: PortableText
  title: string
  subtitle: string
  teamMember: Doctor[]
  services: ServiceSection[]
  contactInfo: ContactInfo[]
  opningHour: OpeningHour
  image: SanityImage & ImageAlt
  cta: CTAButton
}
