import { SixColCardListing } from '@/components/widgets/blocks/cardListing/primary/sixColListing'
import PrimarySectionHorizontal from '@/components/widgets/blocks/sections/primarySectionHorizontal'
import { useWindowSize } from '@/lib/hooks'
import { imageUrlBuilder } from '@/sanity'
import Link from 'next/link'
import { SanityImg } from 'sanity-react-extra'
import style from '@/styles/Home.module.css'
import Image from 'next/image'

const SpecialEnterprices = ({ title, description, tagline, points, cta }: any) => {
  const windowWidth = useWindowSize()?.width ?? 0

  return (
    <section
      style={{
        background: 'linear-gradient(75deg, #195FC9 21.69%, #2C82D0 50.84%, #7BEFFF 104.28%)',
      }}
      className=" px-6 md:px-[71px] py-12 md:py-20"
    >
      <div className="container mx-auto flex flex-col gap-8 md:gap-[36px]">
        <PrimarySectionHorizontal
          title={title}
          tagline={tagline}
          description={description}
          link={cta}
          target={'_self'}
          btnType={'primary'}
          arrowVisibility={false}
          theme={'dark'}
          customStyle={''}
          size={'medium'}
          arrowColor={'black'}
        />

        <div className="flex flex-col lg:flex-row gap-6">
          {points.map((point: any) => (
            <div
              // href={point?.link?.href ?? ""}
              key={point?.link?.text}
              className="w-full min-h-[468px] md:min-h-[350px] md:max-h-[350px] lg:w-1/2 rounded-xl flex items-end relative overflow-hidden"
            >
              <SanityImg
                className="w-full h-full absolute inset-0 z-[2] object-cover object-center"
                builder={imageUrlBuilder}
                image={windowWidth >= 768 ? point?.icon : point?.mobileIcon}
                height={windowWidth >= 768 ? 600 : 300}
                alt="image"
                loading="eager"
              />

              <div className={` absolute inset-0 z-[3] home-communities-gr`} />
              <div className="pb-6 px-6 md:px-8 relative z-40 flex flex-col gap-1 md:gap-[6px]">
                <p
                  className={`text-[#FEFEFE] ${style.montserrat} text-[18px] md:text-[20px] font-semibold leading-[22px] md:leading-[24px]`}
                >
                  {point?.link?.text}
                </p>
                <p className="text-[#FEFEFE] text-[16px] leading-[24px]">{point?.shortDes}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default SpecialEnterprices
