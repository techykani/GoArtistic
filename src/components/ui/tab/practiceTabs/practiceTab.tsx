import { GTAEvent } from '@/lib/gtag'
import React, { useEffect, useState, useRef } from 'react'

export const PracticeTab: React.FC<any> = ({
  options,
  selectedIndex,
  setSelectedOption,
  setSelectedIndex,
  sliderPosition,
}) => {
  return (
    <div className="relative">
      <div
        style={{ paddingLeft: sliderPosition, paddingRight: sliderPosition }}
        className=" flex gap-1 sm:justify-center md:max-w-[1014px] relative md:mx-auto overflow-scroll lg:overflow-visible slider-body"
      >
        {options?.map((option: any, idx: any) => (
          <div key={option._key} className="relative">
            <p
              onClick={() => {
                GTAEvent('view_content', {
                  content_name: option?.title,
                  content_type: option?.entryName,
                })
                setSelectedOption(option)
                setSelectedIndex(idx)
              }}
              className={`px-6 min-h-[60px] flex justify-center items-center text-base  cursor-pointer whitespace-nowrap  ${
                idx === selectedIndex
                  ? 'font-semibold leading-[24px] text-secondary-ocean'
                  : 'font-semibold text-grey-8'
              }`}
            >
              {option?.entryName}
            </p>
            {idx === selectedIndex && (
              <div className="w-full h-[4px] bg-secondary-ocean relative z-10"></div>
            )}
          </div>
        ))}
        <div className="h-[1px] w-full bg-grey-3 absolute bottom-0  md:max-w-[1014px] md:mx-auto hidden sm:block" />
      </div>
      <div className="h-[1px] w-full bg-grey-3 absolute bottom-0  md:max-w-[1014px] md:mx-auto sm:hidden" />
    </div>
  )
}
