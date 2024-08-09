import React, { useState } from 'react'
import AccordianCard from '@/components/ui/accordian-card'
import PrimarySectionHorizontal from '../widgets/blocks/sections/primarySectionHorizontal'
import BtnWithArrow from '../widgets/shared/buttons/button/btnWithArrow'

export const EventHighlights: React.FC<any> = ({ title, tagline, description, media, cta }) => {
  const [active, setActive] = useState(media[0]?._id)

  return (
    <section className=" py-[48px] md:py-[80px] px-6 md:px-[71px] blue-gradient_bg">
      <div className="container mx-auto flex flex-col gap-8">
        <PrimarySectionHorizontal
          title={title}
          tagline={tagline}
          description={description}
          target="_self"
          btnType="tertiary"
          arrowVisibility={true}
          theme="dark"
          customStyle=""
          size="medium"
          arrowColor="white"
        />
        <div className="flex lg:flex-row flex-col min-h-[600px] lg:min-h-[65vh] gap-4">
          {media?.slice(0, 3).map((card: any, index: any) => (
            <AccordianCard
              key={card._key}
              {...card}
              index={index}
              active={active}
              handleClick={setActive}
            />
          ))}
        </div>
        <div className="w-full flex justify-center">
          <BtnWithArrow
            link={cta}
            target="_self"
            rel=""
            btnType="primary"
            arrowVisibility={true}
            theme="dark"
            customStyle=""
            size="medium"
            arrowColor="blue"
            gtag_event="select_content"
            gtag_content_name={tagline}
            gtag_content_type={title}
            gtag_cta_button={cta}
          />
        </div>
      </div>
    </section>
  )
}
