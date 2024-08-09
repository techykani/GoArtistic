import { imageUrlBuilder } from "@/sanity"
import { SanityImg } from "sanity-react-extra"
import PrimarySectionHorizontal from "../widgets/blocks/sections/primarySectionHorizontal"
import { useWindowSize } from "@/lib/hooks"
import { useState, useRef, useEffect } from "react"
import style from '@/styles/Home.module.css';
import Link from "next/link"

export const OurLeadership = ({ title, tagline, description, cta, leaders }: any) => {
  const [sliderPosition, setSliderPosition] = useState(0)
  const headingRef = useRef<HTMLHeadingElement>(null)
  const windowWidth = useWindowSize()?.width ?? 0;

  console.log(leaders, 'leaders')

  useEffect(() => {
    if (headingRef.current) {
      const rect = headingRef.current.getBoundingClientRect()
      const leftPosition = rect.left
      setSliderPosition(leftPosition)
    }
  }, [windowWidth])
  return (<div className="bg-[#FEFEFE] px-6 md:px-[71px] py-12 md:py-20">
    <div className="container mx-auto flex flex-col gap-4 md:gap-[36px]">
      <PrimarySectionHorizontal
        title={title}
        tagline={tagline}
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

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-x-[36px] md:gap-y-6">
        {
          leaders?.map((leader: any) => (
            <Link href={`/about-hmi-medical/governance/${leader?.slug}`} key={leader?.name} className="flex gap-4 md:flex-col items-center md:items-start">
              <div className="bg-[#E4E8F1] w-full max-w-[121px] md:max-w-[390px] overflow-hidden rounded-[6px]">
                {leader?.profileImage && <SanityImg
                  className="h-full w-full object-cover object-center "
                  builder={imageUrlBuilder}
                  image={leader?.profileImage}
                  height={windowWidth >= 768 ? 600 : 300}
                  alt="image"
                  loading="eager"
                />}
              </div>
              <div className="flex flex-col gap-1 w-full">
                <p className={`text-[#0957CB] md:text-center ${style.montserrat} text-[20px] md:text-[24px] font-semibold leading-[20px] md:leading-[28px]`}>{leader?.name}</p>
                <p className="text-[#5A5A5A] md:text-center leading-[20px] whitespace-pre-wrap">{leader?.designation}</p>
              </div>
            </Link>
          ))
        }
      </div>
    </div>
  </div>)
}