import React, { Dispatch, Fragment, SetStateAction } from 'react'
import { AllDocProps, filterByDoc } from '../searchModal'
import { GTAEvent } from '@/lib/gtag'

export interface TabsProps {
  selectedTab: string
  setSelectedTab: Dispatch<SetStateAction<string>>
  allDoc: AllDocProps[] | undefined
  tabParameters: string[]
  sliderPosition: any
}

export const SearchPageTabs: React.FC<TabsProps> = ({
  selectedTab,
  setSelectedTab,
  allDoc,
  tabParameters,
  sliderPosition,
}) => {
  // const getDocLength = (docName: string) => {
  //   return allDoc?.filter((doc) => doc._type === docName).length || 0
  // }

  // const articles = allDoc?.filter(
  //   (data) => data._type === 'disease' || data._type === 'wellnessArticle',
  // )

  // const resultNumberArr = [
  //   allDoc?.length || 0,
  //   getDocLength('doctor'),
  //   getDocLength('medicalSpecialty'),
  //   articles?.length || 0,
  //   getDocLength('package'),
  // ]

  return (
    <div className="w-full">
      <div className="flex gap-1 overflow-scroll lg:overflow-visible slider-body relative z-20  lg2:px-0 !pb-0">
        {tabParameters?.map((tab, idx) => (
          <div
            onClick={() => {
              GTAEvent('view_content', {
                content_name: tab,
                content_type: tab,
              })
              setSelectedTab(tab)
            }}
            className="cursor-pointer relative z-10"
            key={idx}
          >
            <p
              className={`w-full text-sm md:text-[16px] leading-5 md:leading-6 mb-[2px] px-3 whitespace-nowrap font-semibold  ${
                selectedTab === tab ? ' text-[#004E89]' : ' text-grey-8'
              }`}
            >
              {tab}
              {/* {idx !== 0 ? `(${resultNumberArr[idx]})` : ''} */}
            </p>
            <span
              className={` block w-full h-[2px] ${
                selectedTab === tab ? 'bg-[#004E89]' : 'bg-transparent'
              } `}
            />
          </div>
        ))}
        <div className="absolute bottom-0 w-full h-[1px] bg-[#D2D2D2]"></div>
      </div>
    </div>
  )
}
