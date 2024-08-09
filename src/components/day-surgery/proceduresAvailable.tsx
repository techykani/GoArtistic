import style from '@/styles/Home.module.css';
import { useState } from "react"
import PrimarySection from "../widgets/blocks/sections/primarySection"
import EyeBrow from "../widgets/shared/eyeBrew"
import ReactPortableText from "../widgets/shared/reactPortableText"
import Title from "../widgets/shared/title"
import Link from "next/link"

export const ProceduresAvailable = ({ tagline, title, description, cta, faqs }: any) => {
  const [showFAQ, setShowFAQ] = useState('')

  const handleFAQ = (id: any) => {
    if (showFAQ == id) return setShowFAQ('')
    setShowFAQ(id)
  }
  return (
    <section className="px-6 py-12 md:py-[60px] bg-[#F1F6FF]">
      <div className="mx-auto max-w-[808px] flex flex-col gap-8">
        <div className="w-full flex flex-col gap-4">
          {title && <h2
            className={`text-[#0957CB] text-[26px]  md:text-[32px] font-bold leading-[32px] md:leading-[38px] md:tracking-[0.32px] text-center whitespace-pre-line ${style.montserrat}`}
          >
            {title}
          </h2>}
          {description && (
            <div className="mt-[-24px]">
              <ReactPortableText content={description} theme={"light"} />
            </div>
          )}
        </div>
        <div className="flex flex-col gap-4">
          {faqs?.map((faq: any) => (
            <>
              {faq?.faqAnswer && <div
                onClick={() => handleFAQ(faq?._key)}
                key={faq?._key}
                className="bg-off-white flex w-full h-full rounded-r-[8px] relative shadow-level3"
              >
                <div className="border-[2px] border-primary-blue h-full absolute"></div>
                <div className="w-full p-4 md:p-6 flex flex-col gap-4">
                  <div className="flex justify-between items-center">
                    <p className="text-[#3C3C3C] text-[14px] md:text-[16px] font-semibold leading-[20px]">
                      {faq?.faqQuestion}
                    </p>
                    <div className="w-6 h-6">
                      {showFAQ == faq?._key ? (
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                          <path d="M15 12.5L10 7.5L5 12.5" stroke="#969696" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                      ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                          <path d="M5 7.5L10 12.5L15 7.5" stroke="#969696" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                      )}
                    </div>
                  </div>
                  {showFAQ == faq?._key && (
                    <div className="mt-[-24px]">
                      <ReactPortableText content={faq?.faqAnswer} />
                    </div>
                  )}
                </div>
              </div>}
            </>
          ))}
        </div>
      </div>

    </section >
  )
}
