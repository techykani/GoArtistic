import { imageUrlBuilder } from '@/sanity'
import { SanityImg } from 'sanity-react-extra'
import EyeBrew from '../widgets/shared/eyeBrew'
import Title from '../widgets/shared/title'
import GoogleMapComponent from '@/components/common/GoogleMap'
import Link from 'next/link'

const Address = ({ title, description, items, location, socialMedia, caption }: any) => {
  console.log('location', location)
  const positions: any = [
    {
      locationName: location,
      latitude: 1.335976442976967,
      longitude: 103.74432160585707,
      address: location,
    },
  ]

  return (
    <section className="bg-linear-grad">
      <section className="w-full lg:flex lg:h-[569px]">
        <div className="lg:w-1/2 px-6 md:px-[71px] md:py-[48px] pt-[48px] pb-[32px] flex items-center justify-start md:justify-end">
          <div className="flex flex-col gap-4 md:gap-6">
            <div className="md:max-w-[541px] w-full flex flex-col gap-4 md:gap-6 justify-center">
              <div className="flex flex-col gap-2">
                <EyeBrew theme="dark" title={title} />
                <Title theme="dark" headingType="h2" tagline={description} />
              </div>
              <ul className="flex flex-col gap-2">
                {items?.map((item: any) => {
                  const hrefValue =
                    (item?.type === 'email' && `mailto:${item?.name}`) ||
                    (item?.type === 'tel' && `tel:${item?.name}`) || (item?.type === 'location' && `https://www.google.com/maps?q=${item?.name}`) ||
                    '#'

                  return (
                    <li key={item?._key}>
                      <a
                        href={hrefValue}
                        className={`flex gap-2 ${item?.type === 'satelliteClinic' ? 'flex-col' : ''
                          }`}
                      >
                        {item?.icon && item?.type !== 'satelliteClinic' && (
                          <SanityImg
                            builder={imageUrlBuilder}
                            height={24}
                            width={24}
                            image={item?.icon}
                            alt="hmi"
                            loading="eager"
                            className="w-6 h-6"
                          />
                        )}
                        {item?.type === 'feedback' && (
                          <div className="flex md:flex-row flex-col">
                            <span className="pt-[2px] text-base text-off-white font-semibold leading-5 pr-1">
                              Feedback:
                            </span>

                            <span className="text-off-white leading-[24px] hover:underline">
                              {item?.name}
                            </span>
                          </div>
                        )}
                        {item?.type === 'generalEnqueries' && (
                          <div className="flex md:flex-row flex-col">
                            <span className="pt-[2px] text-base text-off-white font-semibold leading-5 pr-1">
                              General Enqueries:
                            </span>
                            <span className="text-off-white leading-[24px] hover:underline">
                              {item?.name}
                            </span>
                          </div>
                        )}
                        {item?.type === 'satelliteClinic' && (
                          <div className="mt-4 mb-2">
                            <span className="text-[20px] font-semibold leading-6 font-montserrat text-off-white">
                              Satellite Clinic
                            </span>

                            <div className="flex gap-2 pt-2">
                              <SanityImg
                                builder={imageUrlBuilder}
                                height={24}
                                width={24}
                                image={item?.icon}
                                alt="hmi"
                                loading="eager"
                                className="w-6 h-6"
                              />

                              <span className="text-off-white leading-[24px] hover:underline">
                                {item?.name}
                              </span>
                            </div>
                          </div>
                        )}
                        {item?.type !== 'satelliteClinic' &&
                          item?.type !== 'feedback' &&
                          item?.type !== 'generalEnqueries' && (
                            <span className="text-off-white leading-[24px] hover:underline">
                              {item?.name}
                            </span>
                          )}
                      </a>
                    </li>
                  )
                })}
              </ul>
              <p className="text-[#FEFEFE] text-[14px] leading-[20px]">{caption}</p>
            </div>
            {socialMedia && (
              <div className="flex gap-12">
                {socialMedia.map((data: any, i: any) => (
                  <Link
                    href={data?.cta}
                    className="w-[24px] h-[24px]"
                    key={i}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <SanityImg
                      builder={imageUrlBuilder}
                      height={24}
                      width={24}
                      image={data}
                      alt={data?.alt}
                      loading="eager"
                      className="w-full h-auto aspect-square"
                    />
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>
        <div className="lg:w-1/2 h-full min-h-[360px] max-h-[360px]">
          {/* <iframe
            className="w-full h-full min-h-[360px]"
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
            src={`https://www.google.com/maps/embed/v1/place?key=${process.env.NEXT_PUBLIC_MAPS_EMBED_API_KEY}
                  &q=${location}&zoom=16`}
          ></iframe> */}
          <GoogleMapComponent positionsList={positions} />
        </div>
      </section>
    </section>
  )
}

export default Address
