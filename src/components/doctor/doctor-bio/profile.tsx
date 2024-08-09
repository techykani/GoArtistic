import { Button, LinkAngleRight } from '@/components/ui'
import { useState } from 'react'
import Title from '@/components/widgets/shared/title'
import ReactPortableText from '@/components/widgets/shared/reactPortableText'

const Profile: React.FC<any> = ({ page }) => {
  const {
    name,
    photo,
    designation,
    specialist,
    is_ip_consultant,
    is_screening_consultant,
    is_Virtual_consultant,
    is_healthier_SG,
    moreabout,
    about,
    contactNo,
    clinicLocations,
    cta,
  } = page

  const [activeTab, setActiveTab] = useState(
    moreabout.options == undefined ? '' : moreabout?.options[0]?.title,
  )
  const [showTabData, setShowTabData] = useState(
    moreabout.options == undefined ? '' : moreabout?.options[0],
  )
  const [viewMore, setViewMore] = useState(false)

  const handleTab = (value: any) => {
    setShowTabData(value)
    setActiveTab(value?.title)
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
  const allTitles = [...(specialist?.map((specialist: any) => specialist.title) || [])]

  // Join titles with " • "
  let combinedTitles = allTitles.join(' • ')
  return (
    <section className="w-full md:px-[71px] md:pt-[64px] md:pb-[80px] bg-[#F1F6FF]">
      <div className="container mx-auto flex flex-col md:flex-row md:gap-6">
        {/* profile */}
        <div className="h-full md:shadow-megaMenu md:max-w-[392px] md:min-w-[392px]">
          <div className="flex flex-col md:rounded-[16px] overflow-hidden">
            {/* profile image */}
            <div
              style={{ backgroundImage: `url(${photo})` }}
              className="w-full relative bg-cover aspect-[6/5]"
            ></div>
            {/* content */}
            <div className="w-full px-6 pt-8 md:pt-6 pb-12 md:pb-6 flex flex-col gap-4 bg-off-white ">
              <div className="w-full flex flex-col gap-1 md:gap-0">
                <Title headingType="h3" tagline={name} theme="light" className="!text-[#0957CB]" />
                <p className="text-[#6E6E6E] leading-[24px]">{designation}</p>
                <p className="text-[#0084C6] font-semibold leading-[24px]">{combinedTitles}</p>
              </div>
              <div className="w-full flex flex-col gap-2">
                <div className="w-full flex gap-2">
                  <div className="w-6 h-6">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <mask
                        id="mask0_2764_19002"
                        style={{ maskType: 'alpha' }}
                        maskUnits="userSpaceOnUse"
                        x="0"
                        y="0"
                        width="24"
                        height="24"
                      >
                        <rect width="24" height="24" fill="#D9D9D9" />
                      </mask>
                      <g mask="url(#mask0_2764_19002)">
                        <path
                          d="M9.54972 15.15L18.0247 6.675C18.2247 6.475 18.4622 6.375 18.7372 6.375C19.0122 6.375 19.2497 6.475 19.4497 6.675C19.6497 6.875 19.7497 7.1125 19.7497 7.3875C19.7497 7.6625 19.6497 7.9 19.4497 8.1L10.2497 17.3C10.0497 17.5 9.81639 17.6 9.54972 17.6C9.28305 17.6 9.04972 17.5 8.84972 17.3L4.54972 13C4.34972 12.8 4.25389 12.5625 4.26222 12.2875C4.27055 12.0125 4.37472 11.775 4.57472 11.575C4.77472 11.375 5.01222 11.275 5.28722 11.275C5.56222 11.275 5.79972 11.375 5.99972 11.575L9.54972 15.15Z"
                          fill="#6E6E6E"
                        />
                      </g>
                    </svg>
                  </div>

                  <div>
                    {/* <p className="w-full flex-1 text-grey-8 font-base leading-[24px]">
                      {is_ip_consultant && <span>In-Person</span>}
                      {is_ip_consultant && is_screening_consultant && <>, </>}
                      {is_ip_consultant && !is_screening_consultant && is_Virtual_consultant && (
                        <>, </>
                      )}
                      {is_screening_consultant && <span>Health screening</span>}
                      {is_screening_consultant && is_Virtual_consultant && <>, </>}{' '}
                      {is_Virtual_consultant && <span>Teleconsultation</span>}
                    </p> */}
                    <p className="w-full flex-1 text-grey-8 font-base leading-[24px]">
                      {is_ip_consultant && <span>In-Person</span>}
                      {(is_ip_consultant && is_screening_consultant) ||
                        (is_ip_consultant && !is_screening_consultant && is_Virtual_consultant) ||
                        (is_ip_consultant && is_healthier_SG) ? (
                        <>, </>
                      ) : null}
                      {is_screening_consultant && <span>Health screening</span>}
                      {(is_screening_consultant && is_Virtual_consultant) ||
                        (is_screening_consultant && is_healthier_SG) ? (
                        <>, </>
                      ) : null}
                      {is_Virtual_consultant && <span>Teleconsultation</span>}
                      {is_Virtual_consultant && is_healthier_SG ? <>, </> : null}
                      {is_healthier_SG && <span>Healthier SG</span>}
                    </p>
                  </div>
                </div>
                <div className="w-full flex gap-2 ">
                  <div className="w-6 h-6">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <mask
                        id="mask0_2764_19007"
                        style={{ maskType: 'alpha' }}
                        maskUnits="userSpaceOnUse"
                        x="0"
                        y="0"
                        width="24"
                        height="24"
                      >
                        <rect width="24" height="24" fill="#D9D9D9" />
                      </mask>
                      <g mask="url(#mask0_2764_19007)">
                        <path
                          d="M8 11C8.28333 11 8.52083 10.9042 8.7125 10.7125C8.90417 10.5208 9 10.2833 9 10C9 9.71667 8.90417 9.47917 8.7125 9.2875C8.52083 9.09583 8.28333 9 8 9C7.71667 9 7.47917 9.09583 7.2875 9.2875C7.09583 9.47917 7 9.71667 7 10C7 10.2833 7.09583 10.5208 7.2875 10.7125C7.47917 10.9042 7.71667 11 8 11ZM12 11C12.2833 11 12.5208 10.9042 12.7125 10.7125C12.9042 10.5208 13 10.2833 13 10C13 9.71667 12.9042 9.47917 12.7125 9.2875C12.5208 9.09583 12.2833 9 12 9C11.7167 9 11.4792 9.09583 11.2875 9.2875C11.0958 9.47917 11 9.71667 11 10C11 10.2833 11.0958 10.5208 11.2875 10.7125C11.4792 10.9042 11.7167 11 12 11ZM16 11C16.2833 11 16.5208 10.9042 16.7125 10.7125C16.9042 10.5208 17 10.2833 17 10C17 9.71667 16.9042 9.47917 16.7125 9.2875C16.5208 9.09583 16.2833 9 16 9C15.7167 9 15.4792 9.09583 15.2875 9.2875C15.0958 9.47917 15 9.71667 15 10C15 10.2833 15.0958 10.5208 15.2875 10.7125C15.4792 10.9042 15.7167 11 16 11ZM2 22V4C2 3.45 2.19583 2.97917 2.5875 2.5875C2.97917 2.19583 3.45 2 4 2H20C20.55 2 21.0208 2.19583 21.4125 2.5875C21.8042 2.97917 22 3.45 22 4V16C22 16.55 21.8042 17.0208 21.4125 17.4125C21.0208 17.8042 20.55 18 20 18H6L2 22ZM5.15 16H20V4H4V17.125L5.15 16Z"
                          fill="#6E6E6E"
                        />
                      </g>
                    </svg>
                  </div>
                  <p className="w-full flex-1 text-grey-8 font-base leading-[24px]">
                    {moreabout?.language?.join(', ')}
                  </p>
                </div>
                {/* <div className="flex gap-2 w-full">
                  <div className="w-6 h-6">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <mask
                        id="mask0_1417_40739"
                        maskUnits="userSpaceOnUse"
                        x="0"
                        y="0"
                        width="24"
                        height="24"
                      >
                        <rect width="24" height="24" fill="#D9D9D9" />
                      </mask>
                      <g mask="url(#mask0_1417_40739)">
                        <path
                          d="M7 23C6.45 23 5.97917 22.8042 5.5875 22.4125C5.19583 22.0208 5 21.55 5 21V3C5 2.45 5.19583 1.97917 5.5875 1.5875C5.97917 1.19583 6.45 1 7 1H17C17.55 1 18.0208 1.19583 18.4125 1.5875C18.8042 1.97917 19 2.45 19 3V21C19 21.55 18.8042 22.0208 18.4125 22.4125C18.0208 22.8042 17.55 23 17 23H7ZM7 20V21H17V20H7ZM7 18H17V6H7V18ZM7 4H17V3H7V4Z"
                          fill="#0957CB"
                        />
                      </g>
                    </svg>
                  </div>
                  {contactNo && ( 
                    <a
                      href={`tel:${contactNo}`}
                      className="w-full flex-1 text-[#0957CB] font-base leading-[24px] hover:underline"
                    >
                      {contactNo}
                    </a>
                  )}
                </div> */}
                <div className="flex gap-2 w-full">
                  <div className="w-6 h-6">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <mask
                        id="mask0_1612_25208"
                        maskUnits="userSpaceOnUse"
                        x="0"
                        y="0"
                        width="24"
                        height="24"
                      >
                        <rect width="24" height="24" fill="#D9D9D9" />
                      </mask>
                      <g mask="url(#mask0_1612_25208)">
                        <path
                          d="M12 19.35C14.0333 17.4833 15.5417 15.7875 16.525 14.2625C17.5083 12.7375 18 11.3833 18 10.2C18 8.38333 17.4208 6.89583 16.2625 5.7375C15.1042 4.57917 13.6833 4 12 4C10.3167 4 8.89583 4.57917 7.7375 5.7375C6.57917 6.89583 6 8.38333 6 10.2C6 11.3833 6.49167 12.7375 7.475 14.2625C8.45833 15.7875 9.96667 17.4833 12 19.35ZM12 21.325C11.7667 21.325 11.5333 21.2833 11.3 21.2C11.0667 21.1167 10.8583 20.9917 10.675 20.825C9.59167 19.825 8.63333 18.85 7.8 17.9C6.96667 16.95 6.27083 16.0292 5.7125 15.1375C5.15417 14.2458 4.72917 13.3875 4.4375 12.5625C4.14583 11.7375 4 10.95 4 10.2C4 7.7 4.80417 5.70833 6.4125 4.225C8.02083 2.74167 9.88333 2 12 2C14.1167 2 15.9792 2.74167 17.5875 4.225C19.1958 5.70833 20 7.7 20 10.2C20 10.95 19.8542 11.7375 19.5625 12.5625C19.2708 13.3875 18.8458 14.2458 18.2875 15.1375C17.7292 16.0292 17.0333 16.95 16.2 17.9C15.3667 18.85 14.4083 19.825 13.325 20.825C13.1417 20.9917 12.9333 21.1167 12.7 21.2C12.4667 21.2833 12.2333 21.325 12 21.325ZM12 12C12.55 12 13.0208 11.8042 13.4125 11.4125C13.8042 11.0208 14 10.55 14 10C14 9.45 13.8042 8.97917 13.4125 8.5875C13.0208 8.19583 12.55 8 12 8C11.45 8 10.9792 8.19583 10.5875 8.5875C10.1958 8.97917 10 9.45 10 10C10 10.55 10.1958 11.0208 10.5875 11.4125C10.9792 11.8042 11.45 12 12 12Z"
                          fill="#6E6E6E"
                        />
                      </g>
                    </svg>
                  </div>
                  {clinicLocations && (
                    <div className="flex flex-col">
                      {clinicLocations?.map((location: any, index: any) => [
                        <p
                          key={index}
                          className="w-full flex-1 text-grey-8 font-base leading-[24px]"
                        >
                          {location.title}
                          {index !== clinicLocations.length - 1 && <span>,</span>}
                        </p>,
                      ])}
                    </div>
                  )}
                </div>
              </div>
              {cta?.text && (
                <div className="w-full flex justify-center">
                  <Button
                    size="base"
                    variant="solid"
                    color="primary"
                    className="btn_primary_medium-light font-semibold rounded-full leading-[20px] w-full text-center"
                  >
                    <LinkAngleRight
                      href={cta?.href ?? ''}
                      color="white"
                      gtag_event="form_start"
                      gtag_content_name={designation}
                      gtag_content_type={name}
                      gtag_cta_button={'Make appointment'}
                    >
                      {cta?.text}
                    </LinkAngleRight>
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
        {/* divider */}
        <div className="bg-grey-3 w-full h-[1px] md:hidden " />
        {/* detail */}
        <div className='w-full'>
          <div className="flex-1 py-[48px] md:py-[32px]  bg-off-white md:rounded-[16px] flex flex-col gap-6 md:gap-8 md:shadow-megaMenu">
            {/* introduction */}
            <div className="w-full flex flex-col px-6 md:px-10">
              {/* title */}
              <Title
                headingType="h4"
                theme="dark"
                tagline={about?.title}
                className="!text-[#0957CB] mb-2"
              />
              {/* content */}
              <div className="mt-[-24px]">
                {/* {viewMore == true ? ( */}
                {about?.description && (
                  <div className="text-[16px]">
                    <ReactPortableText content={about?.description} />
                  </div>
                )}
                {/* ) : ( */}
                <>
                  {/* {about?.description && (
                    <p className="text-[#5A5A5A] text-[16px] leading-[24px] pt-6">
                      {about?.description[0]?.children[0]?.text}
                    </p>
                  )} */}
                </>
                {/* )} */}
              </div>

              {/* cta */}
              {/* {about?.description?.length > 1 && (
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
            )} */}
            </div>

            {/* divder */}
            {/* <div className="px-6 md:px-10">
            <div className=" w-full h-[1px] bg-grey-3 " />
          </div> */}

            <div className="w-full flex flex-col ">
              {/* title */}
              {/* <Title
              headingType="h4"
              theme="dark"
              tagline={moreabout?.title}
              className="!text-[#0957CB] px-6 md:px-10"
            /> */}
              {/* tab */}
              {moreabout?.options && (
                <div className="flex overflow-scroll lg:overflow-hidden snap snap-mandatory slider-body gap-3 md:flex-wrap pb-6 md:pb-4 px-6 md:px-10">
                  {moreabout?.options.map((option: any) => (
                    <div
                      key={option?.title}
                      onClick={() => handleTab(option)}
                      className={` text-base cursor-pointer font-semibold leading-[20px] text-center px-6 py-2 rounded-[24px] whitespace-nowrap transition-all duration-150 ${activeTab === option?.title
                        ? 'bg-[#0084C6] text-off-white'
                        : 'text-[#0746A2] bg-[#D6E7FF] hover:bg-[#0084C6] hover:text-off-white'
                        }  `}
                    >
                      {option?.title}
                    </div>
                  ))}
                </div>
              )}
              {/* lists */}
              {showTabData && (
                <div className="w-full flex flex-col gap-4 px-6 md:px-10" id="doctor-disc-bio ">
                  <p className="text-grey-dark text-[16px] font-semibold leading-[20px]">
                    {showTabData?.title}
                  </p>
                  <div className="mt-[-24px]">
                    <ReactPortableText content={showTabData?.description} />
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Profile
