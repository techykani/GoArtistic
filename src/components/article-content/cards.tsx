import { serializers } from '@/lib/blockContent'
import { PortableText, imageUrlBuilder } from '@/sanity'
import clsx from 'clsx'
import Image from 'next/image'
import { SanityImg } from 'sanity-react-extra'

export const Cards: React.FC<any> = ({
  brandsimages,
}) => {
  return (
    <>
      {brandsimages && (
        <div className='px-6'>
          <div className="w-full flex flex-col md:flex-row gap-6 max-w-[1012px] mx-auto pb-[48px]">
            {brandsimages?.map((data: any, index: any) => (
              <div
                key={data?.title}
                className="md:w-1/3 p-6 rounded-[16px] border border-grey-2  min-h-[448px] flex flex-col justify-between"
              >
                <div className="w-full">
                  <p className="text-primary-green-1 text-[14px] font-semibold leading-[24px] tracking-[2.8px] uppercase mb-2">
                    {data?.title}
                  </p>
                  <p className="text-grey-dark text-[36px] font-normal leading-[44px] tracking-[-0.36px] mb-4 flex items-center gap-1">
                    {data?.percentageNumber1}{' '}
                    <span className="text-grey-dark text-[48px] font-semibold leading-[56px] tracking-[-0.48px]">
                      {data?.percentageNumber}
                    </span>{' '}
                    {data?.percentageNumber3}
                  </p>
                  <p></p>
                  <p className="text-grey-8 text-base leading-6 mb-6">{data?.tagline}</p>
                </div>
                <div className="w-full">
                  <SanityImg
                    builder={imageUrlBuilder}
                    image={data?.brandImg}
                    alt={data?.brandImg?.alt ?? 'image'}
                    loading="eager"
                    className="w-full"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  )
}
