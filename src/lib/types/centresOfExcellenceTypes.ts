import { SanityImage } from 'sanity-react-extra'
export interface CentresOfExcellence {
  _id: string
  description: string
  slug: Slug
  smImage?: SanityImage & ImageAlt
  image?: SanityImage & ImageAlt
  title: string
	getInTouch: GetInTouch
  scrollspySections: ScrollspySections
}

export interface TeamMember {
	teamMember: Doctor[]
}

export interface Card extends Subsection {
	link?: Link
}
export interface Subsection {
  _key: string
  title: string
  description?: string
}
export interface ScrollspySection {
	_key: string
  _type: string
  description?: PortableText
  title: string
  subtitle?: string
  teamMember?: Doctor[]
  image?: SanityImage & ImageAlt
  cta?: CTAButton
	subsections?: Subsection[]
	cards?: Card[]
	teams?: TeamMember[]
}
export interface ScrollspySections {
  title?: string
	sections: ScrollspySection[]
}
