import { useWindowSize } from '@/lib/hooks'
import { useEffect, useRef, useState } from 'react'
import { PracticeTab } from '../ui/tab/practiceTabs/practiceTab'
import { PracticeTabContent } from '../ui/tab/practiceTabs/practiceTabContent'
import Title from '../widgets/shared/title'

export const AreaOfPractice: React.FC<any> = ({ sectionName, options }) => {
  const [selectedOption, setSelectedOption] = useState(options == undefined ? '' : options[0])
  const [selectedIndex, setSelectedIndex] = useState<number>(0)
  const [sliderPosition, setSliderPosition] = useState(0)
  const headingRef = useRef<HTMLHeadingElement>(null)
  const windowWidth = useWindowSize()?.width ?? 0
  useEffect(() => {
    if (headingRef.current) {
      const rect = headingRef.current.getBoundingClientRect()
      const leftPosition = rect.left
      setSliderPosition(leftPosition)
    }
  }, [windowWidth])

  return (
    <div className="w-full bg-off-white py-[48px] md:py-[80px] flex flex-col gap-6 md:gap-8">
      <div className="px-6 md:px-[71px]">
        <div ref={headingRef} className="container mx-auto flex flex-col gap-8 md:gap-[32px]">
          <Title headingType="h2" theme="light" tagline={sectionName} className="text-center" />
        </div>
      </div>
      <PracticeTab
        options={options}
        selectedIndex={selectedIndex}
        setSelectedOption={setSelectedOption}
        setSelectedIndex={setSelectedIndex}
        sliderPosition={sliderPosition}
      />
      <PracticeTabContent selectedOption={selectedOption} selectedIndex={selectedIndex} />
    </div>
  )
}
