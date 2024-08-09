import { imageUrlBuilder } from '@/sanity'
import { SanityImg } from 'sanity-react-extra'
import Title from '../widgets/shared/title'
import ReactPortableText from '../widgets/shared/reactPortableText'
import { motion } from 'framer-motion'
import { useState } from 'react'

const MessageFromCEO = ({ primaryImg, title, description, name, designation, company }: any) => {
  const [viewMore, setVideMore] = useState(false)
  return (
    <section className="w-full bg-[#F1F6FF] px-6 md:px-[71px] py-[48px] md:py-20">
      <div className="max-w-[1016px] mx-auto flex flex-col md:flex-row gap-6">
        {/* image */}
        <div className="w-full md:min-w-[392px]">
          <SanityImg
            className="w-full rounded-2xl aspect-[5/6]"
            builder={imageUrlBuilder}
            image={primaryImg}
            alt="image"
            loading="eager"
          />
        </div>
        {/* content */}
        <div className="flex flex-col gap-4 md:pl-8">
          {/* title */}
          <Title headingType="h2" theme='light' tagline={title} />
          <div>
            <div className="mt-[-24px]">
              {viewMore == true ? (
                <div className="text-[16px] text-[#3C3C3C] ">
                  <ReactPortableText content={description} customClass='!text-[#3C3C3C]'/>
                </div>
              ) : (
                <div className="flex flex-col ">
                  <p className="text-[#5A5A5A] text-[16px] leading-[24px] pt-6">
                    {description[0].children[0].text}
                  </p>
                  <p className="text-[#5A5A5A] text-[16px] leading-[24px] pt-6">
                    {description[1].children[0].text}...
                  </p>
                </div>
              )}
            </div>
            {viewMore && (
              <div className="pt-6">
                <p className="text-primary-blue font-semibold leading-[24px]">{name}</p>
                <p className="text-grey-dark leading-[24px]">{designation}</p>
                <p className="text-grey-dark leading-[24px]">{company}</p>
              </div>
            )}
            {/* button */}
            <div className="w-full pt-4">
              {viewMore !== true ? (
                <div
                  onClick={() => setVideMore(true)}
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
                  onClick={() => setVideMore(false)}
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
          </div>
        </div>
      </div>
    </section>
  )
}

export default MessageFromCEO
