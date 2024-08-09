import { SanityImg } from 'sanity-react-extra'
import { imageUrlBuilder } from '@/sanity'
import { useRouter } from 'next/router'
import { useWindowSize } from '@/lib/hooks'
import { LinkAngleRight } from '@/components/ui'
import clsx from 'clsx'

export const Assistance: React.FC<any> = ({ image, smallImage, title, description, listItem }) => {
  const router = useRouter()
  const windowWidth = useWindowSize()?.width ?? 0

  return (
    <>
      <div className="hidden xl:block px-[71px] py-[80px] bg-alice-blue text-off-white">
        <div className={`flex justify-center ${windowWidth > 1550 ? 'container' : ''}`}>
          <div className="pr-6 col-span-1 flex justify-center">
            <SanityImg
              className="w-[496px] h-auto rounded-xl"
              builder={imageUrlBuilder}
              image={image}
              width={496}
              height={595}
              alt={'icon'}
            />
          </div>
          <div className="col-span-1 flex flex-col justify-center w-[720px] pl-12">
            <div>
              <h1 className="text-[32px] font-bold font-montserrat text-primary-blue-new leading-[38px] tracking-[0.32px]">
                {title}
              </h1>
              <div className="pt-4">
                <p className="text-base font-normal text-grey-9 leading-6">{description}</p>
                <p className="text-base font-normal leading-6 pt-8 text-grey-9">
                  {listItem?.description}
                </p>
              </div>

              <div className="pt-8">
                <h6 className="text-xs font-bold leading-[18px] uppercase section__tag-title tracking-[2.4px]">
                  {listItem?.tagline}
                </h6>
                <ul className="pt-6 grid grid-cols-2">
                  {listItem?.list?.map((point: any, index: any) => {
                    return (
                      <li className="pb-3 text-base font-semibold leading-5 col-span-1" key={index}>
                        <LinkAngleRight
                          href={''}
                          className={clsx(
                            'text-base font-semibold leading-5 flex items-center text-grey-dark transition-colors duration-150 group',
                          )}
                          color="black"
                          gtag_event="select_content"
                          gtag_content_name={description}
                          gtag_content_type={title}
                          gtag_cta_button={point?.link?.text}
                        >
                          {point?.link?.text}
                        </LinkAngleRight>
                      </li>
                    )
                  })}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="xl:hidden block px-6 py-12 bg-alice-blue">
        <div>
          <div className="flex justify-center">
            <SanityImg
              className="w-[312px] h-auto rounded-xl"
              builder={imageUrlBuilder}
              image={smallImage}
              width={312}
              height={260}
              alt={'icon'}
            />
          </div>
          <div className="flex flex-col justify-start pt-6">
            <div>
              <h1 className="text-[26px] font-bold font-montserrat text-primary-blue-new leading-[32px] tracking-[0.32px]">
                {title}
              </h1>
              <div className="pt-2">
                <p className="text-base font-normal text-grey-8 leading-7">{description}</p>
                <p className="text-base font-normal  text-grey-8 leading-7 pt-6">
                  {listItem?.description}
                </p>
              </div>

              <div className="pt-6">
                <h6 className="text-xs font-bold uppercase leading-[18px] tracking-[2.4px] section__tag-title">
                  {listItem?.tagline}
                </h6>
                <ul className="pt-2">
                  {listItem?.list?.map((point: any, index: any) => {
                    return (
                      <li key={index}>
                        <LinkAngleRight
                          href={''}
                          className={clsx(
                            'pb-4 last:pb:0 text-base font-semibold leading-5 flex items-center text-grey-9 transition-colors duration-150 group',
                          )}
                          color="black"
                          gtag_event="select_content"
                          gtag_content_name={description}
                          gtag_content_type={title}
                          gtag_cta_button={point?.link?.text}
                        >
                          {point?.link?.text}
                        </LinkAngleRight>
                      </li>
                    )
                  })}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
