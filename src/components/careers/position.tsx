import Image from 'next/image'
import { FaHome } from 'react-icons/fa'
import { Button, LinkAngleRight } from '../ui'
import { LinkArrowDown } from '../ui/link-arrow-down'
import clsx from 'clsx'
import { SanityImg } from 'sanity-react-extra'
import { PortableText, imageUrlBuilder } from '@/sanity'
import { useWindowSize } from '@/lib/hooks'
import EyeBrow from '../widgets/shared/eyeBrew'
import Title from '../widgets/shared/title'

const Position: React.FC<any> = ({ page }) => {
  const {
    title,
    primaryImg,
    role,
    closeDate,
    jobType,
    employementType,
    preferRole,
    experience,
    location,
    callUsbutton,
    header,
    description,
    reqHeader,
    reqSubDescription,
    reqSubHeader,
    reqSubResponse,
    reqSubResponseDesc,
    reqSubRequired,
    reqSubReqDesc,
    reqSubPreferred,
    reqSubPrefDesc,
    callToAction,
  } = page

  const windowWidth = useWindowSize()?.width ?? 0
  return (
    <>
      <section className="w-full md:px-[71px] md:py-[60px] bg-light-neutral-2">
        <div className="container mx-auto flex flex-col md:flex-row md:gap-6">
          <div className="h-full md:shadow-megaMenu">
            <div className="w-full flex flex-col md:rounded-t-[16px] overflow-hidden md:border-none bg-off-white lg2:min-w-[392px]">
              {/* brand logo */}
              <div className="py-[60px] px-[39px] flex justify-center border-[1px] border-grey-2">
                <SanityImg
                  className="w-full max-w-[282px]"
                  builder={imageUrlBuilder}
                  image={primaryImg}
                  height={windowWidth >= 768 ? 600 : 300}
                  alt={primaryImg.alt ?? 'image'}
                  loading="eager"
                />
              </div>
              {/* position */}
              <div className="w-full p-6 flex flex-col md:max-w-[392px] bg-off-white">
                {/* title */}
                <div className="w-full flex flex-col gap-1">
                  <EyeBrow theme="light" title={title} />

                  <Title
                    headingType="h3"
                    tagline={role}
                    theme="light"
                    className="!text-[#0957CB]"
                  />
                  <p className="text-grey-9 text-base leading-[24px] mb-4 md:mb-6">{closeDate}</p>
                </div>
                {/* short detail */}
                <div className="w-full flex flex-col gap-2">
                  <div className="w-full flex gap-2 items-center">
                    <div className="w-6 h-6 flex justify-center items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="20"
                        viewBox="0 0 18 20"
                        fill="none"
                      >
                        <path
                          d="M6.95238 1.90476C6.4264 1.90476 6 1.47837 6 0.952381C6 0.426395 6.4264 0 6.95238 0H11.0476C11.5736 0 12 0.426395 12 0.952381C12 1.47837 11.5736 1.90476 11.0476 1.90476H6.95238ZM8 11.381C8 11.9332 8.44771 12.381 9 12.381C9.55229 12.381 10 11.9332 10 11.381V7.66667C10 7.11438 9.55229 6.66667 9 6.66667C8.44771 6.66667 8 7.11438 8 7.66667V11.381ZM9 20C7.76667 20 6.60417 19.7738 5.5125 19.3214C4.42083 18.869 3.46667 18.254 2.65 17.4762C1.83333 16.6984 1.1875 15.7897 0.7125 14.75C0.2375 13.7103 0 12.6032 0 11.4286C0 10.254 0.2375 9.14682 0.7125 8.10714C1.1875 7.06746 1.83333 6.15873 2.65 5.38095C3.46667 4.60317 4.42083 3.9881 5.5125 3.53571C6.60417 3.08333 7.76667 2.85714 9 2.85714C10.0333 2.85714 11.025 3.01587 11.975 3.33333C12.925 3.65079 13.8167 4.11111 14.65 4.71429L15.3841 4.01512C15.757 3.65999 16.343 3.65999 16.7159 4.01512C17.1154 4.39562 17.1154 5.03295 16.7159 5.41345L16.05 6.04762C16.6833 6.84127 17.1667 7.69048 17.5 8.59524C17.8333 9.5 18 10.4444 18 11.4286C18 12.6032 17.7625 13.7103 17.2875 14.75C16.8125 15.7897 16.1667 16.6984 15.35 17.4762C14.5333 18.254 13.5792 18.869 12.4875 19.3214C11.3958 19.7738 10.2333 20 9 20ZM9 18.0952C10.9333 18.0952 12.5833 17.4444 13.95 16.1429C15.3167 14.8413 16 13.2698 16 11.4286C16 9.5873 15.3167 8.01587 13.95 6.71429C12.5833 5.4127 10.9333 4.7619 9 4.7619C7.06667 4.7619 5.41667 5.4127 4.05 6.71429C2.68333 8.01587 2 9.5873 2 11.4286C2 13.2698 2.68333 14.8413 4.05 16.1429C5.41667 17.4444 7.06667 18.0952 9 18.0952Z"
                          fill="#5A5A5A"
                        />
                      </svg>
                    </div>
                    <p className="w-full flex-1 text-grey-8 text-sm md:text-base leading-[20px] md:leading-[24px]">
                      {employementType}
                    </p>
                  </div>
                  <div className="w-full flex gap-2 items-center">
                    <div className="w-6 h-6 flex justify-center items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <mask
                          id="mask0_563_17666"
                          style={{ maskType: 'alpha' }}
                          maskUnits="userSpaceOnUse"
                          x="0"
                          y="0"
                          width="24"
                          height="24"
                        >
                          <rect width="24" height="24" fill="#D9D9D9" />
                        </mask>
                        <g mask="url(#mask0_563_17666)">
                          <path
                            d="M5.85 17.1C6.7 16.45 7.65 15.9375 8.7 15.5625C9.75 15.1875 10.85 15 12 15C13.15 15 14.25 15.1875 15.3 15.5625C16.35 15.9375 17.3 16.45 18.15 17.1C18.7333 16.4167 19.1875 15.6417 19.5125 14.775C19.8375 13.9083 20 12.9833 20 12C20 9.78333 19.2208 7.89583 17.6625 6.3375C16.1042 4.77917 14.2167 4 12 4C9.78333 4 7.89583 4.77917 6.3375 6.3375C4.77917 7.89583 4 9.78333 4 12C4 12.9833 4.1625 13.9083 4.4875 14.775C4.8125 15.6417 5.26667 16.4167 5.85 17.1ZM12 13C11.0167 13 10.1875 12.6625 9.5125 11.9875C8.8375 11.3125 8.5 10.4833 8.5 9.5C8.5 8.51667 8.8375 7.6875 9.5125 7.0125C10.1875 6.3375 11.0167 6 12 6C12.9833 6 13.8125 6.3375 14.4875 7.0125C15.1625 7.6875 15.5 8.51667 15.5 9.5C15.5 10.4833 15.1625 11.3125 14.4875 11.9875C13.8125 12.6625 12.9833 13 12 13ZM12 22C10.6167 22 9.31667 21.7375 8.1 21.2125C6.88333 20.6875 5.825 19.975 4.925 19.075C4.025 18.175 3.3125 17.1167 2.7875 15.9C2.2625 14.6833 2 13.3833 2 12C2 10.6167 2.2625 9.31667 2.7875 8.1C3.3125 6.88333 4.025 5.825 4.925 4.925C5.825 4.025 6.88333 3.3125 8.1 2.7875C9.31667 2.2625 10.6167 2 12 2C13.3833 2 14.6833 2.2625 15.9 2.7875C17.1167 3.3125 18.175 4.025 19.075 4.925C19.975 5.825 20.6875 6.88333 21.2125 8.1C21.7375 9.31667 22 10.6167 22 12C22 13.3833 21.7375 14.6833 21.2125 15.9C20.6875 17.1167 19.975 18.175 19.075 19.075C18.175 19.975 17.1167 20.6875 15.9 21.2125C14.6833 21.7375 13.3833 22 12 22ZM12 20C12.8833 20 13.7167 19.8708 14.5 19.6125C15.2833 19.3542 16 18.9833 16.65 18.5C16 18.0167 15.2833 17.6458 14.5 17.3875C13.7167 17.1292 12.8833 17 12 17C11.1167 17 10.2833 17.1292 9.5 17.3875C8.71667 17.6458 8 18.0167 7.35 18.5C8 18.9833 8.71667 19.3542 9.5 19.6125C10.2833 19.8708 11.1167 20 12 20ZM12 11C12.4333 11 12.7917 10.8583 13.075 10.575C13.3583 10.2917 13.5 9.93333 13.5 9.5C13.5 9.06667 13.3583 8.70833 13.075 8.425C12.7917 8.14167 12.4333 8 12 8C11.5667 8 11.2083 8.14167 10.925 8.425C10.6417 8.70833 10.5 9.06667 10.5 9.5C10.5 9.93333 10.6417 10.2917 10.925 10.575C11.2083 10.8583 11.5667 11 12 11Z"
                            fill="#6E6E6E"
                          />
                        </g>
                      </svg>
                    </div>
                    <p className="w-full flex-1 text-grey-8 text-sm md:text-base leading-[20px] md:leading-[24px]">
                      {jobType}
                    </p>
                  </div>
                  <div className="w-full flex gap-2 items-center">
                    <div className="w-6 h-6 flex justify-center items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <mask
                          id="mask0_563_17669"
                          style={{ maskType: 'alpha' }}
                          maskUnits="userSpaceOnUse"
                          x="0"
                          y="0"
                          width="24"
                          height="24"
                        >
                          <rect width="24" height="24" fill="#D9D9D9" />
                        </mask>
                        <g mask="url(#mask0_563_17669)">
                          <path
                            d="M9.54996 15.15L18.025 6.675C18.225 6.475 18.4625 6.375 18.7375 6.375C19.0125 6.375 19.25 6.475 19.45 6.675C19.65 6.875 19.75 7.1125 19.75 7.3875C19.75 7.6625 19.65 7.9 19.45 8.1L10.25 17.3C10.05 17.5 9.81663 17.6 9.54996 17.6C9.2833 17.6 9.04996 17.5 8.84996 17.3L4.54996 13C4.34996 12.8 4.25413 12.5625 4.26246 12.2875C4.2708 12.0125 4.37496 11.775 4.57496 11.575C4.77496 11.375 5.01246 11.275 5.28746 11.275C5.56246 11.275 5.79996 11.375 5.99996 11.575L9.54996 15.15Z"
                            fill="#6E6E6E"
                          />
                        </g>
                      </svg>
                    </div>
                    <p className="w-full flex-1 text-grey-8 text-sm md:text-base leading-[20px] md:leading-[24px]">
                      {experience}
                    </p>
                  </div>
                  <div className="w-full flex gap-2 items-center">
                    <div className="w-6 h-6 flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <mask
                          id="mask0_563_17672"
                          style={{ maskType: 'alpha' }}
                          maskUnits="userSpaceOnUse"
                          x="0"
                          y="0"
                          width="24"
                          height="24"
                        >
                          <rect width="24" height="24" fill="#D9D9D9" />
                        </mask>
                        <g mask="url(#mask0_563_17672)">
                          <path
                            d="M12 19.35C14.0333 17.4833 15.5417 15.7875 16.525 14.2625C17.5083 12.7375 18 11.3833 18 10.2C18 8.38333 17.4208 6.89583 16.2625 5.7375C15.1042 4.57917 13.6833 4 12 4C10.3167 4 8.89583 4.57917 7.7375 5.7375C6.57917 6.89583 6 8.38333 6 10.2C6 11.3833 6.49167 12.7375 7.475 14.2625C8.45833 15.7875 9.96667 17.4833 12 19.35ZM12 21.325C11.7667 21.325 11.5333 21.2833 11.3 21.2C11.0667 21.1167 10.8583 20.9917 10.675 20.825C9.59167 19.825 8.63333 18.85 7.8 17.9C6.96667 16.95 6.27083 16.0292 5.7125 15.1375C5.15417 14.2458 4.72917 13.3875 4.4375 12.5625C4.14583 11.7375 4 10.95 4 10.2C4 7.7 4.80417 5.70833 6.4125 4.225C8.02083 2.74167 9.88333 2 12 2C14.1167 2 15.9792 2.74167 17.5875 4.225C19.1958 5.70833 20 7.7 20 10.2C20 10.95 19.8542 11.7375 19.5625 12.5625C19.2708 13.3875 18.8458 14.2458 18.2875 15.1375C17.7292 16.0292 17.0333 16.95 16.2 17.9C15.3667 18.85 14.4083 19.825 13.325 20.825C13.1417 20.9917 12.9333 21.1167 12.7 21.2C12.4667 21.2833 12.2333 21.325 12 21.325ZM12 12C12.55 12 13.0208 11.8042 13.4125 11.4125C13.8042 11.0208 14 10.55 14 10C14 9.45 13.8042 8.97917 13.4125 8.5875C13.0208 8.19583 12.55 8 12 8C11.45 8 10.9792 8.19583 10.5875 8.5875C10.1958 8.97917 10 9.45 10 10C10 10.55 10.1958 11.0208 10.5875 11.4125C10.9792 11.8042 11.45 12 12 12Z"
                            fill="#6E6E6E"
                          />
                        </g>
                      </svg>
                    </div>
                    <p className="w-full flex-1 text-grey-8 text-sm md:text-base leading-[20px] md:leading-[24px]">
                      {location[0]}
                    </p>
                  </div>
                </div>
                {/* CTA */}
                <div className="w-full flex justify-center mt-6">
                  <Button
                    // disabled={isFetchingNextPage || !hasNextPage}
                    size="base"
                    variant="solid"
                    color="primary"
                    className="btn_primary_medium-light font-semibold rounded-full leading-[20px] w-full text-center"
                  >
                    <LinkAngleRight
                      href={''}
                      color="white"
                      gtag_event="select_content"
                      gtag_content_name={''}
                      gtag_content_type={'position'}
                      gtag_cta_button="callUsbutton?.title"
                    >
                      {callUsbutton?.title}{' '}
                    </LinkAngleRight>
                  </Button>
                </div>
              </div>
            </div>
          </div>
          {/* divider */}
          <div className="bg-grey-3 w-full h-[1px] md:hidden" />
          {/* Job Discription */}
          <div className="flex-1 py-[32px] px-6 md:px-10 bg-off-white md:rounded-[16px] md:shadow-megaMenu">
            <div className="w-full">
              {/* title */}
              <h2 className="text-[#0957CB] text-[20px] font-semibold leading-[24px] mb-4 font-montserrat">
                {header}
              </h2>
              {/* content */}
              <div className="text-grey-9 font-base leading-[24px] mb-[32px]">
                <PortableText blocks={description} />
              </div>
            </div>
            {/* divider */}
            <div className="bg-grey-3 w-full h-[1px] mb-8" />
            <div className="w-full">
              {/* title */}
              <h2 className="text-[#0957CB] text-[20px] font-semibold leading-[24px] mb-[16px] font-montserrat">
                {reqHeader}
              </h2>
              {/* role objectives */}
              <p className="text-grey-dark text-[16px] font-semibold leading-[24px] mb-[8px] md:mb-2">
                {reqSubHeader}
              </p>
              <ul className="job-list pl-[24px] mb-[16px] text-grey-9">
                {reqSubDescription?.map(({ children }: any) => (
                  <li key={children[0]?.text}>{children[0]?.text}</li>
                ))}
              </ul>
              {/* responsibilities */}
              <p className="text-grey-dark text-[16px] font-semibold leading-[24px] mb-[8px] md:mb-4">
                {reqSubResponse}
              </p>
              <ul className="job-list pl-[24px] mb-[16px] text-grey-9">
                {reqSubResponseDesc?.map(({ children }: any) => (
                  <li key={children[0]?.text}>{children[0]?.text}</li>
                ))}
              </ul>
              {/* required skills & qualifications */}
              <p className="text-grey-dark text-[16px] font-semibold leading-[24px] mb-[8px] md:mb-4">
                {reqSubRequired}
              </p>
              <ul className="job-list pl-[24px] mb-[16px] text-grey-9">
                {reqSubReqDesc?.map(({ children }: any) => (
                  <li key={children[0]?.text}>{children[0]?.text}</li>
                ))}
              </ul>
              {/* preffered skills & qualifications */}
              <p className="text-grey-dark text-[16px] font-semibold leading-[24px] mb-[8px] md:mb-4">
                {reqSubPreferred}
              </p>
              <ul className="job-list pl-[24px] text-grey-9">
                {reqSubPrefDesc?.map(({ children }: any) => (
                  <li key={children[0]?.text}>{children[0]?.text}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
      {/* cta */}
      <section className="bg-light-neutral px-6 md:px-[71px] py-[32px] md:py-[60px]">
        <div className="container mx-auto rounded-2xl bg-ember-300 pt-8 md:min-h-[230px] pb-8 md:py-[48px] flex flex-col md:flex-row md:items-center gap-8 md:gap-20">
          <p className="w-full px-6 md:pl-20 md:pr-0 text-[#3C3C3C] font-montserrat text-[24px] md:text-[26px] font-bold leading-7 md:leading-8">
            {callToAction?.title}
          </p>
          <div className="w-full flex justify-end px-6 md:pr-20 md:pl-0">
            <div className="w-full md:w-auto ">
              <Button
                // disabled={isFetchingNextPage || !hasNextPage}

                className="btn_secondary_medium-dark font-semibold rounded-full leading-[20px] !border-none w-full text-off-white bg-[#0957CB]"
              >
                <LinkAngleRight
                  href={''}
                  color="white"
                  gtag_event="select_content"
                  gtag_content_name={''}
                  gtag_content_type={'position'}
                  gtag_cta_button={callToAction?.button?.title}
                >
                  {callToAction?.button?.title}{' '}
                </LinkAngleRight>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Position
