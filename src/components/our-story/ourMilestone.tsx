import { useRef, useState } from 'react'
import ReactPortableText from '../widgets/shared/reactPortableText'
import Title from '../widgets/shared/title'
import { imageUrlBuilder } from '@/sanity'
import { SanityImg } from 'sanity-react-extra'
import { Button, LinkAngleRight } from '../ui'
import clsx from 'clsx'
import BtnWithArrow from '../widgets/shared/buttons/button/btnWithArrow'
import { GTAEvent } from '@/lib/gtag'

const OurMileStone = ({ title, description, decade }: any) => {
  const [selectedDecade, setSelectedDecade] = useState(decade[0].tag)
  const [showMileStone, setShowMileStone] = useState(decade[0])
  const headingRef = useRef<HTMLHeadingElement>(null)

  const handleDecade = (year: any) => {
    setSelectedDecade(year)
    let milestone = decade.filter((decade: any) => {
      return decade.tag == year
    })
    setShowMileStone(milestone[0])
  }

  const handleToggle = (title: string) => {
    const yearIndex = decade.findIndex((decade: any) => decade.title === title)
    setShowMileStone(decade[yearIndex + 1])
    setSelectedDecade(decade[yearIndex + 1].tag)
    if (headingRef.current) {
      headingRef.current.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section ref={headingRef} className="w-full bg-off-white py-12 md:py-20">
      {/* overview */}
      <div className="px-6 md:px-[71px]">
        <div className="max-w-[805px] mx-auto flex flex-col gap-4">
          <Title headingType="h2" theme="light" tagline={title} className="md:text-center" />
          <div className="mt-[-24px] md:text-center">
            <ReactPortableText content={description} customClass="!text-[#3C3C3C]" />
          </div>
        </div>
      </div>
      <div className="px-6 md:px-[71px] w-full py-6 md:py-[36px] flex gap-3 overflow-scroll md:overflow-visible md:justify-center slider-body">
        {decade.map(({ tag }: any) => (
          <p
            key={tag}
            onClick={() => {
              GTAEvent('view_content', {
                content_name: description,
                content_type: tag,
              })
              handleDecade(tag)
            }}
            className={` text-base cursor-pointer font-semibold leading-[20px] text-center px-6 py-2 rounded-[24px] whitespace-nowrap transition-all duration-150 ${selectedDecade === tag
                ? 'bg-[#0084C6] text-off-white'
                : 'text-[#0746A2] bg-[#D6E7FF] hover:bg-[#0084C6] hover:text-off-white'
              }  `}
          >
            {tag}
          </p>
        ))}
      </div>
      {showMileStone && (
        <div className="w-full px-6 md:px-[71px]">
          <div className="max-w-[1016px] mx-auto flex flex-col gap-4">
            <Title
              headingType="h3"
              theme="light"
              tagline={showMileStone.title}
              className="!text-[#0957CB]"
            />
            <div className="mt-[-24px]">
              <ReactPortableText
                content={showMileStone.description}
                customClass="!text-[#3C3C3C]"
              />
            </div>
          </div>
          <div className="max-w-[1016px] mx-auto pt-[48px] md:flex md:gap-6 md:items-center">
            {/* primary image */}
            <div className="max-w-[391px] hidden lg:flex flex-col gap-[10px]">
              <SanityImg
                className="max-w-[391px] h-full aspect-[6/5] rounded-[16px] object-cover object-top"
                builder={imageUrlBuilder}
                image={showMileStone?.primaryImg}
                alt={showMileStone?.primaryImg.alt ?? 'image'}
                loading="eager"
              />
              <p className="text-grey-8 text-[14px] leading-[20px]">
                {showMileStone?.imageCaption}
              </p>
            </div>
            {/* content */}
            <div className="md:pl-8 ">
              {showMileStone?.Timeline?.map((event: any, i: any) => (
                <div key={event?._key} className="flex gap-4 w-full group">
                  <div className="flex flex-col gap-2 items-center">
                    <div className="w-4 h-4 bg-[#004E89] group-hover:bg-[#0084C6] flex justify-center items-center rounded-full transition duration-200 leading-[20px] mt-1">
                      <div className="w-2 h-2 bg-[white] rounded-full" />
                    </div>
                    {i !== showMileStone?.Timeline?.length - 1 && (
                      <div className="bg-[#004E89] w-[2px] h-full flex-1 rounded-xl" />
                    )}
                  </div>
                  <div className="flex flex-col gap-2 w-full">
                    <h5 className="text-grey-dark group-hover:text-[#0084C6] text-[16px] md:text-[20px] font-semibold leading-[20px] md:leading-[24px] relative z-1">
                      {event?.title}
                    </h5>
                    <div className="w-full flex flex-col md:flex-row md:justify-between gap-4 md:gap-6 pb-0 md:pb-6">
                      <div className="mt-[-24px] pl-[-24px] event-list flex-1">
                        <ReactPortableText content={event?.description} />
                      </div>
                      <div className={`${!event?.imageCaption && 'pb-4 '} md:pb-0`}>
                        <div>
                          <div className="relative max-w-[272px] md:w-[96px] rounded-[16px] overflow-hidden">
                            <SanityImg
                              className="max-w-[272px] md:w-[96px] h-[226px] md:h-auto aspect-[6/5] rounded-[16px] object-cover object-top"
                              builder={imageUrlBuilder}
                              image={event?.primaryImg}
                              alt={event?.primaryImg.alt ?? 'image'}
                              loading="eager"
                            />
                            <div className="bg-[#00000066] absolute inset-0 z-1"></div>
                          </div>
                          {event?.imageCaption && (
                            <div className="pb-4 max-w-[272px] md:w-[96px] pt-[10px]">
                              <p className="md:hidden text-grey-8 text-[14px] leading-[20px]">
                                {event?.imageCaption}
                              </p>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* footer */}
          <p className="pt-2 md:pt-4 text-grey-dark text-[16px] leading-[24px] max-w-[808px] md:text-center mx-auto">
            {showMileStone?.footer}
          </p>
          {showMileStone.button.title && (
            <div className="w-full flex justify-center pt-6 md:pt-[36px]">
              <div
                onClick={() => handleToggle(showMileStone.title)}
                className={`btn_primary_medium-light font-semibold rounded-full leading-[20px] flex gap-2 items-center group cursor-pointer`}
              >
                {showMileStone.button.title}
                <div className="transform flex justify-content items-center transition-all duration-150 group-hover:translate-x-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="21"
                    height="20"
                    viewBox="0 0 21 20"
                    fill="none"
                  >
                    <path
                      d="M3.83325 10H17.1666M17.1666 10L12.1666 5M17.1666 10L12.1666 15"
                      stroke="#F6F6F6"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </section>
  )
}

export default OurMileStone
