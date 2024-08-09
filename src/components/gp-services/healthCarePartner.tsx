import { SanityImg } from 'sanity-react-extra'
import { imageUrlBuilder } from '@/sanity'
import { useRouter } from 'next/router'
import { useWindowSize } from '@/lib/hooks'
import { LinkAngleRight } from '@/components/ui'
import clsx from 'clsx'
import Title from '../widgets/shared/title'
import Image from 'next/image'
import { urlForImage } from '@/studio/lib/image'

export const HealthcarePartner: React.FC<any> = ({
  title,
  description,
  image,
  secondaryTitle,
  secondaryDescription,
  points,
}) => {
  const router = useRouter()
  const windowWidth = useWindowSize()?.width ?? 0

  return (
    <section className="bg-off-white py-12 md:py-20 px-6 md:px-[71px]">
      <div className="max-w-[1014px] mx-auto flex flex-col  gap-8 md:gap-12">
        <div className="max-w-[805px] mx-auto flex flex-col gap-4">
          <div className="flex justify-center">
            <Title headingType="h2" theme='light' tagline={title} className="text-center" />
          </div>
          <div className="text-center">
            <div className="flex flex-col  justify-center">
              <p className="text-base font-normal leading-6 text-grey-9">{description}</p>
            </div>
          </div>
        </div>
        <div className="w-full max-w-[805px] mx-auto flex flex-col md:flex-row gap-8 md:gap-6 items-center md:items-start">
          <div className="md:max-w-[320px]">
            <Image
              src={urlForImage(image).url()}
              width={320}
              height={384}
              alt={image?.alt ?? ""}
              className="aspect-[5/6] rounded-xl"
            />
          </div>
          <div className="lg:pl-6 flex flex-col gap-2 md:gap-4">

            <h3 className='text-[#3C3C3C] font-inter text-[20px] font-semibold leading-[24px]'>{secondaryTitle}</h3>
            <div className="flex flex-col gap-6">
              <p className="text-grey-9 text-[16px] leading-[24px]">{secondaryDescription}</p>
              <ul className="pl-6 text-grey-9 text-base font-normal leading-6 list-disc">
                {points &&
                  points?.map((point: any, index: any) => <li key={index}>{point?.pointTitle}</li>)}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
