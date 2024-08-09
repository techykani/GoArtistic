import clsx from 'clsx'
import React from 'react'

interface CompactBlockProps {
  className?: string
  children: React.ReactNode
  defaultPadding?: boolean
  boxShadow?: boolean
  id?: string
  homePage?: boolean
}

export const CompactSectionBlock: React.FC<CompactBlockProps> = ({
  className,
  children,
  defaultPadding = true,
  boxShadow = true,
  id,
  homePage,
}) => {
  return (
    <section
      className={clsx(
        homePage ? 'lg:pb-20 pb-10  pt-10' : 'lg:pt-10 pt-7',
        id === 'other-hospitals' && ' scroll-mt-20',
        'xl:mx-0 mx-6',
      )}
      id={id}
    >
      <div
        className={clsx(
          className,
          'container lg:max-w-4xl xl:max-w-5xl 2xl:max-w-6xl relative z-40 bg-white overflow-hidden',
          boxShadow && 'shadow-point rounded-lg',
          defaultPadding && 'lg:px-7 px-3 lg:py-10 py-5',
        )}
      >
        {children}
      </div>
    </section>
  )
}
