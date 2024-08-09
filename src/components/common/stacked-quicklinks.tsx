import Link from 'next/link'
import React from 'react'
import { useRouter } from 'next/router'

export const StackedQuickLinks: React.FC<Point> = ({ link, shortDes }: Point) => {
  const router = useRouter()
  return (
    <Link href={link?.href ?? router.route}>
      <div className="relative p-6 transition-all duration-150 bg-white border-b rounded-lg border-copper-50 md:px-8 lg:px-6 xl:px-8 hover:cursor-pointer md:hover:shadow-point group hover:z-30 active:bg-neutral-5">
        <span className="block pb-1 font-medium transition-all duration-150 text-head-4 text-copper-500 md:text-neutral-900 md:group-hover:text-copper-500">
          {link?.text}
        </span>
        <span className="block text-body-sm text-neutral-600">{shortDes}</span>
      </div>
    </Link>
  )
}
