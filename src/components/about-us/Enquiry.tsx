import style from '@/styles/Home.module.css'
import Link from 'next/link'

export const Enquiry = ({ cta, title, description }: any) => {
  return (
    <div className="bg-[#FBFBFB] px-6 md:px-[71px] py-[32px] md:py-[60px]">
      <div
        style={{ background: 'linear-gradient(101deg, #0957CB 6.5%, #00D494 91.65%)' }}
        className="container mx-auto h-full  rounded-2xl"
      >
        <div className="w-full h-full px-6 py-[32px] md:px-20 md:py-12 flex flex-col md:flex-row md:justify-between md:items-center gap-6 min-h-[230px]">
          <div className="flex flex-col gap-4 md:gap-2 max-w-[509px]">
            <h2
              className={`${style.montserrat} text-[#FEFEFE] text-[24px] md:text-[26px] font-bold leading-[28px] md:leading-[32px]`}
            >
              {title}
            </h2>
            <p className="text-[#FEFEFE] leading-[20px]">{description}</p>
          </div>
          <div className="w-full md:w-auto md:flex">
            <Link
              href={cta.href ?? ''}
              className="bg-[#FBFBFB] text-[#3C3C3C] text-[16px] font-semibold leading-[20px] px-6 py-3 flex gap-2 items-center rounded-[52px] group justify-center"
            >
              {cta.text}{' '}
              <div className="transition-all duration-150 group-hover:translate-x-1">
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
                    d="M14.8925 6.89459C15.283 6.50406 15.9162 6.50405 16.3067 6.89457L20.7052 11.2929C20.8927 11.4804 20.9981 11.7348 20.9981 12C20.9981 12.2652 20.8927 12.5196 20.7052 12.7071L16.3067 17.1056C15.9162 17.4961 15.283 17.4961 14.8925 17.1056C14.502 16.7151 14.502 16.0819 14.8925 15.6914L17.5839 13H3.99805C3.44576 13 2.99805 12.5523 2.99805 12C2.99805 11.4477 3.44576 11 3.99805 11H17.5838L14.8925 8.3088C14.502 7.91829 14.502 7.28512 14.8925 6.89459Z"
                    fill="#3C3C3C"
                  />
                </svg>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
