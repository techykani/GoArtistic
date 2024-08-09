import { useEffect, useRef, useState } from 'react'
import { CommunityEngageTab } from '../ui/tab/communityEngageTab'
import OverView from '../widgets/blocks/overView'
import { DiscoverCards } from '../ui/cards/discover-cards'
import { InformativeCard } from '../widgets/blocks/cards/informativeCard/informativeCard'
import PrimarySectionHorizontal from '../widgets/blocks/sections/primarySectionHorizontal'
import { NewsInformativeCard } from '../widgets/blocks/cards/informativeCard/newsInformativeCard'
import { useWindowSize } from '@/lib/hooks'

export const HealthierNations: React.FC<any> = ({ title, tagline, cta, cards }: any) => {
  return (
    <>
      <section
        className={`w-full px-6 md:px-[71px] py-[48px] md:py-[80px] flex flex-col gap-8 md:gap-[36px]`}
      >
        <div className={`container mx-auto flex flex-col gap-2`}>
          <PrimarySectionHorizontal
            title={title}
            tagline={tagline}
            description={''}
            link={cta}
            target={'_blank'}
            btnType={'secondary'}
            arrowVisibility={false}
            theme={'light'}
            customStyle={''}
            size={'medium'}
            arrowColor={'white'}
          />
        </div>

        <section className=" bg-off-white">
          <div className="container grid gap-x-6 gap-y-[32px] md:gap-y-[48px] grid-cols-1 md:grid-cols-2 ">
            {cards?.map((data: any, index: any) => (
              <NewsInformativeCard data={data} key={index} />
            ))}
          </div>
        </section>
      </section>
    </>
  )
}
