import Title from '../widgets/shared/title'
import BtnWithArrow from '../widgets/shared/buttons/button/btnWithArrow'
import Image from 'next/image'
import { urlForImage } from '@/studio/lib/image'

const Brands: React.FC<any> = (data) => {
  return (
    <>
      {data?.brandsimages && (
        <section className="bg-[#F1F6FF] px-6 md:px-[71px] py-[48px] md:py-[80px]">
          <div className="container mx-auto flex flex-col gap-8 md:gap-12">
            <div className="max-w-[808px] mx-auto flex flex-col gap-4">
              {data?.sectionName && (
                <Title
                  tagline={data?.sectionName}
                  headingType="h2"
                  theme="light"
                  className="text-center"
                />
              )}
              {data?.tagline && (
                <p className="text-grey-8 text-[16px] leading-[24px] text-center max-w-[800px] mx-auto">
                  {data?.tagline}
                </p>
              )}
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 gap-y-6 mx-auto">
              {data?.brandsimages?.map((image: any, index: any) => (
                <div className="w-[184px] h-[137px]" key={index}>
                  {image?.brandImg && (
                    <Image
                      src={urlForImage(image?.brandImg).url()}
                      width={130}
                      height={68}
                      alt={image?.brandImg?.alt ?? ''}
                      className="w-full h-full"
                    />
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  )
}

export default Brands
