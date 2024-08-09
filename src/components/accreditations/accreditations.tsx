import { PortableText, imageUrlBuilder } from '@/sanity'
import { useEffect, useRef, useState } from 'react'
import { SanityImg } from 'sanity-react-extra'
import OverView from '../widgets/blocks/overView'
import { useWindowSize } from '@/lib/hooks'
import Title from '../widgets/shared/title'

export const AccreditationsAndAwardsPage: React.FC<any> = ({
  sectionName,
  sectionTagline,
  options,
}) => {
  const [selectedTab, setSelectedTab] = useState(options[0]?.entryName)
  const [showTabData, setShowTabData] = useState(options[0])
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

  const handleTab = (tab: any) => {
    setShowTabData(tab)
    setSelectedTab(tab?.entryName)
  }

  return (
    <main className="w-full">
      {/* page Overview section */}
      <section className="w-full bg-[#F3F3F3] pt-[48px] md:pt-[60px] flex flex-col gap-8 md:gap-12">
        <OverView
          title={sectionName}
          description={sectionTagline}
          theme="light"
          contentWidth="container"
          headingRef={headingRef}
        />
        {/* tabs */}
        {options.length > 1 && (
          <div
            style={{ paddingLeft: sliderPosition, paddingRight: sliderPosition }}
            className={`flex overflow-scroll lg:overflow-visible lg:flex-wrap lg:justify-center slider-body gap-2 lg:gap-3`}
          >
            {options.map((tab: any) => (
              <p
                onClick={() => handleTab(tab)}
                key={tab?._key}
                className={`${
                  selectedTab === tab?.entryName
                    ? 'bg-secondary-ocean text-off-white'
                    : 'bg-secondary-blue-inactive text-secondary-blue-active hover:bg-[#0084C6] hover:text-off-white'
                } px-6 py-2 rounded-full whitespace-nowrap cursor-pointer font-semibold`}
              >
                {tab?.entryName}
              </p>
            ))}
          </div>
        )}
      </section>

      {/* list */}
      {showTabData && (
        <section className="w-full px-6 md:px-[71px] pt-[64px] pb-[48px] md:py-20 bg-[#F3F3F3] flex flex-col gap-6 md:gap-20">
          <div className="container mx-auto flex flex-col gap-6 md:gap-8">
            <Title
              headingType="h3"
              theme="light"
              tagline={showTabData.entryName}
              className="!text-primary-blue-new !font-bold"
            />
            <div className="w-full flex flex-col gap-4 md:gap-8">
              <h3 className="text-grey-dark text-[16px] md:text-[20px] font-semibold leading-[20px] md:leading-[24px]">
                {showTabData.accerditations.accerditationsName}
              </h3>
              <div className="flex flex-col gap-4 md:gap-8">
                {showTabData?.accerditations?.accerditationsLink.map(
                  ({ _key, primaryImg, description, title, year }: any) => (
                    <div
                      key={_key}
                      className="rounded-[12px] max-w-[1016px] bg-off-white shadow-megaMenu p-4 md:py-[24px] md:pl-8 md:pr-[58px] flex flex-col md:flex-row md:items-center gap-4 md:gap-6"
                    >
                      <div className="min-w-[114px] md:min-w-[160px]">
                        <SanityImg
                          builder={imageUrlBuilder}
                          image={primaryImg}
                          alt={primaryImg?.alt ?? 'image'}
                          loading="eager"
                          width={160}
                          height={140}
                          className="w-[114px] md:w-[160px]"
                        />
                      </div>
                      <div className="w-full flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                        <div className="max-w-[598px] flex flex-col gap-2">
                          <h4 className="text-grey-dark text-[16px] font-semibold leading-[20px]">
                            {title}
                          </h4>
                          <p className="text-[#6E6E6E] text-[14px] md:text-[16px] leading-[20px] md:leading-[24px]">
                            <PortableText blocks={description} />
                          </p>
                        </div>
                        <p className="text-primary-blue text-[16px] md:text-[20px] font-semibold leading-[20px] md:leading-[24px]">
                          {year}
                        </p>
                      </div>
                    </div>
                  ),
                )}
              </div>
            </div>
          </div>
          <div className="container mx-auto flex flex-col gap-6 md:gap-8">
            <div className="w-full flex flex-col gap-4 md:gap-8">
              <h3 className="text-grey-dark text-[16px] md:text-[20px] font-semibold leading-[20px] md:leading-[24px]">
                {showTabData.awards.awardsName}
              </h3>
              <div className="flex flex-col gap-4 md:gap-8">
                {showTabData?.awards?.awardsLink.map(
                  ({ _key, primaryImg, description, title, year }: any) => (
                    <div
                      key={_key}
                      className="rounded-[12px] max-w-[1016px] bg-off-white shadow-megaMenu p-4 md:py-[24px] md:pl-8 md:pr-[58px] flex flex-col md:flex-row md:items-center gap-4 md:gap-6"
                    >
                      <div className="min-w-[120px]">
                        <SanityImg
                          builder={imageUrlBuilder}
                          image={primaryImg}
                          alt={primaryImg?.alt ?? 'image'}
                          loading="eager"
                          width={160}
                          height={140}
                          className="w-[120px]"
                        />
                      </div>
                      <div className="w-full flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                        <div className="max-w-[598px] flex flex-col gap-2">
                          <h4 className="text-grey-dark text-[16px] font-semibold leading-[20px]">
                            {title}
                          </h4>
                          <p className="text-[#6E6E6E] text-[14px] md:text-[16px] leading-[20px] md:leading-[24px]">
                            <PortableText blocks={description} />
                          </p>
                        </div>
                        <p className="text-primary-blue text-[16px] md:text-[20px] font-semibold leading-[20px] md:leading-[24px]">
                          {year}
                        </p>
                      </div>
                    </div>
                  ),
                )}
              </div>
            </div>
          </div>
        </section>
      )}
    </main>
  )
}
