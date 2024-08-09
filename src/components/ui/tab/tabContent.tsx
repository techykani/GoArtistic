import { Option } from '@/lib/types/homeTypes'
import { ANIMATION_DURATION } from '@/lib/constants'
import { AnimatePresence, motion } from 'framer-motion'
import React from 'react'
import { Link } from '@/components/ui'
import { DiscoverCards } from '../cards/discover-cards'
import OverView from '@/components/widgets/blocks/overView'

interface TabContentProps {
  selectedOption: any
  selectedIndex: number
}

export const TabContent: React.FC<TabContentProps> = ({
  selectedOption: { cards, title, description },
  selectedIndex,
}) => {
  const evenIndex = selectedIndex % 2 === 0

  return (
    <>
      {title && description ? (
        <>
          <div className='bg-primary-blue py-8 md:py-[36px]'>
            <OverView title={title} description={description} theme="dark" contentWidth="container text-center" />
          </div>
          <section className="block  px-6 md:px-[71px] py-[48px] md:py-[80px] bg-off-white">
            <DiscoverCards cards={cards} />
          </section>

        </>
      ) : (
        <>
          <p
            className="pb-[32px] md:pb-[32px] max-w-[1130px] mx-auto text-center font-semibold text-grey-9 text-base md:text-[20px] leading-[20px] 
          md:leading-[24px] px-6 md:px-[71px]"
          >
            In the form of partnerships with external community healthcare-related organisations
            that complement or supplement our activities:
          </p>
          <section className="px-6 md:px-[71px] bg-off-white">
            <DiscoverCards cards={cards} />
          </section>
        </>
      )}
    </>
  )
}
