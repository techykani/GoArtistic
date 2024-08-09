import { useState } from "react"
import Title from "../widgets/shared/title"
import { isEmpty } from "lodash"
import { GTAEvent } from "@/lib/gtag";
import { SanityImg } from "sanity-react-extra";
import { imageUrlBuilder } from "@/sanity";
import { GeneralTab } from "../ui/tab/practiceTabs/generalTab";
import { GeneralTabContent } from "../ui/tab/practiceTabs/generalTabContent";

export const AreaOfFocus = ({ sectionName, options }: any) => {
  const [selectedTab, setSelectedTab] = useState(!isEmpty(options) && options[0]);
  const [selectedChip, setSelectedChip] = useState(selectedTab?.cards[0]);
  return (
    <div className="bg-[#FEFEFE] py-12 md:py-20 flex flex-col gap-6 md:gap-8">
      <div className="px-6 md:px-[71px]">
        <div className="max-w-[1014px] mx-auto">
          <Title headingType="h2" theme="light" tagline={sectionName} className="text-center" />
        </div>
      </div>
      <div className="relative">
        <div className="flex gap-1 px-6 lg:px-0 lg:justify-center overflow-scroll lg:overflow-visible relative">
          {
            options?.map((tab: any) => (
              <div key={tab?._key} className="flex flex-col">
                <div onClick={() => {
                  GTAEvent('view_content', {
                    content_name: tab?.title,
                    content_type: tab?.entryName,
                  })
                  setSelectedTab(tab);
                  setSelectedChip(tab?.cards[0])
                }} className="flex flex-col min-w-[154px] cursor-pointer font-semibold">
                  <div className={`py-3 text-center px-6 whitespace-nowrap ${tab?._key === selectedTab?._key ? 'text-[#0084C6]' : "text-[#6E6E6E]"}`}>{tab?.entryName}</div>
                  <div className={`h-[4px] w-full ${tab?._key === selectedTab?._key && 'bg-[#0084C6]'} `} />
                </div>
              </div>
            ))
          }
          <div className="h-[1px] w-full bg-grey-3 absolute bottom-0  md:max-w-[1014px] md:mx-auto hidden sm:block" />
        </div>
        <div className="h-[1px] w-full bg-grey-3 absolute bottom-0 sm:hidden" />
      </div>
      <div className="w-full max-w-[1014px] mx-auto flex flex-col md:flex-row gap-6 md:px-[71px] lg2:px-0">
        <div className="w-full h-auto md:max-w-[392px] px-6 md:px-0 bg-cover bg-center">
          <div>
            {selectedChip?.primaryImg && (
              <SanityImg
                className="w-full h-full border border-grey-3 rounded-2xl overflow-hidden object-cover aspect-[6/5]"
                builder={imageUrlBuilder}
                image={selectedChip?.primaryImg}
                alt="image"
                loading="eager"
                width={500}
                height={500}
              />
            )}
          </div>
        </div>
        <div className="w-full md:pl-6 flex flex-col gap-6">
          {selectedTab?.title && <p className="text-grey-dark text-[20px] px-6 md:px-0 font-semibold leading-[24px]">
            {selectedTab?.title}
          </p>}

          <div className="w-full">
            <div className="pl-6 md:pl-0 flex gap-3 overflow-scroll snap-mandatory slider-body md:overflow-visible md:flex-wrap">
              {selectedTab?.cards?.map((option: any) => (
                <p
                  key={option?._key}
                  onClick={() => {
                    GTAEvent('view_content', {
                      content_name: option?.title,
                      content_type: option?.entryName,
                    })
                    setSelectedChip(option)
                  }}
                  className={`px-6 py-2 text-base font-semibold rounded-full whitespace-nowrap cursor-pointer last:mr-6 transition-all duration-150 ${option?._key === selectedChip?._key
                    ? 'bg-secondary-ocean text-off-white'
                    : 'bg-[#D6E7FF] text-[#0746A2] hover:bg-secondary-ocean hover:text-off-white'
                    }`}
                >
                  {option?.title}
                </p>
              ))}
            </div>
          </div>
          <GeneralTabContent selectedOption={selectedChip} selectedIndex={0} />
        </div>
      </div>
    </div>
  )
}