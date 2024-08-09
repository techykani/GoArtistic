import { motion } from 'framer-motion'
import React from 'react'
import { staggerContainer } from 'src/animations/stagging-scale-up'
import { ListingPageListItem } from './listing-pages-list-item'
import { AllDocProps } from './search/search-main'

interface ClinicalServiceListProps {
  list: AllDocProps[]
}

export const ListingPageList: React.FC<ClinicalServiceListProps> = ({ list }) => {
  return (
    <section className="relative h-full lg:mt-5 lg:max-w-5xl 2xl:max-w-6xl container 2xl:pl-6 xl:pr-0 mb-10 lg:mb-20">
      <motion.ul
        className="lg:pt-12 pt-6 grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-[52px]"
        variants={staggerContainer}
        initial="from"
        animate="to"
      >
        {list.map((props) => (
          <ListingPageListItem key={props._id} {...props} />
        ))}
      </motion.ul>
    </section>
  )
}
