import { PortableText, imageUrlBuilder } from '@/sanity'
import Link from 'next/link'
import { SanityImg } from 'sanity-react-extra'
import Title from '../widgets/shared/title'
import SocialShare from './socialShare'
import { useState } from 'react'

export const Hero: React.FC<any> = ({ page }) => {
  let formattedDate = ' '
  if (page?.publishedAt) {
    const createdAt = new Date(page?.publishedAt)
    if (!isNaN(createdAt.getTime())) {
      // Check if the date is valid
      formattedDate = `${createdAt.toLocaleDateString('en-US', {
        day: '2-digit',
      })} ${createdAt.toLocaleDateString('en-US', {
        month: 'short',
      })}, ${createdAt.toLocaleDateString('en-US', { year: 'numeric' })}`
    }
  }
  const [showSharingModal, setShowSharingModal] = useState(false)
  return (
    <>
      <div className="w-full bg-[#004E89]">
        {/* mobile banner */}
        {page?.primaryImg && (
          <SanityImg
            builder={imageUrlBuilder}
            image={page?.primaryImg}
            alt={page?.primaryImg?.alt ?? 'image'}
            loading="eager"
            className="w-full md:hidden"
          />
        )}
        <div className="full py-[32px] md:py-[60px] flex flex-col gap-[32px] px-6 lg:px-0 max-w-[1014px] mx-auto">
          <Title
            headingType="h1"
            tagline={page?.title}
            className="!text-[20px] md:!text-[26px] !font-semibold md:!font-bold !leading-[24px] md:!leading-[32px]"
          />
          <div className="flex gap-4 relative">
            {showSharingModal && (
              <div className="absolute bottom-[30px] md:top-[30px] right-0 w-full md:min-w-[399px] md:max-w-[399px] bg-[white] rounded-lg z-50">
                <SocialShare setShowSharingModal={setShowSharingModal} />
              </div>
            )}
            <div className="flex gap-[6px] items-center flex-1">
              <div className="text-off-white text-[14px] md:text-[16px] font-normal leading-[20px] md:leading-[24px]">
                {/* {page?.calendar?.date +
                  ' ' +
                  page?.calendar?.month +
                  ', ' +
                  page?.calendar?.year +
                  ' ' +
                  (page?.calendar?.minutes !== undefined ? page?.calendar?.minutes : '')} */}
                {formattedDate}
              </div>
            </div>
            <button onClick={() => setShowSharingModal(true)} className="flex gap-1 items-center">
              <div className="w-6 h-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <mask
                    id="mask0_1123_373"
                    maskUnits="userSpaceOnUse"
                    x="0"
                    y="0"
                    width="24"
                    height="24"
                  >
                    <rect width="24" height="24" fill="#D9D9D9" />
                  </mask>
                  <g mask="url(#mask0_1123_373)">
                    <path
                      d="M18 22C17.1667 22 16.4583 21.7083 15.875 21.125C15.2917 20.5417 15 19.8333 15 19C15 18.8833 15.0083 18.7625 15.025 18.6375C15.0417 18.5125 15.0667 18.4 15.1 18.3L8.05 14.2C7.76667 14.45 7.45 14.6458 7.1 14.7875C6.75 14.9292 6.38333 15 6 15C5.16667 15 4.45833 14.7083 3.875 14.125C3.29167 13.5417 3 12.8333 3 12C3 11.1667 3.29167 10.4583 3.875 9.875C4.45833 9.29167 5.16667 9 6 9C6.38333 9 6.75 9.07083 7.1 9.2125C7.45 9.35417 7.76667 9.55 8.05 9.8L15.1 5.7C15.0667 5.6 15.0417 5.4875 15.025 5.3625C15.0083 5.2375 15 5.11667 15 5C15 4.16667 15.2917 3.45833 15.875 2.875C16.4583 2.29167 17.1667 2 18 2C18.8333 2 19.5417 2.29167 20.125 2.875C20.7083 3.45833 21 4.16667 21 5C21 5.83333 20.7083 6.54167 20.125 7.125C19.5417 7.70833 18.8333 8 18 8C17.6167 8 17.25 7.92917 16.9 7.7875C16.55 7.64583 16.2333 7.45 15.95 7.2L8.9 11.3C8.93333 11.4 8.95833 11.5125 8.975 11.6375C8.99167 11.7625 9 11.8833 9 12C9 12.1167 8.99167 12.2375 8.975 12.3625C8.95833 12.4875 8.93333 12.6 8.9 12.7L15.95 16.8C16.2333 16.55 16.55 16.3542 16.9 16.2125C17.25 16.0708 17.6167 16 18 16C18.8333 16 19.5417 16.2917 20.125 16.875C20.7083 17.4583 21 18.1667 21 19C21 19.8333 20.7083 20.5417 20.125 21.125C19.5417 21.7083 18.8333 22 18 22ZM18 6C18.2833 6 18.5208 5.90417 18.7125 5.7125C18.9042 5.52083 19 5.28333 19 5C19 4.71667 18.9042 4.47917 18.7125 4.2875C18.5208 4.09583 18.2833 4 18 4C17.7167 4 17.4792 4.09583 17.2875 4.2875C17.0958 4.47917 17 4.71667 17 5C17 5.28333 17.0958 5.52083 17.2875 5.7125C17.4792 5.90417 17.7167 6 18 6ZM6 13C6.28333 13 6.52083 12.9042 6.7125 12.7125C6.90417 12.5208 7 12.2833 7 12C7 11.7167 6.90417 11.4792 6.7125 11.2875C6.52083 11.0958 6.28333 11 6 11C5.71667 11 5.47917 11.0958 5.2875 11.2875C5.09583 11.4792 5 11.7167 5 12C5 12.2833 5.09583 12.5208 5.2875 12.7125C5.47917 12.9042 5.71667 13 6 13ZM18 20C18.2833 20 18.5208 19.9042 18.7125 19.7125C18.9042 19.5208 19 19.2833 19 19C19 18.7167 18.9042 18.4792 18.7125 18.2875C18.5208 18.0958 18.2833 18 18 18C17.7167 18 17.4792 18.0958 17.2875 18.2875C17.0958 18.4792 17 18.7167 17 19C17 19.2833 17.0958 19.5208 17.2875 19.7125C17.4792 19.9042 17.7167 20 18 20Z"
                      fill="#FEFEFE"
                    />
                  </g>
                </svg>
              </div>
              <span className="text-off-white text-base font-semibold leading-5 ">share</span>
            </button>
          </div>
        </div>
      </div>
      <div className="bg-[#F1F6FF] px-6 lg:px-[71px]">
        <div className="max-w-[1014px] mx-auto">
          <div className="py-[32px] md:py-[36px] custom-list text-grey-dark text-[16px] leading-[24px] md:leading-[20px]">
            <PortableText blocks={page.overviewPoints} />
          </div>
        </div>
      </div>
      <div className="hidden md:block px-6 ">
        {page.primaryImg && (
          <div className="w-full max-w-[1012px] mx-auto flex flex-col gap-4 md:pt-[48px]">
            {/* image */}
            <SanityImg
              builder={imageUrlBuilder}
              image={page.primaryImg}
              alt={page?.primaryImg?.alt ?? 'image'}
              loading="eager"
              className="w-full rounded-xl overflow-hidden"
            />
          </div>
        )}
      </div>
    </>
  )
}
