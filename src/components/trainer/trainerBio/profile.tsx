import { Button, LinkAngleRight } from '@/components/ui'
import { useState } from 'react'
import Title from '@/components/widgets/shared/title'
import ReactPortableText from '@/components/widgets/shared/reactPortableText'
import course from '@/studio/schemas/documents/course'
import BtnWithArrow from '@/components/widgets/shared/buttons/button/btnWithArrow'
import Link from 'next/link'

const Profile: React.FC<any> = ({ page }) => {
  console.log(page, 'page')
  const {
    name,
    trainerType,
    experience,
    qualification,
    courses,
    courseList,
  } = page
  const [viewMore, setViewMore] = useState(false)

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

  return (
    <section className="w-full md:px-[71px] md:pt-[64px] md:pb-[80px] bg-[#F1F6FF]">
      <div className="container mx-auto flex flex-col md:flex-row md:gap-6">
        {/* profile */}
        <div className="h-full md:shadow-megaMenu md:max-w-[392px] md:min-w-[392px]">
          <div className="flex flex-col md:rounded-[16px] overflow-hidden">
            {/* profile image */}
            <div
              // style={{ backgroundImage: `url(${photo})` }}
              className="w-full relative bg-cover aspect-[6/5]"
            ></div>
            {/* content */}
            <div className="w-full px-6 pt-8 md:pt-6 pb-12 md:pb-6 flex flex-col gap-4 bg-off-white ">
              <div className="w-full flex flex-col gap-1 md:gap-0">
                <Title headingType="h3" tagline={name} theme="light" className="!text-[#0957CB]" />
                <p className="text-[#6E6E6E] leading-[24px]">{trainerType}</p>

              </div>

            </div>
          </div>
        </div>
        {/* divider */}
        <div className="bg-grey-3 w-full h-[1px] md:hidden " />
        {/* detail */}
        <div className="flex-1 py-[48px] md:py-[32px]  bg-off-white md:rounded-[16px] flex flex-col gap-6 md:gap-8 md:shadow-megaMenu">
          {/* introduction */}
          <div className="w-full flex flex-col px-6 md:px-10">
            {/* title */}
            <Title
              headingType="h4"
              theme="dark"
              tagline={experience?.title}
              className="!text-[#0957CB] mb-2"
            />
            {/* content */}
            <div className="mt-[-24px] mb-4">
              {viewMore == true ? (
                <div className="text-[16px]">
                  <ReactPortableText content={experience?.description} />
                </div>
              ) : (
                <>
                  {experience?.description && (
                    <p className="text-[#5A5A5A] text-[16px] leading-[24px] pt-6">
                      {experience?.description[0]?.children[0]?.text}
                    </p>
                  )}
                </>
              )}
            </div>

            {/* cta */}
            {experience?.description?.length > 1 && (
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

          {/* divder */}
          <div className="px-6 md:px-10">
            <div className=" w-full h-[1px] bg-grey-3 " />
          </div>

          <div className="w-full flex flex-col px-6 md:px-10 ">
            {/* title */}
            <Title
              headingType="h4"
              theme="dark"
              tagline={qualification?.title}
              className="!text-[#0957CB] mb-2"
            />
            <div className="mt-[-24px] mb-4">
              {viewMore == true ? (
                <div className="text-[16px]">
                  <ReactPortableText content={qualification?.description} />
                </div>
              ) : (
                <>
                  {experience?.description && (
                    <p className="text-[#5A5A5A] text-[16px] leading-[24px] pt-6">
                      {qualification?.description[0]?.children[0]?.text}
                    </p>
                  )}
                </>
              )}
            </div>

            {/* cta */}
            {qualification?.description?.length > 1 && (
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
          {/* divder */}
          <div className="px-6 md:px-10">
            <div className=" w-full h-[1px] bg-grey-3 " />
          </div>

          <div className="w-full flex flex-col px-6 md:px-10 ">
            {/* title */}
            <Title
              headingType="h4"
              theme="dark"
              tagline={courses?.title}
              className="!text-[#0957CB] mb-2"
            />
            <div className="grid grid-cols-2 gap-x-6 gap-y-4 mb-4">
              {courseList?.map((course: any) => (
                <>
                  {course?.slug && (
                    <Link href={``} className="w-full flex">
                      <div

                        className={`btn_tertiary_medium-light font-semibold rounded-[8px] leading-[20px] flex gap-2 items-center group cursor-pointer w-full justify-between`}
                      >
                        {course?.title}
                        <div className="transform flex justify-content items-center transition-all duration-150 group-hover:translate-x-1">
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
                              d="M14.8925 6.89447C15.283 6.50394 15.9162 6.50393 16.3067 6.89444L20.7052 11.2928C20.8927 11.4803 20.9981 11.7347 20.9981 11.9999C20.9981 12.2651 20.8927 12.5195 20.7052 12.707L16.3067 17.1055C15.9162 17.496 15.283 17.496 14.8925 17.1055C14.502 16.715 14.502 16.0818 14.8925 15.6913L17.5839 12.9999H3.99805C3.44576 12.9999 2.99805 12.5522 2.99805 11.9999C2.99805 11.4476 3.44576 10.9999 3.99805 10.9999H17.5838L14.8925 8.30868C14.502 7.91816 14.502 7.285 14.8925 6.89447Z"
                              fill="#3C3C3C"
                            />
                          </svg>
                        </div>
                      </div>
                    </Link>
                  )}</>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Profile
