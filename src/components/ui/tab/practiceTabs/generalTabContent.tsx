import { Option } from '@/lib/types/homeTypes'
import { ANIMATION_DURATION } from '@/lib/constants'
import { AnimatePresence, motion } from 'framer-motion'
import React, { useState } from 'react'


interface TabContentProps {
  selectedOption: any
  selectedIndex: number
}

export const GeneralTabContent: React.FC<TabContentProps> = ({
  selectedOption: { tagline, linkTitle, primaryImg },
  selectedIndex,
}) => {
  return (
    <>
      <div className="w-full flex flex-col gap-2 px-6 md:px-0">
        <p className="text-grey-dark text-xl md:text-[28px] leading-6 md:leading-[36px] md:tracking-[-0.28px] font-semibold">
          {tagline}
        </p>
        <p className="text-grey-9 text-base leading-6">
          {linkTitle}
        </p>
      </div>
    </>
  )
}
