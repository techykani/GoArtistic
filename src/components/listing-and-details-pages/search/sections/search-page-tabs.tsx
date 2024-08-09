import React, { Dispatch, Fragment, SetStateAction } from 'react'
import { AllDocProps, filterByDoc } from '../search-main'
import { GTAEvent } from '@/lib/gtag'

export interface TabsProps {
  selectedTab: string
  setSelectedTab: Dispatch<SetStateAction<string>>
  allDoc: AllDocProps[] | undefined
  tabParameters: string[]
}

export const SearchPageTabs: React.FC<TabsProps> = ({
  selectedTab,
  setSelectedTab,
  allDoc,
  tabParameters,
}) => {
  // const getDocLength = (type: string) => {
  //   return allDoc?.filter((doc) => doc._type === type).length || 0
  // }

  // const resultNumberArr = [
  //   allDoc?.length || 0,
  //   getDocLength('doctor'),
  //   getDocLength('medicalSpecialty'),
  //   getDocLength('package'),
  // ]

  return (
    <div className="w-full">
      <ul className="flex gap-1 overflow-scroll slider-body relative z-10 px-6 lg2:px-0">
        {tabParameters?.map((tab, idx) => (
          <li
            onClick={() => {
              GTAEvent('view_content', {
                content_name: tab,
                content_type: tab,
              })
              setSelectedTab(tab)
            }}
            className="cursor-pointer"
            key={idx}
          >
            <p
              className={`w-full text-sm md:text-[16px] leading-5 md:leading-6 mb-[2px] px-3 whitespace-nowrap font-semibold  ${
                selectedTab === tab ? ' text-[#3C3C3C]' : ' text-[#6E6E6E]'
              }`}
            >
              {tab}
              {/* {idx !== 0 ? `(${resultNumberArr[idx]})` : ''} */}
            </p>
            <span
              className={` block w-full h-[2px] ${
                selectedTab === tab ? 'bg-[#3C3C3C]' : 'bg-transparent'
              } `}
            />
          </li>
        ))}
      </ul>
    </div>
  )
}
