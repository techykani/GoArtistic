import { SanityImg } from 'sanity-react-extra'
import { imageUrlBuilder } from '@/sanity'
import { useWindowSize } from '@/lib/hooks'
import { LinkAngleRight } from '@/components/ui'
import clsx from 'clsx'

export const About: React.FC<any> = ({
  image,
  smallImage,
  tagline,
  title,
  description,
  button,
}) => {
  const windowWidth = useWindowSize()?.width ?? 0

  return (
    <>
      <div className="hidden xl:block bg-[#F1F6FF]">
        <div className={`${windowWidth > 1550 ? 'container' : ''}`}>
          <div className=" grid grid-cols-2  px-[71px] py-[80px]">
            <div className="col-span-1 flex justify-center">
              <SanityImg
                className="w-[600px] mr-6 rounded-2xl"
                builder={imageUrlBuilder}
                image={image}
                width={600}
                height={500}
                alt={'icon'}
              />
            </div>
            <div className="col-span-1 pl-8 py-6  flex flex-col justify-center">
              <div className="flex flex-col  justify-center">
                <span className="text-xs uppercase font-bold tracking-[2.16px] leading-6 section__tag-title">
                  {tagline}
                </span>
                <h1 className="pt-2 font-bold font-montserrat text-[32px] text-primary-blue-new w-[568px] leading-[38px] tracking-[0.32px]">
                  {title}
                </h1>
                <p className="text-base font-normal leading-6 text-grey-8 pt-2">{description}</p>
              </div>

              <div className="flex justify-start items-start">
                <LinkAngleRight
                  href={button?.link ?? ''}
                  className={clsx(
                    'text-grey-9 text-base pt-4 leading-5 flex items-center font-semibold transition-colors duration-150 group',
                  )}
                  color="black"
                  gtag_event="select_content"
                  gtag_content_name={tagline}
                  gtag_content_type={title}
                  gtag_cta_button={button?.title}
                >
                  {button?.title}
                </LinkAngleRight>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="xl:hidden block py-12 px-6  bg-light-neutral">
        <div className="flex justify-center">
          <SanityImg
            className="w-[312px] h-auto rounded-2xl"
            builder={imageUrlBuilder}
            image={smallImage}
            width={312}
            height={260}
            alt={'icon'}
          />
        </div>
        <div className="pt-6 ">
          <div className="flex flex-col  justify-center">
            <span className="text-xs uppercase font-bold tracking-[2.4px] leading-3 section__tag-title">
              {tagline}
            </span>
            <h1 className="pt-2 font-bold font-montserrat text-[26px] tracking-[0.32px] leading-[32px] text-primary-blue-new">
              {title}
            </h1>
            <p className="text-base font-normal leading-6 text-grey-8 pt-2">{description}</p>
          </div>

          <div className="flex justify-start items-start">
            <LinkAngleRight
              href={button?.link ?? ''}
              className={clsx(
                'text-grey-9 text-base pt-4 flex items-center font-semibold transition-colors leading-5 duration-150 group',
              )}
              color="black"
              gtag_event="select_content"
              gtag_content_name={tagline}
              gtag_content_type={title}
              gtag_cta_button={button?.title}
            >
              {button?.title}
            </LinkAngleRight>
          </div>
        </div>
      </div>
    </>
  )
}
