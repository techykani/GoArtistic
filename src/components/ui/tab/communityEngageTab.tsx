import { GTAEvent } from '@/lib/gtag'
import React, { useEffect, useState, useRef } from 'react'

export const CommunityEngageTab: React.FC<any> = ({
  options,
  selectedIndex,
  setSelectedOption,
  setSelectedIndex,
}) => {
  return (
    <div className="flex overflow-scroll lg:overflow-hidden snap snap-mandatory slider-body gap-3 sm:justify-center py-[32px] pl-6">
      {options.map((option: any, idx: any) => (
        <div
          key={option._key}
          onClick={() => {
            GTAEvent('view_content', {
              content_name: option?.title,
              content_type: option?.entryName,
            })
            setSelectedOption(option)
            setSelectedIndex(idx)
          }}
          className={` text-base font-semibold leading-[20px] text-center px-6 py-2 rounded-[24px] whitespace-nowrap transition-all duration-150 cursor-pointer ${
            idx === selectedIndex
              ? 'bg-[#0084C6] text-off-white'
              : 'text-secondary-blue-active bg-secondary-blue-inactive hover:bg-[#0084C6] hover:text-off-white'
          }  `}
        >
          {option.entryName}
        </div>
      ))}
    </div>
  )
}
