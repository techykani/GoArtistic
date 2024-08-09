import React, { useState } from 'react'
import style from '@/styles/Home.module.css'

import AccordianCard from '@/components/homepage/accordianCard'
import EyeBrow from '@/components/widgets/shared/eyeBrew'

const MoreInsights: React.FC<any> = ({ title, insights, tagline, button }) => {
  const [active, setActive] = useState(insights[0]?._id)

  return (
    <section className="bg-[#FEFEFE] py-[48px] md:py-[80px] px-6 md:px-[72px]">
      <div className="container mx-auto flex flex-col gap-6 md:gap-8">
        <div>
          <EyeBrow theme="light" title={title} />
          <h2
            className={`text-[#0957CB] text-[26px]  md:text-[32px] font-bold leading-[32px] md:mt-2 md:leading-[38px] md:tracking-[0.32px] ${style.montserrat} max-w-[391px]`}
          >
            {tagline}
          </h2>
        </div>

        <div className="flex lg:flex-row flex-col min-h-[592px] gap-4">
          {insights?.slice(0, 3).map((card: any, index: any) => (
            <AccordianCard
              key={card._id}
              {...card}
              index={index}
              active={active}
              handleClick={setActive}
              gtag_event="select_content"
              gtag_content_name={card.title}
              gtag_content_type={title}
              gtag_cta_button="null"
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default MoreInsights
