import { useState } from 'react'
import Title from '../widgets/shared/title'
import ReactPortableText from '../widgets/shared/reactPortableText'
import { SanityImg } from 'sanity-react-extra'
import { imageUrlBuilder } from '@/sanity'
import { GTAEvent } from '@/lib/gtag'

const Pillars = ({ title, description, pillarList }: any) => {
  const [seletedPillar, setSelectedPillar] = useState(pillarList[0].tag)
  const [showPillarDetails, setShowPillarDetails] = useState(pillarList[0])

  const handlePillar = (tag: any) => {
    setSelectedPillar(tag)
    let pillarListData = pillarList.filter((pillar: any) => {
      return pillar.tag == tag
    })
    setShowPillarDetails(pillarListData[0])
  }
  return (
    <section className="w-full bg-[#F1F6FF] py-12 md:py-20">
      {/* overview */}
      <div className="px-6 md:px-[71px]">
        <div className="max-w-[805px] mx-auto flex flex-col gap-4">
          <Title headingType="h2" theme="light" tagline={title} className="md:text-center" />
          <div className="mt-[-24px] md:text-center">
            <ReactPortableText content={description} />
          </div>
        </div>
      </div>
      <div className="px-6 md:px-[71px] w-full py-6 md:py-[36px] flex gap-3 overflow-scroll md:overflow-visible md:flex-wrap md:justify-center slider-body">
        {pillarList.map(({ tag }: any) => (
          <p
            key={tag}
            onClick={() => {
              GTAEvent('view_content', {
                content_name: description,
                content_type: tag,
              })
              handlePillar(tag)
            }}
            className={` text-base cursor-pointer font-semibold leading-[20px] text-center px-6 py-2 rounded-[24px] whitespace-nowrap transition-all duration-150 ${
              seletedPillar === tag
                ? 'bg-[#0084C6] text-off-white'
                : 'text-[#0746A2] bg-[#D6E7FF] hover:bg-[#0084C6] hover:text-off-white'
            }  `}
          >
            {tag}
          </p>
        ))}
      </div>
      <div className="px-6 md:px-[71px]">
        <div className="max-w-[1014px] mx-auto flex flex-col md:flex-row md:items-center gap-6">
          {/* image */}
          {showPillarDetails?.primaryImg && (
            <div className="w-full  md:min-w-[392px]">
              <SanityImg
                className="w-full h-full max-h-[392px] rounded-[12px] lg:rounded-[16px] object-cover object-top"
                builder={imageUrlBuilder}
                image={showPillarDetails?.primaryImg}
                alt={showPillarDetails?.primaryImg.alt ?? 'image'}
                loading="eager"
              />
            </div>
          )}
          {/* content */}
          <div className="flex flex-col gap-2 md:pl-6">
            <h4 className="text-[#3C3C3C] text-[20px] font-semibold leading-[24px]">
              {showPillarDetails?.title}
            </h4>
            <div className="mt-[-24px]">
              <ReactPortableText content={showPillarDetails?.description} />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Pillars
