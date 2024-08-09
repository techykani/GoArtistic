import { GTAEvent } from '@/lib/gtag'
import React, { useEffect, useState, useRef } from 'react'

export const GeneralTab: React.FC<any> = ({
  options,
  selectedIndex,
  setSelectedOption,
  setSelectedIndex,
}) => {
  return (
    <div className="w-full">
      <div className="pl-6 md:pl-0 flex gap-3 overflow-scroll snap-mandatory slider-body md:overflow-visible md:flex-wrap">
        {options?.map((option: any, idx: any) => (
          <p
            key={option._key}
            onClick={() => {
              GTAEvent('view_content', {
                content_name: option?.title,
                content_type: option?.entryName,
              })
              setSelectedOption(option)
              setSelectedIndex(idx)
            }}
            className={`px-6 py-2 text-base font-semibold rounded-full whitespace-nowrap cursor-pointer last:mr-6 transition-all duration-150 ${
              idx === selectedIndex
                ? 'bg-secondary-ocean text-off-white'
                : 'bg-[#D6E7FF] text-[#0746A2] hover:bg-secondary-ocean hover:text-off-white'
            }`}
          >
            {option?.title}
          </p>
        ))}
      </div>
    </div>
  )
}
