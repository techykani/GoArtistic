import { useEffect, useRef, useState } from 'react'
import OverView from '../widgets/blocks/overView'
import Image from 'next/image'
import { urlForImage } from '@/studio/lib/image'
import ReactPortableText from '../widgets/shared/reactPortableText'
import { SanityImg } from 'sanity-react-extra'
import { imageUrlBuilder } from '@/sanity'
import Link from 'next/link'
import { useWindowSize } from '@/lib/hooks'
import Title from '../widgets/shared/title'

const HealthierSGProgram = ({ title, description, tabs, cta }: any) => {
  const [selectedTab, setSelectedTab] = useState<any>(tabs[0]?.tabName)
  const [data, setData] = useState(tabs[0])

  const [sliderPosition, setSliderPosition] = useState(0)
  const headingRef = useRef<HTMLHeadingElement>(null)
  const windowWidth = useWindowSize()?.width ?? 0

  useEffect(() => {
    if (headingRef.current) {
      const rect = headingRef.current.getBoundingClientRect()
      const leftPosition = rect.left
      setSliderPosition(leftPosition)
    }
  }, [windowWidth])

  const handleTab = (option: any) => {
    setSelectedTab(option)
    const filteredData = tabs.filter((data: any) => {
      return data.tabName === option
    });
    setData(filteredData[0])
  }


  return (
    <section className="py-12 md:py-20 bg-[#FEFEFE] flex flex-col gap-6 md:gap-8 ">
      {/* overview */}
      <div className="px-6 md:px-[71px]">
        <div ref={headingRef} className={`w-full max-w-[1014px] mx-auto`}>
          <div className="flex flex-col gap-2 md:gap-4">
            {title && (
              <Title
                headingType="h2"
                className={`text-center font-montserrat`}
                theme={"light"}
                tagline={title}
              />
            )}
            {description && (
              <p
                className={`text-[#5A5A5A]
                  text-[16px] leading-[24px] text-center`}
              >
                {description}
              </p>
            )}
          </div>
        </div>
      </div>
      <div className="w-full md:max-w-[1014px] md:mx-auto flex md:justify-center md:flex-wrap gap-3 overflow-scroll slider-body mb-4 md:mb-0 px-6 md:px-0">
        {tabs?.map(({ tabName, image, _key }: any) => (
          <p
            onClick={() => handleTab(tabName)}
            key={_key}
            className={` ${selectedTab == tabName
              ? 'bg-[#0084C6] text-off-white'
              : 'text-[#0746A2] bg-[#D6E7FF] hover:bg-[#0084C6] hover:text-off-white'
              } font-semibold rounded-full cursor-pointer px-6 py-2 whitespace-nowrap transition-all duration-150`}
          >
            {tabName}
          </p>
        ))}
      </div>
      {data && (
        <div className="px-6 md:px-[71px]">
          <div className="max-w-[1014px] mx-auto flex flex-col md:flex-row md:items-center gap-6">
            <div className="w-full md:w-1/2 flex md:justify-end ">
              {data?.image && <SanityImg
                className="w-full md:w-[392px] aspect-[16/9] object-cover rounded-xl"
                builder={imageUrlBuilder}
                image={data?.image ?? ""}
                alt="image"
                loading="eager"
                width={392}
              />}
              {!data?.image && <div className='w-full h-auto bg-[#C4C4C4]'></div>}
            </div>
            <div className="w-full md:w-1/2 md:pl-6">
              <div className="flex flex-col gap-2">
                <Link href={cta?.href ?? ""} className="text-[#3C3C3C] text-[18px] md:text-[20px] font-semibold leading-[22px] md:leading-[24px] font-montserrat">
                  {data?.tabTitle}
                </Link>
                {data?.tabDescription && (
                  <div className="mt-[-24px]">
                    <ReactPortableText content={data?.tabDescription} theme={"light"} />
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

export default HealthierSGProgram
