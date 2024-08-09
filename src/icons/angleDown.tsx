import React from 'react'
import clsx from 'clsx'

export const AngleDown = ({
  className,
  width = 16,
  height = 16,
}: {
  className: string
  width?: number
  height?: number
}) => {
  return (
    <svg
      width={width}
      height={height}
      className={clsx(className)}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M7.81434 9.92126C7.92355 10.0262 8.07644 10.0262 8.18564 9.92126L11.4181 6.83465C11.5273 6.75066 11.5273 6.58268 11.4181 6.47769L10.9813 6.07874C10.8939 5.97375 10.7192 5.97375 10.61 6.07874L8.01091 8.55643L5.39001 6.07874C5.2808 5.97375 5.12792 5.97375 5.01871 6.07874L4.5819 6.47769C4.47269 6.58268 4.47269 6.75066 4.5819 6.83465L7.81434 9.92126Z" />
    </svg>
  )
}
