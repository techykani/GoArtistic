import { useWindowSize } from '@/lib/hooks'
import { useState } from 'react'
import { JobListingData } from './jobListingData'
import Title from '../widgets/shared/title'
import { ScreeningTab } from '../health-screening/screeningList/screeningTab'
const options = ['All', 'Singapore', 'Malaysia']
export interface JobFilters {
  selectedValue?: {
    job: string
    employement: string
    location: string
    brand: string
  }
}

export const JobListing: React.FC<any> = ({ title, contact }) => {
  const [jobCount, setJobCount] = useState(0)
  const [sliderPosition, setSliderPosition] = useState(0)
  const [selectedIndex, setSelectedIndex] = useState<number>(0)
  const [filters, setFilters] = useState<any>({
    selectedType: options[0],
  })
  const getFilteredJobsNumber = (jobCount: number) => {
    setJobCount(jobCount)
  }
  return (
    <div className="w-full px-6 md:px-[71px] py-[48px] md:py-[80px] bg-[#F1F6FF]">
      <div className="container mx-auto flex flex-col gap-[24px] md:gap-[8px]">
        <Title headingType="h2" tagline={title} theme="light" />
        <p className="text-[#6E6E6E] text-[20px] md:text-[16px] font-normal font-montserrat">
          Reach out to our brands here.
        </p>

        {/* heading */}
        {/* <h1 className="text-primary-blue mb-8 md:mb-0 text-[28px] md:text-[36px] font-semibold leading-[36px] md:leading-[44px] tracking-[-0.28px] md:tracking-[-0.36px]">
          {title}
        </h1> */}

        {/* filter */}
        {/* lists section */}
        <div className="w-full mx-auto md:pt-[36px]">
          {/* card */}
          <JobListingData
            contactList={contact}
            filters={filters}
            getJobCount={getFilteredJobsNumber}
          />
        </div>
      </div>
    </div>
  )
}
