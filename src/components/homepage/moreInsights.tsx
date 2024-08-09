import React, { useState } from 'react'
import style from '@/styles/Home.module.css'
import { LinkAngleRightBtn } from '../ui/link-angle-right-btn'
import AccordianCard from './accordianCard'

const MoreInsights: React.FC<any> = ({ title, insights, button }) => {
  const [active, setActive] = useState(insights[0]?._id)

  return (
    <section className="bg-[#F1F6FF] py-[48px] md:py-[80px] px-6 md:px-[72px]">
      <div className="container mx-auto flex flex-col gap-6 md:gap-8">
        <h2
          className={`text-[#0957CB] text-[26px]  md:text-[32px] font-bold leading-[32px] md:leading-[38px] md:tracking-[0.32px] ${style.montserrat} max-w-[391px]`}
        >
          {title}
        </h2>
        <div className="flex lg:flex-row flex-col min-h-[592px] lg:min-h-[65vh] gap-4">
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
        <div className="w-full flex justify-center">
          <button className="w-full  bg-[#0957CB] text-[#F6F6F6] px-10 py-4 rounded-[44px] align-baseline font-semibold max-w-[204px] flex justify-center items-center">
            <LinkAngleRightBtn
              href={button?.href ?? ''}
              color="white"
              gtag_event="select_content"
              gtag_content_name={''}
              gtag_content_type={title}
              gtag_cta_button={button?.title}
            >
              {button?.title}{' '}
            </LinkAngleRightBtn>
          </button>
        </div>
      </div>
    </section>
  )
}

export default MoreInsights
