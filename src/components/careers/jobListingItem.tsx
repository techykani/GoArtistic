import { useWindowSize } from '@/lib/hooks'
import Link from 'next/link'
import Image from 'next/image'
import { GTAEvent } from '@/lib/gtag'
import Title from '../widgets/shared/title'
import EyeBrow from '../widgets/shared/eyeBrew'

export const JobListingItem: React.FC<any> = ({ props }) => {
  const windowWidth = useWindowSize()?.width ?? 0

  const handleButton = (
    gtag_event: any,
    title: any,
    jobTitle: any,
    jobType: any,
    gtag_cta_button: any,
  ) => {
    GTAEvent(gtag_event, {
      title: title !== '' ? title : null,
      jobTitle: jobTitle !== '' ? jobTitle : null,
      jobType: jobType !== '' ? jobType : null,
      cta_button: gtag_cta_button !== '' ? gtag_cta_button : null,
    })
  }

  return (
    <div className="w-full h-full flex flex-col justify-between rounded-xl bg-off-white shadow-megaMenu p-6 gap-6">
      {/* image */}
      <div className="w-full ">
        <div className=" w-full min-w-[139px] max-w-[150px] min-h-[55px] lg:min-h-[55px] flex  justify-start pl-0 md:pl-[5.76px]">
          <Image
            src={windowWidth >= 720 ? props.listingImg : props.listingImg}
            width={150}
            height={55}
            alt=""
            quality={80}
            className="w-full h-full"
          />
        </div>
        <div className="w-full flex flex-col pt-6">
          {/* job title */}
          <div className=" flex flex-col">
            <p className="text-[#3C3C3C] text-[16px] font-semibold leading-[20px]">
              {props?.title}
            </p>
            <div className="pt-2">
              {props?.eyebrow && (
                <>
                  <EyeBrow
                    title={props.eyebrow}
                    theme="light"
                    className="text-[11px] font-semibold leading-[17px] uppercase tracking-[1.65px]"
                  />
                </>
              )}
              <p className="text-grey-8 md:text-[12px] text-[14px] font-normal leading-[20px]">
                {props?.center}
              </p>
            </div>
          </div>

          {/* location */}
          {props.jobType && (
            <div className=" flex flex-col gap-2 flex-1">
              <div className="flex gap-2">
                <div className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="4"
                    height="4"
                    viewBox="0 0 4 4"
                    fill="none"
                  >
                    <path
                      d="M2 4C2.55556 4 3.02778 3.80556 3.41667 3.41667C3.80556 3.02778 4 2.55556 4 2C4 1.44444 3.80556 0.972222 3.41667 0.583333C3.02778 0.194444 2.55556 0 2 0C1.44444 0 0.972222 0.194444 0.583333 0.583333C0.194444 0.972222 0 1.44444 0 2C0 2.55556 0.194444 3.02778 0.583333 3.41667C0.972222 3.80556 1.44444 4 2 4Z"
                      fill="#6E6E6E"
                    />
                  </svg>
                </div>
                <p className="text-grey-8 text-[12px]  font-normal leading-[20px]">
                  {props?.jobType[0]}
                </p>
              </div>
            </div>
          )}
          {props.location && (
            <div className=" flex flex-col gap-2 flex-1">
              <div className="flex gap-2">
                <div className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="4"
                    height="4"
                    viewBox="0 0 4 4"
                    fill="none"
                  >
                    <path
                      d="M2 4C2.55556 4 3.02778 3.80556 3.41667 3.41667C3.80556 3.02778 4 2.55556 4 2C4 1.44444 3.80556 0.972222 3.41667 0.583333C3.02778 0.194444 2.55556 0 2 0C1.44444 0 0.972222 0.194444 0.583333 0.583333C0.194444 0.972222 0 1.44444 0 2C0 2.55556 0.194444 3.02778 0.583333 3.41667C0.972222 3.80556 1.44444 4 2 4Z"
                      fill="#6E6E6E"
                    />
                  </svg>
                </div>
                <p className="text-grey-8 text-[12px]  font-normal leading-[20px]">
                  {props?.location}
                </p>
              </div>
            </div>
          )}
          {/* date */}
        </div>
      </div>
      <div className="flex">
        <Link
          href={props.callUsbutton?.href}
          onClick={() =>
            handleButton(
              'select_contactUs',
              props?.title,
              props?.jobTitle,
              props?.jobType[0],
              props.callUsbutton?.title,
            )
          }
          target="_blank"
          rel="noopener noreferrer"
          className="btn_primary_small-light font-semibold rounded-full leading-[20px] md:w-[164px] w-full flex justify-center"
        >
          {props.callUsbutton && <span>{props.callUsbutton?.title}</span>}
        </Link>
      </div>
    </div>
  )
}
