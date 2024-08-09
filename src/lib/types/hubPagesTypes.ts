import { SanityImage } from 'sanity-react-extra'

export interface HeroSection {
  options: Point[]
  image: SanityImage & ImageAlt
  subtitle: string
  title: PortableText[]
}
export interface NavigationOption {
  _key: string
  _type: string
  logo: SanityImage
  name: string
  app: 'google map' | 'waze'
}
