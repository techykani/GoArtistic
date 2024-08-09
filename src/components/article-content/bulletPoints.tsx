import { serializers } from '@/lib/blockContent'
import { PortableText, imageUrlBuilder } from '@/sanity'
import Image from 'next/image'
import { SanityImg } from 'sanity-react-extra'

export const BulletPoints: React.FC<any> = ({ points }) => {
  return (
    <div className="bg-light-neutral-2 px-6 lg:px-[71px]">
      <div className="container mx-auto">
        <div className="py-[32px] md:py-[48px] article-desc text-grey-dark text-[16px] md:text-[20px] leading-[24px] md:leading-[28px]">
          <PortableText blocks={points} serializers={serializers} />
        </div>
      </div>
    </div>
  )
}
