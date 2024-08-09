import { PortableText } from '@/sanity'
import { useState } from 'react'

export interface PageOverview {
  theme: string
  align: string
  title: string
  description: string
}

export default function PageOverview({ theme, align, title, description }: PageOverview) {
  return (
    <div
      className={`${
        theme === 'light' ? 'bg-aqua-light' : 'bg-secondary-deep'
      } px-6 md:px-[71px] py-[48px] md:py-[64px]`}
    >
      <div className="container mx-auto flex flex-col gap-4">
        <h2
          className={`w-full text-off-white text-[36px] md:text-[48px] font-semibold leading-[44px] md:leading-[56px] tracking-[-0.36px] md:tracking-[-0.48px] ${
            align === 'center' ? 'text-center' : 'text-left'
          }`}
        >
          {title}
        </h2>
        <div
          className={`w-full text-grey-1 text-[16px] md:text-[20px] leading-[24px] md:leading-[28px] max-w-[808px] ${
            align === 'center' ? 'text-center mx-auto' : 'text-left'
          }`}
        >
          <PortableText blocks={description} />
        </div>
      </div>
    </div>
  )
}
