import EyeBrew from '@/components/widgets/shared/eyeBrew'
import ReactPortableText from '@/components/widgets/shared/reactPortableText'
import Title from '@/components/widgets/shared/title'
import { PortableText, imageUrlBuilder } from '@/sanity'
import Image from 'next/image'
import Link from 'next/link'
import { SanityImg } from 'sanity-react-extra'

const VirtualWellnessSec = ({ image, title, tagline, description, btn1, btn2 }: any) => {
  return (
    <section className="bg-[#F1F6FF] w-full px-6 md:px-[71px] py-12 md:py-20">
      <div className="container mx-auto">
        <div className="w-full flex flex-col md:flex-row-reverse gap-6">
          <div className="w-full border-[1px] border-[#ffffff40] rounded-2xl bg-[white]">
            <SanityImg
              className="w-full h-full "
              builder={imageUrlBuilder}
              image={image}
              alt={image.alt ?? 'image'}
              loading="eager"
            />
          </div>
          <div className="w-full flex flex-col gap-4 justify-center lg:pr-8">
            <div className="w-full flex flex-col gap-2">
              <EyeBrew title={title} theme='light' />
              <Title headingType='h2' theme='light' tagline={tagline} />
              <div className='mt-[-24px]'>
                <ReactPortableText content={description} />
              </div>
            </div>
            <div className="flex gap-3 md:gap-4">
              <Link href={btn1.href} className="w-[144px] h-[48px]">
                <SanityImg
                  className="w-full h-full "
                  builder={imageUrlBuilder}
                  image={btn1.image}
                  alt={image.alt ?? 'image'}
                  loading="eager"
                />
              </Link>
              <Link href={btn2.href} className="w-[159px] h-[48px]">
                <SanityImg
                  className="w-full h-full "
                  builder={imageUrlBuilder}
                  image={btn2.image}
                  alt={image.alt ?? 'image'}
                  loading="eager"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
export default VirtualWellnessSec
