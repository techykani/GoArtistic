import { imageUrlBuilder, PortableText } from '@/sanity'
import clsx from 'clsx'
import { SanityImg } from 'sanity-react-extra'
import { SingleImageAndCtaBlock } from '../common/blocks/single-image-and-cta-block'
import { LinkAngleRight } from '../ui'
import { useWindowSize } from '@/lib/hooks'
import EyeBrew from '../widgets/shared/eyeBrew'
import ReactPortableText from '../widgets/shared/reactPortableText'
import Title from '../widgets/shared/title'
import Link from 'next/link'


export const CorporateHealthcare: React.FC<any> = ({ title, cta, image, description, tagline }) => {

  return (
    <section className="px-6 md:px-[71px] py-[48px] md:py-[80px] bg-[#F1F6FF]">
      <div className="container mx-auto flex flex-col md:flex-row gap-6 md:items-center">
        <div className="w-full md:max-w-[496px] rounded-xl overflow-hidden">
          <SanityImg
            className="w-full aspect-[6/5]"
            builder={imageUrlBuilder}
            image={image}
            width={500}
            height={413}
            alt={image.alt ?? 'image'}
            loading="eager"
          />
        </div>
        <div className="md:pl-[48px] flex flex-col gap-4">
          <div className='flex flex-col gap-2'>
            <EyeBrew title={title} theme='light' />
            <Title headingType="h2" theme='light' tagline={tagline} />
            <div className="mt-[-24px] ">
              <ReactPortableText content={description} />
            </div>
          </div>
          <div className="w-full flex">
            <Link href={cta?.href ?? ""}
              className={`btn_tertiary_medium-light font-semibold rounded-[8px] leading-[20px] flex gap-2 items-center group cursor-pointer`}
            >
              {cta?.text}
              <div className="transform flex justify-content items-center transition-all duration-150 group-hover:translate-x-1">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M14.8925 7.39459C15.283 7.00406 15.9162 7.00405 16.3067 7.39457L20.7052 11.7929C20.8927 11.9804 20.9981 12.2348 20.9981 12.5C20.9981 12.7652 20.8927 13.0196 20.7052 13.2071L16.3067 17.6056C15.9162 17.9961 15.283 17.9961 14.8925 17.6056C14.502 17.2151 14.502 16.5819 14.8925 16.1914L17.5839 13.5H3.99805C3.44576 13.5 2.99805 13.0523 2.99805 12.5C2.99805 11.9477 3.44576 11.5 3.99805 11.5H17.5838L14.8925 8.8088C14.502 8.41829 14.502 7.78512 14.8925 7.39459Z" fill="#5A5A5A" />
                </svg>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
