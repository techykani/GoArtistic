import { useEffect, useState } from 'react'
import { Tab } from '@/components/leadership/tab'
import OverView from '../widgets/blocks/overView'
import { InformativeCard } from '../widgets/blocks/cards/informativeCard/informativeCard'
import Title from '../widgets/shared/title'
import ReactPortableText from '../widgets/shared/reactPortableText'
import { ExecutiveLeadership } from './executiveLeadership'
import { BoardOfDirectors } from './boardOfDirectors'
import { useRouter } from 'next/router'
export const Members: React.FC<any> = (tab: any) => {

  const [importedData, setImportedData] = useState<any>();
  const [selectedOption, setSelectedOption] = useState<any>();
  const [selectedIndex, setSelectedIndex] = useState(0);

  const sortData = (data: any) => {
    let arr = [];
    arr.push(data.executiveLeadershipContent)
    arr.push(data.boardOfDirectorsContent);
    setImportedData(arr)
    setSelectedOption(arr[0])
  }

  useEffect(() => {
    sortData(tab?.tab);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])





  return (
    <>
      <Tab
        options={importedData}
        selectedIndex={selectedIndex}
        setSelectedOption={setSelectedOption}
        setSelectedIndex={setSelectedIndex}
      />
      {selectedOption?.title && selectedOption?.description && (
        <div className="bg-primary-blue py-8 md:py-[36px]">
          <div className="px-6 md:px-[71px]">
            <div className={`container mx-auto`}>
              <div className="max-w-[808px] mx-auto flex flex-col gap-2 md:gap-4">
                {selectedOption?.title && (
                  <Title
                    headingType="h2"
                    className={`text-center font-montserrat !font-semibold`}
                    theme={"dark"}
                    tagline={selectedOption?.title}
                  />
                )}
                {selectedOption?.description && (
                  <p
                    className={`text-[#FBFBFB] text-[16px] leading-[24px] text-center`}
                  >
                    <ReactPortableText content={selectedOption?.description} theme={"dark"} />
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
      {selectedIndex == 0 && <ExecutiveLeadership data={selectedOption} />}
      {selectedIndex == 1 && <BoardOfDirectors data={selectedOption} />}
    </>
  )
}
