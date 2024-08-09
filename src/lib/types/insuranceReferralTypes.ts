
import { ScrollspySections } from '@/lib/types/detailsPagesTypes'
import { SanityImage } from 'sanity-react-extra'


export interface InsuranceReferralScrollspySectionProps {
    _id: string
    description: string
    image?: SanityImage & ImageAlt
    title: string
    getInTouch: GetInTouch
    scrollspySections: ScrollspySections
}
