import { SanityImage } from 'sanity-react-extra'

export interface HeroSection {
  options: Point[]
  image: SanityImage & ImageAlt
  subtitle: string
  title: PortableText[]
}

export interface Guide {
  _key: string
  _type: string
  ctas?: CTAButton[]
  description: string
  icon: SanityImage
  title: string
}

export interface GuidlinesSection {
  type: string
  description: string
  guides: Guide[]
  tagline: string
  title: string
  slug?: Slug
}

export interface ImgsWithPointsSection {
  type: string
  description: PortableText[]
  points: Point[]
  primaryImg: SanityImage
  secondaryImg: SanityImage
  image: SanityImage & ImageAlt
  tagline: string
  title: string
  slug?: Slug
}

export interface Service {
  _key: string
  _type: string
  description: string
  icon: SanityImage
  title: string
  href?: string
}

export interface ServicesSection {
  type: string
  description: string
  service: Service[]
  heading: string
}

export type Section = HeroSection | GuidlinesSection | ImgsWithPointsSection | ServicesSection

export type AdmissionPage = {
  sections: Section[]
  seo: SEO
	packages: any
}
