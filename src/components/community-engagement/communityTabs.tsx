import { useState } from 'react'
import { CommunityEngageTab } from '../ui/tab/communityEngageTab'
import OverView from '../widgets/blocks/overView'
import { DiscoverCards } from '../ui/cards/discover-cards'
import { InformativeCard } from '../widgets/blocks/cards/informativeCard/informativeCard'

export const CommunityTabs: React.FC<any> = (section) => {
  const [selectedOption, setSelectedOption] = useState(section?.options[0])
  const [selectedIndex, setSelectedIndex] = useState<number>(0)
  return (
    <>
      {section?.options && (
        <section className="w-full py-[48px] md:py-[80px] bg-[#FEFEFE]">
          <OverView
            title={section?.sectionName}
            description={section?.sectionTagline}
            theme={'light'}
            contentWidth="container text-center"
          />
          {/* <CommunityEngageTab
          options={section.options}
          selectedIndex={selectedIndex}
          setSelectedOption={setSelectedOption}
          setSelectedIndex={setSelectedIndex}
        /> */}
          {/* <p
            className="pb-[32px] md:pb-[32px] max-w-[1016px] mx-auto text-center font-semibold text-[#5A5A5A] text-[16px] md:text-[20px] leading-[20px] 
          md:leading-[24px]"
          >
            {selectedOption?.description}
          </p> */}
          <section className="px-6 md:px-[71px] bg-off-white pt-[32px]">
            <div className="container mx-auto grid gap-x-6 gap-y-[32px] md:gap-y-[48px] grid-cols-1 md:grid-cols-2 ">
              {selectedOption?.cards?.map((data: any, index: any) => (
                <InformativeCard data={data} key={index} />
              ))}
            </div>
          </section>
        </section>
      )}
    </>
  )
}
