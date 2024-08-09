import { serializers } from '@/lib/blockContent'
import { PortableText, imageUrlBuilder } from '@/sanity'
import Image from 'next/image'
import { SanityImg } from 'sanity-react-extra'
import ReactPortableText from '../widgets/shared/reactPortableText'

export const ImageTitleDesc: React.FC<any> = ({ image, description, imageCaption, title }) => {
  return (
    <>
      <div className="px-6 md:px-0">
        <div className="max-w-[808px] mx-auto">
          {image && (
            <div className="w-full flex flex-col gap-4 mb-8 md:mb-12">
              {/* image */}
              <SanityImg
                builder={imageUrlBuilder}
                image={image}
                alt={image?.alt ?? 'image'}
                loading="eager"
                className="w-full rounded-xl overflow-hidden"
              />
              <p className="text-grey-8 text-[14px] leading-5">{imageCaption}</p>
            </div>
          )}
          <div className={`flex flex-col gap-4 md:gap-6 pt-8 ${image ? 'md:pt-0' : 'md:pt-12 '} `}>
            {title && (
              <p className="text-[#3C3C3C] text-[20px] font-semibold leading-[28px]">{title}</p>
            )}
            {description && (
              // <p className="text-base text-grey-dark pb-8 md:pb-12 px-6 md:px-0">
              //   <PortableText blocks={description} serializers={serializers} />
              // </p>
              <div className="mt-[-24px] pb-8 md:pb-12">
                <ReactPortableText content={description} />
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  )
}
