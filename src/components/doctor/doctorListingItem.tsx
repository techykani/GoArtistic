import { GTAEvent } from '@/lib/gtag'
import Link from 'next/link'

export const DoctorListingItem: React.FC<any> = ({ _id, props, slug }) => {
  const handleButton = (
    gtag_event: any,
    doctor_name: any,
    doctor_specialist: any,
    doctor_title: any,
    gtag_cta_button: any,
  ) => {
    GTAEvent(gtag_event, {
      doctor_name: doctor_name !== '' ? doctor_name : null,
      doctor_specialist: doctor_specialist !== '' ? doctor_specialist : null,
      doctor_title: doctor_title !== '' ? doctor_title : null,
      cta_button: gtag_cta_button !== '' ? gtag_cta_button : null,
    })
  }
  const allTitles = [
    ...(props.specialist?.map((specialist: any) => specialist.title) || []),
    ...(props.subSpeciality?.map((sub: any) => sub.title) || []),
  ]

  // Join titles with " • "
  let combinedTitles = allTitles.join(' • ')
  return (
    <div className="w-full h-full flex flex-col justify-between rounded-xl bg-off-white shadow-megaMenu p-4 md:p-6 gap-6 md:gap-8">
      <div className="w-full flex gap-4 md:gap-6">
        {props?.photo ? (
          <div
            className="min-w-[64px] lg:min-w-[112px] min-h-[64px] max-h-[64px] lg:min-h-[112px] lg:max-h-[112px] bg-cover bg-center rounded-full overflow-hidden"
            style={{ backgroundImage: `url(${props?.photo})` }}
          >
            {' '}
          </div>
        ) : (
          <div
            className="min-w-[64px] lg:min-w-[112px] min-h-[64px] max-h-[64px] lg:min-h-[112px] lg:max-h-[112px] bg-cover bg-center rounded-full overflow-hidden"
            style={{ backgroundImage: `url('/user-profile.png')` }}
          >
            {' '}
          </div>
        )}

        <div className="flex flex-col gap-2 md:gap-4">
          <div className="flex flex-col gap-1">
            <p className="text-grey-dark text-base lg:text-[18px] font-semibold leading-[20px] md:leading-[22px]">
              {props?.name}
            </p>
            {/* <p className="text-grey-8 text-sm">{props?.designation}</p> */}
            <p className="text-[#0084C6] text-[14px] font-medium leading-[18px]">
              {combinedTitles}
            </p>
          </div>
          <div className="flex gap-1">
            <div className="w-5 h-5 flex justify-center items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
              >
                <mask
                  id="mask0_2822_23080"
                  style={{ maskType: 'alpha' }}
                  maskUnits="userSpaceOnUse"
                  x="0"
                  y="0"
                  width="20"
                  height="20"
                >
                  <rect width="20" height="20" fill="#D9D9D9" />
                </mask>
                <g mask="url(#mask0_2822_23080)">
                  <path
                    d="M14.1667 7.5H15.8334V5.83333H14.1667V7.5ZM14.1667 10.8333H15.8334V9.16667H14.1667V10.8333ZM14.1667 14.1667H15.8334V12.5H14.1667V14.1667ZM17.5 17.5H11.6667C11.4306 17.5 11.2327 17.4201 11.073 17.2604C10.9132 17.1007 10.8334 16.9028 10.8334 16.6667C10.8334 16.4306 10.9132 16.2326 11.073 16.0729C11.2327 15.9132 11.4306 15.8333 11.6667 15.8333H17.5V4.16667H10V5.83333L8.33337 5C8.33337 3.75 8.4931 3.29861 8.81254 2.97917C9.13198 2.65972 9.51393 2.5 9.95837 2.5H17.5C17.9584 2.5 18.3507 2.66319 18.6771 2.98958C19.0035 3.31597 19.1667 3.70833 19.1667 4.16667V15.8333C19.1667 16.2917 19.0035 16.684 18.6771 17.0104C18.3507 17.3368 17.9584 17.5 17.5 17.5Z"
                    fill="#3C3C3C"
                  />
                  <path
                    d="M5.83333 17.8965C7.20833 16.7854 8.24653 15.7159 8.94792 14.6882C9.64931 13.6604 10 12.6951 10 11.7923C10 11.0145 9.85764 10.3513 9.57292 9.80273C9.28819 9.25412 8.9375 8.80968 8.52083 8.4694C8.10417 8.12912 7.65278 7.8826 7.16667 7.72982C6.68056 7.57704 6.23611 7.50065 5.83333 7.50065C5.43056 7.50065 4.98611 7.57704 4.5 7.72982C4.01389 7.8826 3.5625 8.12912 3.14583 8.4694C2.72917 8.80968 2.37847 9.25412 2.09375 9.80273C1.80903 10.3513 1.66667 11.0145 1.66667 11.7923C1.66667 12.6951 2.01736 13.6604 2.71875 14.6882C3.42014 15.7159 4.45833 16.7854 5.83333 17.8965ZM5.83333 20.0007C3.875 18.5562 2.41319 17.1534 1.44792 15.7923C0.482639 14.4312 0 13.0979 0 11.7923C0 10.8062 0.177083 9.94162 0.53125 9.19857C0.885417 8.45551 1.34028 7.83398 1.89583 7.33398C2.45139 6.83398 3.07639 6.45898 3.77083 6.20898C4.46528 5.95898 5.15278 5.83398 5.83333 5.83398C6.51389 5.83398 7.20139 5.95898 7.89583 6.20898C8.59028 6.45898 9.21528 6.83398 9.77083 7.33398C10.3264 7.83398 10.7813 8.45551 11.1354 9.19857C11.4896 9.94162 11.6667 10.8062 11.6667 11.7923C11.6667 13.0979 11.184 14.4312 10.2188 15.7923C9.25347 17.1534 7.79167 18.5562 5.83333 20.0007ZM5.83333 13.334C6.29167 13.334 6.68403 13.1708 7.01042 12.8444C7.33681 12.518 7.5 12.1257 7.5 11.6673C7.5 11.209 7.33681 10.8166 7.01042 10.4902C6.68403 10.1638 6.29167 10.0007 5.83333 10.0007C5.375 10.0007 4.98264 10.1638 4.65625 10.4902C4.32986 10.8166 4.16667 11.209 4.16667 11.6673C4.16667 12.1257 4.32986 12.518 4.65625 12.8444C4.98264 13.1708 5.375 13.334 5.83333 13.334ZM0 22.5007V20.834H11.6667V22.5007H0Z"
                    fill="#3C3C3C"
                  />
                </g>
              </svg>
            </div>
            {props.center && (
              <>
                {props.center.length > 1 && (
                  <p className="text-[#6E6E6E] text-sm leading-[20px]">Multiple Locations</p>
                )}

                {props.center.length === 1 && (
                  <p className="text-[#6E6E6E] text-sm leading-[20px]">{props.center[0].name}</p>
                )}
              </>
            )}
          </div>
        </div>
      </div>
      <div className="w-full flex flex-col lg:flex-row gap-2 md:gap-3">
        {/* Make an Appointment button */}
        {props.cta?.text && (
          <Link
            href={props.cta?.href ?? ''}
            target="_blank"
            className="font-semibold rounded-full leading-[20px] w-full lg:w-1/2 text-center whitespace-nowrap btn_primary_small-light flex justify-center items-center"
            onClick={() =>
              handleButton(
                'select_doctor',
                props?.name,
                props?.specialist?.title,
                props?.designation,
                props.cta?.text,
              )
            }
          >
            <span>{props.cta?.text}</span>
          </Link>
        )}

        {/* Contact button */}
        {!props.cta?.text && ( // Render only if the first button is not present
          <Link
            href={'/contact-us'}
            className="font-semibold rounded-full leading-[20px] w-full lg:w-1/2 text-center whitespace-nowrap btn_primary_small-light flex justify-center items-center"
          >
            <span>Contact us</span>
          </Link>
        )}

        {/* Whatsapp button */}
        {props.ctaProfile?.text && (
          <Link
            href={props.ctaProfile?.href ?? ''}
            className="btn_secondary_small-light font-semibold rounded-full leading-[20px] w-full text-center whitespace-nowrap md:max-w-[160px]"
            onClick={() =>
              handleButton(
                'select_doctor',
                props?.name,
                props?.specialist?.title,
                props?.designation,
                'Whatsapp us',
              )
            }
          >
            <span>{props.ctaProfile?.text}</span>
          </Link>
        )}

        {/* view profile button */}

        {!props.ctaProfile?.text && (
          <Link
            href={`/doctors/${props?.slug?.current}`}
            className="btn_secondary_small-light font-semibold rounded-full leading-[20px] w-full text-center whitespace-nowrap md:max-w-[160px]"
            onClick={() =>
              handleButton(
                'select_doctor',
                props?.name,
                props?.specialist?.title,
                props?.designation,
                'View profile',
              )
            }
          >
            <span>View profile</span>
          </Link>
        )}
      </div>
    </div>
  )
}
