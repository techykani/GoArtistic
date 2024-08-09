import { serializers } from '@/lib/blockContent'
import { PortableText, imageUrlBuilder } from '@/sanity'
import Image from 'next/image'
import { SanityImg } from 'sanity-react-extra'

export const Banner: React.FC<any> = ({ docImage }) => {
  return (
    <>
      <div className=" ">
        {docImage && (
          <div className="w-full max-w-[1012px] mx-auto flex flex-col gap-4 mb-8 md:mb-12">
            {/* image */}
            <SanityImg
              builder={imageUrlBuilder}
              image={docImage}
              alt={'image'}
              loading="eager"
              className="w-full rounded-xl overflow-hidden"
            />
          </div>
        )}
      </div>
    </>
  )
}