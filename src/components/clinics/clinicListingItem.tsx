import { useWindowSize } from '@/lib/hooks'
import Link from 'next/link'
import Image from 'next/image'
import { PortableText } from '@/sanity'
import EyeBrow from '../widgets/shared/eyeBrew'
import { GTAEvent } from '@/lib/gtag'

export const ClinicListingItem: React.FC<any> = ({ _id, props, slug }) => {
  const handleButton = (
    gtag_event: any,
    location_name: any,
    location_zone: any,
    gtag_cta_button: any,
  ) => {
    GTAEvent(gtag_event, {
      location_name: location_name !== '' ? location_name : null,
      location_zone: location_zone !== '' ? location_zone : null,
      cta_button: gtag_cta_button !== '' ? gtag_cta_button : null,
    })
  }
  return (
    <div className="w-full h-full flex flex-col justify-between rounded-xl bg-off-white shadow-megaMenu p-6 gap-6">
      <div className="w-full">
        {props?.services && (
          <EyeBrow
            title={props?.services[0] === 'GP clinics' ? 'GP clinic' : 'Specialist centre'}
            theme="light"
            className="pb-1"
          />
        )}
        <h2 className="text-grey-dark text-base md:text-[18px] font-semibold leading-[20px] md:leading-[22px] mb-2 md:mb-4">
          {props.name}
        </h2>
        <div className="w-full flex flex-col gap-3">
          <div className="flex gap-1 ">
            <div className="w-5 h-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="21"
                viewBox="0 0 20 21"
                fill="none"
              >
                <mask
                  id="mask0_480_56374"
                  maskUnits="userSpaceOnUse"
                  x="0"
                  y="0"
                  width="20"
                  height="21"
                >
                  <rect y="0.217529" width="20" height="20" fill="#D9D9D9" />
                </mask>
                <g mask="url(#mask0_480_56374)">
                  <path
                    d="M9.91332 17.2108C11.6705 15.5977 12.9739 14.1322 13.8237 12.8144C14.6734 11.4965 15.0983 10.3263 15.0983 9.30369C15.0983 7.73379 14.5978 6.44834 13.5968 5.44735C12.5958 4.44636 11.368 3.94586 9.91332 3.94586C8.45865 3.94586 7.23081 4.44636 6.22982 5.44735C5.22883 6.44834 4.72833 7.73379 4.72833 9.30369C4.72833 10.3263 5.15321 11.4965 6.00298 12.8144C6.85274 14.1322 8.15619 15.5977 9.91332 17.2108ZM9.91332 18.9175C9.71169 18.9175 9.51005 18.8815 9.30841 18.8095C9.10677 18.7375 8.92674 18.6295 8.76831 18.4854C7.83213 17.6213 7.00397 16.7787 6.28383 15.9578C5.56369 15.1368 4.96238 14.3411 4.47988 13.5705C3.99739 12.8 3.63012 12.0582 3.37807 11.3453C3.12602 10.6323 3 9.95181 3 9.30369C3 7.14327 3.69493 5.42214 5.0848 4.1403C6.47467 2.85845 8.08417 2.21753 9.91332 2.21753C11.7425 2.21753 13.352 2.85845 14.7418 4.1403C16.1317 5.42214 16.8266 7.14327 16.8266 9.30369C16.8266 9.95181 16.7006 10.6323 16.4486 11.3453C16.1965 12.0582 15.8293 12.8 15.3468 13.5705C14.8643 14.3411 14.263 15.1368 13.5428 15.9578C12.8227 16.7787 11.9945 17.6213 11.0583 18.4854C10.8999 18.6295 10.7199 18.7375 10.5182 18.8095C10.3166 18.8815 10.115 18.9175 9.91332 18.9175ZM9.91332 10.8592C10.3886 10.8592 10.7955 10.69 11.134 10.3515C11.4724 10.013 11.6417 9.60615 11.6417 9.13085C11.6417 8.65556 11.4724 8.24869 11.134 7.91022C10.7955 7.57176 10.3886 7.40252 9.91332 7.40252C9.43803 7.40252 9.03116 7.57176 8.69269 7.91022C8.35423 8.24869 8.18499 8.65556 8.18499 9.13085C8.18499 9.60615 8.35423 10.013 8.69269 10.3515C9.03116 10.69 9.43803 10.8592 9.91332 10.8592Z"
                    fill="#0957CB"
                  />
                </g>
              </svg>
            </div>
            <Link
              href={`${props?.mapLink}`}
              target="_blank"
              rel="nofollow noreferrer"
              className="text-[#0957CB] text-sm leading-[20px] hover:underline hover:underline-offset-2"
            >
              {props?.address}
            </Link>
          </div>
          <div className="flex gap-1">
            <div className="w-5 h-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="21"
                viewBox="0 0 20 21"
                fill="none"
              >
                <mask
                  id="mask0_115_26189"
                  maskUnits="userSpaceOnUse"
                  x="0"
                  y="0"
                  width="20"
                  height="21"
                >
                  <rect y="0.191895" width="20" height="20" fill="#D9D9D9" />
                </mask>
                <g mask="url(#mask0_115_26189)">
                  <path
                    d="M11.25 10.3919V7.69189C11.25 7.47939 11.1781 7.30127 11.0344 7.15752C10.8906 7.01377 10.7125 6.94189 10.5 6.94189C10.2875 6.94189 10.1094 7.01377 9.96563 7.15752C9.82188 7.30127 9.75 7.47939 9.75 7.69189V10.6731C9.75 10.7731 9.76875 10.87 9.80625 10.9638C9.84375 11.0575 9.9 11.1419 9.975 11.2169L12.45 13.6919C12.5875 13.8294 12.7625 13.8981 12.975 13.8981C13.1875 13.8981 13.3625 13.8294 13.5 13.6919C13.6375 13.5544 13.7063 13.3794 13.7063 13.1669C13.7063 12.9544 13.6375 12.7794 13.5 12.6419L11.25 10.3919ZM10.5 18.1919C9.4625 18.1919 8.4875 17.995 7.575 17.6013C6.6625 17.2075 5.86875 16.6731 5.19375 15.9981C4.51875 15.3231 3.98438 14.5294 3.59063 13.6169C3.19687 12.7044 3 11.7294 3 10.6919C3 9.65439 3.19687 8.67939 3.59063 7.76689C3.98438 6.85439 4.51875 6.06064 5.19375 5.38564C5.86875 4.71064 6.6625 4.17627 7.575 3.78252C8.4875 3.38877 9.4625 3.19189 10.5 3.19189C11.5375 3.19189 12.5125 3.38877 13.425 3.78252C14.3375 4.17627 15.1313 4.71064 15.8063 5.38564C16.4813 6.06064 17.0156 6.85439 17.4094 7.76689C17.8031 8.67939 18 9.65439 18 10.6919C18 11.7294 17.8031 12.7044 17.4094 13.6169C17.0156 14.5294 16.4813 15.3231 15.8063 15.9981C15.1313 16.6731 14.3375 17.2075 13.425 17.6013C12.5125 17.995 11.5375 18.1919 10.5 18.1919ZM10.5 16.6919C12.1625 16.6919 13.5781 16.1075 14.7469 14.9388C15.9156 13.77 16.5 12.3544 16.5 10.6919C16.5 9.02939 15.9156 7.61377 14.7469 6.44502C13.5781 5.27627 12.1625 4.69189 10.5 4.69189C8.8375 4.69189 7.42188 5.27627 6.25313 6.44502C5.08438 7.61377 4.5 9.02939 4.5 10.6919C4.5 12.3544 5.08438 13.77 6.25313 14.9388C7.42188 16.1075 8.8375 16.6919 10.5 16.6919Z"
                    fill="#5A5A5A"
                  />
                </g>
              </svg>
            </div>
            <div>
              <p className="text-grey-9 text-sm leading-[20px]">
                <PortableText blocks={props?.description} />
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* CTA */}
      <div className="w-full flex flex-col md:flex-row gap-2 md:gap-3">
        <Link
          href={`tel:${props?.mobileNo}`}
          className="btn_primary_small-light font-semibold rounded-full leading-[20px] w-full text-center"
          onClick={() => handleButton('select_location', props.name, props?.direction, ' Call us')}
        >
          Call us
        </Link>
        <Link
          href={`/clinics/${props?.slug?.current}`}
          className="btn_secondary_small-light font-semibold rounded-full leading-[20px] w-full text-center"
          onClick={() =>
            handleButton('select_location', props.name, props?.direction, 'View profile')
          }
        >
          View profile
        </Link>
      </div>
    </div>
  )
}
