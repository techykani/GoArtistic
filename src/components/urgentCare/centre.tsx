import { SanityImg } from 'sanity-react-extra'
import { imageUrlBuilder } from '@/sanity'
import { useRouter } from 'next/router'
import { useWindowSize } from '@/lib/hooks'
import EyeBrew from '../widgets/shared/eyeBrew'
import Title from '../widgets/shared/title'
import GoogleMapComponent from '@/components/common/GoogleMap'

const SpecialistCentre: React.FC<any> = (props: any) => {
  const router = useRouter()
  const windowWidth = useWindowSize()?.width ?? 0

  const positions: any = [
    {
      locationName: 'StarMed Urgent Care Centre',
      latitude: 1.3121639,
      longitude: 103.8546275,
      address: '12 Farrer Park Station Rd, Singapore 217565',
    },
  ]

  return (
    <>
      <div className="bg-[#F1F6FF]">
        <div className=" flex flex-col md:flex-row">
          <div className="w-full md:w-1/2  pt-[48px] pb-[36px] md:py-[96px] px-6 md:px-[71px]">
            <div className="max-w-[541px] ml-auto flex flex-col gap-4">
              <div className="flex flex-col gap-2">
                <EyeBrew title={props?.tagline} theme="light" />
                <Title tagline={props?.title} theme="light" headingType="h2" />
              </div>
              <p className="text-base font-normal leading-6 text-[#5A5A5A]">{props?.description}</p>
              <div className="text-[#5A5A5A] flex ">
                <ul className="flex flex-col gap-4 md:gap-[8px]">
                  {props?.items?.map((item: any) => {
                    // const hrefValue =
                    //   (item?.type === 'location' && `https://www.google.com/maps?q=${item?.name}`) ||
                    //   (item?.type === 'tel' && `tel:${item?.name}`) ||
                    //   '#'

                    return (
                      <li className="" key={item?._key}>
                        {item?.type == 'location' ? (
                          <a
                            className="flex"
                            href={`https://www.google.com/maps?q=${item?.name}`}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {item?.icon && (
                              <div className="w-[24px] h-[24px] mr-2">
                                {' '}
                                <SanityImg
                                  className="w-full h-full flex-shrink-0 "
                                  builder={imageUrlBuilder}
                                  height={24}
                                  width={24}
                                  image={item?.icon}
                                  alt="hmi"
                                  loading="eager"
                                />
                              </div>
                            )}

                            <span className="text-base text-[#0957CB] leading-6 hover:underline hover:underline-offset-[3px]">
                              {item?.name}
                            </span>
                          </a>
                        ) : (
                          <a className="flex" href={`tel:${item?.name}`}>
                            {item?.icon && (
                              <div className="w-[24px] h-[24px] mr-2">
                                {' '}
                                <SanityImg
                                  className="w-full h-full flex-shrink-0 "
                                  builder={imageUrlBuilder}
                                  height={24}
                                  width={24}
                                  image={item?.icon}
                                  alt="hmi"
                                  loading="eager"
                                />
                              </div>
                            )}

                            <span className="text-base text-[#0957CB] leading-6 hover:underline hover:underline-offset-[3px]">
                              {item?.name}
                            </span>
                          </a>
                        )}
                      </li>
                    )
                  })}
                  <li className="">
                    <div className="flex">
                      <div className="w-6 h-6">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <mask
                            id="mask0_480_29670"
                            style={{ maskType: 'alpha' }}
                            maskUnits="userSpaceOnUse"
                            x="0"
                            y="0"
                            width="24"
                            height="24"
                          >
                            <rect width="24" height="24" fill="#D9D9D9" />
                          </mask>
                          <g mask="url(#mask0_480_29670)">
                            <path
                              d="M12.9 11.64V8.4C12.9 8.145 12.8138 7.93125 12.6413 7.75875C12.4688 7.58625 12.255 7.5 12 7.5C11.745 7.5 11.5312 7.58625 11.3588 7.75875C11.1862 7.93125 11.1 8.145 11.1 8.4V11.9775C11.1 12.0975 11.1225 12.2137 11.1675 12.3263C11.2125 12.4388 11.28 12.54 11.37 12.63L14.34 15.6C14.505 15.765 14.715 15.8475 14.97 15.8475C15.225 15.8475 15.435 15.765 15.6 15.6C15.765 15.435 15.8475 15.225 15.8475 14.97C15.8475 14.715 15.765 14.505 15.6 14.34L12.9 11.64ZM12 21C10.755 21 9.585 20.7638 8.49 20.2912C7.395 19.8187 6.4425 19.1775 5.6325 18.3675C4.8225 17.5575 4.18125 16.605 3.70875 15.51C3.23625 14.415 3 13.245 3 12C3 10.755 3.23625 9.585 3.70875 8.49C4.18125 7.395 4.8225 6.4425 5.6325 5.6325C6.4425 4.8225 7.395 4.18125 8.49 3.70875C9.585 3.23625 10.755 3 12 3C13.245 3 14.415 3.23625 15.51 3.70875C16.605 4.18125 17.5575 4.8225 18.3675 5.6325C19.1775 6.4425 19.8187 7.395 20.2912 8.49C20.7638 9.585 21 10.755 21 12C21 13.245 20.7638 14.415 20.2912 15.51C19.8187 16.605 19.1775 17.5575 18.3675 18.3675C17.5575 19.1775 16.605 19.8187 15.51 20.2912C14.415 20.7638 13.245 21 12 21ZM12 19.2C13.995 19.2 15.6938 18.4987 17.0962 17.0962C18.4987 15.6938 19.2 13.995 19.2 12C19.2 10.005 18.4987 8.30625 17.0962 6.90375C15.6938 5.50125 13.995 4.8 12 4.8C10.005 4.8 8.30625 5.50125 6.90375 6.90375C5.50125 8.30625 4.8 10.005 4.8 12C4.8 13.995 5.50125 15.6938 6.90375 17.0962C8.30625 18.4987 10.005 19.2 12 19.2Z"
                              fill="#5A5A5A"
                            />
                          </g>
                        </svg>
                      </div>

                      <div className="flex flex-col ml-2">
                        {props?.schedules?.map((item: any) => {
                          return (
                            <div key={item?._key}>
                              <div>
                                <span className="text-base text-[#5A5A5A] font-semibold leading-6 mb-1">
                                  {item?.days}
                                </span>
                                <span className="text-base text-[#5A5A5A] font-normal leading-6 ml-1 mb-1">
                                  {item?.startTime}
                                  {' - '}
                                </span>
                                <span className="text-base text-[#5A5A5A] font-normal leading-6  mb-1">
                                  {item?.endTime}
                                </span>
                              </div>
                            </div>
                          )
                        })}
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2 min-h-[360px] ">
            {/* <iframe
              className="w-full md:min-h-[525px] min-h-[360px]"
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyCgyqBZmQ5Au6uieeYTlt5eF2E5tKaaPtY
                    &q=${props?.items[0]?.name}&zoom=16`}
            ></iframe> */}
            <GoogleMapComponent positionsList={positions} />
          </div>
        </div>
      </div>
    </>
  )
}

export default SpecialistCentre
