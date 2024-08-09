import clsx from 'clsx'

import { PortableText, imageUrlBuilder } from '@/sanity'
import { SanityImg } from 'sanity-react-extra'
import { useState } from 'react'
import { LinkAngleRight } from '@/components/ui'
import { serializers } from '@/lib/blockContent'
import Title from '@/components/widgets/shared/title'
import EyeBrow from '@/components/widgets/shared/eyeBrew'
import PrimarySection from '@/components/widgets/blocks/sections/primarySection'

export const HealthFAQ: React.FC<any> = ({ tagline, title, description, cta, faqs }) => {
  const [showFAQ, setShowFAQ] = useState('')

  const handleFAQ = (id: any) => {
    if (showFAQ == id) return setShowFAQ('')
    setShowFAQ(id)
  }
  return (
    <section className="px-6 py-12 md:py-[60px] bg-[#FEFEFE]">
      <div className="mx-auto max-w-[808px] flex flex-col gap-8">
        <PrimarySection
          title={tagline}
          tagline={title}
          logo=""
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
          {faqs.map((faq: any, i: any) => (
            <div
              onClick={() => handleFAQ(faq._key)}
              key={faq._key}
              className="bg-off-white flex w-full h-full rounded-r-[8px] relative shadow-level3 cursor-pointer"
            >
              <div className="border-[2px] border-primary-blue h-full absolute"></div>
              <div className="w-full p-6 flex flex-col gap-6">
                <div className="flex justify-between items-center">
                  <div className="text-[#3C3C3C] text-[14px] md:text-[16px] font-semibold leading-[20px]">
                    {faq?.faqQuestion}
                  </div>
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
                  <div className="text-grey-dark text-[16px] leading-[24px]">
                    <PortableText blocks={faq?.faqAnswer} serializers={serializers} />
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
