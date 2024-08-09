import { SanityImg } from 'sanity-react-extra'
import { imageUrlBuilder } from '@/sanity'
import { useRouter } from 'next/router'
import { useWindowSize } from '@/lib/hooks'
import { LinkAngleRight } from '@/components/ui'
import clsx from 'clsx'
import Title from '../widgets/shared/title'
import Link from 'next/link'

export const PracticeDoctor: React.FC<any> = ({ title, description, doctor }) => {
  const router = useRouter()
  const windowWidth = useWindowSize()?.width ?? 0;

  console.log(doctor, 'doc')

  return (
    <>

      <div style={{ background: 'linear-gradient(75deg, #195FC9 21.69%, #2C82D0 50.84%, #7BEFFF 104.28%)' }} className=' py-[36px] md:py-[60px] px-6 md:px-[71px]'>
        <div className='max-w-[1016px] mx-auto flex flex-col md:flex-row md:justify-between md:items-center gap-6'>
          <div className='w-full md:max-w-[496px] flex flex-col gap-2 md:gap-4'>
            <Title headingType='h2' theme='dark' tagline={title} />
            <p className='text-[#FEFEFE] text-[16px] leading-[24px]'>{description}</p>
          </div>
          <Link href={`/doctors/${doctor.slug.current}`} className='w-full md:max-w-[392px] bg-off-white shadow-megaMenu p-4 md:p-6 rounded-xl flex gap-4 md:gap-6'>
            <div className='w-[64px] md:w-[112px] '>
              <div style={{ backgroundImage: `url(${doctor?.photo})` }} className='w-[64px] md:w-[112px] h-[64px] md:h-[112px] rounded-full overflow-hidden bg-cover bg-center '>
              </div>
            </div>
            <div className='w-full flex flex-col gap-4 md:gap-3'>
              <div className='flex flex-col gap-1'>
                <h3 className='text-[#3C3C3C] text-[16px] md:text-[18px] font-semibold leading-[20px] md:leading-[22px]'>{doctor?.name}</h3>
                <p className='text-[#6E6E6E] text-[14px] leading-[20px] md:leading-[18px]'>{doctor?.designation}</p>
                <p className='text-[#0084C6] text-[14px] font-semibold md:font-medium leading-[20px] md:leading-[18px]'>{doctor?.specialist?.title}</p>
              </div>
              <div className='flex gap-1'>
                <div className='w-5'>
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <mask id="mask0_96_18137" style={{ maskType: "alpha" }} maskUnits="userSpaceOnUse" x="0" y="0" width="20" height="20">
                      <rect width="20" height="20" fill="#D9D9D9" />
                    </mask>
                    <g mask="url(#mask0_96_18137)">
                      <path d="M14.1667 7.5H15.8333V5.83333H14.1667V7.5ZM14.1667 10.8333H15.8333V9.16667H14.1667V10.8333ZM14.1667 14.1667H15.8333V12.5H14.1667V14.1667ZM17.5 17.5H11.6667C11.4306 17.5 11.2326 17.4201 11.0729 17.2604C10.9132 17.1007 10.8333 16.9028 10.8333 16.6667C10.8333 16.4306 10.9132 16.2326 11.0729 16.0729C11.2326 15.9132 11.4306 15.8333 11.6667 15.8333H17.5V4.16667H9.99999V5.83333L8.33333 5C8.33333 3.75 8.49305 3.29861 8.81249 2.97917C9.13194 2.65972 9.51388 2.5 9.95833 2.5H17.5C17.9583 2.5 18.3507 2.66319 18.6771 2.98958C19.0035 3.31597 19.1667 3.70833 19.1667 4.16667V15.8333C19.1667 16.2917 19.0035 16.684 18.6771 17.0104C18.3507 17.3368 17.9583 17.5 17.5 17.5Z" fill="#6E6E6E" />
                      <path d="M5.83333 17.8958C7.20833 16.7847 8.24653 15.7153 8.94792 14.6875C9.64931 13.6597 10 12.6945 10 11.7917C10 11.0139 9.85764 10.3507 9.57292 9.80209C9.28819 9.25348 8.9375 8.80904 8.52083 8.46876C8.10417 8.12848 7.65278 7.88195 7.16667 7.72918C6.68056 7.5764 6.23611 7.50001 5.83333 7.50001C5.43056 7.50001 4.98611 7.5764 4.5 7.72918C4.01389 7.88195 3.5625 8.12848 3.14583 8.46876C2.72917 8.80904 2.37847 9.25348 2.09375 9.80209C1.80903 10.3507 1.66667 11.0139 1.66667 11.7917C1.66667 12.6945 2.01736 13.6597 2.71875 14.6875C3.42014 15.7153 4.45833 16.7847 5.83333 17.8958ZM5.83333 20C3.875 18.5556 2.41319 17.1528 1.44792 15.7917C0.482639 14.4306 0 13.0972 0 11.7917C0 10.8056 0.177083 9.94098 0.53125 9.19793C0.885417 8.45487 1.34028 7.83334 1.89583 7.33334C2.45139 6.83334 3.07639 6.45834 3.77083 6.20834C4.46528 5.95834 5.15278 5.83334 5.83333 5.83334C6.51389 5.83334 7.20139 5.95834 7.89583 6.20834C8.59028 6.45834 9.21528 6.83334 9.77083 7.33334C10.3264 7.83334 10.7813 8.45487 11.1354 9.19793C11.4896 9.94098 11.6667 10.8056 11.6667 11.7917C11.6667 13.0972 11.184 14.4306 10.2188 15.7917C9.25347 17.1528 7.79167 18.5556 5.83333 20ZM5.83333 13.3333C6.29167 13.3333 6.68403 13.1701 7.01042 12.8438C7.33681 12.5174 7.5 12.125 7.5 11.6667C7.5 11.2083 7.33681 10.816 7.01042 10.4896C6.68403 10.1632 6.29167 10 5.83333 10C5.375 10 4.98264 10.1632 4.65625 10.4896C4.32986 10.816 4.16667 11.2083 4.16667 11.6667C4.16667 12.125 4.32986 12.5174 4.65625 12.8438C4.98264 13.1701 5.375 13.3333 5.83333 13.3333ZM0 22.5V20.8333H11.6667V22.5H0Z" fill="#6E6E6E" />
                    </g>
                  </svg>
                </div>
                {doctor?.center && (
                  <>
                    {doctor?.center.length > 1 && (
                      <p className="text-[#6E6E6E] text-sm leading-[20px]">Multiple Locations</p>
                    )}

                    {doctor?.center.length === 1 && (
                      <p className="text-[#6E6E6E] text-sm leading-[20px]">{doctor?.center[0].name}</p>
                    )}
                  </>
                )}
              </div>
            </div>
          </Link>
        </div>
      </div>
    </>
  )
}
