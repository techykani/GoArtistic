import { useState } from 'react'
import Title from '../widgets/shared/title'
import { SanityImg } from 'sanity-react-extra'
import { imageUrlBuilder } from '@/sanity'
import { setDate } from 'date-fns'
import tab from '@/studio/schemas/objects/medicalTravelAgents/tab'
import clsx from 'clsx'
import { LinkAngleRight } from '../ui'
import Image from 'next/image'
import { urlForImage } from '@/studio/lib/image'

const WellnessSection = ({ title, description, tabs, classNameValues }: any) => {
  const [selectedTab, setSelectedTab] = useState(tabs[0].tabName)
  const [data, setData] = useState(tabs[0])

  const handleTab = (option: any) => {
    setSelectedTab(option)
    if (option === tabs[0].tabName) setData(tabs[0])
    if (option === tabs[1].tabName) setData(tabs[1])
    if (option === tabs[2].tabName) setData(tabs[2])
  }
  return (
    <section className="bg-off-white py-12 md:py-20 px-6 md:px-[71px]">
      <div className="max-w-[1014px] mx-auto flex flex-col   gap-8 md:gap-12">
        <div className="max-w-[805px] mx-auto flex flex-col gap-4">
          <div className="flex justify-center">
            <Title headingType="h2" theme="light" tagline={title} className="text-center" />
          </div>
          <div className="text-center">
            <div className="flex flex-col  justify-center">
              <p className="text-base font-normal leading-6 text-grey-9">{description}</p>
            </div>
          </div>
        </div>

        <div className="w-full max-w-[805px] mx-auto flex flex-col md:flex-row gap-9 md:gap-6 items-center md:items-start">
          <div className="md:max-w-[320px]">
            <Image
              src={urlForImage(data?.image)?.url()}
              width={320}
              height={384}
              alt={data?.image?.alt ?? ''}
              className="aspect-[5/6] rounded-xl md:max-w-[320px]"
            />
          </div>

          <div className="lg:pl-6 flex flex-col gap-9 md:gap-4 container">
            <div className="pl-6 md:pl-0 flex gap-3 overflow-scroll snap-mandatory slider-body md:overflow-visible md:flex-wrap">
              {tabs.slice(0, 3).map(({ tabName, image, _key }: any) => (
                <p
                  onClick={() => handleTab(tabName)}
                  key={_key}
                  className={` ${
                    selectedTab == tabName
                      ? 'bg-[#0084C6] text-off-white'
                      : 'text-[#0746A2] bg-[#D6E7FF] hover:bg-[#0084C6] hover:text-off-white'
                  } font-semibold rounded-full cursor-pointer px-6 py-2 whitespace-nowrap transition-all duration-150`}
                >
                  {tabName}
                </p>
              ))}
            </div>

            <div className="flex flex-col gap-6">
              <ul className="pl-6 text-grey-9 text-base font-normal leading-6 list-disc">
                {data?.points &&
                  data?.points?.map((point: any, index: any) => (
                    <li key={index}>{point?.pointTitle}</li>
                  ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WellnessSection
