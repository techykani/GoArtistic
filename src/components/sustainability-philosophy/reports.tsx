import { PortableText } from '@/sanity'
import { useState } from 'react'

export const Reports: React.FC<any> = ({
  title,
  fileList,
  tagline,
  description,
  sectionTagline,
}) => {
  const downLoadURL = ({ file }: { file: any }) => {
    const baseURL = 'https://cdn.sanity.io/files/'
    const fileName = `${file.asset._ref.split('-')[1]}.${file.asset._ref.split('-')[2]}`
    return `${baseURL}${process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}/${process.env.NEXT_PUBLIC_SANITY_DATASET}/${fileName}?dl`
  }

  return (
    <>
      <section className="bg-off-white px-6 md:px-[71px] py-[48px] md:py-[80px] ">
        <div className="mx-auto max-w-[808px] flex flex-col gap-8">
          <div className="w-full flex flex-col gap-2 md:gap-4">
            <p className="text-xs font-bold leading-[18px] tracking-[2.16px] uppercase section__tag-title">
              {title}
            </p>
            <p className="w-full text-primary-blue-new font-montserrat text-[26px] md:text-[32px] font-bold leading-[32px] md:leading-[38px] tracking-[0.32px] md:w-[600px]">
              {tagline}
            </p>
            <p className="text-grey-9 text-base leading-[24px] md:w-[600px]">
              <PortableText blocks={description} />
            </p>
          </div>
          <div className="w-full flex flex-col gap-[8px] md:gap-[16px]">
            {fileList.map((el: any, i: number) => (
              <div
                className="bg-off-white flex w-full h-full shadow-megaMenu rounded-r-[8px] relative"
                key={i}
              >
                <div className="border-[2px] border-primary-blue h-full absolute"></div>

                <div className="w-full p-4 md:p-6 flex justify-between items-center cursor-pointer">
                  <a
                    className="text-grey-dark text-sm md:text-[16px] font-semibold leading-[22px] "
                    href={downLoadURL(el)}
                    target='_blank'
                  >
                    {el?.filename}
                  </a>
                  <div className="h-6 w-6 flex-shrink-0" >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        d="M21 21H3M18 11L12 17M12 17L6 11M12 17V3"
                        stroke="#6E6E6E"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
