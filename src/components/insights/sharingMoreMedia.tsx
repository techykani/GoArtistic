import Image from 'next/image'
import { useState } from 'react'
import { Button, LinkAngleRight } from '../ui'
import AccordianCard from '../ui/accordian-card'
import InsightsAccordian from '../ui/insights-accordian'
import Title from '../widgets/shared/title'
import Link from 'next/link'

export const SharingMoreMedia: React.FC<any> = ({ insights }: any) => {
  const [active, setActive] = useState(insights[0]?._id)

  return (
    <>
      <section
        style={{
          background: 'linear-gradient(75deg, #195FC9 21.69%, #2C82D0 50.84%, #7BEFFF 104.28%)',
        }}
        className=" py-[48px] md:py-[80px] px-6 md:px-[71px]"
      >
        <div className="container mx-auto flex flex-col gap-8 lg:gap-[36px]">
          <div className={`max-w-[1014px] flex flex-col gap-2`}>
            <div className="w-full flex flex-col gap-2">
              <div className="flex flex-col lg:flex-row gap-2 lg:gap-[129px]">
                <Title
                  headingType="h2"
                  theme="dark"
                  tagline="Insights highlights"
                  className="max-w-[392px] md:min-w-[392px]"
                />
                <div className="md:max-w-[392px] flex flex-col gap-4">
                  <p className="text-[#FBFBFB] text-[16px] leading-[24px]">
                    Here are some of our highlights from insights creating value that is beyond
                    timely provision of quality healthcare to individuals.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex lg:flex-row flex-col min-h-[592px] md:min-h-[600px] lg:min-h-[57vh] gap-4">
            {insights.map((card: any, index: any) => (
              <InsightsAccordian
                key={card._id}
                {...card}
                index={index}
                active={active}
                handleClick={setActive}
              />
            ))}
          </div>

          <div className="w-full flex justify-center">
            <div className="flex">
              <Link
                href="/insights"
                className={`btn_primary_medium-dark font-semibold leading-[20px] flex gap-2 items-center group cursor-pointer rounded-full`}
              >
                View more
                <div className="transform flex justify-content items-center transition-all duration-150 group-hover:translate-x-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="21"
                    height="21"
                    viewBox="0 0 21 21"
                    fill="none"
                  >
                    <path
                      d="M3.83331 10.1043H17.1666M17.1666 10.1043L12.1666 5.10431M17.1666 10.1043L12.1666 15.1043"
                      stroke="#0957CB"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
