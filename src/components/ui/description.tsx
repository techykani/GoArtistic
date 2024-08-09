import clsx from 'clsx'
import React from 'react'

export const Description: React.FC<{ className?: string; children: React.ReactNode }> = ({
  children,
  className,
}) => {
  return (
    <p className={clsx(className, 'text-lg pt-2 lg:pt-0 max-w-3xl mx-auto text-body')}>
      {children}
    </p>
  )
}
