'use client'

import React, { useState } from 'react'
import AccordianCard from '@/components/ui/accordian-card'
import { Button, LinkAngleRight } from '../ui'
import BtnWithArrow from '../widgets/shared/buttons/button/btnWithArrow'

export const EventHighlights: React.FC<any> = ({ title, tagline, media, button }) => {
  const [active, setActive] = useState(media[0]?._id)

  return (
    <section className="bg-linear-grad py-[48px] md:py-[80px] px-6 md:px-[71px]">
      <div className="container mx-auto flex flex-col gap-6 md:gap-8">
        <div className="w-full flex md:gap-4 md:flex-row flex-col">
          <h2 className="w-full text-[26px] md:text-[32px] leading-[38px]  tracking-[0.32px] font-bold font-montserrat text-off-white">
            {title}
          </h2>
          <p className="text-grey-1 w-full md:w-[32%] lg:w-[32%]  text-base md:text-[16px] leading-[24px] md:leading-[28px]">
            {tagline}
          </p>
        </div>
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
          <Button
            // disabled={isFetchingNextPage || !hasNextPage}
            size="base"
            variant="solid"
            color="secondary"
            className="w-full inline-block bg-light-neutral text-primary-blue-new px-6 py-3 align-baseline font-semibold max-w-[204px] rounded-full"
          >
            <LinkAngleRight
              href={button?.href}
              color="newBlue"
              gtag_event="select_content"
              gtag_content_name={tagline}
              gtag_content_type={title}
              gtag_cta_button={button?.title}
            >
              {button?.title}{' '}
            </LinkAngleRight>
          </Button>
        </div>
      </div>
    </section>
  )
}
