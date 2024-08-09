import { useState } from 'react'
import { SanityImg } from 'sanity-react-extra'
import { imageUrlBuilder } from '@/sanity'
import { useRouter } from 'next/router'
import { useWindowSize } from '@/lib/hooks'
import { LinkAngleRight } from '@/components/ui'
import clsx from 'clsx'
import { TabView, TabPanel } from 'primereact/tabview'
import ReactPortableText from '../widgets/shared/reactPortableText'
import BtnWithArrow from '../widgets/shared/buttons/button/btnWithArrow'

export const EnterpriceSolutions: React.FC<any> = ({ title, description, tabs, classNameValues }) => {
  const router = useRouter()
  const windowWidth = useWindowSize()?.width ?? 0

  const [activeIndex, setActiveIndex] = useState(0)
  console.log(title, 'l')
  return (
    <>
      <div className={`hidden xl:block  ${classNameValues}`}>
        <div
          className={`flex flex-col items-center justify-center ${windowWidth > 1550 ? 'container' : ''
            }`}
        >
          <div className="pb-8 pt-20 w-[805px]">
            <div className="flex justify-center">
              <h1 className="pb-4 font-semibold text-4xl text-primary-hmi-blue leading-[44px] tracking-[-0.36px]">
                {title}
              </h1>
            </div>
            <div className="text-center">
              <div className="flex flex-col  justify-center">
                <p className="text-base font-normal leading-6 text-grey-9">{description}</p>
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

                          <div className="md:pl-6 flex flex-col max-w-[392px]">
                            <div className="flex flex-col gap-4">
                              <div className='flex flex-col gap-2'>
                                <h6 className="text-grey-dark text-[18px] font-semibold leading-[22px] w-[440px]">
                                  {tab?.title}
                                </h6>
                                {tab?.description && (
                                  <div className="text-grey-9 text-base font-normal leading-6 mt-[-24px]">
                                    <ReactPortableText content={tab?.description} customClass='' />
                                  </div>
                                )}
                              </div>
                              <div className='flex flex-col gap-[10px]'>
                                <h6 className="text-[#5A5A5A] text-[16px] font-semibold leading-[24px]">
                                  {tab?.subtitle}
                                </h6>
                                {tab?.subDescription && (
                                  <div className="text-grey-9 text-base font-normal leading-6 mt-[-24px]">
                                    <ReactPortableText content={tab?.subDescription} customClass='' />
                                  </div>
                                )}
                              </div>
                              {tab?.cta?.text && (
                                <div className="w-full">
                                  <BtnWithArrow
                                    link={tab?.cta}
                                    target='_self'
                                    rel=""
                                    btnType="tertiary"
                                    arrowVisibility={true}
                                    theme="light"
                                    customStyle=''
                                    size="medium"
                                    arrowColor="black"
                                    gtag_event="select_content"
                                    gtag_content_name={description}
                                    gtag_content_type={title}
                                    gtag_cta_button={tab?.cta?.text}
                                  />
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
      <div className={`xl:hidden block py-12 ${classNameValues}`}>
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
                        <div className='flex flex-col gap-4'>
                          <div className='flex flex-col gap-2'>
                            <h6 className="text-grey-dark text-[18px] font-semibold leading-[22px] w-[440px]">
                              {tab?.title}
                            </h6>
                            {tab?.description && (
                              <div className="text-grey-9 text-base font-normal leading-6 mt-[-24px]">
                                <ReactPortableText content={tab?.description} customClass='' />
                              </div>
                            )}
                          </div>
                          <div className='flex flex-col gap-[10px]'>
                            <h6 className="text-[#5A5A5A] text-[16px] font-semibold leading-[24px]">
                              {tab?.subtitle}
                            </h6>
                            {tab?.subDescription && (
                              <div className="text-grey-9 text-base font-normal leading-6 mt-[-24px]">
                                <ReactPortableText content={tab?.subDescription} customClass='' />
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
    </>
  )
}
