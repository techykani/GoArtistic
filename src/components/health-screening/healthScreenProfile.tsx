import { useEffect, useRef, useState } from 'react'
import Title from '@/components/widgets/shared/title'
import Image from 'next/image'
import Link from 'next/link'
import ReactPortableText from '../widgets/shared/reactPortableText'
import { HubspotForm } from '../hubspot/HubspotForm'
import { useWindowSize } from '@/lib/hooks'

export const HealthScreenProfile: React.FC<any> = ({ props }) => {
  const { iconurl, title, description, packageprice, link, test, terms, entities } = props
  const {
    consultTest,
    consultHeader,
    clinic,
    clinicTestHeader,
    laboratoryTest,
    laboratoryHeader,
    radiology,
    radiologyHeader,
    other,
    otherHeader,
    addons,
    preferredTest,
  } = test ?? ''

  const [showBookNowDropdown, setShowBookNowDropdown] = useState(false)
  const [showPopup, setShowPopup] = useState(false)
  const [showForm, setForm] = useState('289bc274-82f1-41f0-b564-b8c08dcd5fe6')
  const [viewMore, setViewMore] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)
  const windowWidth = useWindowSize()?.width ?? 0
  const handleBookNowBtn = () => {
    if (props?.entities?.length > 1) {
      setShowBookNowDropdown(!showBookNowDropdown)
    } else {
      if (props?.entities[0]?.link) {
        window.open(props.entities[0]?.link, '_blank')
      }
    }
  }

  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // Optional: smooth scrolling behavior
    })
  }

  const handleView = (value: boolean) => {
    setViewMore(value)
    scrollToTop()
  }

  const handleToggle = (state: boolean) => {
    setShowPopup(false)
  }
  const handleFlow = (option: any) => {
    if (option?.entity?.entity === 'onecare') {
      openPopup(option)
    } else {
      if (option?.link) {
        window.open(option?.link, '_blank')
      }
    }
  }
  const openPopup = (option: any) => {
    setForm(option?.link)
    setShowPopup(true)
  }

  useEffect(() => {
    const handleClickOutside = (event: any) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowBookNowDropdown(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  return (
    <main className="relative md:px-[71px] md:pt-[64px] md:py-20 bg-[#F1F6FF]">
      {showPopup && (
        <div className="fixed h-screen inset-0 z-[1000] bg-off-white px-6 md:px-[71px] pt-4 pb-12 md:py-[71px] overflow-scroll">
          <section className="max-w-[1014px] mx-auto">
            {/* header */}
            <div className="w-full flex justify-end gap-[10px] items-center pb-12 md:pb-12">
              <p className="text-grey-dark text-[16px] font-semibold leading-[20px]">Close</p>
              <div className="w-8 md:w-6 h-8 md:h-6 cursor-pointer">
                {windowWidth < 768 ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    fill="none"
                    onClick={() => handleToggle(false)}
                    className="cursor-pointer"
                  >
                    <g clip-path="url(#clip0_1_136259)">
                      <mask
                        id="mask0_1_136259"
                        style={{ maskType: 'alpha' }}
                        maskUnits="userSpaceOnUse"
                        x="0"
                        y="0"
                        width="32"
                        height="32"
                      >
                        <rect width="32" height="32" fill="#D9D9D9" />
                      </mask>
                      <g mask="url(#mask0_1_136259)">
                        <path
                          d="M16.0001 17.8658L9.46673 24.3991C9.22229 24.6435 8.91118 24.7658 8.5334 24.7658C8.15562 24.7658 7.84451 24.6435 7.60007 24.3991C7.35562 24.1546 7.2334 23.8435 7.2334 23.4658C7.2334 23.088 7.35562 22.7769 7.60007 22.5324L14.1334 15.9991L7.60007 9.46576C7.35562 9.22131 7.2334 8.9102 7.2334 8.53242C7.2334 8.15464 7.35562 7.84353 7.60007 7.59909C7.84451 7.35464 8.15562 7.23242 8.5334 7.23242C8.91118 7.23242 9.22229 7.35464 9.46673 7.59909L16.0001 14.1324L22.5334 7.59909C22.7778 7.35464 23.089 7.23242 23.4667 7.23242C23.8445 7.23242 24.1556 7.35464 24.4001 7.59909C24.6445 7.84353 24.7667 8.15464 24.7667 8.53242C24.7667 8.9102 24.6445 9.22131 24.4001 9.46576L17.8667 15.9991L24.4001 22.5324C24.6445 22.7769 24.7667 23.088 24.7667 23.4658C24.7667 23.8435 24.6445 24.1546 24.4001 24.3991C24.1556 24.6435 23.8445 24.7658 23.4667 24.7658C23.089 24.7658 22.7778 24.6435 22.5334 24.3991L16.0001 17.8658Z"
                          fill="#3C3C3C"
                        />
                      </g>
                    </g>
                    <defs>
                      <clipPath id="clip0_1_136259">
                        <rect width="32" height="32" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    onClick={() => handleToggle(false)}
                  >
                    <g clip-path="url(#clip0_1174_28102)">
                      <mask
                        id="mask0_1174_28102"
                        style={{ maskType: 'alpha' }}
                        maskUnits="userSpaceOnUse"
                        x="0"
                        y="0"
                        width="24"
                        height="24"
                      >
                        <rect width="24" height="24" fill="#D9D9D9" />
                      </mask>
                      <g mask="url(#mask0_1174_28102)">
                        <path
                          d="M11.9998 13.4L7.0998 18.3C6.91647 18.4834 6.68314 18.575 6.3998 18.575C6.11647 18.575 5.88314 18.4834 5.6998 18.3C5.51647 18.1167 5.4248 17.8834 5.4248 17.6C5.4248 17.3167 5.51647 17.0834 5.6998 16.9L10.5998 12L5.6998 7.10005C5.51647 6.91672 5.4248 6.68338 5.4248 6.40005C5.4248 6.11672 5.51647 5.88338 5.6998 5.70005C5.88314 5.51672 6.11647 5.42505 6.3998 5.42505C6.68314 5.42505 6.91647 5.51672 7.0998 5.70005L11.9998 10.6L16.8998 5.70005C17.0831 5.51672 17.3165 5.42505 17.5998 5.42505C17.8831 5.42505 18.1165 5.51672 18.2998 5.70005C18.4831 5.88338 18.5748 6.11672 18.5748 6.40005C18.5748 6.68338 18.4831 6.91672 18.2998 7.10005L13.3998 12L18.2998 16.9C18.4831 17.0834 18.5748 17.3167 18.5748 17.6C18.5748 17.8834 18.4831 18.1167 18.2998 18.3C18.1165 18.4834 17.8831 18.575 17.5998 18.575C17.3165 18.575 17.0831 18.4834 16.8998 18.3L11.9998 13.4Z"
                          fill="#3C3C3C"
                        />
                      </g>
                    </g>
                    <defs>
                      <clipPath id="clip0_1174_28102">
                        <rect width="24" height="24" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                )}
              </div>
            </div>
            <HubspotForm formID={showForm} />
          </section>
        </div>
      )}
      <section className="container mx-auto flex lg:flex-nowrap flex-wrap sm:gap-6">
        {/* short Intro */}
        <div className="w-full lg:max-w-[392px] ">
          <div className="md:shadow-megaMenu rounded-[12px] overflow-hidden">
            {/* Profile Image */}
            {/* <div className="w-full">
              {iconurl && (
                <Image
                  src={iconurl}
                  width={500}
                  height={220}
                  alt=""
                  className="w-full aspect-[16/9] object-cover object-top"
                />
              )}
            </div> */}
            <div className="flex flex-col md:gap-8 px-6 py-8 bg-off-white">
              <div className=" flex flex-col gap-4 md:gap-2 ">
                <Title headingType="h3" theme="light" tagline={title} className="!text-[#0957CB]" />
                <div className="mt-[-24px] mb-4">
                  {viewMore == true ? (
                    <div className="text-[16px]">
                      <ReactPortableText content={description} />
                    </div>
                  ) : (
                    <>
                      {description && (
                        <p className="text-[#5A5A5A] text-[16px] leading-[24px] pt-6">
                          {description[0]?.children[0]?.text}
                        </p>
                      )}
                    </>
                  )}
                </div>
                {/* cta */}
                {description?.length > 1 && (
                  <div className="w-full">
                    {viewMore !== true ? (
                      <div
                        onClick={() => setViewMore(true)}
                        className="text-grey-dark font-semibold leading-[20px] h-[32px] flex items-center gap-1 group cursor-pointer"
                      >
                        View more{' '}
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M18.0145 9.63365C18.362 10.0629 18.2957 10.6926 17.8665 11.0401L14.1249 14.069C13.0242 14.96 11.4503 14.96 10.3497 14.069L6.60807 11.0401C6.17881 10.6926 6.11253 10.0629 6.46003 9.63365C6.80752 9.20439 7.43721 9.13811 7.86647 9.48561L11.6081 12.5145C11.975 12.8115 12.4996 12.8115 12.8665 12.5145L16.6081 9.48561C17.0373 9.13811 17.667 9.20439 18.0145 9.63365Z"
                            fill="#3C3C3C"
                          />
                        </svg>
                      </div>
                    ) : (
                      <div
                        onClick={() => handleView(false)}
                        className="text-grey-dark font-semibold leading-[20px] h-[32px] flex items-center gap-1 group cursor-pointer"
                      >
                        View less{' '}
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          className=""
                        >
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M6.46009 14.3664C6.1126 13.9371 6.17888 13.3075 6.60814 12.96L10.3497 9.93105C11.4504 9.04003 13.0243 9.04003 14.1249 9.93105L17.8665 12.96C18.2958 13.3075 18.3621 13.9371 18.0146 14.3664C17.6671 14.7957 17.0374 14.862 16.6081 14.5145L12.8665 11.4855C12.4996 11.1885 11.975 11.1885 11.6081 11.4855L7.86654 14.5145C7.43728 14.862 6.80759 14.7957 6.46009 14.3664Z"
                            fill="#3C3C3C"
                          />
                        </svg>
                      </div>
                    )}
                  </div>
                )}
              </div>
              <div className="hidden md:block">
                <p className="text-[#3c3c3c] font-inter text-[28px] font-semibold leading-[36px] tracking-[-0.28px]">
                  {'$' + packageprice}
                </p>
                <p className="text-[12px] md:text-[16px] text-grey-dark leading-[16px] md:leading-[24px]">
                  Base price w/o GST
                </p>
              </div>
              <div className="md:flex gap-4 hidden relative">
                {/* <Link href={props?.link?.href === 'undefined' ? '' : props?.link?.href}> */}
                <Link
                  href={props?.link?.href === 'undefined' ? '' : props?.link?.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="btn_primary_small-light font-semibold rounded-full leading-[20px] w-full text-center whitespace-nowrap">
                    {props?.link?.text}
                  </button>
                </Link>
                {/* <button
                  onClick={() => handleBookNowBtn()}
                  className="btn_primary_small-light font-semibold rounded-full leading-[20px] w-full text-center whitespace-nowrap flex gap-[6px] justify-center"
                >
                  {link?.text}{' '}
                  {props?.entities?.length > 1 && (
                    <div>
                      {showBookNowDropdown == false ? (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                          fill="none"
                        >
                          <path
                            d="M5 7.5L10 12.5L15 7.5"
                            stroke="#FEFEFE"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                      ) : (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                          fill="none"
                        >
                          <path
                            d="M5 12.5L10 7.5L15 12.5"
                            stroke="#FEFEFE"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                      )}
                    </div>
                  )}
                </button>
                {showBookNowDropdown && (
                  <div
                    className="absolute top-[40px] right-0 mb-[44px] w-full bg-off-white flex flex-col z-[600] shadow-level2 rounded-lg"
                    ref={dropdownRef}
                  >
                    {entities && (
                      <>
                        {entities?.map((option: any, i: any) => (
                          <div
                            key={i}
                            className="hover:bg-[#F1F6FF] px-4 py-3 text-grey-dark hover:text-grey-9 hover:font-semibold leading-[24px] cursor-pointer"
                            onClick={() => handleFlow(option)}
                          >
                            {option?.entity?.name}
                          </div>
                        ))}
                      </>
                    )}
                  </div>
                )} */}
              </div>
            </div>
          </div>
        </div>

        {/* borderLine */}
        <div className="w-full h-[1px] bg-[#d2d2d2] sm:hidden" />
        {/* description */}

        <div className="md:shadow-megaMenu rounded-[12px] overflow-hidden w-full h-full">
          <div className="px-6 md:px-10 py-8 flex flex-col gap-8 bg-off-white">
            {/* package details */}
            <div className="w-full flex flex-col gap-4 md:gap-6">
              <h4
                className="text-xl font-semibold text-[#0957CB]"
                style={{ fontFamily: 'Montserrat, sans-serif' }}
              >
                Package details
              </h4>

              <div className="flex flex-col gap-9">
                {consultTest && (
                  <div>
                    {consultTest && (
                      <div className="flex">
                        <h5 className="text-[12px] font-bold leading-[18px] tracking-[2.4px] uppercase eyebrow_gradient mb-4">
                          {consultHeader ? consultHeader : 'Consultation'}
                        </h5>
                      </div>
                    )}

                    <div className="grid sm:grid-cols-2 grid-cols-1 gap-6">
                      {consultTest?.map(({ _key, labTitle, labTest }: any) => (
                        <div key={_key}>
                          <h5 className="text-base font-semibold text-[#004E89] mb-2">
                            {labTitle == null ? 'Laboratory Test' : labTitle}
                          </h5>
                          <ul className="flex flex-col gap-2">
                            {labTest?.map(({ _id, title }: any) => (
                              <li className="text-base text-[#3C3C3C]" key={_id}>
                                {title}
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {clinic && (
                  <div>
                    {clinic && (
                      <div className="flex">
                        <h5 className="text-[12px] font-bold leading-[18px] tracking-[2.4px] uppercase eyebrow_gradient mb-4">
                          {clinicTestHeader ? clinicTestHeader : 'Clinic Test'}
                        </h5>
                      </div>
                    )}

                    <ul className="flex flex-col gap-2">
                      {clinic?.map(({ _id, title }: any) => (
                        <li key={_id} className="text-base text-[#3C3C3C]">
                          {title}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {laboratoryTest && (
                  <div>
                    {laboratoryTest && (
                      <div className="flex">
                        <h5 className="text-[12px] font-bold leading-[18px] tracking-[2.4px] uppercase eyebrow_gradient mb-4">
                          {laboratoryHeader ? laboratoryHeader : 'Laboratory Test'}
                        </h5>
                      </div>
                    )}

                    <div className="grid sm:grid-cols-2 grid-cols-1 gap-6">
                      {laboratoryTest?.map(({ _key, labTitle, labTest }: any) => (
                        <div key={_key}>
                          <h5 className="text-base font-semibold text-[#004E89] mb-2">
                            {labTitle == null ? 'Laboratory Test' : labTitle}
                          </h5>

                          <ul className="flex flex-col gap-2">
                            {labTest?.map(({ _id, title }: any) => (
                              <li key={_id} className="text-base text-[#3C3C3C]">
                                {title}
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {radiology && (
                  <div>
                    {radiology && (
                      <div className="flex">
                        <h5 className="text-[12px] font-bold leading-[18px] tracking-[2.4px] uppercase eyebrow_gradient mb-4">
                          {radiologyHeader ? radiologyHeader : 'Radiology Test'}
                        </h5>
                      </div>
                    )}
                    <ul className="flex flex-col gap-2">
                      {radiology?.map(({ _id, title }: any) => (
                        <li className="text-base text-[#3C3C3C]" key={_id}>
                          {title}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {other && (
                  <div>
                    {other && (
                      <div className="flex">
                        <h5 className="text-[12px] font-bold leading-[18px] tracking-[2.4px] uppercase eyebrow_gradient mb-4">
                          {otherHeader ? otherHeader : 'Other Test'}
                        </h5>
                      </div>
                    )}
                    <ul className="flex flex-col gap-1">
                      {other?.map(({ _id, title }: any) => (
                        <li className="text-base text-[#3C3C3C]" key={_id}>
                          {title}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>

            {/* borderLine */}
            {(consultTest || clinic || laboratoryTest || radiology || other) &&
              (preferredTest?.men || preferredTest?.women) && (
                <div className="w-full h-[1px] bg-[#d2d2d2]" />
              )}

            {/* For Men */}
            <div>
              {(preferredTest?.men || preferredTest?.women) && (
                <h5 className="text-xl text-[#0957CB] font-montserrat font-semibold mb-6">
                  Choose your preferred test(s)
                </h5>
              )}

              <div className="grid sm:grid-cols-2 grid-cols-1 gap-6">
                {preferredTest?.men && (
                  <div>
                    <h5 className="text-base font-semibold text-[#004E89] mb-2">
                      {preferredTest?.menTitle}
                    </h5>

                    <ul className="flex flex-col gap-2">
                      {preferredTest?.men?.map(({ _id, title }: any) => (
                        <li className="text-base text-[#3C3C3C]" key={_id}>
                          {title}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {preferredTest?.women && (
                  <div>
                    <h5 className="text-base font-semibold text-[#004E89] mb-2">
                      {preferredTest?.womeTitle}
                    </h5>

                    <ul className="flex flex-col gap-2">
                      {preferredTest?.women?.map(({ _id, title }: any) => (
                        <li className="text-base text-[#3C3C3C]" key={_id}>
                          {title}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>

            {/* borderLine */}
            {addons?.title && <div className="w-full h-[0.5px] bg-[#d2d2d2]" />}

            {/* add-ons */}
            {addons && (
              <div>
                <h5 className="text-xl text-[#0957CB] font-montserrat font-semibold mb-6">
                  {addons?.title}
                </h5>

                <ul className="flex flex-col gap-2">
                  {addons?.addon?.map(({ _id, title }: any) => (
                    <li className="text-base text-[#3C3C3C]" key={_id}>
                      {title}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* terms and conditions */}
          <div className="p-6 bg-[#FBFBFB]">
            <h5 className="text-[#3C3C3C] font-semibold">{terms?.title}</h5>
            {terms?.description && <ReactPortableText content={terms?.description} />}
          </div>
        </div>
      </section>

      <div className="md:hidden sticky bottom-0 bg-off-white">
        {/* borderLine */}
        <div className="w-full h-[1px] bg-[#d2d2d2]" />

        <div className="flex items-center justify-between gap-4 sm:gap-8 px-6 py-4">
          <div className="w-full">
            <p className="text-[#3c3c3c] font-inter text-[18px] font-semibold">
              {'$' + packageprice}
            </p>
            <p className="text-[12px] text-grey-dark leading-[16px] ">Base price w/o GST</p>
          </div>
          <Link
            href={props?.link?.href === 'undefined' ? '' : props?.link?.href}
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="btn_primary_small-light font-semibold rounded-full leading-[20px] w-full text-center whitespace-nowrap flex gap-[6px] justify-center">
              {link?.text}{' '}
              {/* {props?.entities?.length > 1 && (
              <div>
                {showBookNowDropdown == false ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                  >
                    <path
                      d="M5 7.5L10 12.5L15 7.5"
                      stroke="#FEFEFE"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                  >
                    <path
                      d="M5 12.5L10 7.5L15 12.5"
                      stroke="#FEFEFE"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                )}
              </div>
            )} */}
            </button>
          </Link>
          {/* {showBookNowDropdown && (
            <div
              className="absolute bottom-[55px] right-0  w-full bg-off-white flex flex-col z-[600] shadow-level2 rounded-lg max-w-[223px]"
              ref={dropdownRef}
            >
              {entities && (
                <>
                  {entities?.map((option: any, i: any) => (
                    <div
                      key={i}
                      className="hover:bg-[#F1F6FF] px-4 py-3 text-grey-dark hover:text-grey-9 hover:font-semibold leading-[24px] cursor-pointer"
                      onClick={() => handleFlow(option)}
                    >
                      {option?.entity?.name}
                    </div>
                  ))}
                </>
              )}
            </div>
          )} */}
        </div>
      </div>
    </main>
  )
}

export default HealthScreenProfile
