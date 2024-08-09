import { HubspotForm } from '@/components/hubspot/HubspotForm'
import { Button } from '@/components/ui'
import EyeBrow from '@/components/widgets/shared/eyeBrew'
import { GTAEvent } from '@/lib/gtag'
import { useWindowSize } from '@/lib/hooks'
import { IDoctorsList } from '@/lib/types/doctorListingTypes'
import HubSpotForm from '@/pages/[slug]'
import { imageUrlBuilder } from '@/sanity'
import { format } from 'date-fns'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'
import { SanityImg } from 'sanity-react-extra'
import { staggerChild } from 'src/animations/stagging-scale-up'

export const PackageListItem: React.FC<any> = ({
  _id,
  props,
  slug,
  dataToCompare,
  setDataToCompare,
  selectedIds,
  setSelectedIds,
  category,
  setCategory,
}) => {
  const [showBookNowDropdown, setShowBookNowDropdown] = useState(false)
  const [showPopup, setShowPopup] = useState(false)
  const [showForm, setForm] = useState('289bc274-82f1-41f0-b564-b8c08dcd5fe6')
  const dropdownRef = useRef<HTMLDivElement>(null)
  const windowWidth = useWindowSize()?.width ?? 0

  const checkForLength = (id: any) => {
    if (selectedIds?.includes(id)) {
      const newArray = selectedIds.filter((string: string) => string !== id)
      setSelectedIds(newArray)
    }
    if (!selectedIds?.includes(id)) {
      if (windowWidth >= 1200 && selectedIds?.length < 4) {
        setSelectedIds([...selectedIds, id])
      }
      if (windowWidth < 1200 && selectedIds?.length < 2) {
        setSelectedIds([...selectedIds, id])
      }
    }
  }

  const handleComparison = (id: any) => {
    checkForLength(id)
  }

  const handleChangeComparison = (category: any, id: any) => {
    setCategory(category)
    setSelectedIds([id])
  }

  const handleBookNowBtn = () => {
    if (props?.entities?.length > 1) {
      setShowBookNowDropdown(!showBookNowDropdown)
    } else {
      if (props?.entities[0]?.link) {
        window.open(props.entities[0]?.link, '_blank')
      }
    }
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
  const handleButton = (gtag_event: any, listing_name: any, content_name: any) => {
    GTAEvent(gtag_event, {
      listing_name: listing_name !== '' ? listing_name : null,
      content_name: content_name !== '' ? content_name : null,
    })
  }
  return (
    <>
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

      <div className="w-full rounded-[12px] bg-off-white shadow-megaMenu">
        {/* image */}
        <div className="w-full relative">
          {/* {props?.iconurl && (
          <SanityImg
            className="w-full"
            builder={imageUrlBuilder}
            image={props?.iconurl}
            width={200}
            height={162}
            alt={props?.iconurl?.alt ?? 'image'}
            loading="eager"
          />
        )} */}
          {/* the batch changes with the badge type */}
          {props?.featured && (
            <p className="absolute top-[16px] right-0 rounded-l-[4px] bg-ember-100 text-grey-dark text-sm font-semibold px-2 py-[2px] leading-5">
              Featured
            </p>
          )}

          {props?.premium && (
            <p className="absolute top-[16px] right-0 rounded-l-[4px] bg-ember-800 text-off-white text-sm font-semibold pl-1 pr-2 py-[2px] flex items-center gap-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
              >
                <mask
                  id="mask0_1771_14972"
                  style={{ maskType: 'alpha' }}
                  maskUnits="userSpaceOnUse"
                  x="0"
                  y="0"
                  width="16"
                  height="16"
                >
                  <rect width="16" height="16" fill="#D9D9D9" />
                </mask>
                <g mask="url(#mask0_1771_14972)">
                  <path
                    d="M5.27015 11.9989L7.99992 10.3589L10.7297 12.0205L10.0147 8.91313L12.4195 6.84155L9.25648 6.56102L7.99992 3.62628L6.74336 6.53944L3.5803 6.81997L5.98509 8.91313L5.27015 11.9989ZM7.99992 11.881L4.62855 13.9061C4.50301 13.9792 4.3772 14.0099 4.25111 13.9983C4.125 13.9866 4.01085 13.9443 3.90863 13.8713C3.80643 13.7982 3.72756 13.7028 3.67201 13.5849C3.61645 13.4671 3.60756 13.3368 3.64534 13.194L4.54025 9.38122L1.56385 6.81498C1.45275 6.71871 1.38193 6.60723 1.35138 6.48053C1.32084 6.35382 1.32889 6.23071 1.37554 6.11121C1.42221 5.99169 1.48942 5.89403 1.5772 5.81823C1.66497 5.74243 1.78495 5.69291 1.93716 5.66968L5.86514 5.32774L7.38999 1.72737C7.44554 1.59348 7.52969 1.49444 7.64245 1.43025C7.75522 1.36607 7.87438 1.33398 7.99992 1.33398C8.12546 1.33398 8.24462 1.36607 8.35739 1.43025C8.47015 1.49444 8.5543 1.59348 8.60985 1.72737L10.1347 5.32774L14.0627 5.66968C14.2149 5.69291 14.3349 5.74243 14.4226 5.81823C14.5104 5.89403 14.5776 5.99169 14.6243 6.11121C14.6709 6.23071 14.679 6.35382 14.6485 6.48053C14.6179 6.60723 14.5471 6.71871 14.436 6.81498L11.4596 9.38122L12.3545 13.194C12.3923 13.3368 12.3834 13.4671 12.3278 13.5849C12.2723 13.7028 12.1934 13.7982 12.0912 13.8713C11.989 13.9443 11.8748 13.9866 11.7487 13.9983C11.6226 14.0099 11.4968 13.9792 11.3713 13.9061L7.99992 11.881Z"
                    fill="#FEFEFE"
                  />
                </g>
              </svg>{' '}
              <span className="">VIP</span>
            </p>
          )}
        </div>
        {/* details */}
        <div className="p-6 flex flex-col gap-4">
          <div className="w-full">
            <div className="flex flex-col gap-1 mb-2">
              {props.category == 'GP Screening' && <EyeBrow title="General" theme="light" />}
              {props.category == 'Specialist Screening' && (
                <EyeBrow title="Specialist" theme="light" />
              )}
              <h2 className="text-grey-dark text-base md:text-[20px] font-semibold leading-5 md:leading-[24px] md:min-h-[48px]">
                {props?.title}
              </h2>
            </div>
            <p className="text-grey-8 text-[16px] md:text-[16px] leading-[20px] md:leading-[24px] mb-[4px] md:min-h-[72px] truncate-overflow">
              {props?.shortDes}
            </p>
            <Link
              className="text-secondary-ocean text-[14px] md:text-[16px] font-semibold leading-[20px] md:leading-[24px]"
              href={`/services/health-screening/${props?.slug?.current}`}
              onClick={() =>
                handleButton('select_listing', 'Health Screening Packages', props?.title)
              }
            >
              View details
            </Link>
          </div>
        </div>
        {/* price */}
        <div className="px-6  flex flex-col gap-6">
          <div className="w-full flex items-end gap-[10px] md:min-h-[68px] relative">
            {props?.packageprice === 'Price on enquiry' ? (
              <>
                <div className="w-1/2 flex items-end">
                  <p className="text-grey-dark text-[16px] font-semibold leading-[20px]">
                    {props?.packageprice}
                  </p>
                </div>
                <div className="w-1/2 flex items-end">
                  <Link href={props?.link?.href === 'undefined' ? '' : props?.link?.href}>
                    <button className="btn_secondary_small-light font-semibold rounded-full leading-[20px] w-full text-center whitespace-nowrap">
                      {props?.link.text}
                    </button>
                  </Link>
                </div>
              </>
            ) : (
              <>
                <div className="w-1/2">
                  <p className="text-grey-8 text-[14px] leading-[20px]">Base price w/o GST</p>
                  <p className="text-grey-dark text-[20px] font-semibold leading-[28px]">
                    S${props?.packageprice}
                  </p>
                </div>
                <div className="w-1/2 flex items-end justify-end">
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
                    {props?.link?.text}{' '}
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
                  </button> */}
                  {showBookNowDropdown && (
                    <div
                      className="absolute md:top-[70px] top-[50px] right-0 mb-[44px] w-full bg-off-white flex flex-col z-[600] shadow-level2 rounded-lg"
                      ref={dropdownRef}
                    >
                      {props?.entities && (
                        <>
                          {props?.entities?.map((option: any, i: any) => (
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
                  )}
                </div>
              </>
            )}
          </div>
          {category == '' || category !== props?.category || selectedIds.length === 0 ? (
            <div
              onClick={() => handleChangeComparison(props?.category, props?._id)}
              className="w-full cursor-pointer"
            >
              <div className="border-[1px] border-grey-3"></div>
              <div
                // onClick={() => handleChangeComparison(props._id)}
                className="py-4 w-full flex gap-1 justify-center items-center"
              >
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    height="24"
                    viewBox="0 0 25 24"
                    fill="none"
                  >
                    <mask
                      id="mask0_1294_5812"
                      style={{ maskType: 'alpha' }}
                      maskUnits="userSpaceOnUse"
                      x="0"
                      y="0"
                      width="25"
                      height="24"
                    >
                      <rect x="0.5" width="24" height="24" fill="#D9D9D9" />
                    </mask>
                    <g mask="url(#mask0_1294_5812)">
                      <path
                        d="M9.675 16.0001H3.5C3.21667 16.0001 2.97917 15.9043 2.7875 15.7126C2.59583 15.5209 2.5 15.2834 2.5 15.0001C2.5 14.7168 2.59583 14.4793 2.7875 14.2876C2.97917 14.0959 3.21667 14.0001 3.5 14.0001H9.675L7.8 12.1251C7.61667 11.9418 7.525 11.7126 7.525 11.4376C7.525 11.1626 7.61667 10.9251 7.8 10.7251C8 10.5251 8.2375 10.4251 8.5125 10.4251C8.7875 10.4251 9.025 10.5251 9.225 10.7251L12.8 14.3001C12.9 14.4001 12.9708 14.5084 13.0125 14.6251C13.0542 14.7418 13.075 14.8668 13.075 15.0001C13.075 15.1334 13.0542 15.2584 13.0125 15.3751C12.9708 15.4918 12.9 15.6001 12.8 15.7001L9.2 19.3001C9 19.5001 8.76667 19.5959 8.5 19.5876C8.23333 19.5793 8 19.4751 7.8 19.2751C7.61667 19.0751 7.52083 18.8418 7.5125 18.5751C7.50417 18.3084 7.6 18.0751 7.8 17.8751L9.675 16.0001ZM15.325 10.0001L17.2 11.8751C17.3833 12.0584 17.475 12.2876 17.475 12.5626C17.475 12.8376 17.3833 13.0751 17.2 13.2751C17 13.4751 16.7625 13.5751 16.4875 13.5751C16.2125 13.5751 15.975 13.4751 15.775 13.2751L12.2 9.70011C12.1 9.60011 12.0292 9.49178 11.9875 9.37511C11.9458 9.25844 11.925 9.13344 11.925 9.00011C11.925 8.86678 11.9458 8.74178 11.9875 8.62511C12.0292 8.50844 12.1 8.40011 12.2 8.30011L15.8 4.70011C16 4.50011 16.2333 4.40428 16.5 4.41261C16.7667 4.42094 17 4.52511 17.2 4.72511C17.3833 4.92511 17.4792 5.15844 17.4875 5.42511C17.4958 5.69178 17.4 5.92511 17.2 6.12511L15.325 8.00011H21.5C21.7833 8.00011 22.0208 8.09594 22.2125 8.28761C22.4042 8.47928 22.5 8.71678 22.5 9.00011C22.5 9.28344 22.4042 9.52094 22.2125 9.71261C22.0208 9.90428 21.7833 10.0001 21.5 10.0001H15.325Z"
                        fill="#3C3C3C"
                      />
                    </g>
                  </svg>
                </div>
                <p className="text-grey-dark text-[16px] font-semibold leading-[20px]">Compare</p>
              </div>
            </div>
          ) : (
            <div className="w-full">
              <div className="border-[1px] border-grey-3"></div>
              <div
                onClick={() => handleComparison(props?._id)}
                className="py-4 w-full flex gap-1 justify-center items-center"
              >
                <div>
                  {selectedIds.includes(props?._id) ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="25"
                      height="24"
                      viewBox="0 0 25 24"
                      fill="none"
                    >
                      <mask
                        id="mask0_1246_6240"
                        style={{ maskType: 'alpha' }}
                        maskUnits="userSpaceOnUse"
                        x="0"
                        y="0"
                        width="25"
                        height="24"
                      >
                        <rect x="0.5" width="24" height="24" fill="#D9D9D9" />
                      </mask>
                      <g mask="url(#mask0_1246_6240)">
                        <path
                          d="M12.5 22C11.1167 22 9.81667 21.7375 8.6 21.2125C7.38333 20.6875 6.325 19.975 5.425 19.075C4.525 18.175 3.8125 17.1167 3.2875 15.9C2.7625 14.6833 2.5 13.3833 2.5 12C2.5 10.6167 2.7625 9.31667 3.2875 8.1C3.8125 6.88333 4.525 5.825 5.425 4.925C6.325 4.025 7.38333 3.3125 8.6 2.7875C9.81667 2.2625 11.1167 2 12.5 2C13.8833 2 15.1833 2.2625 16.4 2.7875C17.6167 3.3125 18.675 4.025 19.575 4.925C20.475 5.825 21.1875 6.88333 21.7125 8.1C22.2375 9.31667 22.5 10.6167 22.5 12C22.5 13.3833 22.2375 14.6833 21.7125 15.9C21.1875 17.1167 20.475 18.175 19.575 19.075C18.675 19.975 17.6167 20.6875 16.4 21.2125C15.1833 21.7375 13.8833 22 12.5 22Z"
                          fill="#0084C6"
                        />
                        <path
                          d="M8.95039 11.65L11.1004 13.8L16.0504 8.84995C16.2337 8.66662 16.4671 8.57495 16.7504 8.57495C17.0337 8.57495 17.2671 8.66662 17.4504 8.84995C17.6337 9.03328 17.7254 9.26662 17.7254 9.54995C17.7254 9.83328 17.6337 10.0666 17.4504 10.25L11.8004 15.9C11.6004 16.1 11.3671 16.2 11.1004 16.2C10.8337 16.2 10.6004 16.1 10.4004 15.9L7.55039 13.05C7.36706 12.8666 7.27539 12.6333 7.27539 12.35C7.27539 12.0666 7.36706 11.8333 7.55039 11.65C7.73372 11.4666 7.96706 11.375 8.25039 11.375C8.53372 11.375 8.76706 11.4666 8.95039 11.65Z"
                          fill="#FEFEFE"
                        />
                      </g>
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="25"
                      height="24"
                      viewBox="0 0 25 24"
                      fill="none"
                    >
                      <mask
                        id="mask0_1232_8696"
                        style={{ maskType: 'alpha' }}
                        maskUnits="userSpaceOnUse"
                        x="0"
                        y="0"
                        width="25"
                        height="24"
                      >
                        <rect x="0.5" width="24" height="24" fill="#D9D9D9" />
                      </mask>
                      <g mask="url(#mask0_1232_8696)">
                        <path
                          d="M12.5 22C11.1167 22 9.81667 21.7375 8.6 21.2125C7.38333 20.6875 6.325 19.975 5.425 19.075C4.525 18.175 3.8125 17.1167 3.2875 15.9C2.7625 14.6833 2.5 13.3833 2.5 12C2.5 10.6167 2.7625 9.31667 3.2875 8.1C3.8125 6.88333 4.525 5.825 5.425 4.925C6.325 4.025 7.38333 3.3125 8.6 2.7875C9.81667 2.2625 11.1167 2 12.5 2C13.8833 2 15.1833 2.2625 16.4 2.7875C17.6167 3.3125 18.675 4.025 19.575 4.925C20.475 5.825 21.1875 6.88333 21.7125 8.1C22.2375 9.31667 22.5 10.6167 22.5 12C22.5 13.3833 22.2375 14.6833 21.7125 15.9C21.1875 17.1167 20.475 18.175 19.575 19.075C18.675 19.975 17.6167 20.6875 16.4 21.2125C15.1833 21.7375 13.8833 22 12.5 22ZM12.5 20C14.7333 20 16.625 19.225 18.175 17.675C19.725 16.125 20.5 14.2333 20.5 12C20.5 9.76667 19.725 7.875 18.175 6.325C16.625 4.775 14.7333 4 12.5 4C10.2667 4 8.375 4.775 6.825 6.325C5.275 7.875 4.5 9.76667 4.5 12C4.5 14.2333 5.275 16.125 6.825 17.675C8.375 19.225 10.2667 20 12.5 20Z"
                          fill="#3C3C3C"
                        />
                      </g>
                    </svg>
                  )}
                </div>
                <p className="text-grey-dark text-[16px] font-semibold leading-[20px]">Compare</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  )
}
