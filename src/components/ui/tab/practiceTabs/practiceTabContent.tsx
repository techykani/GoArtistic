import React, { useState } from 'react'
import { useWindowSize } from '@/lib/hooks'
import { GeneralTab } from './generalTab'
import { GeneralTabContent } from './generalTabContent'
import { imageUrlBuilder } from '@/sanity'
import { SanityImg } from 'sanity-react-extra'

interface TabContentProps {
  selectedOption: any
  selectedIndex: number
}

export const PracticeTabContent: React.FC<TabContentProps> = ({
  selectedOption: { cards, title, description },
  selectedIndex,
}) => {
  const windowWidth = useWindowSize()?.width ?? 0
  const [selectedOpt, setSelectedOption] = useState(cards == undefined ? '' : cards[0])
  const [selectedInd, setSelectedInd] = useState<number>(0)
  return (
    <>
      <div className="w-full max-w-[1014px] mx-auto flex flex-col md:flex-row gap-6 md:px-[71px] lg2:px-0">
        <div className="w-full h-auto md:max-w-[392px] px-6 md:px-0 bg-cover bg-center">
          <div>
            {selectedOpt?.primaryImg && (
              <SanityImg
                className="w-full h-full border border-grey-3 rounded-2xl overflow-hidden object-cover aspect-[6/5]"
                builder={imageUrlBuilder}
                image={selectedOpt?.primaryImg}
                alt="image"
                loading="eager"
                width={500}
                height={500}
              />
            )}
          </div>
        </div>
        <div className="w-full md:pl-6 flex flex-col gap-6">
          <p className="text-grey-dark text-[20px] px-6 md:px-0 font-semibold leading-[24px]">
            {title}
          </p>
          <GeneralTab
            options={cards}
            selectedIndex={selectedInd}
            setSelectedOption={setSelectedOption}
            setSelectedIndex={setSelectedInd}
          />
          <GeneralTabContent selectedOption={selectedOpt} selectedIndex={selectedInd} />
        </div>
      </div>
    </>
  )
}
