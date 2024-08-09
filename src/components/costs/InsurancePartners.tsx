import Title from '../widgets/shared/title'
import Image from 'next/image'
import { urlForImage } from '@/studio/lib/image'

import { TabView, TabPanel } from 'primereact/tabview'
import { useState } from 'react'
import Link from 'next/link'

export const InsurancePartners: React.FC<any> = ({ title, tagline, tabs, ctas }) => {
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <div className="bg-[#F1F6FF] px-6 md:px-[71px] w-full py-[48px] md:py-[80px] flex flex-col gap-8">
      <div className="container mx-auto flex flex-col gap-8">
        <div className="w-full md:max-w-[600px] flex flex-col gap-2 md:gap-4">
          <Title headingType="h2" theme="light" tagline={title} />
          <p className="text-grey-8 text-base leading-[24px]">{tagline}</p>
          <div className="flex gap-2 flex-col">
            {ctas &&
              ctas?.map((cta: any, index: number) => {
                return (
                  <Link
                    key={index}
                    href={cta.href ?? ''}
                    className="text-[16px] text-[#5A5A5A] font-semibold inline-flex gap-2"
                  >
                    {cta.text}
                    <div className="transition-all duration-150 group-hover:translate-x-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M14.8925 6.89459C15.283 6.50406 15.9162 6.50405 16.3067 6.89457L20.7052 11.2929C20.8927 11.4804 20.9981 11.7348 20.9981 12C20.9981 12.2652 20.8927 12.5196 20.7052 12.7071L16.3067 17.1056C15.9162 17.4961 15.283 17.4961 14.8925 17.1056C14.502 16.7151 14.502 16.0819 14.8925 15.6914L17.5839 13H3.99805C3.44576 13 2.99805 12.5523 2.99805 12C2.99805 11.4477 3.44576 11 3.99805 11H17.5838L14.8925 8.3088C14.502 7.91829 14.502 7.28512 14.8925 6.89459Z"
                          fill="#5A5A5A"
                        />
                      </svg>
                    </div>
                  </Link>
                )
              })}
          </div>
        </div>
      </div>
      <div className="container mx-auto">
        <div className="cc-tab hide-nav">
          <TabView
            scrollable
            activeIndex={activeIndex}
            onTabChange={(e: any) => {
              setActiveIndex(e.index)
            }}
          >
            {tabs?.map((tab: any, index: any) => {
              return (
                <TabPanel
                  className={`text-base font-semibold leading-5 rounded-3xl`}
                  key={index}
                  header={<div>{tab?.tabName}</div>}
                >
                  <div className="mt-5 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl3:grid-cols-6 gap-4 md:gap-6">
                    {tab?.options?.map((option: any, idx: any) => (
                      <div
                        className="bg-[#ECF1FB] rounded-xl flex items-center justify-center px-4 py-5"
                        key={idx}
                      >
                        <div>
                          {option?.image && (
                            <img
                              src={urlForImage(option?.image).url()}
                              alt={option?.image?.alt ?? 'image'}
                              loading="lazy"
                              className=" mx-auto"
                            />
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </TabPanel>
              )
            })}
          </TabView>
        </div>
      </div>
    </div>
  )
}
