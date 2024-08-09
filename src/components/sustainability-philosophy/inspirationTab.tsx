import Image from 'next/image'
import { useState } from 'react'
import { ProcedureTab } from '../ui/tab/procedureTabs/procedureTab'
import { ProcedureTabContent } from '../ui/tab/procedureTabs/procedureTabContent'
import { InspirationTabContent } from '../ui/tab/insiprationTab/inspirationTabContent'
import Title from '../widgets/shared/title'

export const InspirationTab: React.FC<any> = ({ sectionName, options, sectionTagline }) => {
  const [selectedOption, setSelectedOption] = useState(options[0])
  const [selectedIndex, setSelectedIndex] = useState<number>(0)

  return (
    <>
      <div className="w-full bg-alice-blue  pt-[48px] md:pt-[80px] flex flex-col md:gap-8 gap-6">
        <div className="w-full flex flex-col gap-4 max-w-[800px] md:mx-auto ">
          <Title tagline={sectionName} headingType='h2' className='!text-[#0957CB] text-center' />
          <p className="text-grey-8 text-base leading-[24px] md:leading-[24px] text-center px-6">
            {sectionTagline}
          </p>
        </div>
        <div className="pb-10 md:pb-8">
          <ProcedureTab
            options={options}
            selectedIndex={selectedIndex}
            setSelectedOption={setSelectedOption}
            setSelectedIndex={setSelectedIndex}
          />
        </div>
      </div>
      <InspirationTabContent classnameValue={'!bg-alice-blue'} selectedOption={selectedOption} selectedIndex={selectedIndex} />
    </>
  )
}
