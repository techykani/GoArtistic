import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Accordion, AccordionTab } from 'primereact/accordion'

import clsx from 'clsx'
import PrimarySection from '../widgets/blocks/sections/primarySection'
import ReactPortableText from '../widgets/shared/reactPortableText'
import Link from 'next/link'

const AccordionComponent = ({ faqQuestion, faqAnswer, expanded }: any) => {
  return (
    <>
      <div className="hidden xl:flex w-full">
        {' '}
        <motion.li className="gp__services-faq w-full" initial={false}>
          <AnimatePresence initial={false}>
            {faqQuestion && (
              <motion.ul
                key="content"
                initial="collapsed"
                animate="open"
                exit="collapsed"
                variants={{
                  open: { opacity: 1, height: 'auto' },
                  collapsed: { opacity: 0, height: 0 },
                }}
                transition={{ duration: 1, ease: [0.04, 0.62, 0.23, 0.98] }}
                className="bg-light-neutral  text-grey-dark w-full"
              >
                <div className="p-6 bg-[white] rounded-r-lg text-grey-dark text-[18px] leading-[22px] font-semibold border-l-4 border-primary-blue">
                  <AccordionTab header={faqQuestion}>
                    <div className="pt-6 text-grey-9 text-base font-normal leading-6">
                      {faqAnswer}
                    </div>
                  </AccordionTab>
                </div>
              </motion.ul>
            )}
          </AnimatePresence>
        </motion.li>
      </div>
      <div className="xl:hidden block">
        <motion.li className="gp__services-faq" initial={false}>
          <AnimatePresence initial={false}>
            {faqQuestion && (
              <motion.ul
                key="content"
                initial="collapsed"
                animate="open"
                exit="collapsed"
                variants={{
                  open: { opacity: 1, height: 'auto' },
                  collapsed: { opacity: 0, height: 0 },
                }}
                transition={{ duration: 1, ease: [0.04, 0.62, 0.23, 0.98] }}
                className="bg-light-neutral  text-grey-dark"
              >
                <div className="p-6 bg-[white] rounded-r-lg text-primary-blue text-base leading-6 font-semibold border-l-4 border-primary-blue">
                  <Accordion
                    expandIcon={
                      <img src="/faq_down.svg" alt="down" className="ml-4 h-4 w-4 flex-shrink-0" />
                    }
                    collapseIcon={
                      <img src="/faq_up.svg" alt="down" className="ml-4 h-4 w-4 flex-shrink-0" />
                    }
                  >
                    <AccordionTab
                      header={
                        <div className="text-base text-grey-dark leading-5">{faqQuestion}</div>
                      }
                    >
                      <div className="py-6 text-grey-darkest text-base font-normal leading-6 mr-4">
                        {faqAnswer}
                      </div>
                    </AccordionTab>
                  </Accordion>
                </div>
              </motion.ul>
            )}
          </AnimatePresence>
        </motion.li>
      </div>
    </>
  )
}

export const FAQ = ({ tagline, title, description, cta, faqs }: any) => {
  const [showFAQ, setShowFAQ] = useState('')

  const handleFAQ = (id: any) => {
    if (showFAQ == id) return setShowFAQ('')
    setShowFAQ(id)
  }
  return (
    <section className="px-6 py-12 md:py-[60px] bg-[#F1F6FF]">
      <div className="mx-auto max-w-[808px] flex flex-col gap-8">
        <PrimarySection
          title={tagline}
          tagline={title}
          logo={''}
          description={description}
          link={cta}
          target="_self"
          btnType="tertiary"
          arrowVisibility={true}
          theme="light"
          customStyle=""
          size="medium"
          arrowColor="black"
        />
        <div className="flex flex-col gap-4">
          {faqs.map((faq: any) => (
            <>
              {faq?.faqAnswer && (
                <div
                  onClick={() => handleFAQ(faq._key)}
                  key={faq._key}
                  className="bg-off-white flex w-full h-full rounded-r-[8px] relative shadow-level3"
                >
                  <div className="border-[2px] border-primary-blue h-full absolute"></div>
                  <div className="w-full p-4 md:p-6 flex flex-col gap-4">
                    <div className="flex flex-col justify-between items-center">
                      <div className="flex justify-between items-center w-full">
                        <Link
                          href={faq?.faqQuestionCTA ?? ''}
                          className="text-[#3C3C3C] text-[14px] md:text-[16px] font-semibold leading-[20px]"
                        >
                          {faq?.faqQuestion}
                        </Link>
                        <div className="w-6 h-6">
                          {showFAQ == faq._key ? (
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
                      {showFAQ == faq._key && (
                        <div className="mt-[-22px]">
                          <ReactPortableText content={faq?.faqAnswer} />
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              )}
            </>
          ))}
        </div>
      </div>
    </section>
  )
}
