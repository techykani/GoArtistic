import { SanityImage } from 'sanity-react-extra'

export interface HmiGroupMore {
  CTA: CTAButton
  _key: string
  _type: string
  description: string
  image: SanityImage
  subtitle: string
  title: string
}

export interface NewsBlock {
  ctaButton: CTAButton
  news: INews[]
}

export interface INews {
  _key: string
  _type: string
  datetime: string
  description: string
  image?: SanityImage
  title: CTAButton
}
export interface ITestimonial {
  image: SanityImage
  name: string
  quote: string
  role: string
}
export interface HighlightedAward {
  awardName: string
  description: PortableText[]
  icon: SanityImage
  name: string
}

export interface IOtherAccreditationsAwards {
  _type: string
  awardsAndAccreditations: AwardsAndAccreditation[]
  title: string
}

export interface AwardsAndAccreditation {
  CTA: null
  _key: string
  _type: string
  description: string
  icon: SanityImage
  name: string
}

export interface Timeline {
  _key: string
  _type: string
  achievements: Achievement[]
  year: string
}

export interface Achievement {
  _key: string
  _type: string
  leftHandSideBlock: _PortableText
  rightHandSideBlock: _PortableText
}

export interface _PortableText {
  _key: string
  _type: string
  children?: Child[]
  markDefs?: any[]
  style?: string
  Aspires?: IAspire[]
}

export interface IAspire {
  _key: string
  _type: string
  description: string
  icon: SanityImage
  title: string
}
