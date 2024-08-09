import { PortableText, imageUrlBuilder } from '@/sanity'
import { SanityImage, SanityImg } from 'sanity-react-extra'
import Title from '../widgets/shared/title'

export interface Vision {
  tagline: string
  description: string
  image: SanityImage
}

export default function Vision({ tagline, description, image }: Vision) {
  return (
    <div className="bg-[#F1F6FF] px-6 py-[48px] md:py-[80px]">
      <div className="mx-auto max-w-[1016px] flex flex-col md:flex-row-reverse gap-6">
        <div className="w-full lg:min-w-[600px] rounded-2xl overflow-hidden">
          <SanityImg
            className="w-full"
            builder={imageUrlBuilder}
            image={image}
            alt={image.alt ?? 'image'}
            loading="eager"
          />
        </div>
        <div className="w-full md:pl-[48px] flex flex-col gap-2 justify-center">
          <Title headingType='h2' tagline={tagline} theme='light' />
          <div className="text-grey-8 font-base leading-[24px]">
            <PortableText blocks={description} />
          </div>
        </div>
      </div>
    </div>
  )
}
