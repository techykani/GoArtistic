import React, { useEffect, useState } from 'react'
import { JobListingItem } from './jobListingItem'

export const JobListingData: React.FC<any> = ({ contactList, filters, getJobCount }) => {
  const [showData, setShowData] = useState(contactList)
  const filterData = () => {
    let filteredList = [...contactList]

    // Filter the list based on selectedType
    if (filters.selectedType === 'Singapore') {
      filteredList = filteredList.filter((item) => item.location === 'Singapore')
    } else if (filters.selectedType === 'Malaysia') {
      filteredList = filteredList.filter((item) => item.location === 'Malaysia')
    }
    setShowData(filteredList)
  }

  useEffect(() => {
    filterData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [contactList, filters])

  useEffect(() => {
    getJobCount(showData.length)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [showData])

  return (
    <>
      <div className="flex flex-col gap-8 md:gap-12">
        <div className="w-full grid grid-cols-1 sm2:grid-cols-2 xl3:grid-cols-5 gap-6">
          {/* card */}
          {showData?.map((props: any, idx: any) => (
            <JobListingItem key={idx} props={props} />
          ))}
        </div>
      </div>
    </>
  )
}
