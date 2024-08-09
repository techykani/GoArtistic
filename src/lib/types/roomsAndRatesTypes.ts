import { SanityImage } from 'sanity-react-extra'
export interface ClinicalService {
  _id: string
  description: string
  slug: Slug
  smImage: SanityImage
  image: ImageAlt
  title: string
  section: any[]
  endDate?: string
}

interface Amenity {
  title: string
  amenities: string[]
}
export interface RoomtypeSection {
  _key: string
  title: string
  price: string
  description: string
  iconText: IconText
  amenity: Amenity
  images: any[]
}
export interface RoomAndRatesDetails {
  _key: string
  _type: string
  description: PortableText
  title: string
  roomtypes: RoomtypeSection[]
  sectionsTitle: string
  commonQuestions: DetailsCommonQuestions[]
}
