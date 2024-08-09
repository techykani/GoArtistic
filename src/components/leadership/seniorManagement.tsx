import { useState } from 'react'
import Title from '../widgets/shared/title'
import { useWindowSize } from '@/lib/hooks'
import Image from 'next/image'
import { urlForImage } from '@/studio/lib/image'
import { GTAEvent } from '@/lib/gtag'

export const management = [
  'View all',
  'HMI Group',
  'HMI (Malaysia)',
  'Mahkota Medical Centre',
  'Regency Specialist Hospital',
  'StarMed Specialist Centre',
  'HMI Institute',
  'OneCare Medical',
  'Eagle Eye Centre',
  'MHC Asia',
  'The Harley Street Heart & Vascular Centre ​',
]
const SeniorManagement: React.FC<any> = ({ sectionName, options }) => {
  const [activeTab, setActiveTab] = useState(options[0]?.tabName)
  const [showTabData, setShowTabData] = useState(options) // Initially set to null to show all data

  const handleTab = (value: any) => {
    if (value.tabName === 'View All') {
      // Show all data
      setActiveTab(value.tabName)
      setShowTabData(options)
    } else {
      // Show data for the selected tab
      setShowTabData(value)
      setActiveTab(value.tabName)
    }
  }
  const [selectedManagement, setSelectedManagement] = useState(management[0])
  const windowWidth = useWindowSize()?.width ?? 0

  return (
    <section className="py-[32px] md:py-[80px]">
      <div className="px-6 md:px-[71px] mb-[32px] md:mb-[36px]">
        <div className="container mx-auto">
          <Title headingType="h2" tagline={sectionName} theme="light" />
        </div>
      </div>
      <div className="pb-[32px] md:pb-[48px] md:px-[71px]">
        <div
          className={`${
            windowWidth >= 768 ? 'container mx-auto' : 'px-6 '
          } flex gap-3 overflow-scroll md:overflow-visible md:flex-wrap slider-body`}
        >
          {options.map((option: any) => (
            <div
              onClick={() => {
                GTAEvent('view_content', {
                  content_name: option?.title,
                  content_type: option.tabName,
                })
                handleTab(option)
              }}
              key={option?._key}
              className={`${
                activeTab === option.tabName
                  ? 'text-off-white bg-secondary-ocean'
                  : 'text-secondary-blue-active bg-secondary-blue-inactive hover:bg-secondary-ocean hover:text-off-white'
              } px-6 py-2 font-semibold leading-[20px] text-base whitespace-nowrap rounded-full cursor-pointer transition-all duration-150`}
            >
              {option.tabName}
            </div>
          ))}
        </div>
      </div>
      {showTabData[0]?.tabName != 'View All' && (
        <div className="px-6 md:px-[71px]">
          <div className="container mx-auto w-full flex flex-col gap-8 md:gap-[68px]">
            {/* map here */}
            <div className="flex flex-col gap-4 md:gap-[10px]">
              <Title
                headingType="h5"
                theme="dark"
                tagline={showTabData.title}
                className="!text-grey-dark"
              />
              <div className="grid grid-col-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                {/* map here */}
                {showTabData?.management?.map(
                  ({ designation, image, officerName }: any, i: any) => (
                    <div
                      className="w-full shadow-level3 rounded-[12px] bg-[#FEFEFE] p-4 md:p-6 flex gap-4 md:gap-6 items-center"
                      key={i}
                    >
                      <div>
                        <div className="w-[61px] h-[61px] md:w-[108px] md:h-[108px]">
                          <Image
                            src={urlForImage(image).url()}
                            className="w-full h-full rounded-full object-cover"
                            width={108}
                            height={108}
                            alt=""
                          />
                        </div>
                      </div>
                      <div className=" flex flex-col gap-1">
                        <Title
                          headingType="h5"
                          theme="dark"
                          tagline={officerName}
                          className="!text-grey-dark"
                        />
                        <p className="text-primary-blue text-[14px] font-semibold leading-[20px]">
                          {designation}
                        </p>
                      </div>
                    </div>
                  ),
                )}
              </div>
            </div>
          </div>
        </div>
      )}
      {showTabData[0]?.tabName === 'View All' && (
        <div className="px-6 md:px-[71px]">
          <div className="container mx-auto w-full flex flex-col gap-8 md:gap-[68px]">
            {/* map here */}
            {showTabData?.map(({ title, management }: any) => (
              <>
                {title != 'View All' && (
                  <div className="flex flex-col gap-4 md:gap-[10px]">
                    <Title
                      headingType="h5"
                      theme="dark"
                      tagline={title}
                      className="!text-grey-dark"
                    />
                    <div className="grid grid-col-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                      {/* map here */}
                      {management?.map(({ designation, image, officerName }: any, i: any) => (
                        <div
                          className="w-full shadow-level3 rounded-[12px] bg-[#FEFEFE] p-4 md:p-6 flex gap-4 md:gap-6 items-center"
                          key={i}
                        >
                          <div>
                            <div className="w-[61px] h-[61px] md:w-[108px] md:h-[108px]">
                              <Image
                                src={urlForImage(image).url()}
                                className="w-full h-full rounded-full object-cover"
                                width={108}
                                height={108}
                                alt=""
                              />
                            </div>
                          </div>
                          <div className=" flex flex-col gap-1">
                            <Title
                              headingType="h5"
                              theme="dark"
                              tagline={officerName}
                              className="!text-grey-dark"
                            />
                            <p className="text-primary-blue text-[14px] font-semibold leading-[20px]">
                              {designation}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </>
            ))}
          </div>
        </div>
      )}
    </section>
  )
}

export default SeniorManagement
