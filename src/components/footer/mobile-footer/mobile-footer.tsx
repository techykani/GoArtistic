import { useRouter } from 'next/router'
import { Accordion, AccordionTab } from 'primereact/accordion'
import { useWindowSize } from '@/lib/hooks'
import { useWindowScroll } from '@/lib/hooks'
import Link from 'next/link'
import { SanityImg } from 'sanity-react-extra'
import { imageUrlBuilder, PortableText } from '@/sanity'
import clsx from 'clsx'
import { FiChevronDown, FiChevronUp } from 'react-icons/fi'
import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import BtnWithArrow from '@/components/widgets/shared/buttons/button/btnWithArrow'
// import { LanguageSwitcher } from '../common/languageSwitcher'
import { GTAEvent } from '@/lib/gtag'
import { isEmpty } from 'lodash'

const TRANSITIONS = {
  toggleable: {
    enterFromClass: 'max-h-0',
    enterActiveClass: 'overflow-hidden transition-all duration-500 ease-in-out',
    enterToClass: 'max-h-40	',
    leaveFromClass: 'max-h-40',
    leaveActiveClass: 'overflow-hidden transition-all duration-500 ease-in',
    leaveToClass: 'max-h-0',
  },
}

export const MobileFooter: React.FC<any> = ({
  data: { cta, logo, address, downloadAppLink, footerBottom, footerSections },
  primaryMenu,
  secondaryMenu,
}) => {
  const router = useRouter()
  const windowWidth = useWindowSize()?.width ?? 0
  const scroll = useWindowScroll()?.y ?? 0

  const [activeIndex, setActiveIndex] = useState(Number)

  const handleTabChange = (index: number) => {
    setActiveIndex(index)
  }

  const handleButton = (gtag_event: any, menu_name: any, menu_list: any, menu_location: any) => {
    GTAEvent(gtag_event, {
      menu_name: menu_name !== '' ? menu_name : null,
      menu_list: menu_list !== '' ? menu_list : null,
      menu_location: menu_location !== '' ? menu_location : null,
    })
  }

  return (
    <>
      {windowWidth < 1200 && (
        <footer className="relative  block bottom-0 w-full z-30 py-8 px-6 bg-[#004E89] text-white-700 ">
          {/* border-primary-green border-t-4 */}
          <div>
            {logo && (
              <SanityImg
                builder={imageUrlBuilder}
                image={logo}
                width={100}
                className={clsx('transition-all duration-300 w-[100px] relative pb-8')}
                alt={'logo'}
                title={'logo'}
                height={100}
              />
            )}

            <Accordion
              expandIcon={<FiChevronDown className="h-6 w-6 flex-shrink-0" />}
              collapseIcon={<FiChevronUp className="h-6 w-6 flex-shrink-0" />}
            >
              {footerSections &&
                footerSections?.map((section: any, index: any) => {
                  return (
                    <AccordionTab
                      header={
                        <div
                          className={`py-3 font-semibold text-base text-off-white footer leading-[20px]`}
                        >
                          {section?.sectionTitle}
                        </div>
                      }
                      key={index}
                    >
                      <div className="text-base text-[#FBFBFB] font-normal">
                        {section?.subSections &&
                          section?.subSections?.map((subSection: any, subSectionIndex: any) => {
                            return (
                              <Link
                                href={`${
                                  subSection?.subsectionURL ? subSection?.subsectionURL : ''
                                }`}
                                key={subSectionIndex}
                                onClick={() => {
                                  handleButton(
                                    'menu',
                                    section?.sectionTitle,
                                    subSection?.subsectionTitle,
                                    'Footer Menu',
                                  )
                                }}
                              >
                                <div className="pb-4 text-sm text-opacity-50" key={subSectionIndex}>
                                  {subSection?.subsectionTitle}
                                </div>
                              </Link>
                            )
                          })}
                      </div>
                    </AccordionTab>
                  )
                })}
            </Accordion>
          </div>

          <div className="flex flex-col pt-6">
            {address && (
              <div className="font-semibold text-base text-off-white">
                <h6 className="text-opacity-50">{address?.title}</h6>
                <ul className="text-sm text-off-white  font-normal pt-4">
                  {address?.iconLinks?.map((data: any, index: any) => {
                    return (
                      <>
                        {data?.link?.href && (
                          <Link
                            className="first:pt-0 pt-3 flex items-start"
                            href={`${data?.link?.href ? data?.link?.href : ''}`}
                            key={index}
                          >
                            <li className="flex  items-start">
                              <SanityImg
                                builder={imageUrlBuilder}
                                image={data.icon}
                                alt={'icon'}
                                className="w-5 h-auto"
                                width={20}
                                height={20}
                              />
                              <span className="pl-2">{data?.link?.text}</span>
                            </li>
                          </Link>
                        )}
                        {isEmpty(data?.link?.href) && (
                          <li className="first:pt-0 pt-3 flex items-start" key={index}>
                            <span className="flex  items-start">
                              <SanityImg
                                builder={imageUrlBuilder}
                                image={data.icon}
                                alt={'icon'}
                                className="w-5 h-auto"
                                width={20}
                                height={20}
                              />
                              <span className="pl-2">{data?.link?.text}</span>
                            </span>
                          </li>
                        )}
                      </>
                    )
                  })}
                  {/* //{' '}
              <li>
                //{' '}
                <button className="border-2 py-[12px] px-[24px] border-white rounded text-white">
                  // Contact Us //{' '}
                </button>
                //{' '}
              </li> */}

                  {cta && (
                    <li className="w-full flex mt-6">
                      <BtnWithArrow
                        link={cta}
                        target={'_self'}
                        rel=""
                        btnType={'secondary'}
                        arrowVisibility={true}
                        theme="dark"
                        customStyle="rounded-full"
                        size="small"
                        arrowColor="white"
                        gtag_event="select_content"
                        gtag_content_name={''}
                        gtag_content_type={''}
                        gtag_cta_button={''}
                      />
                    </li>
                  )}
                </ul>
              </div>
            )}
          </div>
          {/* {downloadAppLink && (
            <div className=" mt-6">
              <h6 className="font-semibold text-base text-center text-off-white pb-6">
                {downloadAppLink?.title}
              </h6>
              <ul className="flex justify-center text-base text-off-white  font-normal">
                {downloadAppLink?.iconLinks?.map((data: any, index: any) => {
                  return (
                    <li className="mr-3" key={index}>
                      <SanityImg
                        builder={imageUrlBuilder}
                        image={data.icon}
                        alt={'icon'}
                        className="w-[170px] h-[47px]"
                        width={144}
                        height={47}
                      />
                    </li>
                  )
                })}
              </ul>
            </div>
          )} */}
          <hr className="pb-8 mt-8" />

          <div className="text-center">
            <div className="flex font-normal text-base text-off-white justify-center">
              {footerBottom &&
                footerBottom?.map((data: any, index: any) => {
                  return (
                    <div className="flex justify-center" key={index}>
                      {data?._type === 'iconAndLink' && (
                        <div className="flex justify-center items-center">
                          <a
                            className="flex justify-center items-center"
                            target="_blank"
                            rel="noopener noreferrer"
                            href={data?.href ?? ''}
                          >
                            {data?.icon && (
                              <SanityImg
                                builder={imageUrlBuilder}
                                image={data?.icon}
                                alt={'icon'}
                                className="pr-2 w-auto h-[25px]"
                              />
                            )}
                            <span className=" text-off-white text-sm">{data?.title}</span>
                          </a>
                          {index !== footerBottom?.length - 2 && (
                            <div className="px-4">
                              <span className="block text-off-white w-[5px] h-[5px] bg-off-white rounded-full"></span>
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                  )
                })}
            </div>
            <div className="font-normal text-sm text-off-white justify-center">
              <div className="flex flex-wrap justify-center space-x-[20px] ">
                {footerBottom &&
                  footerBottom?.map(
                    (data: any, index: any) =>
                      data?.icon === null && (
                        <div
                          className={`justify-center items-center ${
                            index === footerBottom.length - 1
                              ? ' pt-6 col-span-2'
                              : 'col-span-1 pt-6'
                          }`}
                          key={index}
                        >
                          {data?.text}
                        </div>
                      ),
                  )}
              </div>
            </div>
          </div>
        </footer>
      )}
    </>
  )
}
