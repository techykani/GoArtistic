import { SanityImage } from 'sanity-react-extra'

export interface HeroSection {
  options: Point[]
  image: SanityImage & ImageAlt
  subtitle: string
  title: PortableText[]
}
interface TreatmentCostCard {
  title: string
  costTitle: string
  cost: string
  durationTitle: string
  duration: string
  convert: string
}

export interface TreatmentCostSubSection {
  title: string
  text: string
  tagline: string
  link: Link
  card: TreatmentCostCard
}

interface NeedHelp {
  title: string
  options: { text: string }[]
  text: string
  link: Link
  image: SanityImage & ImageAlt
  smImage: SanityImage & ImageAlt
}
export interface MedicalSpecialities {
  title: string
  needHelp: NeedHelp
  slug?: Slug
  treatmentCost: TreatmentCostSubSection
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

export interface ContactSection {
  headline: string
  subHead: string
  formText: string
  formTitle: string
  detailsTitle: string
  contactData: any
  socialButtons: Social[]
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
  cta: CTAButton
  description: string
  endsAt: Date
  image: SanityImage
  startsAt: Date
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
  }[]
  title: string
}
export type Section =
  | HeroSection
  | TreatmentCostSubSection
  | VcoSection
  | CTASection
  | ContactSection
  | SliderSection
  | GettingHereSection

export type TreatmentPage = {
  sections: Section[]
  seo: SEO
	packages: any
}

export interface Guide {
  _key: string
  _type: string
  ctas?: CTAButton[]
  description: string
  icon: SanityImage
  title: string
}

export interface Excellence {
  _key: string
  _type: string
  description: string
  icon: SanityImage
  title: string
}

export interface Info {
  _key: string
  _type: string
  cta: CTAButton
  description: string
  image: SanityImage
  readTime: string
  title: string
  type: string
}

export interface AppointmentOnline {
  heading: string
  description: PortableText[]
  primaryImg: SanityImage
  secondaryImg: SanityImage
  message: PortableText[]
  points: Point[]
  slug?: Slug
}
