import { useWindowSize } from '@/lib/hooks'
import { useState, useRef, useEffect } from 'react'
import Title from '../widgets/shared/title'
import { ProgrammeArray } from '../by-practice/programmeArray'
import Image from 'next/image'
import { urlForImage } from '@/studio/lib/image'

export const Programmes: React.FC<any> = ({ title, tagline, options }) => {
  return (
    <div className="bg-[#F1F6FF] px-6 md:px-[71px] w-full py-[48px] md:py-[80px] flex flex-col gap-8">
      <div className="container mx-auto flex flex-col gap-8">
        <div className="w-full md:max-w-[600px] flex flex-col gap-2 md:gap-4">
          <Title headingType="h2" theme="light" tagline={title} />
          <p className="text-grey-8 text-base leading-[24px]">{tagline}</p>
        </div>
      </div>
      <div className="container mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl3:grid-cols-6 gap-4 md:gap-6">
          {options?.map((option: any, idx: any) => (
            <div
              className="w-[150px] h-[100px] md:w-[184px] md:min-w-[184px] bg-[#ECF1FB] rounded-xl flex items-center"
              key={idx}
            >
              <div className="w-full flex flex-col items-center md:mx-auto">
                {option?.image && (
                  <div className="w-[96px] md:w-[150px] md:h-[100px] h-[64px] flex justify-center items-center mx-auto">
                    <Image
                      src={urlForImage(option?.image).url()}
                      alt={option?.image?.alt ?? 'image'}
                      loading="lazy"
                      width={150}
                      height={100}
                      className="w-full h-full"
                    />
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
