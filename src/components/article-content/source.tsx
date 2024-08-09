import { serializers } from '@/lib/blockContent'
import { PortableText } from '@/sanity'
import Link from 'next/link'
import { useState } from 'react'
import ReactPortableText from '../widgets/shared/reactPortableText'

export const Source: React.FC<any> = ({ sourceTitle, source }) => {
  const [hideSource, setHideSource] = useState(true)
  return (
    <>
      <div className=" py-[64px] md:py-[48px] px-6">
        <div className="max-w-[808px] mx-auto flex flex-col gap-6 md:gap-8">
          <div
            onClick={() => setHideSource(!hideSource)}
            className="w-full flex justify-between cursor-pointer"
          >
            <p className="text-[#3C3C3C] text-[20px] font-semibold leading-[24px]">
              {sourceTitle}
            </p>
            {hideSource && (
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M15 12.5L10 7.5L5 12.5" stroke="#969696" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            )}
            {!hideSource && (
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M5 7.5L10 12.5L15 7.5" stroke="#969696" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            )}
          </div>
          {hideSource && (
            <ul className="w-full article-source">
              <li className="w-full text-[14px] leading-[20px] text-grey-dark">
                <ReactPortableText content={source} />
              </li>
            </ul>
          )}
        </div>
      </div>
    </>
  )
}
