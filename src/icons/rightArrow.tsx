import clsx from 'clsx'
import React from 'react'

interface rightArrowProps {
  className?: string
  color?: string
  width?: number
  height?: number
}

export const RightArrow: React.FC<rightArrowProps> = ({
  className,
  color = '#A78148',
  width = 25,
  height = 14,
}) => {
  return (
    // <svg
    //   className={clsx(className)}
    //   width={width}
    //   height={height}
    //   viewBox="0 0 25 14"
    //   fill="none"
    //   xmlns="http://www.w3.org/2000/svg"
    // >
    //   <path
    //     d="M17.0269 0.435375L16.654 0.808208C16.4069 1.05532 16.4069 1.456 16.654 1.70316L21.0799 6.10353H1.25769C0.90822 6.10353 0.624878 6.38688 0.624878 6.73635V7.26369C0.624878 7.61316 0.90822 7.8965 1.25769 7.8965H21.0799L16.654 12.2969C16.4069 12.544 16.4069 12.9447 16.654 13.1918L17.0269 13.5647C17.274 13.8118 17.6747 13.8118 17.9218 13.5647L24.0646 7.44747C24.3117 7.20036 24.3117 6.79968 24.0646 6.55252L17.9218 0.435375C17.6747 0.188208 17.274 0.188208 17.0269 0.435375Z"
    //     fill={color}
    //   />
    // </svg>
    <svg xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 44 44" fill="none">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M17.037 13.3703C17.7529 12.6544 18.9137 12.6544 19.6297 13.3703L26.963 20.7037C27.679 21.4196 27.679 22.5804 26.963 23.2964L19.6297 30.6297C18.9137 31.3457 17.7529 31.3457 17.037 30.6297C16.321 29.9138 16.321 28.753 17.037 28.037L23.0739 22L17.037 15.9631C16.321 15.2471 16.321 14.0863 17.037 13.3703Z" fill="#3C3C3C" />
    </svg>
  )
}
