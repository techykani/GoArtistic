import React from 'react'
import clsx from 'clsx'

export const FilterIcon = ({ className }: { className: string }) => {
  return (
    <svg
      width="13"
      height="13"
      viewBox="0 0 13 13"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={clsx(className)}
    >
      <path
        d="M12.4141 0H1.56251C1.04689 0 0.789075 0.609375 1.16408 0.960938L5.50001 5.29688V10.125C5.50001 10.3125 5.57033 10.5 5.73439 10.5938L7.60939 11.9062C7.98439 12.1641 8.50001 11.9062 8.50001 11.4375V5.29688L12.8125 0.960938C13.1875 0.609375 12.9297 0 12.4141 0Z"
        fill="#A78148"
      />
    </svg>
  )
}
