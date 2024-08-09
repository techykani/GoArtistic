import { useState } from 'react'
import { Tab } from '../ui/tab/tab'
import OverView from '../widgets/blocks/overView'
import { InformativeCard } from '../widgets/blocks/cards/informativeCard/informativeCard'
export const DiscoverTabs: React.FC<any> = ({ options }) => {
  const [selectedOption, setSelectedOption] = useState(options[0])
  const [selectedIndex, setSelectedIndex] = useState<number>(0)
  return (
    <>
      {selectedOption?.title && selectedOption?.description && (
        <div className="bg-primary-blue py-8 md:py-[36px]">
          <OverView
            title={selectedOption?.title}
            description={selectedOption?.description}
            theme="dark"
            contentWidth="container text-center"
          />
        </div>
      )}
      <Tab
        options={options}
        selectedIndex={selectedIndex}
        setSelectedOption={setSelectedOption}
        setSelectedIndex={setSelectedIndex}
      />

      {selectedOption?.cards && (
        <section className="px-6 md:px-[71px] py-[48px] md:py-[80px] bg-off-white">
          <div className="container mx-auto grid gap-x-6 gap-y-[32px] md:gap-y-[48px] grid-cols-1 md:grid-cols-2 ">
            {selectedOption?.cards?.map((data: any, index: any) => (
              <InformativeCard data={data} key={index} />
            ))}
          </div>
        </section>
      )}
    </>
  )
}
