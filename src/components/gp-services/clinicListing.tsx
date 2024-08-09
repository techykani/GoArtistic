import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'
import { TabFilter } from '../clinics/filters/tabFilter'
import { PopupFilter } from '../clinics/popupFilter'
import { ClinicListingData } from '../clinics/clinicListingData'
import { PortableText } from '@/sanity'
import GoogleMapComponent from '../common/GoogleMap'
import { useWindowSize } from '@/lib/hooks'
import BtnWithArrow from '@/components/widgets/shared/buttons/button/btnWithArrow'

export interface ClinicFilters {
  selectedType: string
  selectedValue?: {
    center: string
  }
}

export const ClinicListing: React.FC<any> = ({ filterDropdownOptions, clinics, cta }) => {
  const [selectedIndex, setSelectedIndex] = useState<number>(0)
  const [locationList, setlocationlist] = useState(clinics)
  // const [filters, setFilters] = useState<ClinicFilters>({
  //   // selectedType: filterDropdownOptions?.specialistFilter[0],
  //   // selectedValue: {
  //   //   center: '',
  //   // },
  // })
  const [ClinicCount, setClinicCount] = useState(0)
  const [sliderPosition, setSliderPosition] = useState(0)
  const headingRef = useRef<HTMLHeadingElement>(null)
  const windowWidth = useWindowSize()?.width ?? 0
  useEffect(() => {
    if (headingRef.current) {
      const rect = headingRef.current.getBoundingClientRect()
      const leftPosition = rect.left
      setSliderPosition(leftPosition)
    }
  }, [windowWidth])

  const getFilteredClinicNumber = (ClinicCount: number) => {
    setClinicCount(ClinicCount)
  }
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
    <main className="w-full bg-[#003964]">
      {/* notification section */}

      <section className="px-6 py-8 md:px-[71px] md:py-[80px]">
        <div className="container mx-auto flex flex-col gap-8 md:gap-12">
          <div className="flex flex-col md:flex-row gap-4 md:gap-[129px]">
            <h2 className="text-off-white text-[28px] md:text-[36px] font-semibold leading-[36px] md:leading-[44px] tracking-[-0.28px] md:tracking-[-0.36px] md:w-[392px]">
              {filterDropdownOptions?.title}
            </h2>
            <div className="text-off-white text-base md:text-[16px] leading-[24px] md:leading-[28px] md:w-[391px]">
              <p>{filterDropdownOptions?.description}</p>
              <BtnWithArrow
                link={cta}
                target={'_self'}
                rel=""
                btnType={'tertiary'}
                arrowVisibility={true}
                theme="dark"
                customStyle="pt-4"
                size="small"
                arrowColor="white"
                gtag_event="select_content"
                gtag_content_name={filterDropdownOptions?.description}
                gtag_content_type={filterDropdownOptions?.title}
                gtag_cta_button={cta}
              />
            </div>
          </div>
          <GoogleMapComponent positionsList={positions} />
        </div>
      </section>
      {/* <section className="flex flex-col gap-8 md:gap-12 pb-12 md:pb-20">
     
       <TabFilter
          options={filterDropdownOptions?.specialistFilter}
          selectedIndex={selectedIndex}
          setSelectedIndex={setSelectedIndex}
          filters={filters}
          setFilters={setFilters}
          sliderPosition={sliderPosition}
        /> *
        <div
          style={{ paddingLeft: sliderPosition, paddingRight: sliderPosition }}
          className="flex flex-col gap-6 md:gap-8"
        >
          <div className="w-full flex flex-col md:flex-row-reverse gap-6 md:gap-8 md:justify-between">
            <div className="flex gap-1 items-center">
         
            </div>
            <div className="text-grey-9 text-base font-semibold leading-[20px]">
              Showing {ClinicCount} clinics
            </div>
          </div>
          <ClinicListingData
            clinicList={clinics}
            filters={filters}
            getClinicCount={getFilteredClinicNumber}
          />
        </div>
      </section> */}
    </main>
  )
}
