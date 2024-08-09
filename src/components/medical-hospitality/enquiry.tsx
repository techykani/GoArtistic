import { SanityImg } from 'sanity-react-extra'
import { imageUrlBuilder } from '@/sanity'
import { useRouter } from 'next/router'
import { useWindowSize } from '@/lib/hooks'
import { LinkAngleRight } from '@/components/ui'
import clsx from 'clsx'

export const Enquiry: React.FC<any> = ({
  bannerImage,
  smallBannerImage,
  title,
  description,
  button,
  classNames = '',
}) => {
  const router = useRouter()
  const windowWidth = useWindowSize()?.width ?? 0

  return (
    <>
      <div className={`hidden xl:block px-[71px] py-[80px] ${classNames}`}>
        <div className={`relative rounded-xl ${windowWidth > 1550 ? 'container' : ''} `}>
          {bannerImage && (
            <SanityImg
              className="w-full h-full absolute rounded-xl  inset-0  object-cover"
              builder={imageUrlBuilder}
              image={bannerImage}
              alt="image"
              loading="eager"
            />
          )}

          <div
            className={`w-full h-full absolute inset-0 rounded-xl  z-[2] medical-hospitality-enquiry-gr`}
          />
          <div className="px-20 py-12 flex justify-between items-center rounded-xl relative z-10 text-off-white ">
            <div className="pr-20 flex flex-col justify-center w-[580px]">
              <h1 className="text-[28px] font-semibold leading-9 tracking-[-0.28px]">{title}</h1>
              <p className="pt-2 text-base font-normal leading-6">{description}</p>
            </div>
            <div className="justify-end">
              <LinkAngleRight
                href={button?.href ?? ''}
                className={clsx(
                  'w-[220px] px-6 py-3 rounded-lg border-2 border-off-white flex items-center text-center justify-center  font-semibold transition-colors duration-150 group',
                )}
                color="white"
                gtag_event="select_content"
                gtag_content_name={description}
                gtag_content_type={title}
                gtag_cta_button={button?.title}
              >
                {button?.title}
              </LinkAngleRight>
            </div>
          </div>
        </div>
      </div>
      <div className="xl:hidden block px-6 py-16">
        <div className="rounded-xl relative">
          {smallBannerImage && (
            <SanityImg
              className="w-full h-full absolute inset-0 z-[-1] object-cover rounded-xl"
              builder={imageUrlBuilder}
              image={smallBannerImage}
              alt="image"
              loading="eager"
            />
          )}

          <div
            className={`w-full h-full absolute inset-0 z-[2] medical-hospitality-sm-enquiry-gr rounded-xl`}
          />
          <div className="p-6 pt-8 flex flex-col text-off-white rounded-xl relative z-10  ">
            <div>
              <h1 className="text-xl font-semibold leading-9 tracking-[-0.28px]">{title}</h1>
              <p className="pt-2 pb-6 text-base font-normal leading-7">{description}</p>
            </div>
            <div className="justify-center">
              <LinkAngleRight
                href={''}
                className={clsx(
                  'w-auto px-6 py-3 rounded-lg border-2 border-off-white flex items-center text-center justify-center  font-semibold transition-colors duration-150 group',
                )}
                color="white"
                gtag_event="select_content"
                gtag_content_name={description}
                gtag_content_type={title}
                gtag_cta_button={button?.title}
              >
                {button?.title}
              </LinkAngleRight>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
