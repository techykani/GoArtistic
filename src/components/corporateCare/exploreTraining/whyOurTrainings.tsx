import { Description } from '@/components/ui'
import ReactPortableText from '@/components/widgets/shared/reactPortableText'
import Title from '@/components/widgets/shared/title'
import { useWindowSize } from '@/lib/hooks'
import { PortableText, imageUrlBuilder } from '@/sanity'
import Image from 'next/image'
import { SanityImg } from 'sanity-react-extra'

const WhyOurTrainings = ({ caption, cards }: any) => {
  const windowWidth = useWindowSize()?.width ?? 0

  return (
    <section className="">
      <h4 className='text-[#3C3C3C] text-[20px] md:text-[28px] font-semibold leading-[24px] md:leading-[36px] md:tracking-[-0.28px] text-center py-8 md:pt-[64px] md:pb-0'>{caption}</h4>
      {cards.map((point: any, index: any) => (
        <div key={point?._key} className="px-6 md:px-[71px] py-[32px] md:py-[48px]">
          <div
            className={`max-w-[1016px] mx-auto flex flex-col gap-6 md:items-center ${Math.floor(index + 1 / 2) * 2 !== index + 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'
              }`}
          >
            {point?.primaryImg && (
              <div className="w-full lg:w-1/2 ">
                <SanityImg
                  builder={imageUrlBuilder}
                  image={point?.primaryImg}
                  width={800}
                  height={500}
                  alt={point?.primaryImg?.alt ?? 'image'}
                  loading="eager"
                  className="object-cover w-full lg:min-h-[413px] rounded-xl"
                />
              </div>
            )}
            <div
              className={`w-full lg:w-1/2 flex flex-col gap-2 ${Math.floor(index + 1 / 2) * 2 !== index + 1 ? 'lg:pr-12' : 'lg:pl-12'
                }`}
            >
              {/* <Title headingType="h3" theme='light' tagline={point?.title} /> */}
              <p className='text-[#3c3c3c] text-[18px] md:text-[20px] font-semibold leading-[22px] md:leading-[24px]'>{point?.title}</p>
              <div className="mt-[-24px]">
                <ReactPortableText content={point?.description} />
              </div>
            </div>
          </div>
        </div>
      ))}
    </section>
  )
}

export default WhyOurTrainings
