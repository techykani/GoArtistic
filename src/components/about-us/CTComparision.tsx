import React, { useEffect, useRef, useState } from 'react'
import { PortableText } from '@/sanity'
import clsx from 'clsx'
import Title from '../widgets/shared/title'
import { useWindowSize } from '@/lib/hooks'

export const CTComparision = ({ title, description, table, importantText }: any) => {
  const [sliderPosition, setSliderPosition] = useState(0)
  const headingRef = useRef<HTMLHeadingElement>(null)
  const windowWidth = useWindowSize()?.width ?? 0
  useEffect(() => {
    if (headingRef.current) {
      const rect = headingRef.current.getBoundingClientRect()
      const leftPosition = rect.left
      setSliderPosition(leftPosition)
    }
  }, [windowWidth])

  return (
    <>
      <div className=" py-[48px] md:py-[80px] bg-[#F1F6FF] flex flex-col gap-6">
        <div className="px-6 md:px-[71px]">
          <div ref={headingRef} className="container mx-auto flex flex-col gap-6">
            <Title headingType="h2" className="text-center" tagline={title} theme="light" />
            <p className=" text-grey-9 text-[16px] leading-[24px] px-[24px] md:px-[71px] text-center">
              {description}
            </p>
          </div>
        </div>
        {table && (
          <div
            style={{ paddingLeft: sliderPosition, paddingRight: sliderPosition }}
            className="overflow-scroll slider-body "
          >
            <table className="w-[700px] md:container mx-auto">
              <tbody className="article-parent-selector ">
                {table?.rows.map((row: any, rowNum: any) => (
                  <tr key={row._key}>
                    {row.cells.map((cell: any, cellNum: any) => (
                      <td
                        key={cellNum}
                        className={clsx(
                          'py-6 px-6 w-1/5',
                          rowNum == 0 && cellNum == 0 && 'text-start',
                          rowNum == 0
                            ? 'text-grey-9 text-base leading-[20px] border-[1px] border-[#E6E6E6]  bg-[#f3f3f3] font-semibold text-center'
                            : 'text-[#292929] text-base border-[1px] border-[#E6E6E6] bg-[#FBFBFB] text-center',
                        )}
                      >
                        {cellNum == 0 && rowNum != 0 ? (
                          <p
                            className={clsx(
                              ' rounded-[4px] text-grey-dark text-[16px] font-normal leading-[20px] w-fit ',
                              rowNum >= 1 ? 'font-semibold text-start' : '',
                            )}
                          >
                            {cell}
                          </p>
                        ) : (
                          cell
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
        <div
          style={{ paddingLeft: sliderPosition, paddingRight: sliderPosition }}
          className="w-full mx-auto "
        >
          <div className="text-grey-8 text-base leading-[24px] pb-8 md:pb-0">
            <PortableText blocks={importantText} />
          </div>
        </div>
      </div>
    </>
  )
}
