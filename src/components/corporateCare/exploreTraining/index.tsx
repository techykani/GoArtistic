import { Divider } from '@/components/ui'
import { useWindowSize } from '@/lib/hooks'
import { useEffect, useRef, useState } from 'react'
import TypesOfTrainings from './typesOfTrainings'
import WhyOurTrainings from './whyOurTrainings'
import OurTestimonials from './ourTestimonials'
import Title from '@/components/widgets/shared/title'

const ExploreOurCorporateTraining = ({ sectionName, options, sectionTagline }: any) => {
  const [selectedTab, setSelectedTab] = useState(options[0].entryName)

  const handleTab = (option: any) => {
    setSelectedTab(option)
  }
  return (
    <div className="w-full bg-[#FBFBFB] py-12 md:py-20">
      <div className="max-w-[808px] mx-auto flex flex-col gap-4 px-6 lg:px-0 mb-12">
        <Title headingType="h2" theme="light" tagline={sectionName} className="text-center" />
        <p className="text-grey-dark text-[16px] leading-[24px] text-center">{sectionTagline}</p>
      </div>
      <div className="md:container md:mx-auto px-6 md:px-[71px] flex md:justify-center gap-3 overflow-scroll slider-body mb-4 md:mb-0">
        {options.slice(0, 3).map(({ entryName, _key }: any) => (
          <p
            onClick={() => handleTab(entryName)}
            key={_key}
            className={` ${selectedTab == entryName
              ? 'bg-[#0084C6] text-off-white'
              : 'bg-[#D6E7FF] text-[#0746A2] hover:bg-secondary-ocean hover:text-off-white'
              } font-semibold rounded-full cursor-pointer px-6 py-2 whitespace-nowrap transition-all duration-150`}
          >
            {entryName}
          </p>
        ))}
      </div>
      {selectedTab === 'Types of trainings' && (
        <TypesOfTrainings caption={options[0].caption} cards={options[0].singleImageQuickLink} />
      )}
      {selectedTab === 'Why our trainings' && (
        <WhyOurTrainings caption={options[1].caption} cards={options[1].singleImageQuickLink} />
      )}
      {selectedTab === 'Our testimonials' && (
        <OurTestimonials caption={options[2].caption} cards={options[2].singleImageQuickLink} />
      )}
    </div>
  )
}

export default ExploreOurCorporateTraining
