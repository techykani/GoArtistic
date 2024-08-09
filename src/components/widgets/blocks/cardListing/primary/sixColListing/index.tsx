import { useWindowSize } from '@/lib/hooks'
import { imageUrlBuilder, PortableText } from '@/sanity'
import { SanityImg } from 'sanity-react-extra'
import Title from '@/components/widgets/shared/title'
import PrimarySectionHorizontal from '../../../sections/primarySectionHorizontal'
import Image from 'next/image'
import style from '@/styles/Home.module.css'
import Link from 'next/link'

export interface HeroProps {
  title: string
  tagline: string
  points: Point[]
  description?: PortableText[]
}

export const SixColCardListing: React.FC<any> = ({
  title,
  tagline,
  description,
  points,
  link,
  target,
  btnType,
  arrowVisibility,
  theme,
  customStyle,
  size,
  arrowColor,
}) => {
  const windowWidth = useWindowSize()?.width ?? 0

  return (
    <div className="container mx-auto flex flex-col gap-8 md:gap-[36px]">
      <PrimarySectionHorizontal
        title={title}
        tagline={tagline}
        description={description}
        link={link}
        target={target}
        btnType={btnType}
        arrowVisibility={arrowVisibility}
        theme={theme}
        customStyle={customStyle}
        size={size}
        arrowColor={arrowColor}
      />

      <div className="flex flex-col lg:flex-row gap-6">
        {points.map((point: any) => (
          <Link
            href={point?.link?.href}
            key={point.link?.text}
            className="w-full min-h-[468px] md:min-h-[350px] md:max-h-[350px] lg:w-1/2 rounded-xl flex items-end relative overflow-hidden cursor-pointer"
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
  )
}
