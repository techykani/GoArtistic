import style from '@/styles/Home.module.css'
import Link from 'next/link'

export const Enquiry = ({ cta, title, description }: any) => {
  return (
    <div className="bg-[#FEFEFE] px-6 md:px-[71px] py-[32px] md:py-[60px]">
      <div
        style={{ background: 'linear-gradient(101deg, #0957CB 6.5%, #00D494 91.65%)' }}
        className="container mx-auto h-full  rounded-2xl"
      >
        <div className="w-full h-full px-6 py-[32px] md:px-20 md:py-12 flex flex-col md:flex-row md:justify-between md:items-center gap-6 lg:min-h-[200px]">
          <div className="flex flex-col gap-4 md:gap-2 max-w-[509px]">
            <h2
              className={`${style.montserrat} text-[#FEFEFE] text-[24px] md:text-[26px] font-bold leading-[28px] md:leading-[32px]`}
            >
              {title}
            </h2>
            <div className="flex items-center gap-1.5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
              >
                <path
                  d="M3 6.55027L7.89895 9.9183C8.29565 10.191 8.49401 10.3274 8.70976 10.3802C8.90034 10.4269 9.09966 10.4269 9.29024 10.3802C9.50599 10.3274 9.70435 10.191 10.101 9.9183L15 6.55027M5.88 14.211H12.12C13.1281 14.211 13.6321 14.211 14.0172 14.0183C14.3559 13.8488 14.6312 13.5784 14.8038 13.2457C15 12.8675 15 12.3725 15 11.3824V7.61098C15 6.62089 15 6.12584 14.8038 5.74768C14.6312 5.41503 14.3559 5.14458 14.0172 4.97509C13.6321 4.78241 13.1281 4.78241 12.12 4.78241H5.88C4.87191 4.78241 4.36786 4.78241 3.98282 4.97509C3.64413 5.14458 3.36876 5.41503 3.19619 5.74768C3 6.12584 3 6.62089 3 7.61098V11.3824C3 12.3725 3 12.8675 3.19619 13.2457C3.36876 13.5784 3.64413 13.8488 3.98282 14.0183C4.36786 14.211 4.87191 14.211 5.88 14.211Z"
                  stroke="#FEFEFE"
                  stroke-width="1.3"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <p className="text-[#FEFEFE] leading-[20px]">{description}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
