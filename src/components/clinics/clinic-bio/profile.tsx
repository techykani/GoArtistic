import Image from 'next/image'
import { useWindowSize } from '@/lib/hooks'
import { PortableText } from '@/sanity'
import Link from 'next/link'
import EyeBrow from '@/components/widgets/shared/eyeBrew'
import Title from '@/components/widgets/shared/title'

const Profile: React.FC<any> = ({ page }) => {
  const {
    name,
    locationImage,
    direction,
    address,
    mobileNo,
    faxNo,
    description,
    alertDescription,
    about,
    doctorsOnDuty,
    route,
    popularsearch,
    services,
  } = page

  const windowWidth = useWindowSize()?.width ?? 0

  return (
    <section className="w-full md:px-[71px] md:py-[60px] bg-[#F1F6FF]">
      <div className="container mx-auto flex flex-col md:flex-row md:gap-6">
        {/* profile */}
        <div className="h-full md:shadow-megaMenu">
          <div className="flex flex-col md:rounded-[16px] overflow-hidden md:border-none">
            {/* profile image */}
            {locationImage && (
              <div className="w-full h-[203px] md:w-[392px] bg-slate-500  md:h-[221px] relative">
                <Image
                  src={locationImage}
                  width={392}
                  height={221}
                  alt=""
                  className="object-top w-full h-full object-cover absolute inset-0"
                />
              </div>
            )}
            {/* content */}
            <div className="w-full px-6 pt-6 pb-12 md:pb-6 flex flex-col gap-4 bg-off-white md:w-[392px]">
              <div className="w-full">
                {services && <EyeBrow title={services[0]} theme="light" className="mb-1" />}
                <Title headingType="h3" tagline={name} theme="light" className="!text-[#0957CB]" />
              </div>
              {route?.addressRoute && (
                <div className="bg-[#F9F8F8] w-full py-[10px] px-4 gap-2 rounded-xl">
                  <p className="text-[#5A5A5A] text-[16px] font-semibold leading-6">
                    {route?.title}
                  </p>
                  <p className="text-[#6E6E6E] text-[14px] font-norrmal leading-5">
                    {route?.addressRoute}
                  </p>
                </div>
              )}
              <div className="w-full flex flex-col gap-3">
                <div className="w-full flex gap-1">
                  <div className="w-5 h-5">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="21"
                      viewBox="0 0 20 21"
                      fill="none"
                    >
                      <mask
                        id="mask0_480_56374"
                        maskUnits="userSpaceOnUse"
                        x="0"
                        y="0"
                        width="20"
                        height="21"
                      >
                        <rect y="0.217529" width="20" height="20" fill="#D9D9D9" />
                      </mask>
                      <g mask="url(#mask0_480_56374)">
                        <path
                          d="M9.91332 17.2108C11.6705 15.5977 12.9739 14.1322 13.8237 12.8144C14.6734 11.4965 15.0983 10.3263 15.0983 9.30369C15.0983 7.73379 14.5978 6.44834 13.5968 5.44735C12.5958 4.44636 11.368 3.94586 9.91332 3.94586C8.45865 3.94586 7.23081 4.44636 6.22982 5.44735C5.22883 6.44834 4.72833 7.73379 4.72833 9.30369C4.72833 10.3263 5.15321 11.4965 6.00298 12.8144C6.85274 14.1322 8.15619 15.5977 9.91332 17.2108ZM9.91332 18.9175C9.71169 18.9175 9.51005 18.8815 9.30841 18.8095C9.10677 18.7375 8.92674 18.6295 8.76831 18.4854C7.83213 17.6213 7.00397 16.7787 6.28383 15.9578C5.56369 15.1368 4.96238 14.3411 4.47988 13.5705C3.99739 12.8 3.63012 12.0582 3.37807 11.3453C3.12602 10.6323 3 9.95181 3 9.30369C3 7.14327 3.69493 5.42214 5.0848 4.1403C6.47467 2.85845 8.08417 2.21753 9.91332 2.21753C11.7425 2.21753 13.352 2.85845 14.7418 4.1403C16.1317 5.42214 16.8266 7.14327 16.8266 9.30369C16.8266 9.95181 16.7006 10.6323 16.4486 11.3453C16.1965 12.0582 15.8293 12.8 15.3468 13.5705C14.8643 14.3411 14.263 15.1368 13.5428 15.9578C12.8227 16.7787 11.9945 17.6213 11.0583 18.4854C10.8999 18.6295 10.7199 18.7375 10.5182 18.8095C10.3166 18.8815 10.115 18.9175 9.91332 18.9175ZM9.91332 10.8592C10.3886 10.8592 10.7955 10.69 11.134 10.3515C11.4724 10.013 11.6417 9.60615 11.6417 9.13085C11.6417 8.65556 11.4724 8.24869 11.134 7.91022C10.7955 7.57176 10.3886 7.40252 9.91332 7.40252C9.43803 7.40252 9.03116 7.57176 8.69269 7.91022C8.35423 8.24869 8.18499 8.65556 8.18499 9.13085C8.18499 9.60615 8.35423 10.013 8.69269 10.3515C9.03116 10.69 9.43803 10.8592 9.91332 10.8592Z"
                          fill="#0957CB"
                        />
                      </g>
                    </svg>
                  </div>
                  <Link
                    href={`https://www.google.com/maps?q=${address}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex-1 text-[#0957CB] text-sm leading-[20px] hover:underline hover:underline-offset-2"
                  >
                    {address}
                  </Link>
                </div>
                {mobileNo && (
                  <div className="w-full flex gap-1">
                    <div className="w-5 h-5">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <mask
                          id="mask0_480_29667"
                          maskUnits="userSpaceOnUse"
                          x="0"
                          y="0"
                          width="20"
                          height="20"
                        >
                          <rect width="20" height="20" fill="#D9D9D9" />
                        </mask>
                        <g mask="url(#mask0_480_29667)">
                          <path
                            d="M20.0083 21C18.0407 21 16.0968 20.5711 14.1764 19.7132C12.256 18.8553 10.5088 17.6394 8.93472 16.0653C7.36065 14.4912 6.14468 12.744 5.28681 10.8236C4.42894 8.90324 4 6.95926 4 4.99167C4 4.70833 4.09444 4.47222 4.28333 4.28333C4.47222 4.09444 4.70833 4 4.99167 4H8.81667C9.03704 4 9.2338 4.07477 9.40694 4.22431C9.58009 4.37384 9.68241 4.55093 9.71389 4.75556L10.3278 8.06111C10.3593 8.31296 10.3514 8.52546 10.3042 8.69861C10.2569 8.87176 10.1704 9.0213 10.0444 9.14722L7.75417 11.4611C8.06898 12.0435 8.44282 12.6062 8.87569 13.1493C9.30856 13.6924 9.78472 14.2157 10.3042 14.7194C10.7921 15.2074 11.3037 15.66 11.8389 16.0771C12.3741 16.4942 12.9407 16.8759 13.5389 17.2222L15.7583 15.0028C15.9 14.8611 16.085 14.7549 16.3132 14.684C16.5414 14.6132 16.7657 14.5935 16.9861 14.625L20.2444 15.2861C20.4648 15.3491 20.6458 15.4632 20.7875 15.6285C20.9292 15.7937 21 15.9787 21 16.1833V20.0083C21 20.2917 20.9056 20.5278 20.7167 20.7167C20.5278 20.9056 20.2917 21 20.0083 21ZM6.85694 9.66667L8.41528 8.10833L8.01389 5.88889H5.9125C5.9912 6.53426 6.10139 7.17176 6.24306 7.80139C6.38472 8.43102 6.58935 9.05278 6.85694 9.66667ZM15.3097 18.1194C15.9236 18.387 16.5493 18.5995 17.1868 18.7569C17.8243 18.9144 18.4657 19.0167 19.1111 19.0639V16.9861L16.8917 16.5375L15.3097 18.1194Z"
                            fill="#0957CB"
                          />
                        </g>
                      </svg>
                    </div>

                    <Link
                      href={`tel:${mobileNo}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full flex-1 text-[#0957CB] text-sm leading-[20px] hover:underline hover:underline-offset-2"
                    >
                      {mobileNo}
                    </Link>
                  </div>
                )}
                <div className="flex gap-1 w-full">
                  {faxNo && (
                    <div className="w-5 h-5">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="21"
                        viewBox="0 0 20 21"
                        fill="none"
                      >
                        <mask
                          id="mask0_3024_11944"
                          style={{ maskType: 'alpha' }}
                          maskUnits="userSpaceOnUse"
                          x="0"
                          y="0"
                          width="20"
                          height="21"
                        >
                          <rect y="0.5" width="20" height="20" fill="#D9D9D9" />
                        </mask>
                        <g mask="url(#mask0_3024_11944)">
                          <path
                            d="M5 18.8332C4.30556 18.8332 3.71528 18.5901 3.22917 18.104C2.74306 17.6179 2.5 17.0276 2.5 16.3332V14.8332C2.5 14.2809 2.94772 13.8332 3.5 13.8332H5V3.1665C5 2.61422 5.44772 2.1665 6 2.1665H16.5C17.0523 2.1665 17.5 2.61422 17.5 3.1665V16.3332C17.5 17.0276 17.2569 17.6179 16.7708 18.104C16.2847 18.5901 15.6944 18.8332 15 18.8332H5ZM15 17.1665C15.2361 17.1665 15.434 17.0866 15.5938 16.9269C15.7535 16.7672 15.8333 16.5693 15.8333 16.3332V4.33317C15.8333 4.05703 15.6095 3.83317 15.3333 3.83317H7.16667C6.89052 3.83317 6.66667 4.05703 6.66667 4.33317V13.8332H13.1667C13.719 13.8332 14.1667 14.2809 14.1667 14.8332V16.3332C14.1667 16.5693 14.2465 16.7672 14.4062 16.9269C14.566 17.0866 14.7639 17.1665 15 17.1665ZM8.33333 7.99984C7.8731 7.99984 7.5 7.62674 7.5 7.1665C7.5 6.70627 7.8731 6.33317 8.33333 6.33317H14.1667C14.6269 6.33317 15 6.70627 15 7.1665C15 7.62674 14.6269 7.99984 14.1667 7.99984H8.33333ZM8.33333 10.4998C7.8731 10.4998 7.5 10.1267 7.5 9.6665C7.5 9.20627 7.8731 8.83317 8.33333 8.83317H14.1667C14.6269 8.83317 15 9.20627 15 9.6665C15 10.1267 14.6269 10.4998 14.1667 10.4998H8.33333ZM5 17.1665H12.5V15.4998H4.16667V16.3332C4.16667 16.5693 4.24653 16.7672 4.40625 16.9269C4.56597 17.0866 4.76389 17.1665 5 17.1665ZM5 17.1665H4.16667H12.5H5Z"
                            fill="#6E6E6E"
                          />
                        </g>
                      </svg>
                    </div>
                  )}
                  <p className="w-full flex-1 text-grey-9 text-sm leading-[20px]">{faxNo}</p>
                </div>
                <div className="flex gap-1 w-full">
                  <div className="w-5 h-5">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="21"
                      viewBox="0 0 20 21"
                      fill="none"
                    >
                      <mask
                        id="mask0_3024_11949"
                        style={{ maskType: 'alpha' }}
                        maskUnits="userSpaceOnUse"
                        x="0"
                        y="0"
                        width="20"
                        height="21"
                      >
                        <rect y="0.5" width="20" height="20" fill="#D9D9D9" />
                      </mask>
                      <g mask="url(#mask0_3024_11949)">
                        <path
                          d="M10.8337 10.1665V7.1665C10.8337 6.93039 10.7538 6.73248 10.5941 6.57275C10.4344 6.41303 10.2364 6.33317 10.0003 6.33317C9.76421 6.33317 9.5663 6.41303 9.40658 6.57275C9.24685 6.73248 9.16699 6.93039 9.16699 7.1665V10.479C9.16699 10.5901 9.18783 10.6978 9.22949 10.8019C9.27116 10.9061 9.33366 10.9998 9.41699 11.0832L12.167 13.8332C12.3198 13.9859 12.5142 14.0623 12.7503 14.0623C12.9864 14.0623 13.1809 13.9859 13.3337 13.8332C13.4864 13.6804 13.5628 13.4859 13.5628 13.2498C13.5628 13.0137 13.4864 12.8193 13.3337 12.6665L10.8337 10.1665ZM10.0003 18.8332C8.84755 18.8332 7.76421 18.6144 6.75033 18.1769C5.73644 17.7394 4.85449 17.1457 4.10449 16.3957C3.35449 15.6457 2.76074 14.7637 2.32324 13.7498C1.88574 12.7359 1.66699 11.6526 1.66699 10.4998C1.66699 9.34706 1.88574 8.26373 2.32324 7.24984C2.76074 6.23595 3.35449 5.354 4.10449 4.604C4.85449 3.854 5.73644 3.26025 6.75033 2.82275C7.76421 2.38525 8.84755 2.1665 10.0003 2.1665C11.1531 2.1665 12.2364 2.38525 13.2503 2.82275C14.2642 3.26025 15.1462 3.854 15.8962 4.604C16.6462 5.354 17.2399 6.23595 17.6774 7.24984C18.1149 8.26373 18.3337 9.34706 18.3337 10.4998C18.3337 11.6526 18.1149 12.7359 17.6774 13.7498C17.2399 14.7637 16.6462 15.6457 15.8962 16.3957C15.1462 17.1457 14.2642 17.7394 13.2503 18.1769C12.2364 18.6144 11.1531 18.8332 10.0003 18.8332ZM10.0003 17.1665C11.8475 17.1665 13.4205 16.5172 14.7191 15.2186C16.0177 13.92 16.667 12.3471 16.667 10.4998C16.667 8.65262 16.0177 7.0797 14.7191 5.78109C13.4205 4.48248 11.8475 3.83317 10.0003 3.83317C8.1531 3.83317 6.58019 4.48248 5.28158 5.78109C3.98296 7.0797 3.33366 8.65262 3.33366 10.4998C3.33366 12.3471 3.98296 13.92 5.28158 15.2186C6.58019 16.5172 8.1531 17.1665 10.0003 17.1665Z"
                          fill="#6E6E6E"
                        />
                      </g>
                    </svg>
                  </div>
                  <div>
                    <p className="w-full flex-1 text-grey-9 text-sm leading-[20px]">
                      <PortableText blocks={description} />
                    </p>
                  </div>
                </div>
              </div>
              <div className="w-full flex flex-col gap-3 justify-center mt-2 md:mt-[16px]">
                <Link
                  // disabled={isFetchingNextPage || !hasNextPage}

                  href={`tel:${mobileNo}`}
                  className="btn_primary_small-light font-semibold rounded-full leading-[20px] w-full text-center"
                >
                  Call clinic
                </Link>
                <Link
                  href={`https://www.google.com/maps?q=${address}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn_secondary_small-light font-semibold rounded-full leading-[20px] w-full text-center"
                >
                  Get directions
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* intro */}
        <div className='w-full'>
          <div className="flex-1 pb-[36px] md:py-[32px] md:p-[40px] px-6 bg-off-white md:rounded-[16px] flex flex-col gap-8 md:gap-8 md:shadow-megaMenu">
            {/* notification */}
            {alertDescription && (
              <div className="w-full bg-[#F1F8FA] border-[1px] border-[#40C1EB] p-4 flex gap-2 rounded-lg">
                <div className="w-5 h-5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="21"
                    viewBox="0 0 20 21"
                    fill="none"
                  >
                    <mask
                      id="mask0_3024_11429"
                      style={{ maskType: 'alpha' }}
                      maskUnits="userSpaceOnUse"
                      x="0"
                      y="0"
                      width="20"
                      height="21"
                    >
                      <rect y="0.5" width="20" height="20" fill="#5A5A5A" />
                    </mask>
                    <g mask="url(#mask0_3024_11429)">
                      <path
                        d="M10.0003 14.6665C10.2364 14.6665 10.4344 14.5866 10.5941 14.4269C10.7538 14.2672 10.8337 14.0693 10.8337 13.8332V10.4998C10.8337 10.2637 10.7538 10.0658 10.5941 9.90609C10.4344 9.74637 10.2364 9.6665 10.0003 9.6665C9.76421 9.6665 9.5663 9.74637 9.40658 9.90609C9.24685 10.0658 9.16699 10.2637 9.16699 10.4998V13.8332C9.16699 14.0693 9.24685 14.2672 9.40658 14.4269C9.5663 14.5866 9.76421 14.6665 10.0003 14.6665ZM10.0003 7.99984C10.2364 7.99984 10.4344 7.91998 10.5941 7.76025C10.7538 7.60053 10.8337 7.40262 10.8337 7.1665C10.8337 6.93039 10.7538 6.73248 10.5941 6.57275C10.4344 6.41303 10.2364 6.33317 10.0003 6.33317C9.76421 6.33317 9.5663 6.41303 9.40658 6.57275C9.24685 6.73248 9.16699 6.93039 9.16699 7.1665C9.16699 7.40262 9.24685 7.60053 9.40658 7.76025C9.5663 7.91998 9.76421 7.99984 10.0003 7.99984ZM10.0003 18.8332C8.84755 18.8332 7.76421 18.6144 6.75033 18.1769C5.73644 17.7394 4.85449 17.1457 4.10449 16.3957C3.35449 15.6457 2.76074 14.7637 2.32324 13.7498C1.88574 12.7359 1.66699 11.6526 1.66699 10.4998C1.66699 9.34706 1.88574 8.26373 2.32324 7.24984C2.76074 6.23595 3.35449 5.354 4.10449 4.604C4.85449 3.854 5.73644 3.26025 6.75033 2.82275C7.76421 2.38525 8.84755 2.1665 10.0003 2.1665C11.1531 2.1665 12.2364 2.38525 13.2503 2.82275C14.2642 3.26025 15.1462 3.854 15.8962 4.604C16.6462 5.354 17.2399 6.23595 17.6774 7.24984C18.1149 8.26373 18.3337 9.34706 18.3337 10.4998C18.3337 11.6526 18.1149 12.7359 17.6774 13.7498C17.2399 14.7637 16.6462 15.6457 15.8962 16.3957C15.1462 17.1457 14.2642 17.7394 13.2503 18.1769C12.2364 18.6144 11.1531 18.8332 10.0003 18.8332ZM10.0003 17.1665C11.8614 17.1665 13.4378 16.5207 14.7295 15.229C16.0212 13.9373 16.667 12.3609 16.667 10.4998C16.667 8.63873 16.0212 7.06234 14.7295 5.77067C13.4378 4.479 11.8614 3.83317 10.0003 3.83317C8.13921 3.83317 6.56283 4.479 5.27116 5.77067C3.97949 7.06234 3.33366 8.63873 3.33366 10.4998C3.33366 12.3609 3.97949 13.9373 5.27116 15.229C6.56283 16.5207 8.13921 17.1665 10.0003 17.1665Z"
                        fill="#00ADE5"
                      />
                    </g>
                  </svg>
                </div>
                <div className="text-grey-dark text-sm leading-[20px]">
                  <PortableText blocks={alertDescription} />
                </div>
              </div>
            )}
            <div className="w-full flex flex-col gap-2">
              {/* title */}
              <Title
                tagline="Introduction"
                headingType={'h5'}
                theme="light"
                className="!text-[#0957CB]"
              />
              {/* content */}
              <div className="text-grey-9 text-base leading-[24px]">
                <PortableText blocks={about?.description} />
              </div>
            </div>

            {/* popular search */}
            {popularsearch?.length > 0 && <div className="w-full flex gap-3 flex-wrap">
              {popularsearch?.map(({ text, _id, href }: any) => (
                <Link
                  href={href ?? ''}
                  key={_id}
                  className="text-[#0957CB] text-[14px] font-semibold hover:text-[#FEFEFE] bg-[#D6E7FF] hover:bg-[#0084C6] rounded-3xl px-4 py-2 transition-all duration-150 cursor-pointer"
                >
                  {text}
                </Link>
              ))}
            </div>}
            {doctorsOnDuty?.length > 0 && <div className="w-full flex flex-col gap-4">
              <Title
                tagline="Doctors on duty"
                headingType={'h5'}
                theme="light"
                className="!text-[#0957CB]"
              />
              <div className="w-full grid grid-col-1 xl:grid-cols-2 gap-[16px] md:gap-[24px] ">
                {doctorsOnDuty?.map(
                  ({ name, designation, specialist, moreabout, photo, slug, _id }: any) => (
                    <Link
                      className="w-full h-full md:py-4 flex gap-4 md:gap-6 mt-4 md:mt-0"
                      href={`/doctors/${slug?.current}`}
                      key={_id}
                    >
                      {photo && (
                        <div className="w-[64px] lg:w-[112px]">

                          <div className="min-w-[64px] lg:min-w-[112px] min-h-[64px] lg:min-h-[112px]">
                            <Image
                              width={112}
                              height={112}
                              src={photo}
                              alt=""
                              className="w-full h-[64px] lg:h-[112px] rounded-full object-cover"
                            />
                          </div>

                        </div>)}
                      <div className="flex flex-col gap-4">
                        <div className="w-full">
                          {name && <h3 className="text-grey-dark text-[18px] font-semibold leading-[20px] lg:leading-[22px] mb-1">
                            {name}
                          </h3>}
                          {designation && <p className="text-grey-8 text-sm leading-[20px] mb-1">{designation}</p>}
                          {specialist?.title && <p className="text-secondary-ocean text-sm font-semibold leading-[20px]">
                            {specialist?.title}
                          </p>}
                        </div>
                        {moreabout?.options?.length > 0 && moreabout?.options.map(({ entryName, description, _id }: any) => (
                          <>
                            {entryName === 'Qualifications' && (
                              <div className="text-grey-8 text-sm leading-[20px]" key={_id}>
                                {description?.map((obj: any) => obj?.children[0]?.text).join(' • ')}
                              </div>
                            )}
                          </>
                        ))}
                      </div>
                    </Link>
                  ),
                )}
              </div>
            </div>}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Profile
