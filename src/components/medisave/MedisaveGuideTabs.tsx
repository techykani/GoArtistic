import { TabPanel, TabView } from 'primereact/tabview'
import ReactPortableText from '../widgets/shared/reactPortableText'
import { useState } from 'react'

export const MedisaveGuideTabs: React.FC<any> = ({ tabs }) => {
  const [activeIndex, setActiveIndex] = useState(0)

  const [showFAQ, setShowFAQ] = useState('')

  const handleFAQ = (id: any) => {
    if (showFAQ == id) return setShowFAQ('')
    setShowFAQ(id)
  }

  return (
    <div className="pt-10 pb-20 bg-[#f1f6ff] px-6">
      <div className="mx-auto max-w-[800px]">
        <div className="custom-tabview cc-tabview">
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
                  className={`text-base leading-5 rounded-3xl`}
                  key={index}
                  header={
                    <div
                      className={`px-6 py-3 mr-6 mb-6 rounded-full hover:text-off-white hover:bg-secondary-ocean ${
                        activeIndex === index
                          ? 'bg-secondary-ocean text-off-white'
                          : 'bg-[#D6E7FF] text-[#0746A2] hover:bg-secondary-ocean hover:text-off-white'
                      }`}
                    >
                      <span className="font-semibold">{tab?.tabName}</span>
                    </div>
                  }
                >
                  {' '}
                  <div className="flex flex-col gap-4">
                    {tab?.faqs?.map((faq: any) => (
                      <>
                        {faq?.faqAnswer && (
                          <div
                            onClick={() => handleFAQ(faq?._key)}
                            key={faq?._key}
                            className="bg-off-white flex w-full h-full rounded-r-[8px] relative shadow-level3"
                          >
                            <div className="border-[2px] border-primary-blue h-full absolute"></div>
                            <div className="w-full p-4 md:p-6 flex flex-col gap-4">
                              <div className="flex justify-between items-center cursor-pointer">
                                <span className="text-[#3C3C3C] text-[14px] md:text-[16px] font-semibold leading-[20px]">
                                  {faq?.faqQuestion}
                                </span>
                                <div className="w-6 h-6">
                                  {showFAQ == faq?._key ? (
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
                              {showFAQ == faq?._key && (
                                <div className="mt-[-24px] ms-guide-tab">
                                  <ReactPortableText content={faq?.faqAnswer} />
                                </div>
                              )}
                            </div>
                          </div>
                        )}
                      </>
                    ))}
                    {tab?.faqDescription && <ReactPortableText content={tab?.faqDescription} />}
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
