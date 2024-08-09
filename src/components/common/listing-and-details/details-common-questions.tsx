import React, { useState } from 'react'
import clsx from 'clsx'
import { AnimatePresence, motion } from 'framer-motion'
import { PortableText } from '@/sanity'
import { ScrollspySection } from '@/lib/types/detailsPagesTypes'
import { serializers } from '@/lib/blockContent'

interface Props {
  section: ScrollspySection
}

const QuestionTextVarient = {
  active: {
    color: '#A78148',
  },
  inactive: {
    color: '#212932',
  },
}

const ChevronIconVarient = {
  active: {
    rotate: 0,
    color: '#A78148',
  },
  inactive: {
    rotate: 180,
    color: '#212932',
  },
}

export const DetailsCommonQuestions: React.FC<Props> = ({
  section: { commonQuestions, title, description },
}) => {
  const [selectedAccordionIndex, setSelectAccordionIndex] = useState<null | number>(0)
  return (
    <>
      <h2 className="text-left font-medium lg:text-head-2 text-res-head-2 text-neutral-700 mb-4">
        {title}
      </h2>
      <div className="h-1 bg-copper-100 w-[88px]" />
      {description && (
        <div className="text-left text-neutral-700 mt-8">
          <PortableText blocks={description} serializers={serializers} />
        </div>
      )}
      <ul className="flex flex-col mt-8 ">
        {commonQuestions.map(({ _key, answer, question }, idx) => (
          <motion.li
            className="py-5 group cursor-pointer border-b border-copper-100 "
            key={_key}
            onClick={() => setSelectAccordionIndex((prev) => (prev === idx ? null : idx))}
          >
            <div className="flex justify-start items-start">
              <motion.h4
                animate={idx === selectedAccordionIndex ? 'active' : 'inactive'}
                variants={QuestionTextVarient}
                className={clsx(
                  'text-head-4 cursor-pointer group-hover:!text-link transition-colors duration-300 felx-1 pr-2',
                  idx === selectedAccordionIndex ? 'font-bold' : 'font-medium',
                )}
              >
                {question}
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
                <motion.div
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
                  <PortableText blocks={answer} serializers={serializers} />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.li>
        ))}
      </ul>
    </>
  )
}
