import { useState } from 'react'
import ReactPortableText from '../widgets/shared/reactPortableText'
import Title from '../widgets/shared/title'
import { divide, isEmpty } from 'lodash'
import { GTAEvent } from '@/lib/gtag'
import { useWindowSize } from '@/lib/hooks'
import Image from 'next/image'
import { urlForImage } from '@/studio/lib/image'
import Link from 'next/link'
import style from '@/styles/Home.module.css'
import { PlanComparison } from './comparison'

export const Membership = (props: any) => {
  const { description, tagline, membershipPlans } = props
  // console.log(membershipPlans[0]?.benefits[0]?.benefit?.downloadableContents?.pdfFile, 'pf')
  const [selectedTab, setSelectedTab] = useState(!isEmpty(membershipPlans) && membershipPlans[0])

  const windowWidth = useWindowSize()?.width ?? 0

  const handleDownload = (link: any) => {
    fetch(link)
      .then((response) => response.blob())
      .then((blob) => {
        const url = window.URL.createObjectURL(blob)
        const link = document.createElement('a')
        link.href = url
        link.setAttribute('download', 'member-rates.pdf') // Specify the desired filename
        document.body.appendChild(link)
        link.click()
        link.remove()
      })
      .catch((error) => console.error('Error downloading the PDF:', error))
  }

  return (
    <div className="w-full bg-[#FEFEFE] py-12 md:py-20 flex flex-col gap-6">
      <div className="px-6 md:px-[71px]">
        <div className="max-w-[1016px] mx-auto ">
          <div className="w-full max-w-[600px] flex flex-col gap-[8px]">
            {tagline && <Title tagline={tagline} headingType="h2" theme="light" />}
            {description && <div className="mt-[-24px]">
              <ReactPortableText content={description} />
            </div>}
          </div>
        </div>
      </div>
      {windowWidth < 768 && (
        <>
          <div className="relative">
            <div className="flex gap-1 px-6 lg:px-0 sm:justify-center overflow-scroll sm:overflow-visible relative">
              {membershipPlans?.map((tab: any) => (
                <div key={tab?._key} className="flex flex-col">
                  <div
                    onClick={() => {
                      GTAEvent('view_content', {
                        content_name: tab?.planName,
                        content_type: tab?.planName,
                      })
                      setSelectedTab(tab)
                    }}
                    className="flex flex-col min-w-[154px] cursor-pointer font-semibold"
                  >
                    <div
                      className={`py-3 text-center px-6 whitespace-nowrap ${tab?._key === selectedTab?._key ? 'text-[#0084C6]' : 'text-[#6E6E6E]'
                        }`}
                    >
                      {tab?.planName}
                    </div>
                    <div
                      className={`h-[4px] w-full ${tab?._key === selectedTab?._key && 'bg-[#0084C6]'
                        } `}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div
            className="w-full px-6 md:px-[71px] overflow-scroll
      "
          >
            <div className="max-w-[1016px] min-w-[312px]  mx-auto rounded-lg">
              <div
                className={`w-full px-[36px] py-[32px] ${selectedTab?.planName == 'Silver' ? 'hmiOne_table_silver' : 'hmiOne_table_gold'
                  } rounded-t-lg flex flex-col gap-5 ${selectedTab?.planName === 'Silver' ? 'text-[#3C3C3C]' : 'text-[#FEFEFE]'
                  }`}
              >
                <p className={` text-[28px] font-semibold leading-[36px] tracking-[-0.28px]`}>
                  {selectedTab?.planName}
                </p>
                <div className="w-full flex gap-[35px]">
                  {/* <div className="flex flex-col gap-[4px]">
                    <p className=" text-[14px] leading-[160%]">
                      {selectedTab?.price?.usualPrice?.title}
                    </p>
                    <p className=" text-[28px] font-semibold leading-[36px] tracking-[-0.28px] line-through">
                      {selectedTab?.price?.usualPrice?.priceValue}
                    </p>
                  </div> */}
                  <div className="flex flex-col gap-[4px]">
                    <p className=" text-[14px] leading-[160%]">
                      {selectedTab?.price?.limitedTimePrice?.title}
                    </p>
                    <p className=" text-[28px] font-semibold leading-[36px] tracking-[-0.28px]">
                      {selectedTab?.price?.limitedTimePrice?.priceValue}
                    </p>
                  </div>
                </div>
              </div>
              {selectedTab?.benefits?.map((benefit: any) => (
                <>
                  {benefit?.benefit?.subtitle && (
                    <div
                      key={benefit?._key}
                      className="p-6 flex items-center gap-4 border border-b-[#E6E6E6] last:rounded-b-lg"
                    >
                      {benefit?.icon && (
                        <div className="w-[48px] h-[48px] shrink-0">
                          <Image
                            className=""
                            src={urlForImage(benefit?.icon).url()}
                            alt={benefit?.icon ?? ''}
                            width={48}
                            height={48}
                          />
                        </div>
                      )}
                      {benefit?.benefit?.subtitle && (
                        <div className="">
                          {benefit?.benefit?.subtitle && (
                            <p className="text-[#212932] text-[14px] font-medium leading-[140%]">
                              {benefit?.benefit?.subtitle}
                            </p>
                          )}
                          {benefit?.benefit?.description && (
                            <p className="text-[#373E46] text-[14px] leading-[140%]">
                              {benefit?.benefit?.description}
                            </p>
                          )}
                          {benefit?.benefit?.downloadableContents?.pdfFile && (
                            <div className="flex">
                              <button
                                onClick={() =>
                                  handleDownload(benefit?.benefit?.downloadableContents?.pdfFile)
                                }
                                className="flex gap-2 items-center px-[8px] h-6 bg-[#EBF2FF] rounded"
                              >
                                <div className="w-[11.375px] h-[11.375px]">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="12"
                                    height="12"
                                    viewBox="0 0 12 12"
                                    fill="none"
                                  >
                                    <path
                                      fill-rule="evenodd"
                                      clip-rule="evenodd"
                                      d="M0.4375 8.1875C0.679125 8.1875 0.875 8.38338 0.875 8.625V9.9375C0.875 10.4207 1.26675 10.8125 1.75 10.8125H9.625C10.1082 10.8125 10.5 10.4207 10.5 9.9375V8.625C10.5 8.38338 10.6959 8.1875 10.9375 8.1875C11.1791 8.1875 11.375 8.38338 11.375 8.625V9.9375C11.375 10.904 10.5915 11.6875 9.625 11.6875H1.75C0.783502 11.6875 0 10.904 0 9.9375V8.625C0 8.38338 0.195875 8.1875 0.4375 8.1875Z"
                                      fill="#0957CB"
                                    />
                                    <path
                                      d="M5.99686 8.93436C5.826 9.10521 5.54899 9.10521 5.37814 8.93436L2.75314 6.30936C2.58229 6.1385 2.58229 5.8615 2.75314 5.69064C2.924 5.51979 3.201 5.51979 3.37186 5.69064L5.25 7.56878L5.25 0.75C5.25 0.508376 5.44588 0.3125 5.6875 0.3125C5.92912 0.3125 6.125 0.508376 6.125 0.75L6.125 7.56878L8.00314 5.69064C8.174 5.51979 8.451 5.51979 8.62186 5.69064C8.79271 5.8615 8.79271 6.13851 8.62186 6.30936L5.99686 8.93436Z"
                                      fill="#0957CB"
                                    />
                                  </svg>
                                </div>
                                <p
                                  className={`${style.montserrat} text-[#0957CB] text-[10px] font-semibold leading-[11px] tracking-[1px] uppercase`}
                                >
                                  {benefit?.benefit?.downloadableContents?.text}
                                </p>
                              </button>
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                  )}
                </>
              ))}
            </div>
          </div>
        </>
      )}
      {windowWidth >= 768 && <PlanComparison membershipPlans={membershipPlans} />}
    </div>
  )
}
