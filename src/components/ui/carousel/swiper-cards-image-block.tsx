import { useWindowSize } from '@/lib/hooks'
import { imageUrlBuilder, PortableText } from '@/sanity'
import { SanityImage, SanityImg } from 'sanity-react-extra'
import { LinkAngleRightBtn } from '../link-angle-right-btn'
import Link from 'next/link'

export interface HeroProps {
  link: Link
  shortDes: string
  icon: SanityImage
  description?: PortableText[]
}

export const SwiperCardsImageBlock: React.FC<HeroProps> = ({ link, shortDes, icon }) => {
  const windowWidth = useWindowSize()?.width ?? 0

  return (
    <Link href={link?.href ?? ''} className="w-full flex">
      <div className="min-w-[288px] max-w-[288px] rounded-xl bg-[white] overflow-hidden">
        <div className="w-full md:max-h-[240px] relative">
          <SanityImg
            builder={imageUrlBuilder}
            image={icon}
            width={400}
            alt={icon?.alt ?? 'image'}
            loading="eager"
            className=""
          />
          <div className="w-12 h-12 absolute bottom-[-30px] right-6 bg-[#00ADE5] hover:bg-[#009CCE] transition duration-200 flex items-center justify-center rounded-full">
            <LinkAngleRightBtn
              href={link?.href ?? ''}
              color="white"
              gtag_event="select_content"
              gtag_content_name={''}
              gtag_content_type={''}
              gtag_cta_button={''}
            >
              {}{' '}
            </LinkAngleRightBtn>
          </div>
        </div>
        <div className="w-full pt-8 px-6 pb-6 flex flex-col gap-2">
          <h3 className="text-grey-dark text-base md:text-xl font-semibold leading-5 md:leading-6">
            {link?.text}
          </h3>
          <p className="text-grey-8 font-base leading-6">{shortDes}</p>
        </div>
      </div>
    </Link>
  )
}
