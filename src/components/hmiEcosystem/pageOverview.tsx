import Title from '@/components/widgets/shared/title'
import { RefObject } from 'react'
import OverView from '../widgets/blocks/overView'

export interface OverviewComponentProps {
    title: string
    description: string
    theme: string
    headingRef?: RefObject<HTMLHeadingElement>
    contentWidth: string
}

const PageOverview = ({ title, description, theme, headingRef, contentWidth }: OverviewComponentProps) => {
    return (
        <div className='bg-[#004E89] py-[32px] md:py-[36px]'>
            <OverView title={title} description={description} theme="dark" contentWidth="container" />
        </div>
    )
}

export default PageOverview
