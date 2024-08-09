import { SanityImg } from 'sanity-react-extra'
import { imageUrlBuilder } from '@/sanity'
import { useRouter } from 'next/router'
import { useWindowSize } from '@/lib/hooks'
import { LinkAngleRight } from '@/components/ui'
import clsx from 'clsx'
import { LocationList } from './locationList'

export const About: React.FC<any> = ({ title, description, locations }) => {
  const router = useRouter()
  const windowWidth = useWindowSize()?.width ?? 0

  return (
    <>
      <div className="hidden xl:block">
        <div className={`bg-alice-blue px-[71px] py-[80px] `}>
          <div className={`pb-[36px] flex ${windowWidth > 1550 ? 'container' : ''}`}>
            <div className="flex">
              <h1 className="w-[392px] font-bold text-[32px] font-montserrat text-primary-blue-new tracking-[0.32px] leading-[38px]">
                {title}
              </h1>
            </div>
            <div className="pl-[129px]">
              <div className="flex flex-col  justify-center">
                <p className="text-base font-normal leading-6 text-grey-8 w-[391px]">{description}</p>
              </div>
            </div>
          </div>
          <LocationList locations={locations} /> 
        </div>
      </div>
      <div className="xl:hidden block py-12  bg-alice-blue">
        <div className="">
          <div className="flex flex-col  justify-center px-6 ">       
            <h1 className="font-bold font-montserrat text-[28px] text-primary-blue-new leading-[32px] tracking-[0.32px]">{title}</h1>
            <p className="pt-2 text-base font-normal leading-6 text-grey-8">{description}</p>
          </div>
          
          <LocationList locations={locations} /> 
        </div>
      </div>
    </>
  )
}
