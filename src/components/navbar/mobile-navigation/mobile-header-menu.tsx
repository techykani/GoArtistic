import { Dispatch, SetStateAction, useEffect, useState } from 'react'
import { Accordion, AccordionTab } from 'primereact/accordion'
import { FiChevronUp, FiChevronRight } from 'react-icons/fi'
import Link from 'next/link'
import clsx from 'clsx'
import { motion, AnimatePresence } from 'framer-motion'
import { isEmpty } from 'lodash'
import { GTAEvent } from '@/lib/gtag'

export const MobileHeaderMenu = ({
  data,
  setNavbarActive,
  listingItems,
}: {
  data: any
  setNavbarActive: Dispatch<SetStateAction<boolean>>
  listingItems: any
}) => {
  const [expanded, setExpanded] = useState<false | number>(-1)

  const handleTopBarButton = (gtag_event: any, menu_list: any, menu_location: any) => {
    GTAEvent(gtag_event, {
      menu_list: menu_list !== '' ? menu_list : null,
      menu_location: menu_location !== '' ? menu_location : null,
    })
  }

  const bookAppointment = listingItems?.filter(
    (item: any) => item.menuTitle === 'Book an Appointment',
  )

  return (
    <ul className="bg-primary-blue-new">
      <div>
        <Link href={bookAppointment[0]?.menuHref}>
          <h1 className="flex items-center h-[60px] px-6 bg-[#008AD8] text-off-white text-base">
            {bookAppointment[0]?.menuTitle}
          </h1>
        </Link>
      </div>

      {/* <Accordion
        expandIcon={<FiChevronRight className="h-6 w-6 flex-shrink-0" />}
        collapseIcon={<FiChevronUp className="h-6 w-6 flex-shrink-0" />}
      >
        {listingItems &&
          listingItems?.slice(0, 3).map((section: any, index: any) => {
            return (
              <AccordionTab
                header={
                  <div
                    className={`py-3 h-[60px] px-6 font-semibold text-base text-off-white footer leading-[20px]`}
                  >
                    <Link
                      href={section?.menuHref}
                      onClick={() => {
                        handleTopBarButton('menu', data?.menuTitle, 'Sticky Bar')
                        setNavbarActive(false)
                      }}
                    >
                      {section?.menuTitle}
                    </Link>
                  </div>
                }
                key={index}
              >
                <div className="text-base text-[#FBFBFB] font-normal">
                  {section?.submenuList &&
                    section?.submenuList?.map((subSection: any, subSectionIndex: any) => {
                      return (
                        <Link
                          href={`${subSection?.href ? subSection?.href : ''}`}
                          key={subSectionIndex}
                          onClick={() => {
                            handleTopBarButton('menu', subSection?.title, 'Sticky Bar')
                            setNavbarActive(false)
                          }}
                          className="h-[300px] overflow-y-scroll"
                        >
                          <div className="pb-4 text-sm text-opacity-50 px-6 " key={subSectionIndex}>
                            {subSection?.title}
                          </div>
                        </Link>
                      )
                    })}
                </div>
              </AccordionTab>
            )
          })}
      </Accordion> */}
    </ul>
  )
}
