import { useWindowSize } from '@/lib/hooks'
import Image from 'next/image'
import { useState } from 'react'
import Title from '../widgets/shared/title'
import { PortableText } from '@/sanity'
import { GTAEvent } from '@/lib/gtag'

export const ourLeaderShipTabs = [
  'Dr Gan See Khem',
  'Ms Chin Wei Jia',
  'Mr Chin Wei Yao',
  'Dr Cheah Way Mun',
]

const OurLeadership: React.FC<any> = ({ sectionName, options }) => {
  const [activeTab, setActiveTab] = useState(options[0]?.tabName)
  const [showTabData, setShowTabData] = useState(options[0])

  const handleTab = (value: any) => {
    setShowTabData(value)
    setActiveTab(value.tabName)
  }

  const windowWidth = useWindowSize()?.width ?? 0
  return (
    <section className="pt-[32px] md:py-[80px] bg-alice-blue">
      <div className="px-6 md:px-[71px] pb-[24px] md:pb-[36px]">
        <div className="container mx-auto">
          <Title headingType="h2" tagline={sectionName} theme="light" />
        </div>
      </div>
      <div className="pb-[32px] md:pb-[36px] md:px-[71px]">
        <div
          className={`${
            windowWidth >= 768 ? 'container mx-auto' : 'px-6 '
          } flex gap-3 overflow-scroll slider-body`}
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
                  ? 'text-off-white bg-[#0084C6]'
                  : 'text-secondary-blue-active bg-secondary-blue-inactive hover:bg-[#0084C6] hover:text-off-white'
              } px-6 py-2 font-semibold leading-[20px] whitespace-nowrap rounded-full transition-all duration-150 cursor-pointer`}
            >
              {option.tabName}
            </div>
          ))}
        </div>
      </div>
      {showTabData && (
        <div className="w-full md:px-[71px]">
          <div className="container mx-auto flex flex-col md:flex-row md:gap-6">
            {/* profile */}
            <div className="h-full md:shadow-megaMenu">
              <div className="flex flex-col md:rounded-[16px] overflow-hidden md:border-none">
                {/* profile image */}
                <div className="w-full min-h-[310px] md:w-[390px] bg-slate-500 max-h-[301px] md:max-h-[325px] relative">
                  <Image
                    src={showTabData.image}
                    width={800}
                    height={600}
                    alt=""
                    className="object-top w-full h-full object-cover absolute inset-0 aspect-[6,5]"
                  />
                </div>
                {/* content */}
                <div className="w-full px-6 py-8  md:py-6 flex flex-col gap-6 md:max-w-[390px] bg-[#FBFBFB] md:bg-off-white ">
                  <div className="w-full">
                    <Title
                      headingType="h3"
                      theme="dark"
                      tagline={showTabData?.name}
                      className="!text-primary-blue-new"
                    />
                    <p className="text-grey-9 text-base font-semibold leading-[24px]">
                      {showTabData.designation}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* divider */}
            <div className="bg-grey-3 w-full h-[1px] md:hidden " />
            {/* intro */}
            <div className="flex-1 py-[32px] md:py-[32px] px-6 md:px-10 bg-[#FBFBFB] md:bg-off-white md:rounded-[16px] flex flex-col gap-6 md:gap-8 md:shadow-megaMenu">
              <div className="w-full flex flex-col gap-2">
                {/* title */}
                <h5 className="text-primary-blue-new font-montserrat text-[18px] md:text-[20px] font-semibold leading-[20px] md:leading-[24px] ">
                  {showTabData.about.title}
                </h5>
                {/* content */}
                <div className="text-grey-9 font-base leading-[24px]">
                  <PortableText blocks={showTabData.about.description} />
                </div>
                {/* cta */}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

export default OurLeadership
