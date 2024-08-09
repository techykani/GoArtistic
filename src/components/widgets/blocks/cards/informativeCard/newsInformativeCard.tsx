import React from 'react'
import clsx from 'clsx'
import Image from 'next/image'
import { SanityImg } from 'sanity-react-extra'
import { imageUrlBuilder } from '@/sanity'
import { useWindowSize } from '@/lib/hooks'
import BtnWithArrow from '@/components/widgets/shared/buttons/button/btnWithArrow'
import { LinkArrowUp } from '@/components/ui/link-arrow-up'
import EyeBrow from '@/components/widgets/shared/eyeBrew'
import Link from 'next/link'
import { urlForImage } from '@/studio/lib/image'

export const NewsInformativeCard: React.FC<any> = ({ data }) => {
  const windowWidth = useWindowSize()?.width ?? 0
  return (
    <>
      <div className="w-full h-full flex flex-col gap-4 rounded-xl shadow-megaMenu" key={data?._id}>
        <div className="flex flex-col gap-8 md:gap-6">
          <div className="w-full  relative">
            {/* {data?.primaryImg && (
              <Image
                src={urlForImage(data?.primaryImg)?.url()}
                width={600}
                height={240}
                alt={data?.primaryImg?.alt ?? ''}
                quality={100}
                className="object-cover lg:w-[600px] lg:h-[240px] w-full h-[260px]"
                loading="eager"
              />
            )} */}
            {data?.secondaryImg && (
              <Image
                src={urlForImage(data?.secondaryImg)?.url()}
                width={312}
                height={260}
                alt={data?.secondaryImg?.alt ?? ''}
                quality={100}
                className="w-full object-cover h-[260px]"
                loading="eager"
              />
            )}
          </div>
          <div className="w-full flex flex-col gap-2 px-6">
            {data?.subtitle && (
              <p className="uppercase text-xs font-bold text-grey-9 leading-[18px] tracking-[2.4px] mb-[-4px]">
                {data?.subtitle}
              </p>
            )}
            <h3
              className={`text-primary-blue-new text-[18px] font-montserrat font-semibold leading-[22px] tracking-[-0.28px] ${
                windowWidth >= 768 && windowWidth <= 1014 && 'h-[72px]'
              }`}
            >
              {data?.title}
            </h3>
            <p className="text-grey-9 md:text-grey-8 text-base leading-6">{data?.tagline}</p>
          </div>
        </div>
        <div className="w-full flex flex-wrap gap-3 px-6 pb-6">
          <>
            <Link
              href={data?.link?.href ?? ''}
              target="_blank"
              style={{
                background: 'linear-gradient(270deg, #D52328 43.23%, #9E1D20 100%)',
              }}
              className="text-[#FEFEFE] text-[16px] font-semibold leading-[20px] px-6 py-3 flex gap-2 items-center rounded-[52px] group"
            >
              {data?.link?.text}{' '}
            </Link>
          </>
        </div>
      </div>
    </>
  )
}
