import { useState } from 'react'
import { SanityImg } from 'sanity-react-extra'
import { imageUrlBuilder } from '@/sanity'
import { useRouter } from 'next/router'
import { useWindowSize } from '@/lib/hooks'
import { LinkAngleRight } from '@/components/ui'
import clsx from 'clsx'
import { TabView, TabPanel } from 'primereact/tabview'
import ReactPortableText from '../widgets/shared/reactPortableText'
import EyeBrow from '../widgets/shared/eyeBrew'
import Title from '../widgets/shared/title'

export const Endoscopy: React.FC<any> = ({ title, description, tabs, classNameValues }) => {

  const windowWidth = useWindowSize()?.width ?? 0

  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <>
      <div className={`hidden xl:block bg-[#F1F6FF]  ${classNameValues}`}>
        <div
          className={`flex flex-col items-center justify-center ${windowWidth > 1550 ? 'container' : ''
            }`}
        >
          <div className="pb-8 pt-20 w-[805px]">
            <div className="w-full flex flex-col gap-4">
              {title && <Title headingType="h2" tagline={title} theme={"light"} className='!text-center' />}
              <div className="text-center">
                <div className="flex flex-col  justify-center">
                  <p className="text-base font-normal leading-6 text-grey-9">{description}</p>
                </div>
              </div>
            </div>

          </div>
          <div className="w-full px-[176px]">
            <div className="custom-tabview">
              <TabView
                scrollable
                activeIndex={activeIndex}
                onTabChange={(e: any) => {
                  setActiveIndex(e.index)
                }}
              >
                {tabs.map((tab: any, index: any) => {
                  return (
                    <TabPanel
                      className={`text-base font-semibold leading-5 rounded-3xl`}
                      key={index}
                      header={
                        <div
                          className={`px-6 py-2 mr-3 mb-8 rounded-full hover:text-off-white hover:bg-secondary-ocean ${activeIndex === index
                            ? 'bg-secondary-ocean text-off-white'
                            : 'bg-[#D6E7FF] text-[#0746A2] hover:bg-secondary-ocean hover:text-off-white'
                            }`}
                        >
                          {tab?.tabName}
                        </div>
                      }
                    >
                      <div className="w-full pb-20">
                        <div className="max-w-[805px] mx-auto flex flex-col md:flex-row gap-6">
                          <div className="md:min-w-[392px]">
                            <SanityImg
                              className="w-[392px] h-[326px] rounded-xl"
                              builder={imageUrlBuilder}
                              image={tab?.image}
                              alt="image"
                              loading="eager"
                              width={392}
                            />
                          </div>

                          <div className="md:pl-6 flex flex-col justify-center">
                            <div className="flex flex-col gap-4">
                              <h6 className="text-[28px] text-grey-dark font-semibold leading-9 tracking-[-0.28px]   w-[440px]">
                                {tab?.tabTitle}
                              </h6>
                              {tab?.tabDescription && (
                                // <p className="text-grey-9 text-base font-normal leading-6">
                                //   {tab?.tabDescription}
                                // </p>
                                <div className="mt-[-24px]">
                                  <ReactPortableText content={tab?.tabDescription} theme={"light"} />
                                </div>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    </TabPanel>
                  )
                })}
              </TabView>
            </div>
          </div>
        </div>
      </div>
      <div className={`xl:hidden block py-12 bg-[#F1F6FF] ${classNameValues}`}>
        <div className="">
          <div className="flex flex-col items-center justify-center px-6">
            <h1 className="font-semibold text-[28px] leading-[36px] text-primary-hmi-blue text-center tracking-[-0.28px]">
              {title}
            </h1>
            <p className="pt-4 text-base font-normal leading-6 text-grey-9 pb-6 text-center">
              {description}
            </p>
          </div>
          <div className="hide-tab-arrow">
            <TabView
              scrollable
              activeIndex={activeIndex}
              onTabChange={(e: any) => {
                setActiveIndex(e.index)
              }}
            >
              {tabs.map((tab: any, index: any) => {
                return (
                  <TabPanel
                    className={`text-base font-semibold leading-5 rounded-3xl`}
                    key={index}
                    header={
                      <div
                        className={`px-6 py-2 mr-3 rounded-full text-base leading-5 ${activeIndex === index
                          ? 'bg-secondary-ocean text-off-white'
                          : 'bg-[#0000000A] text-grey-dark'
                          }`}
                      >
                        {tab?.tabName}
                      </div>
                    }
                  >
                    <div className="px-6">
                      <div className="flex flex-col">
                        <div className="py-6">
                          <SanityImg
                            className="w-[392px] h-auto rounded-xl"
                            builder={imageUrlBuilder}
                            image={tab?.image}
                            alt="image"
                            loading="eager"
                            width={392}
                          />
                        </div>
                        <div>
                          <h6 className="text-[20px] text-grey-dark font-semibold leading-6 tracking-[-0.28px]">
                            {tab?.tabTitle}
                          </h6>
                          {tab?.tabDescription && (
                            <div className="mt-[-24px]">
                              <ReactPortableText content={tab?.tabDescription} theme={"light"} />
                            </div>
                          )}

                        </div>
                      </div>
                    </div>
                  </TabPanel>
                )
              })}
            </TabView>
          </div>
        </div>
      </div>
    </>
  )
}
