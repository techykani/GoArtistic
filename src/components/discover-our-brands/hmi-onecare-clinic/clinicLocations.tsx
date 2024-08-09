import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'
import { PortableText } from '@/sanity'
import GoogleMapComponent from '@/components/common/GoogleMap'
import { Button, LinkAngleRight } from '@/components/ui'

const ClinicLocationsList: React.FC<any> = ({ clinics, props }) => {
  const [locationList, setlocationlist] = useState(clinics)

  const headingRef = useRef<HTMLHeadingElement>(null)

  console.log('location list ', locationList)

  const positions = locationList.map(
    ({
      name,
      latitude,
      longitude,
      address,
      slug,
      description,
    }: {
      name: string
      latitude: number
      longitude: number
      address: string
      slug: any
      description: string
    }) => ({
      locationName: name,
      latitude: latitude,
      longitude: longitude,
      address: address,
      slug: slug,
      description: description,
    }),
  )

  return (
    <main className="w-full">
      <section className="md:px-[71px] md:py-[80px]">
        <div className="container mx-auto flex flex-col gap-8 md:gap-9">
          <div className="flex flex-col md:flex-row gap-4 md:gap-[129px] px-6 pt-8 md:px-0 md:py-0">
            <h2 className="text-[#0957CB] text-[26px] md:text-[32px] font-bold font-montserrat leading-[38px] tracking-[0.32px] md:w-[392px]">
              {props?.title}
            </h2>
            <div className="text-[#6E6E6E] text-base leading-[24px] md:w-[391px]">
              <PortableText blocks={props?.description} />
              <div className="w-full flex justify-center">
                <button className="w-full inline-block text-base leading-[20px] text-[#6E6E6E] py-3 rounded-lg align-baseline font-semibold ">
                  <LinkAngleRight
                    href={props?.link?.href}
                    color="black"
                    gtag_event="select_content"
                    gtag_content_name={props?.description}
                    gtag_content_type={props?.title}
                    gtag_cta_button={props?.link?.text}
                  >
                    {props?.link?.text}
                  </LinkAngleRight>
                </button>
              </div>
            </div>
          </div>
          <GoogleMapComponent positionsList={positions} />
        </div>
      </section>
    </main>
  )
}

export default ClinicLocationsList
