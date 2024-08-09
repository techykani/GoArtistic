import { useState } from 'react'
import { ProcedureTab } from '../ui/tab/procedureTabs/procedureTab'
import { ProcedureTabContent } from '../ui/tab/procedureTabs/procedureTabContent'
import Title from '../widgets/shared/title'
import { PortableText } from '@/sanity'
import { serializers } from '@/lib/blockContent'

export const ProceduresAvailable: React.FC<any> = ({ sectionName, options, layoutWithImage }) => {
  const [selectedOption, setSelectedOption] = useState(options == undefined ? '' : options[0])
  const [selectedIndex, setSelectedIndex] = useState<number>(0)

  const handleDropdown = (id: any) => {
    if (selectedIndex == id) return setSelectedOption('')
    setSelectedIndex(id)
  }

  return (
    <div className="w-full bg-off-white py-[48px] md:py-[80px] flex flex-col gap-6 md:gap-[36px]">
      <Title headingType="h2" theme="light" tagline={sectionName} className="text-center" />
      {layoutWithImage ? <>
        <div className="">
          <ProcedureTab
            options={options}
            selectedIndex={selectedIndex}
            setSelectedOption={setSelectedOption}
            setSelectedIndex={setSelectedIndex}
          />
        </div>
        <div className="px-6">
          <ProcedureTabContent selectedOption={selectedOption} selectedIndex={selectedIndex} />
        </div></> :
        <div className='px-6 md:px-[71px]'>
          <div className="w-full mx-auto max-w-[808px] flex flex-col gap-8">
            <div className="flex flex-col gap-4">
              {options.map((option: any, i: any) => (
                <div
                  onClick={() => handleDropdown(i)}
                  key={option?._key}
                  className="bg-off-white flex w-full h-full rounded-r-[8px] relative shadow-level3 cursor-pointer"
                >
                  <div className="border-[2px] border-primary-blue h-full absolute"></div>
                  <div className="w-full py-[24px] pr-[24px] pl-[20px] flex flex-col gap-4">
                    <div className="flex justify-between items-center">
                      <div className="text-[#3C3C3C] text-[14px] md:text-[16px] font-semibold leading-[20px]">
                        {option?.entryName}
                      </div>
                      <div className="w-6 h-6">
                        {selectedIndex == i ? (
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            viewBox="0 0 20 20"
                            fill="none"
                          >
                            <path
                              d="M15 12.5L10 7.5L5 12.5"
                              stroke="#969696"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                          </svg>
                        ) : (
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            viewBox="0 0 20 20"
                            fill="none"
                          >
                            <path
                              d="M5 7.5L10 12.5L15 7.5"
                              stroke="#969696"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                          </svg>
                        )}
                      </div>
                    </div>
                    {selectedIndex == i && (
                      <div className="text-grey-dark text-[16px] leading-[24px]">
                        <PortableText blocks={option?.description} serializers={serializers} />
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div></div>}
    </div>
  )
}
