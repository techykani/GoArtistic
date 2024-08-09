import React from 'react'
import clsx from 'clsx'

export const DownArrow = ({ className, color }: { className: string; color?: string }) => {
  return (
    <svg
      width="6"
      height="4"
      viewBox="0 0 6 4"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={clsx(className)}
    >
      <path
        d="M2.80117 3.91176C2.91813 4.02941 3.08187 4.02941 3.19883 3.91176L5.91228 1.15882C6.02924 1.04118 6.02924 0.852941 5.91228 0.758824L5.74854 0.594118C5.63158 0.476471 5.46784 0.476471 5.35088 0.594118L3.0117 2.99412L0.649123 0.570588C0.532164 0.476471 0.368421 0.476471 0.251462 0.570588L0.0877193 0.758824C-0.0292398 0.852941 -0.0292398 1.04118 0.0877193 1.15882L2.80117 3.91176Z"
        fill={color ? color : '#212932'}
      />
    </svg>
  )
}
