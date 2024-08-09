import { imageUrlBuilder } from '@/sanity'
import { link } from 'fs'
import { size } from 'lodash'
import Link from 'next/link'
import { SanityImg } from 'sanity-react-extra'

import { SixColCardListing } from '../widgets/blocks/cardListing/primary/sixColListing'
import PrimarySectionHorizontal from '../widgets/blocks/sections/primarySectionHorizontal'
import { TwoImageFlex } from '../widgets/blocks/twoImageFlex'
import { useWindowSize } from '@/lib/hooks'
import style from '@/styles/Home.module.css'

export interface CorporateHealthScreeningProps {
  title: string
  description: any
  tagline: string
  points: any
  cta: any
}

const CorporateHealthScreening = ({
  title,
  description,
  tagline,
  points,
  cta
}: CorporateHealthScreeningProps) => {
  const windowWidth = useWindowSize()?.width ?? 0
  return (
    <section style={{ background: 'linear-gradient(75deg, #195FC9 21.69%, #2C82D0 50.84%, #7BEFFF 104.28%)' }} className="px-6 md:px-[71px] py-[48px] md:py-20">
      {/* <TwoImageFlex title={title} tagline={tagline} points={points} description={description} /> */}
      {/* <SixColCardListing title={title}
        tagline={tagline}
        description={description}
        points={points}
        link={cta}
        target="_self"
        btnType="tertiary"
        arrowVisibility={false}
        theme="dark"
        customStyle=""
        size="medium"
        arrowColor="white" /> */}
      <div className="container mx-auto flex flex-col gap-8 md:gap-[36px]">
        <PrimarySectionHorizontal
          title={title}
          tagline={tagline}
          description={description}
          link={cta}
          target={"_self"}
          btnType="tertiary"
          arrowVisibility={false}
          theme="dark"
          customStyle=''
          size="medium"
          arrowColor="white"
        />

        <div className="flex flex-col lg:flex-row gap-6">
          {points.map((point: any) => (
            <Link
              href={point?.link?.href}
              key={point.link?.text}
              className="w-full min-h-[320px] md:min-h-[350px] md:max-h-[350px] lg:w-1/2 rounded-xl flex items-end relative overflow-hidden cursor-pointer"
            >
              {point && <SanityImg
                className="w-full h-full absolute inset-0 z-[2] object-cover object-center"
                builder={imageUrlBuilder}
                image={windowWidth >= 639 ? point?.icon : point?.mobileIcon}
                height={windowWidth >= 768 ? 600 : 300}
                alt="image"
                loading="eager"
              />
              }
              <div className={` absolute inset-0 z-[3] home-communities-gr`} />
              <div className="pb-6 px-6 md:px-8 relative z-40 flex flex-col gap-1 md:gap-[6px]">
                <p
                  className={`text-[#FEFEFE] ${style.montserrat} text-[18px] md:text-[20px] font-semibold leading-[22px] md:leading-[24px]`}
                >
                  {point?.link?.text}
                </p>
                <p className="text-[#FEFEFE] text-[16px] leading-[24px]">{point?.shortDes}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

export default CorporateHealthScreening
