import Title from '@/components/widgets/shared/title'
import { RefObject } from 'react'
import OverView from '../widgets/blocks/overView'
import Link from 'next/link'



const PageOverview = ({ title, description, cta }: any) => {
  return (
    <div className='w-full bg-[#004E89] py-[32px] md:py-[36px] px-6 md:px-[71px]'>
      <div className='w-full max-w-[741px] mx-auto flex flex-col gap-[13px] md:gap-4'>
        <div className='flex flex-col gap-4'>
          {title && (
            <Title
              headingType="h2"
              className={`text-center font-montserrat !font-semibold md:whitespace-pre-wrap`}
              theme={"dark"}
              tagline={title}
            />
          )}
          {description && (
            <p
              className={`text-[#FBFBFB] text-[16px] leading-[24px] text-center`}
            >
              {description}
            </p>
          )}
        </div>
        {cta?.text && <div className='w-full max-w-[227px] md:max-w-[247px] flex justify-center items-center py-[14px] md:py-[16px] text-center mx-auto bg-[#FEFEFE] rounded-[61px]'>
          <Link className='text-[#0957CB] font-semibold leading-[20px]' href={cta?.href ?? ""}>{cta?.text}</Link>
        </div>}
      </div>
    </div>
  )
}

export default PageOverview
