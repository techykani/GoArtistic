import { Tagline } from '@/components/ui'
import React, { useState } from 'react'
import clsx from 'clsx'
import { AnimatePresence, motion } from 'framer-motion'
import { ChevronIconVarient, QuestionTextVarient } from 'src/animations/accordion-common'

interface FAQ {
  _key: string
  _type: string
  ans: string
  qus: string
}

export interface FaqProps {
  type: string
  faqs: FAQ[]
  title: string
}

export const Faq: React.FC<FaqProps> = ({ faqs, title }) => {
  const [selectedAccordionIndex, setSelectAccordionIndex] = useState<null | number>(0)

  return (
    <section className="2xl:max-w-5xl max-w-4xl sm:mx-auto mx-6 pt-16 lg:pt-14">
      <Tagline className="text-center">{title}</Tagline>

      <ul className="flex flex-col divide-y divide-copper-70 mt-6 lg:mt-10 mb-10 lg:mb-20">
        {faqs?.map(({ _key, ans, qus }, idx) => (
          <motion.li
            className="py-5 px-0 group"
            key={_key}
            onClick={() => setSelectAccordionIndex((prev) => (prev === idx ? null : idx))}
          >
            <div className="flex justify-start items-start">
              <motion.h4
                animate={idx === selectedAccordionIndex ? 'active' : 'inactive'}
                variants={QuestionTextVarient}
                className={clsx(
                  'text-head-4 cursor-pointer group-hover:!text-link transition-colors duration-300 felx-1 pr-2',
                )}
              >
                {qus}
              </motion.h4>
              <motion.img
                animate={idx === selectedAccordionIndex ? 'active' : 'inactive'}
                variants={ChevronIconVarient}
                className="ml-auto mt-2"
                src="/icons/chevron.svg"
                alt="chevron icon"
              />
            </div>
            <AnimatePresence>
              {idx === selectedAccordionIndex && (
                <motion.p
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{
                    opacity: {
                      duration: 0.2,
                    },
                  }}
                  className="text-neutral-700 mt-2"
                >
                  {ans}
                </motion.p>
              )}
            </AnimatePresence>
          </motion.li>
        ))}
      </ul>
    </section>
  )
}
