import Link from 'next/link'
import { SanityImg } from 'sanity-react-extra'
import { imageUrlBuilder, PortableText } from '@/sanity'
import { useWindowScroll } from '@/lib/hooks'
import clsx from 'clsx'
import { useRouter } from 'next/router'
import { useWindowSize } from '@/lib/hooks'
import { LanguageSwitcher } from '../common/languageSwitcher'
import BtnWithArrow from '../widgets/shared/buttons/button/btnWithArrow'
import { GTAEvent } from '@/lib/gtag'
import { isEmpty } from 'lodash'

export const Footer: React.FC<any> = ({
  data: { cta, logo, address, downloadAppLink, footerBottom, footerSections },
  primaryMenu,
  secondaryMenu,
}) => {
  const router = useRouter()
  const windowWidth = useWindowSize()?.width ?? 0
  const scroll = useWindowScroll()?.y ?? 0

  const handleButton = (gtag_event: any, menu_name: any, menu_list: any, menu_location: any) => {
    GTAEvent(gtag_event, {
      menu_name: menu_name !== '' ? menu_name : null,
      menu_list: menu_list !== '' ? menu_list : null,
      menu_location: menu_location !== '' ? menu_location : null,
    })
  }

  return (
    <>
      {windowWidth >= 1200 && (
        <footer className="px-[71px] relative xl:flex xl:flex-col gap-[64px] hidden bottom-0 w-full z-30 bg-[#004E89] text-white-700 py-12">
          {/* border-primary-green border-t-4 */}
          <div className="container flex gap-[85px]">
            <div className="w-[128px]">
              {' '}
              <div className="flex flex-col gap-[44px]">
                {logo && (
                  <SanityImg
                    builder={imageUrlBuilder}
                    image={logo}
                    // className={clsx('transition-all duration-300 relative pb-8 w-[100px]')}
                    className="min-w-[99px]"
                    alt={logo?.alt ?? 'image'}
                    title={'logo'}
                  />
                )}
                {/* {downloadAppLink && (
                  <div className="w-[160px] max-w-[160px] flex flex-col gap-3">
                    <span className="font-semibold text-[14px] text-off-white text-opacity-50 leading-[20px]">
                      {downloadAppLink?.title}
                    </span>
                    <ul className="text-sm text-off-white font-normal flex flex-col gap-3">
                      {downloadAppLink?.iconLinks?.map((data: any, index: any) => {
                        return (
                          <li className="" key={index}>
                            <SanityImg
                              builder={imageUrlBuilder}
                              image={data.icon}
                              alt={'icon'}
                              className="pr-2 w-[144px] h-[48px]"
                              width={144}
                              height={48}
                            />
                          </li>
                        )
                      })}
                    </ul>
                  </div>
                )} */}
              </div>
            </div>
            <div className="w-full flex justify-between">
              <div className="flex justify-between gap-32">
                {footerSections &&
                  footerSections?.map((section: any, index: any) => {
                    return (
                      <div className="w-[130px] max-w-[130px] flex flex-col gap-4" key={index}>
                        <span className="font-semibold text-[14px] text-off-white text-opacity-50 leading-[20px]">
                          {section?.sectionTitle}
                        </span>
                        <ul className="text-[14px] text-[#FBFBFB]  font-normal leading-[20px] flex flex-col gap-4">
                          {section?.subSections &&
                            section?.subSections?.map((subSection: any, subSectionIndex: any) => {
                              return (
                                <li key={subSectionIndex}>
                                  <Link
                                    href={`${
                                      subSection?.subsectionURL ? subSection?.subsectionURL : ''
                                    }`}
                                    onClick={() => {
                                      handleButton(
                                        'menu',
                                        section?.sectionTitle,
                                        subSection?.subsectionTitle,
                                        'Footer Menu',
                                      )
                                    }}
                                  >
                                    {subSection?.subsectionTitle}
                                  </Link>
                                </li>
                              )
                            })}
                        </ul>
                      </div>
                    )
                  })}

                <div className="flex gap-[26px]">
                  {address && (
                    <div className="w-[227px] max-w-[227px] flex flex-col gap-4">
                      <span className="font-semibold text-[14px] text-off-white text-opacity-50 leading-[20px]">
                        {address?.title}
                      </span>
                      <ul className="text-[14px] text-[#FBFBFB] font-normal leading-[20px] flex flex-col gap-4">
                        {address?.iconLinks?.map((data: any, index: any) => {
                          return (
                            <>
                              {data?.link?.href && (
                                <Link
                                  className="flex gap-2 text-[14px] leading-[20px]"
                                  href={`${data?.link?.href ? data?.link?.href : ''}`}
                                  key={index}
                                  target={data?.link?.href ? '_blank' : ''}
                                >
                                  <li className="flex  gap-2 ">
                                    <div className="w-[20px]">
                                      <SanityImg
                                        builder={imageUrlBuilder}
                                        image={data.icon}
                                        alt={'icon'}
                                        className="min-w-[20px] max-h-[20px]"
                                        width={20}
                                        height={20}
                                      />
                                    </div>
                                    {data?.link?.text}
                                  </li>
                                </Link>
                              )}
                              {isEmpty(data?.link?.href) && (
                                <span className="flex gap-2 text-[14px] leading-[20px]" key={index}>
                                  <li className="flex  gap-2 ">
                                    <div className="w-[20px]">
                                      <SanityImg
                                        builder={imageUrlBuilder}
                                        image={data.icon}
                                        alt={'icon'}
                                        className="min-w-[20px] max-h-[20px]"
                                        width={20}
                                        height={20}
                                      />
                                    </div>
                                    {data?.link?.text}
                                  </li>
                                </span>
                              )}
                            </>
                          )
                        })}
                        {cta && (
                          // <li className="">
                          //   <Link href={ctaButton?.ctaButton?.href ? ctaButton?.ctaButton?.href : '/'}>
                          //     <button className="flex items-center border-2 py-[12px] px-[24px] border-white rounded-lg text-white">
                          //       {ctaButton?.ctaButton?.title}
                          //       <SanityImg
                          //         builder={imageUrlBuilder}
                          //         image={ctaButton?.icon}
                          //         alt={'icon'}
                          //         className="pl-2 w-[25px] h-auto"
                          //         width={25}
                          //         height={25}
                          //       />
                          //     </button>
                          //   </Link>
                          // </li>
                          <li className="w-full flex">
                            <BtnWithArrow
                              link={cta}
                              rel=""
                              target={'_self'}
                              btnType={'secondary'}
                              arrowVisibility={true}
                              theme="dark"
                              customStyle="rounded-full"
                              size="small"
                              arrowColor="white"
                              gtag_event="select_content"
                              gtag_content_name={''}
                              gtag_content_type={''}
                              gtag_cta_button={cta}
                            />
                          </li>
                        )}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
          <div className="container flex justify-between">
            <div className="flex">
              {footerBottom &&
                footerBottom?.map((data: any, index: any) => {
                  return (
                    <div className="flex items-center" key={index}>
                      {data?._type === 'iconAndLink' && (
                        <div className="flex justify-center items-center">
                          <a
                            className="flex justify-center items-center"
                            target="_blank"
                            href={data?.href ?? ''}
                            rel="noopener noreferrer"
                          >
                            {data?.icon && (
                              <SanityImg
                                builder={imageUrlBuilder}
                                image={data?.icon}
                                alt={'icon'}
                                className="w-auto h-[25px] pr-2"
                              />
                            )}
                            <span className=" text-off-white text-sm">{data?.title}</span>
                          </a>
                          {index !== footerBottom?.length - 2 && (
                            <div className="px-4">
                              <span className="block text-off-white w-[5px] h-[5px] bg-off-white rounded-full"></span>
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                  )
                })}
            </div>
            <div className="flex gap-8 font-normal text-sm text-off-white">
              {footerBottom &&
                footerBottom?.map((data: any, index: any) => {
                  return (
                    <>
                      {data?.href && (
                        <a
                          href={data?.href}
                          key={index}
                          className={`${data?.href ? 'cursor-pointer' : 'cursor-default'}`}
                        >
                          {data?.icon === null && <div className="">{data?.text}</div>}
                        </a>
                      )}
                      {isEmpty(data?.href) && (
                        <span key={index} className="cursor-default">
                          {data?.icon === null && <div className="">{data?.text}</div>}
                        </span>
                      )}
                    </>
                  )
                })}
            </div>
          </div>
        </footer>
      )}
    </>
  )
}
