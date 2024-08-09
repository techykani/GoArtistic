import Title from "@/components/widgets/shared/title"
import { useWindowSize } from "@/lib/hooks"
import { useState, useRef, useEffect } from "react"


const BenefitsSec = ({ tagline }: { tagline: string[] }) => {
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
  return (
    <section style={{ background: 'linear-gradient(75deg, #195FC9 21.69%, #2C82D0 50.84%, #7BEFFF 104.28%)' }} className="w-full py-12 md:py-20 flex flex-col gap-6 md:gap-8">
      <div className="px-6 md:px-[71px]">
        <div ref={headingRef} className="container mx-auto">
          <Title headingType="h2" theme='dark' tagline={"Benefits"} />
        </div>
      </div>
      <div style={{ paddingLeft: sliderPosition, paddingRight: sliderPosition }} className="w-full overflow-scroll slider-body">
        <div className="w-[476px] md:w-[1224px] ">
          <div className="grid grid-rows-2 md:grid-rows-1 grid-flow-col md:grid-cols-6 gap-4 md:gap-6">
            {tagline.map((benefits) => (
              <div
                key={benefits}
                className="flex items-center bg-off-white shadow-megaMenu rounded-xl w-[148px] md:w-[184px] h-[128px] md:h-[148px]"
              >
                <div className="flex relative px-3 md:px-4">
                  <div className="w-[1.5px] h-full bg-[#00A854] items-center absolute" />
                  <div className="text-grey-dark text-[14px] md:text-[16px] font-semibold leading-[20px] ml-3">
                    {benefits}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

    </section>
  )
}

export default BenefitsSec
