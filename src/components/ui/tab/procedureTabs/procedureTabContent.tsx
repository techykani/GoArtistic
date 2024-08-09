import React from 'react'
import { PortableText, imageUrlBuilder } from '@/sanity'
import { SanityImg } from 'sanity-react-extra'
import { serializers } from '@/lib/blockContent'

interface TabContentProps {
  selectedOption: any
  selectedIndex: number
}

export const ProcedureTabContent: React.FC<TabContentProps> = ({
  selectedOption: { description, primaryImg },
  selectedIndex,
}) => {


  return (
    <>
      <div className="w-full max-w-[1014px] mx-auto flex flex-col md:flex-row gap-6">
        {primaryImg && (
          <div className="w-full md:max-w-[392px] ">
            <SanityImg
              className="w-full border border-grey-3 rounded-2xl aspect-[16/9]"
              builder={imageUrlBuilder}
              image={primaryImg}
              alt="image"
              loading="eager"
              width={500}
            />
          </div>
        )}
        <div className="w-full lg:pl-6 flex flex-col gap-6 md:gap-8">
          <div className="w-full flex flex-col gap-[22px]">
            <p className="text-grey-9 text-base leading-6">
              <PortableText blocks={description} serializers={serializers} />
            </p>
          </div>
        </div>
      </div>

    </>
  )
}
