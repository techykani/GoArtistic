import { useWindowSize } from '@/lib/hooks'
import PrimarySectionHorizontal from '../widgets/blocks/sections/primarySectionHorizontal'
import { InformativeCard } from './informativeCard'

export interface HeroProps {
  title: string
  tagline: string
  points: Point[]
  description?: PortableText[]
}

export const Accessibile: React.FC<any> = ({ title, tagline, description, cards, link }) => {
  const windowWidth = useWindowSize()?.width ?? 0
  console.log(cards)
  return (
    <>
      <section className="px-6 md:px-[71px] py-12 md:py-20 bg-[#F1F6FF]">
        <div className="container mx-auto flex flex-col gap-8 md:gap-[36px]">
          <PrimarySectionHorizontal
            title={title}
            tagline={tagline}
            description={description}
            link={link}
            target={'_self'}
            btnType={'primary'}
            arrowVisibility={false}
            theme={'light'}
            customStyle={''}
            size={'medium'}
            arrowColor={'black'}
          />
        </div>
        <div className="container mx-auto grid gap-x-6 gap-y-[32px] md:gap-y-[48px] grid-cols-1 md:grid-cols-2 md:mt-9 mt-8">
          {cards?.map((data: any, index: any) => (
            <InformativeCard data={data} key={index} />
          ))}
        </div>
      </section>
    </>
  )
}
