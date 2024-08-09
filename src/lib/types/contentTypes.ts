import { SanityImage } from 'sanity-react-extra'
export interface Article {
  _key: string
  _type: string
  cta: CTAButton
  points: Point[]
  title: string
}

export interface ArticlesBlock {
  _key: string
  _type: string
  otherTopic: OtherTopic
  points: ArticlesBlockPoint[]
  title: string
}

export interface OtherTopic {
  tags: Tag[]
  title: string
}

export interface Tag {
  _key?: string
  _type: string
  href: string
  text: string
}

export interface ArticlesBlockPoint {
  _key: string
  _type: string
  image: SanityImage
  link: Tag
  shortDes: string
  title: string
}

export interface IContext {
  _key: string
  name: string
  thumbnailImg: SanityImage
  video: Video | null
}
