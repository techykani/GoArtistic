import Image from 'next/image'
import { useState } from 'react'
import { Button, LinkAngleRight } from '../ui'
import AccordianCard from '../ui/accordian-card'

export const SharingMoreSustainability: React.FC<any> = ({ title, points, button }) => {
  const [active, setActive] = useState(points[0]?._key)

  return (
    <>
      <section className="bg-secondary-deep py-[64px] md:py-[80px] px-6 md:px-[71px]">
        <div className="container mx-auto flex flex-col gap-8 ">
          <h2 className="w-full md:w-[50%] text-off-white text-[28px] md:text-4xl leading-[36px] tracking-[-0.28px] md:tracking-[-0.36px] font-semibold">
            {title}
          </h2>
          <div className="flex lg2:flex-row flex-col min-h-[120vh] lg:min-h-[70vh] gap-5">
            {points.map((card: any, index: any) => (
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
              className="w-full inline-block bg-grey-1 text-grey-dark px-6 py-3 rounded-lg align-baseline font-semibold max-w-[204px] "
            >
              <LinkAngleRight
                href={''}
                color="black"
                gtag_event="select_content"
                gtag_content_name={''}
                gtag_content_type={title}
                gtag_cta_button={button?.title}
              >
                {button?.title}{' '}
              </LinkAngleRight>
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
