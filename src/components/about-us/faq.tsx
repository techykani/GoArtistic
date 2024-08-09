import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Accordion, AccordionTab } from 'primereact/accordion'

import clsx from 'clsx'
import PrimarySection from '../widgets/blocks/sections/primarySection'
import ReactPortableText from '../widgets/shared/reactPortableText'
import Link from 'next/link'

const FAQ = ({ tagline, title, description, cta, faqs }: any) => {
  const [showFAQ, setShowFAQ] = useState('')

  const handleFAQ = (id: any) => {
    if (showFAQ == id) return setShowFAQ('')
    setShowFAQ(id)
  }

  // Function to render the table from JSON data
  const renderTable = (tableData: any) => {
    // Extract headers dynamically (assuming headers are provided in the first row)
    const headers = tableData?.rows?.length > 0 ? tableData?.rows[0]?.cells : []

    console.log(headers, tableData.rows)

    return (
      <table className="table-auto w-full border-collapse border border-gray-200 mt-4">
        <thead>
          {headers && (
            <tr>
              {headers?.map((header: any, index: any) => (
                <th key={index} className="border border-gray-200 px-4 py-2">
                  {header}
                </th>
              ))}
            </tr>
          )}
        </thead>
        {tableData.rows && (
          <tbody>
            {tableData?.rows.slice(1).map((row: any) => (
              <tr key={row?._key}>
                {row?.cells?.map((cell: any, index: any) => (
                  <td key={index} className="border border-gray-200 px-4 py-2">
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        )}
      </table>
    )
  }

  return (
    <section className="px-6 py-12 md:py-[60px] bg-[#FEFEFE]">
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
                        <p

                          className="text-[#3C3C3C] text-[14px] md:text-[16px] font-semibold leading-[20px]"
                        >
                          {faq?.faqQuestion}
                        </p>
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
                        <div>
                          {faq?.faqAnswer?.map((block: any) => (
                            <div key={block?._key}>
                              {block?._type === 'block' && (
                                <ReactPortableText content={faq?.faqAnswer} />
                              )}
                              {block?._type === 'table' && renderTable(block)}
                            </div>
                          ))}
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

export default FAQ
