import { SanityImage } from 'sanity-react-extra'

export interface HeroSection {
  type: string
  button: CTAButton
  description: PortableText[]
  topimage: SanityImage
  tagline: string
  title: string
}

export interface TreatmentSection {
  type: string
  additionalInfo: IAdditionalInfo[]
  description: PortableText[]
  options: Option[]
  points: Point[]
  tagline: string
  title: string
}
export interface IAdditionalInfo {
  _type: string
  description: PortableText[]
  icon: SanityImage
}

export interface Option {
  _key: string
  _type: string
  button: Button
  description: string
  entryName: string
  featuredName?: string
  icon_img: SanityImage
  images: { image: SanityImage }[]
  role?: string
  title: string
}

export interface PitchSection {
  headline: string
  section: string
  body: any[]
  image: SanityImage & ImageAlt
  imageSide: 'left' | 'right'
  ctaButton: CTAButton
  slider: SliderSection
}

export interface SliderSection {
  headline: string
  credits: string[]
  tabs: Tab[]
  partnership: string
}

export interface Tab {
  body: any
}

export interface VcoSection {
  headline: string
  section: string
  body: any[]
  image: SanityImage & ImageAlt
  imageSide: 'left' | 'right'
  ctaButton: CTAButton
}

export type Question = { answer: any; question: string }
export interface CTASection {
  minorTitle: string
  majorTitle: string
  ctaButton: CTAButton
  image: SanityImage & ImageAlt
}

export interface GettingHereSection {
  title: string
  tagline: string
  description: PortableText[]
  points: Point[]
  hospitalLocation: string
}

export interface EventsOrPackage {
  _key: string
  _type: string
  _id: string
  cta: CTAButton
  description: string
  endsAt: Date
  image: SanityImage
  startsAt: Date
  title: string
  type: string
  slug: Slug
}

export interface CarouselDataProps {
  _key: string
  _type: string
  cta: CTAButton
  description: string
  endsAt?: Date
  image: SanityImage
  startsAt?: Date
  readTime?: string
  title: string
  type: string
}

export interface Policy {
  _key: string
  _type: string
  description: string
  icon: SanityImage
  title: string
}
export interface OtherHospitals {
  otherHospital: {
    _key: string
    _type: string
    location: string
    logo: SanityImage
    name: string
    href: string
  }[]
  title: string
}
export type Section =
  | HeroSection
  | TreatmentSection
  | VcoSection
  | CTASection
  | SliderSection
  | GettingHereSection

export type HomePage = {
  sections: Section[]
  seo: SEO
}
