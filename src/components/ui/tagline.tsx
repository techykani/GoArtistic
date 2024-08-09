import clsx from 'clsx'
import React from 'react'

export const Tagline: React.FC<{ className?: string; children: React.ReactNode }> = ({
  children,
  className,
}) => {
  return (
    <h3
      className={clsx(
        className,
        'text-res-head-2 md:text-head-2 font-medium text-neutral-900 max-w-3xl mx-auto',
      )}
    >
      {children}
    </h3>
  )
}
