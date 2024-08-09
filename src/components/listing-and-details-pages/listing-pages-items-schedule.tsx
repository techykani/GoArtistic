import React from 'react'
import { format } from 'date-fns'
import { Calender } from '@/icons/calender'

interface ListingPageListItemsScheduleProps {
  endDate?: string
}

const convertEndDateToMonthAndYear = (endDate: string) => {
  const date = new Date(endDate)

  return format(date, 'dd MMM, yyy')
}

export const ListingPageListItemsSchedule: React.FC<ListingPageListItemsScheduleProps> = ({
  endDate,
}) => {
  return (
    <>
      {endDate ? (
        <div className="text-body-mn text-neutral-700 flex space-x-1 ">
          <Calender className="h-4 w-4" />
          <div>
            <p className="text-xs leading-5 font-bold">
              Available until {convertEndDateToMonthAndYear(endDate)}
            </p>
          </div>
        </div>
      ) : (
        ''
      )}
    </>
  )
}
