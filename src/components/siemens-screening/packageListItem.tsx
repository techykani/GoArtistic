import { Button } from '@/components/ui'
import EyeBrow from '@/components/widgets/shared/eyeBrew'
import { IDoctorsList } from '@/lib/types/doctorListingTypes'
import { imageUrlBuilder } from '@/sanity'
import { format } from 'date-fns'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { SanityImg } from 'sanity-react-extra'
import { staggerChild } from 'src/animations/stagging-scale-up'
import ReactPortableText from '../widgets/shared/reactPortableText'

export const SiemensPackageListItem: React.FC<any> = ({ _id, props, slug }) => {
  const [showModal, setShowModal] = useState(false)


  useEffect(() => {
    const body: any = document.querySelector('body');
    if (!showModal) {
      body.style.overflow = 'auto';
    } else {
      body.style.overflow = 'hidden';
    }
  }, [showModal])

  const handleShowDetail = (data: any) => {
    setShowModal(true)

  }
  return (
    <>
      {showModal && (
        <div className="fixed inset-0 z-[1000]">
          <section className="w-full h-screen z-[999] flex md:justify-center md:items-center md:px-8 lg:px-[175px] bg-[#000000b3]">
            <div className="w-full bg-off-white h-full md:h-auto md:max-w-[784px] md:min-h-[500px] md:max-h-[500px] md:rounded-[12px] overflow-y-scroll slider-body">
              <div className='sticky top-0 bg-off-white'>
                {/* header */}
                <div className="w-full flex justify-between items-center py-4 px-6 ">
                  <div className='flex flex-col gap-3'>
                    <p className="text-grey-dark text-[20px] leading-[24px] font-semibold"> {props?.title}</p>
                    <p className="text-grey-dark text-[20px] leading-[24px] font-semibold"> {props?.packageprice}</p>
                    <p className="text-grey-dark text-[20px] leading-[24px] font-semibold"> (Subject to GST)</p>
                  </div>
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="32"
                      height="32"
                      viewBox="0 0 32 32"
                      fill="none"
                      onClick={() => setShowModal(false)}
                      className="cursor-pointer"
                    >
                      <g clip-path="url(#clip0_1_136259)">
                        <mask
                          id="mask0_1_136259"
                          style={{ maskType: 'alpha' }}
                          maskUnits="userSpaceOnUse"
                          x="0"
                          y="0"
                          width="32"
                          height="32"
                        >
                          <rect width="32" height="32" fill="#D9D9D9" />
                        </mask>
                        <g mask="url(#mask0_1_136259)">
                          <path
                            d="M16.0001 17.8658L9.46673 24.3991C9.22229 24.6435 8.91118 24.7658 8.5334 24.7658C8.15562 24.7658 7.84451 24.6435 7.60007 24.3991C7.35562 24.1546 7.2334 23.8435 7.2334 23.4658C7.2334 23.088 7.35562 22.7769 7.60007 22.5324L14.1334 15.9991L7.60007 9.46576C7.35562 9.22131 7.2334 8.9102 7.2334 8.53242C7.2334 8.15464 7.35562 7.84353 7.60007 7.59909C7.84451 7.35464 8.15562 7.23242 8.5334 7.23242C8.91118 7.23242 9.22229 7.35464 9.46673 7.59909L16.0001 14.1324L22.5334 7.59909C22.7778 7.35464 23.089 7.23242 23.4667 7.23242C23.8445 7.23242 24.1556 7.35464 24.4001 7.59909C24.6445 7.84353 24.7667 8.15464 24.7667 8.53242C24.7667 8.9102 24.6445 9.22131 24.4001 9.46576L17.8667 15.9991L24.4001 22.5324C24.6445 22.7769 24.7667 23.088 24.7667 23.4658C24.7667 23.8435 24.6445 24.1546 24.4001 24.3991C24.1556 24.6435 23.8445 24.7658 23.4667 24.7658C23.089 24.7658 22.7778 24.6435 22.5334 24.3991L16.0001 17.8658Z"
                            fill="#3C3C3C"
                          />
                        </g>
                      </g>
                      <defs>
                        <clipPath id="clip0_1_136259">
                          <rect width="32" height="32" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                </div>
                {/* divider */}
                <div className="border-[1px] border-grey-3 " />
              </div>

              <div className='h-full overflow-y-scroll slider-body px-6 py-10 flex flex-col gap-4'>
                <div className='mt-[-24px]'>
                  <ReactPortableText content={props.packageDescription} />
                </div>
                <div className='flex '>
                  <Link href={""} className='w-full text-center btn_primary_medium-light rounded-full leading-[20px]'>Book Appointment</Link>
                </div>
              </div>

            </div>
          </section>
        </div>
      )}
      <div className="w-full rounded-[12px] bg-off-white shadow-megaMenu overflow-hidden">
        {/* image */}
        {/* details */}
        <div className="p-6 flex flex-col gap-4">
          <div className="w-full">
            <h2 className="text-grey-dark text-base md:text-[20px] font-semibold leading-5 md:leading-[24px] mb-2 md:min-h-[48px] text-center">
              {props?.title}
            </h2>
            <p className="text-grey-dark text-[20px] font-semibold leading-[28px] md:pt-4 md:pb-4 text-center">
              {props?.packageprice}
            </p>
            <div className="flex justify-center">
              <span
                className="text-secondary-ocean text-[14px] md:text-[16px] font-semibold leading-[20px] md:leading-[24px] cursor-pointer py-2 md:py-0"
                // href={`/services/health-screening/${props?.slug?.current}`}
                onClick={() => handleShowDetail(props)}
              >
                View details
              </span>
            </div>
          </div>
        </div>
        {/* price */}
      </div>
    </>
  )
}
