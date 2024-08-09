import { PortableText, imageUrlBuilder } from '@/sanity'
import { SanityImage, SanityImg } from 'sanity-react-extra'
import Title from '../widgets/shared/title'

export interface Mission {
  tagline: string
  description: string
  image: SanityImage
}

export default function Mission({ tagline, description, image }: Mission) {
  return (
    <div className="bg-off-white px-6 py-[48px] md:py-[80px]">
      <div className="mx-auto max-w-[1016px] flex flex-col md:flex-row-reverse gap-6">
        <div className="w-full lg:min-w-[600px] rounded-2xl overflow-hidden">
          <SanityImg
            className="w-full"
            builder={imageUrlBuilder}
            image={image}
            alt={image?.alt ?? 'image'}
            loading="eager"
          />
        </div>
        <div className="w-full md:pr-[48px] flex flex-col gap-2 justify-center">
          {/* <h2 className="text-primary-blue text-[36px] md:text-[48px] font-semibold leading-[44px] md:leading-[56px] tracking-[-0.36px] md:tracking-[-0.48px]">
            {tagline}
          </h2> */}
          <Title headingType='h2' tagline={tagline} theme='light' />
          <div className="text-grey-8 font-base leading-[24px]">
            <PortableText blocks={description} />
          </div>
        </div>
      </div>
    </div>
  )
}
