import React, { useEffect, useRef, useState } from 'react'
import HubSpotForm from './hubSpotForm'
import { PortableText } from '@/sanity'
import clsx from 'clsx'
import Title from '../widgets/shared/title'
import { useWindowSize } from '@/lib/hooks'

const FeeCaps = ({ options }: any) => {
  const adultImmunisation = options[0].cards[1]
  const childImmunization = options[0].cards[2]
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
            <Title
              headingType="h2"
              className="text-center"
              tagline={adultImmunisation?.title}
              theme='light'
            />
            <p className=" text-grey-dark text-[20px] md:text-[26px] font-semibold leading-[24px] md:leading-[32px] px-[24px] md:px-[71px] text-center font-montserrat">
              {adultImmunisation?.tagline}
            </p>
          </div>
        </div>
        {adultImmunisation?.table && (
          <div
            style={{ paddingLeft: sliderPosition, paddingRight: sliderPosition }}
            className="overflow-scroll slider-body "
          >
            <table className="w-[700px] md:container mx-auto">
              <tbody className="article-parent-selector ">
                {adultImmunisation?.table?.rows.map((row: any, rowNum: any) => (
                  <tr key={row._key}>
                    {row.cells.map((cell: any, cellNum: any) => (
                      <td
                        key={cellNum}
                        className={clsx(
                          'py-6 px-6 w-1/5',
                          rowNum == 0 && cellNum == 0 && 'text-start',
                          rowNum == 0
                            ? 'text-[#FEFEFE]  leading-[20px] border-[1px] border-[#E6E6E6]  bg-[#004e89] font-semibold text-center'
                            : 'text-[#292929] border-[1px] border-[#E6E6E6] bg-[#FBFBFB] text-center',
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
            <PortableText blocks={adultImmunisation.description} />
          </div>
        </div>

        <p
          style={{ paddingLeft: sliderPosition, paddingRight: sliderPosition }}
          className="md:pt-[32px] text-grey-dark text-[20px] md:text-[26px] font-semibold leading-[24px] md:leading-[32px] text-center font-montserrat"
        >
          {childImmunization.title}
        </p>
        {childImmunization?.table && (
          <div
            style={{ paddingLeft: sliderPosition, paddingRight: sliderPosition }}
            className=" overflow-scroll slider-body pr-6 md:pr-[71px]"
          >
            <table className="w-[600px] md:container mx-auto">
              <tbody className="article-parent-selector ">
                {childImmunization?.table?.rows.map((row: any, rowNum: any) => (
                  <tr key={row._key}>
                    {row.cells.map((cell: any, cellNum: any) => (
                      <td
                        key={cellNum}
                        className={clsx(
                          'py-6 px-6 w-1/6',
                          rowNum == 0 && cellNum == 0 && 'text-start',
                          rowNum == 0
                            ? 'text-[#FEFEFE]  leading-[20px] border-[1px] border-[#E6E6E6]  bg-[#004e89] font-semibold text-center'
                            : 'text-[#292929] border-[1px] border-[#E6E6E6] bg-[#FBFBFB] text-center',
                        )}
                      >
                        {cellNum == 0 && rowNum != 0 ? (
                          <p
                            className={clsx(
                              'rounded-[4px] text-grey-dark text-[16px] font-normal leading-[20px] w-fit ',
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
        <div style={{ paddingLeft: sliderPosition, paddingRight: sliderPosition }}>
          {' '}
          <div className="w-full container mx-auto ">
            <div className="text-grey-8 text-base leading-[24px] mb-5">
              <PortableText blocks={childImmunization?.description[0]} />
            </div>
            <ul className="list-disc pl-6">
              <li className="text-grey-8 text-base leading-[24px]">
                <PortableText blocks={childImmunization?.description[1]} />
              </li>
              <li className="text-grey-8 text-base leading-[24px]">
                <PortableText blocks={childImmunization?.description[2]} />
              </li>
            </ul>
          </div>
        </div>
      </div>


    </>
  )
}

export default FeeCaps
