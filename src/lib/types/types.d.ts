import { SanityImage } from 'sanity-react-extra'

declare global {
  interface Window {
    hbspt: any
  }

  interface PortableText {
    _key: string
    _type: string
    children: Child[]
    markDefs: any[]
    style: string
  }

  interface Child {
    _key: string
    _type: string
    marks: string[]
    text: string
  }
  interface SubMenu {
    _key: string
    title: string
    headline?: string
    description?: string
    menus?: Menus[]
  }

  interface MegaMenu {
    _key: string
    title: string
    subMenu: SubMenu
    highlight?: boolean
    href?: string
    categoryTitle: string
    submenuList: []
  }
  interface SlantedShape {
    styles: string
    res?: boolean | string
    slant: string
    customValue?: number
  }
  interface Footer {
    data: FooterData
    primaryMenu: Menu[]
    secondaryMenu: MegaMenu[]
    footerSections: any[]
    logo: SanityImage
    ctaButton: CTAButton
  }
  interface FooterData {
    address: Address
    contact: Contact
    footerBottom: any[]
    footerSections: any[]
    downloadAppLink: any
    logo: SanityImage
    ctaButton: CTAButton
  }
  interface Address {
    address: any[]
    title: string
    iconLinks: IconLink[]
  }
  interface Menus {
    title: string
    _key: string
    href: string
    document: string
  }
  interface Link {
    text: string
    href: string
    _key: string
  }
  interface Contact {
    iconLinks: IconLink[]
    title: string
  }

  interface IconLink {
    icon: SanityImage
    link: Link
  }
  interface ImageAlt {
    alt: string
  }
  interface MenuItem {
    href: string
    title: string
    isCTA: boolean
    submenu: array
    hasOutline: boolean
  }
  interface SEO {
    title: string
    description: string
    ogImage: SanityImage
  }

  interface CTAButton {
    icon: SanityImage
    ctaButton: any
    title: string
    href: string
  }

  type SocialType = 'facebook' | 'twitter' | 'linkedin' | 'instagram'
  interface Social {
    title: string
    type: SocialType
    url: string
  }

  interface navTop {
    contact: Contact
    emergency: Emergency
    login: Login
  }

  interface NotificationBar {
    text: PortableText
    icon: SanityImage
  }
  interface ListingItem {
    _id: string
    _type: string
    slug: Slug
    title: string
  }

  interface Site {
    _createdAt: Date
    _id: string
    _rev: string
    _type: string
    _updatedAt: Date
    logo: SanityImage
    ctaButton: CTAButton
    primaryMenu: Menu[]
    footer: FooterData
    secondaryMenu: MegaMenu[]
    navTop: navTop
    notificationBar: NotificationBar
    listingItems: ListingItem[]
  }

  interface Menu {
    _key: string
    _type: Type
    href: Href
    title: string
    highlight?: boolean
    inFooter?: boolean
    submenu?: Menu[]
  }

  interface Contact {
    icon: Icon
    mail: string
    title: string
  }

  interface Emergency {
    icon: Icon
    number: string
    title: string
  }

  interface Login {
    icon: Icon
    number: string
    title: string
  }

  interface Button {
    _type: string
    href: string
    title: string
  }

  interface Point {
    link: Link
    shortDes: string
    _key: string
    icon: SanityImage
    mobileIcon: SanityImage
  }

  interface HighlightedAward {
    icourln: string
    image: Image
    name: string
  }

  interface OtherAccreditationsAwards {
    _type: string
    accreditationsAwards: AccreditationsAward[]
    title: string
  }

  interface AccreditationsAward {
    _key: string
    icon: Image
    icourln: string
    name: string
  }
  interface Video {
    _type: string
    mp4?: string
    webm?: string
  }

  enum SlugType {
    Slug = 'slug',
  }

  interface Slug {
    _type: SlugType
    current: string
  }
  interface Table {
    rows: TableRow[]
  }

  interface TableRow {
    _key: string
    cells: TableCell[]
  }

  interface Doctor {
    _id: string
    consultation_hours: ConsultationHour[]
    field_of_expertise: string
    image: SanityImage
    is_vertual_consultant?: boolean
    name: string
    slug: Slug
  }

  interface ContactInfo {
    _key: string
    description: PortableText
    icon: SanityImage
  }

  interface OpeningHour extends ContactInfo {}

  interface GetInTouch {
    cta: CTAButton
    title: string
  }

  export interface ConsultationHour {
    _key: string
    _type: string
    days: Day[]
    endsAt: string
    startsAt: string
  }

  export interface OperatingHour {
    _key: any
    _type: any
    startsAt: string
    endsAt: string
    days: [string]
    time_available_on_ph?: boolean
  }

  interface serviceHoursProps {
    _key: any
    _type: any
    startingDay: string
    endingDay?: string
    startsAt: string
    endsAt: string
    time_available_on_ph?: boolean
  }

  enum Day {
    Friday = 'friday',
    Monday = 'monday',
    Sunday = 'sunday',
    Thursday = 'thursday',
    Tuesday = 'tuesday',
    Wednesday = 'wednesday',
  }

  interface SpecialityFilterContent {
    _id: string
    title: string
  }

  interface SpecialityFilterContentFinal {
    id: string
    title: string
  }

  interface CarouselDataProps {
    _id: string
    _type: string
    description?: string
    shortDes?: string
    endsAt?: Date
    image: SanityImage
    startsAt?: Date
    readTime?: string
    title: string
    type?: string
    slug: Slug
    path: string
  }

  interface Service {
    _key: string
    _type: string
    description: string
    icon: SanityImage
    title: string
    href?: string
  }

  interface IPrimaryListItem {
    _key: string
    _type: string
    ctas?: { button: CTAButton }[]
    description: string
    icon: Icon
    title: string
  }
  interface QuickLink {
    link: Link
    shortDes: string
    _key: string
  }

  interface IconText {
    icon: SanityImage
    text: string
  }

  interface DetailsCommonQuestions {
    question: string
    answer: PortableText
    _key: string
  }
}
