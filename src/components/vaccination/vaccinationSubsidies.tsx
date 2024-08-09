import { useEffect, useRef, useState } from 'react'
import FeeCaps from './feeCaps'
import { PortableText } from '@/sanity'
import Title from '../widgets/shared/title'
import { useWindowSize } from '@/lib/hooks'
import OverView from '../widgets/blocks/overView'
import { GTAEvent } from '@/lib/gtag'

const categories: string[] = ['Adult (NAIS)', 'Children (NCIS)']

export const VaccinationSubsidies = ({ sectionName, sectionTagline, options }: any) => {
  const [selectCategory, setSelectCategory] = useState(options[0].entryName)
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
      <div className="py-[48px] md:py-[80px] bg-[#FBFBFB] flex flex-col gap-6 md:gap-12">
        <OverView
          title={sectionName}
          description={sectionTagline}
          theme="light"
          headingRef={headingRef}
          contentWidth="max-w-[1016px]"
        />
        <div className="flex gap-3 justify-center ">
          {options?.map((category: any) => (
            <p
              key={category?.entryName}
              onClick={() => {
                GTAEvent('view_content', {
                  content_name: sectionName,
                  content_type: category?.entryName,
                })
                setSelectCategory(category?.entryName)
              }}
              className={`${
                selectCategory === category?.entryName
                  ? 'bg-[#0084C6] text-off-white'
                  : 'text-[#0746A2] bg-[#D6E7FF] hover:bg-[#0084C6] hover:text-off-white'
              } py-2 px-6 text-[16px] rounded-full font-semibold leading-5 whitespace-nowrap cursor-pointer transition-all duration-150 first:ml-6 md:first:ml-0 last:mr-6 md:last:mr-0`}
            >
              {category?.entryName}
            </p>
          ))}
        </div>
        {/* table */}
        {selectCategory === options[0].entryName ? (
          <div className="w-full flex flex-col gap-6">
            <div
              style={{ paddingLeft: sliderPosition }}
              className="overflow-scroll slider-body pr-6 md:pr-[71px]"
            >
              <table className="w-[1016px] vac_table">
                <tr className="bg-[#F3F3F3] border-b-2  border-primary-blue ">
                  {options[0].cards[0]?.table?.rows[0]?.cells.map((tablehead: string) => (
                    <th
                      key={tablehead}
                      className="w-1/4 max-w-[254px] text-base text-semibold leading-[20px] text-primary-blue p-6 text-center border border-[#E6E6E6] "
                    >
                      {tablehead}
                    </th>
                  ))}
                </tr>
                <tr className="">
                  <td className="p-6 font-semibold border border-[#E6E6E6]">
                    {options[0].cards[0]?.table?.rows[1]?.cells[0]}
                  </td>
                  <td colSpan={2} className="p-6 text-center border border-[#E6E6E6]">
                    {options[0].cards[0]?.table?.rows[1]?.cells[1]}
                  </td>
                  <td className="p-6 text-center border border-[#E6E6E6]">
                    {options[0].cards[0]?.table?.rows[1]?.cells[2]}
                  </td>
                </tr>
                <tr className="">
                  <td className=" p-6 font-semibold border border-[#E6E6E6]">
                    {options[0].cards[0]?.table?.rows[2]?.cells[0]}
                  </td>
                  <td colSpan={3} className=" p-6 text-center border border-[#E6E6E6]">
                    {options[0].cards[0]?.table?.rows[2]?.cells[1]}
                  </td>
                </tr>
                <tr className="">
                  <td className=" p-6 font-semibold border border-[#E6E6E6]">
                    {options[0].cards[0]?.table?.rows[3]?.cells[0]}
                  </td>
                  <td colSpan={2} className="p-6 text-center border border-[#E6E6E6]">
                    {options[0].cards[0]?.table?.rows[3]?.cells[1]}
                  </td>
                  <td className="p-6 text-center border border-[#E6E6E6]">
                    {options[0].cards[0]?.table?.rows[3]?.cells[3]}
                  </td>
                </tr>
                <tr className="">
                  <td className=" p-6 font-semibold border border-[#E6E6E6]">
                    {options[0].cards[0]?.table?.rows[4]?.cells[0]}
                  </td>
                  <td colSpan={3} className=" p-6 text-center border border-[#E6E6E6]">
                    {options[0].cards[0]?.table?.rows[4]?.cells[1]}
                  </td>
                </tr>
                <tr className="">
                  <td className=" p-6 font-semibold border border-[#E6E6E6]">
                    {options[0].cards[0]?.table?.rows[5]?.cells[0]}
                  </td>
                  <td colSpan={1} className=" p-6 text-center border border-[#E6E6E6]">
                    {options[0].cards[0]?.table?.rows[5]?.cells[1]}
                  </td>
                  <td colSpan={2} className=" p-6 text-center border border-[#E6E6E6]"></td>
                </tr>
                <tr className="">
                  <td className=" p-6 font-semibold border border-[#E6E6E6]">
                    {options[0].cards[0]?.table?.rows[6]?.cells[0]}
                  </td>
                  <td colSpan={3} className=" p-6 text-center border border-[#E6E6E6]">
                    {options[0].cards[0]?.table?.rows[6]?.cells[1]}
                  </td>
                </tr>
                <tr className="">
                  <td className=" p-6 font-semibold border border-[#E6E6E6]">
                    {options[0].cards[0]?.table?.rows[7]?.cells[0]}
                  </td>
                  <td colSpan={3} className=" p-6 text-center border border-[#E6E6E6]">
                    {options[0].cards[0]?.table?.rows[7]?.cells[1]}
                  </td>
                </tr>
                <tr className="">
                  <td className=" p-6 font-semibold border border-[#E6E6E6]">
                    {options[0].cards[0]?.table?.rows[8]?.cells[0]}
                  </td>
                  <td colSpan={3} className=" p-6 text-center border border-[#E6E6E6]">
                    {options[0].cards[0]?.table?.rows[8]?.cells[1]}
                  </td>
                </tr>
              </table>
            </div>
            <div style={{ paddingLeft: sliderPosition, paddingRight: sliderPosition }}>
              <div className="w-full max-w-[1016px] mx-auto">
                {options[0].cards[0]?.description.map((notes: string, i: number) => (
                  <div key={i} className="text-grey-8 text-base leading-[24px]">
                    <PortableText blocks={notes} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        ) : (
          <>
            <div className="flex flex-col gap-[10px] md:gap-6">
              <div
                style={{ paddingLeft: sliderPosition }}
                className=" overflow-scroll slider-body pr-6 md:pr-[71px]"
              >
                <table className="w-[1014px]">
                  {/* heading */}
                  <tr className="bg-light-neutral-2 border-b-2 border-primary-blue">
                    {/* age */}
                    <th className="w-[180px] text-base text-semibold leading-[20px] text-primary-blue p-6 text-center border border-[#E6E6E6]">
                      {options[1].cards[0]?.table?.rows[0]?.cells[0]}
                    </th>
                    {/* vaccine */}
                    <th className="w-[418px] text-base text-semibold  leading-[20px] text-primary-blue p-6 text-center border-t border-[#E6E6E6]">
                      {options[1].cards[0]?.table?.rows[0]?.cells[1]}
                    </th>
                    {/* 2024 */}
                    <th className="w-[418px] text-base text-semibold  leading-[20px] text-primary-blue p-6 border-t border-r border-[#E6E6E6]">
                      {options[1].cards[0]?.table?.rows[0]?.cells[2]}
                    </th>
                  </tr>
                  {/* birth */}
                  <tr className="border border-b-grey-2">
                    <td className="p-6 font-semibold border border-[#E6E6E6]">
                      {/* Birth */}
                      {options[1].cards[0]?.table?.rows[1]?.cells[0]}
                    </td>
                    <td colSpan={2} className="p-6 text-center border border-[#E6E6E6]">
                      <div className="flex justify-between items-center">
                        <p className="text-grey-8 text-base">
                          {/* Bacillus Calmette-Guérin (BCG) */}
                          {options[1].cards[0]?.table?.rows[1]?.cells[1]}
                        </p>
                        <p className="text-grey-dark text-[14px] font-semibold leading-[20px] px-2 py-[2px] bg-[#FFEDC4] rounded flex items-center">
                          {/* dose 1 */}
                          {options[1].cards[0]?.table?.rows[1]?.cells[2]}
                        </p>
                      </div>

                      <div className="my-[10px] h-[1px] bg-grey-3" />

                      <div className="flex justify-between">
                        <p className="text-grey-8 text-base">
                          {/* Hepatitis B (HepB) */}
                          {options[1].cards[0]?.table?.rows[2]?.cells[1]}
                        </p>
                        <p className="text-grey-dark text-[14px] font-semibold leading-[20px] px-2 py-[2px] bg-[#FFEDC4] rounded flex items-center">
                          {/* Dose 1 */}
                          {options[1].cards[0]?.table?.rows[2]?.cells[2]}
                        </p>
                      </div>
                    </td>
                  </tr>
                  {/* 2 months */}
                  <tr className="border border-b-grey-2">
                    <td className="p-6 font-semibold border border-[#E6E6E6]">
                      {/* 2 months */}
                      {options[1].cards[0]?.table?.rows[3]?.cells[0]}
                    </td>
                    <td colSpan={2} className="p-6 text-center border border-[#E6E6E6]">
                      <div className="flex justify-between items-center">
                        <p className="text-grey-8 text-base">
                          {/* Hepatitis B (HepB) */}
                          {options[1].cards[0]?.table?.rows[3]?.cells[1]}
                        </p>
                        <p className="text-grey-dark text-[14px] font-semibold leading-[20px] px-2 py-[2px] bg-[#FEDC89] rounded flex items-center">
                          {/* Dose 2 */}
                          {options[1].cards[0]?.table?.rows[3]?.cells[2]}
                        </p>
                      </div>
                      <div className="my-[10px] h-[1px] bg-grey-3" />
                      <div className="flex justify-between">
                        <p className="text-grey-8 text-base text-left">
                          {/* Diphtheria, tetanus and acellular pertussis (paediatric) (DTaP) */}
                          {options[1].cards[0]?.table?.rows[4]?.cells[1]}
                        </p>
                        <p className="text-grey-dark text-[14px] font-semibold leading-[20px] px-2 py-[2px] bg-[#FFEDC4] rounded flex items-center">
                          {/* dose 1 */}
                          {options[1].cards[0]?.table?.rows[4]?.cells[2]}
                        </p>
                      </div>
                      <div className="my-[10px] h-[1px] bg-grey-3" />
                      <div className="flex justify-between">
                        <p className="text-grey-8 text-base">
                          {/* Inactivated poliovirus (IPV) */}
                          {options[1].cards[0]?.table?.rows[5]?.cells[1]}
                        </p>
                        <p className="text-grey-dark text-[14px] font-semibold leading-[20px] px-2 py-[2px] bg-[#FFEDC4] rounded flex items-center">
                          {/* Dose 1 */}
                          {options[1].cards[0]?.table?.rows[5]?.cells[2]}
                        </p>
                      </div>
                      <div className="my-[10px] h-[1px] bg-grey-3" />
                      <div className="flex justify-between">
                        <p className="text-grey-8 text-base">
                          {/* Haemophilus influenzae type b (Hib) */}
                          {options[1].cards[0]?.table?.rows[6]?.cells[1]}
                        </p>
                        <p className="text-grey-dark text-[14px] font-semibold leading-[20px] px-2 py-[2px] bg-[#FFEDC4] rounded flex items-center">
                          {/* Dose 1 */}
                          {options[1].cards[0]?.table?.rows[6]?.cells[2]}
                        </p>
                      </div>
                    </td>
                  </tr>
                  {/* 4 months */}
                  <tr className="border border-b-grey-2">
                    <td className="p-6 font-semibold border border-[#E6E6E6]">
                      {/* 4 months */}
                      {options[1].cards[0]?.table?.rows[7]?.cells[0]}
                    </td>
                    <td colSpan={2} className="p-6 text-center border border-[#E6E6E6]">
                      <div className="flex justify-between items-center">
                        <p className="text-grey-8 text-base text-left">
                          {/* Diphtheria, tetanus and acellular pertussis (paediatric) (DTaP) */}
                          {options[1].cards[0]?.table?.rows[7]?.cells[1]}
                        </p>
                        <p className="text-grey-dark text-[14px] font-semibold leading-[20px] px-2 py-[2px] bg-[#FEDC89] rounded flex items-center">
                          {/* Dose 2 */}
                          {options[1].cards[0]?.table?.rows[7]?.cells[2]}
                        </p>
                      </div>
                      <div className="my-[10px] h-[1px] bg-grey-3" />
                      <div className="flex justify-between items-center">
                        <p className="text-grey-8 text-base text-left">
                          {/* Inactivated poliovirus (IPV)*/}
                          {options[1].cards[0]?.table?.rows[8]?.cells[1]}
                        </p>
                        <p className="text-grey-dark text-[14px] font-semibold leading-[20px] px-2 py-[2px] bg-[#FEDC89] rounded flex items-center">
                          {/* Dose 2 */}
                          {options[1].cards[0]?.table?.rows[8]?.cells[2]}
                        </p>
                      </div>
                      <div className="my-[10px] h-[1px] bg-grey-3" />
                      <div className="flex justify-between items-center">
                        <p className="text-grey-8 text-base text-left">
                          {/* Haemophilus influenzae type b (Hib)*/}
                          {options[1].cards[0]?.table?.rows[9]?.cells[1]}
                        </p>
                        <p className="text-grey-dark text-[14px] font-semibold leading-[20px] px-2 py-[2px] bg-[#FEDC89] rounded flex items-center">
                          {/* Dose 2 */}
                          {options[1].cards[0]?.table?.rows[9]?.cells[2]}
                        </p>
                      </div>
                      <div className="my-[10px] h-[1px] bg-grey-3" />
                      <div className="flex justify-between items-center">
                        <p className="text-grey-8 text-base text-left">
                          {/* Haemophilus influenzae type b (Hib)*/}
                          {options[1].cards[0]?.table?.rows[10]?.cells[1]}
                        </p>
                        <p className="text-grey-dark text-[14px] font-semibold leading-[20px] px-2 py-[2px] bg-[#FFEDC4] rounded flex items-center">
                          {/* Dose 1 */}
                          {options[1].cards[0]?.table?.rows[10]?.cells[2]}
                        </p>
                      </div>
                    </td>
                  </tr>
                  {/* 6 MONTHS */}
                  <tr className="border border-b-grey-2">
                    <td className="p-6 font-semibold border border-[#E6E6E6]">
                      {/* 6 months */}
                      {options[1].cards[0]?.table?.rows[11]?.cells[0]}
                    </td>
                    <td colSpan={2} className="p-6 text-center border border-[#E6E6E6]">
                      <div className="flex justify-between items-center">
                        <p className="text-grey-8 text-base text-left">
                          {/* Hepatitis B (HepB)*/}
                          {options[1].cards[0]?.table?.rows[11]?.cells[1]}
                        </p>
                        <p className="text-grey-dark text-[14px] font-semibold leading-[20px] px-2 py-[2px] bg-[#FDCB4E] rounded flex items-center">
                          {/* Dose 3 */}
                          {options[1].cards[0]?.table?.rows[11]?.cells[2]}
                        </p>
                      </div>
                      <div className="my-[10px] h-[1px] bg-grey-3" />
                      <div className="flex justify-between items-center">
                        <p className="text-grey-8 text-base text-left">
                          {/* Diphtheria, tetanus and acellular pertussis (paediatric) (DTaP)*/}
                          {options[1].cards[0]?.table?.rows[12]?.cells[1]}
                        </p>
                        <p className="text-grey-dark text-[14px] font-semibold leading-[20px] px-2 py-[2px] bg-[#FDCB4E] rounded flex items-center">
                          {/* Dose 3 */}
                          {options[1].cards[0]?.table?.rows[12]?.cells[2]}
                        </p>
                      </div>
                      <div className="my-[10px] h-[1px] bg-grey-3" />
                      <div className="flex justify-between items-center">
                        <p className="text-grey-8 text-base text-left">
                          {/* Inactivated poliovirus (IPV)*/}
                          {options[1].cards[0]?.table?.rows[13]?.cells[1]}
                        </p>
                        <p className="text-grey-dark text-[14px] font-semibold leading-[20px] px-2 py-[2px] bg-[#FDCB4E] rounded flex items-center">
                          {/* Dose 3 */}
                          {options[1].cards[0]?.table?.rows[13]?.cells[2]}
                        </p>
                      </div>
                      <div className="my-[10px] h-[1px] bg-grey-3" />
                      <div className="flex justify-between items-center">
                        <p className="text-grey-8 text-base text-left">
                          {/* Haemophilus influenzae type b (Hib)*/}
                          {options[1].cards[0]?.table?.rows[14]?.cells[1]}
                        </p>
                        <p className="text-grey-dark text-[14px] font-semibold leading-[20px] px-2 py-[2px] bg-[#FDCB4E] rounded flex items-center">
                          {/* Dose 3 */}
                          {options[1].cards[0]?.table?.rows[14]?.cells[2]}
                        </p>
                      </div>
                      <div className="my-[10px] h-[1px] bg-grey-3" />
                      <div className="flex justify-between items-center">
                        <p className="text-grey-8 text-base text-left">
                          {/* Pneumococcal conjugate (PCV10 or PCV13)*/}
                          {options[1].cards[0]?.table?.rows[15]?.cells[1]}
                        </p>
                        <p className="text-grey-dark text-[14px] font-semibold leading-[20px] px-2 py-[2px] bg-[#FEDC89] rounded flex items-center">
                          {/* Dose 2 */}
                          {options[1].cards[0]?.table?.rows[15]?.cells[2]}
                        </p>
                      </div>
                    </td>
                  </tr>
                  {/* 12 MONTHS */}
                  <tr className="border border-b-grey-2">
                    <td className="p-6 font-semibold border border-[#E6E6E6]">
                      {/* 12 months */}
                      {options[1].cards[0]?.table?.rows[16]?.cells[0]}
                    </td>
                    <td colSpan={2} className="p-6 text-center border border-[#E6E6E6]">
                      <div className="flex justify-between items-center">
                        <p className="text-grey-8 text-base text-left">
                          {/* Pneumococcal conjugate (PCV10 or PCV13)*/}
                          {options[1].cards[0]?.table?.rows[16]?.cells[1]}
                        </p>
                        <p className="text-grey-dark text-[14px] font-semibold leading-[20px] px-2 py-[2px] bg-[#FFB280] rounded flex items-center">
                          {/* bOOSTER 1 */}
                          {options[1].cards[0]?.table?.rows[16]?.cells[2]}
                        </p>
                      </div>
                      <div className="my-[10px] h-[1px] bg-grey-3" />
                      <div className="flex justify-between items-center">
                        <p className="text-grey-8 text-base text-left">
                          {/*Measles, mumps and rubella (MMR)*/}
                          {options[1].cards[0]?.table?.rows[17]?.cells[1]}
                        </p>
                        <p className="text-grey-dark text-[14px] font-semibold leading-[20px] px-2 py-[2px] bg-[#FFEDC4] rounded flex items-center">
                          {/* Dose 1 */}
                          {options[1].cards[0]?.table?.rows[17]?.cells[2]}
                        </p>
                      </div>
                      <div className="my-[10px] h-[1px] bg-grey-3" />
                      <div className="flex justify-between items-center">
                        <p className="text-grey-8 text-base text-left">
                          {/* Varicella (VAR)*/}
                          {options[1].cards[0]?.table?.rows[18]?.cells[1]}
                        </p>
                        <p className="text-grey-dark text-[14px] font-semibold leading-[20px] px-2 py-[2px] bg-[#FFEDC4] rounded flex items-center">
                          {/* Dose 1 */}
                          {options[1].cards[0]?.table?.rows[18]?.cells[2]}
                        </p>
                      </div>
                    </td>
                  </tr>
                  {/* 15 MONTHS */}
                  <tr className="border border-b-grey-2">
                    <td className="p-6 font-semibold border border-[#E6E6E6]">
                      {/* 15 months */}
                      {options[1].cards[0]?.table?.rows[19]?.cells[0]}
                    </td>
                    <td colSpan={2} className="p-6 text-center border border-[#E6E6E6]">
                      <div className="flex justify-between items-center">
                        <p className="text-grey-8 text-base text-left">
                          {/* Measles, mumps and rubella (MMR)*/}
                          {options[1].cards[0]?.table?.rows[19]?.cells[1]}
                        </p>
                        <p className="text-grey-dark text-[14px] font-semibold leading-[20px] px-2 py-[2px] bg-[#FEDC89] rounded flex items-center">
                          {/* DOSE 2 */}
                          {options[1].cards[0]?.table?.rows[19]?.cells[2]}
                        </p>
                      </div>
                      <div className="my-[10px] h-[1px] bg-grey-3" />
                      <div className="flex justify-between items-center">
                        <p className="text-grey-8 text-base text-left">
                          {/*Measles, mumps and rubella (MMR)*/}
                          {options[1].cards[0]?.table?.rows[20]?.cells[1]}
                        </p>
                        <p className="text-grey-dark text-[14px] font-semibold leading-[20px] px-2 py-[2px] bg-[#FEDC89] rounded flex items-center">
                          {/* Dose 2 */}
                          {options[1].cards[0]?.table?.rows[20]?.cells[2]}
                        </p>
                      </div>
                    </td>
                  </tr>
                  {/* 18 MONTHS */}
                  <tr className="border border-b-grey-2">
                    <td className="p-6 font-semibold border border-[#E6E6E6]">
                      {/* 18 months */}
                      {options[1].cards[0]?.table?.rows[21]?.cells[0]}
                    </td>
                    <td colSpan={2} className="p-6 text-center border border-[#E6E6E6]">
                      <div className="flex justify-between items-center">
                        <p className="text-grey-8 text-base text-left">
                          {/* Diphtheria, tetanus and acellular pertussis (paediatric) (DTaP)*/}
                          {options[1].cards[0]?.table?.rows[21]?.cells[1]}
                        </p>
                        <p className="text-grey-dark text-[14px] font-semibold leading-[20px] px-2 py-[2px] bg-[#FFB280] rounded flex items-center">
                          {/* BOOSTER 1 */}
                          {options[1].cards[0]?.table?.rows[21]?.cells[2]}
                        </p>
                      </div>
                      <div className="my-[10px] h-[1px] bg-grey-3" />
                      <div className="flex justify-between items-center">
                        <p className="text-grey-8 text-base text-left">
                          {/*Inactivated poliovirus (IPV)*/}
                          {options[1].cards[0]?.table?.rows[22]?.cells[1]}
                        </p>
                        <p className="text-grey-dark text-[14px] font-semibold leading-[20px] px-2 py-[2px] bg-[#FFB280] rounded flex items-center">
                          {/* BOOSTER 1 */}
                          {options[1].cards[0]?.table?.rows[22]?.cells[2]}
                        </p>
                      </div>
                      <div className="my-[10px] h-[1px] bg-grey-3" />
                      <div className="flex justify-between items-center">
                        <p className="text-grey-8 text-base text-left">
                          {/*Haemophilus influenzae type b (Hib)*/}
                          {options[1].cards[0]?.table?.rows[23]?.cells[1]}
                        </p>
                        <p className="text-grey-dark text-[14px] font-semibold leading-[20px] px-2 py-[2px] bg-[#FFB280] rounded flex items-center">
                          {/* BOOSTER 1 */}
                          {options[1].cards[0]?.table?.rows[23]?.cells[2]}
                        </p>
                      </div>
                    </td>
                  </tr>
                  {/* 10 - 11 YEARS */}
                  <tr className="border border-b-grey-2">
                    <td className="p-6 font-semibold border border-[#E6E6E6]">
                      {/* 10 - 11 YEARS */}
                      {options[1].cards[0]?.table?.rows[24]?.cells[0]}
                    </td>
                    <td colSpan={2} className="p-6 text-center border border-[#E6E6E6]">
                      <div className="flex justify-between items-center">
                        <p className="text-grey-8 text-base text-left">
                          {/* Tetanus, reduced diphtheria and acellular pertussis (Tdap)*/}
                          {options[1].cards[0]?.table?.rows[24]?.cells[1]}
                        </p>
                        <p className="text-grey-dark text-[14px] font-semibold leading-[20px] px-2 py-[2px] bg-[#FF8C40] rounded flex items-center">
                          {/* BOOSTER 2 */}
                          {options[1].cards[0]?.table?.rows[24]?.cells[2]}
                        </p>
                      </div>
                      <div className="my-[10px] h-[1px] bg-grey-3" />
                      <div className="flex justify-between items-center">
                        <p className="text-grey-8 text-base text-left">
                          {/*Measles, mumps and rubella (MMR)*/}
                          {options[1].cards[0]?.table?.rows[25]?.cells[1]}
                        </p>
                        <p className="text-grey-dark text-[14px] font-semibold leading-[20px] px-2 py-[2px] bg-[#FF8C40] rounded flex items-center">
                          {/* BOOSTER 2 */}
                          {options[1].cards[0]?.table?.rows[25]?.cells[2]}
                        </p>
                      </div>
                    </td>
                  </tr>
                  {/* 12 - 13 YEARS */}
                  <tr className="border border-b-grey-2">
                    <td className="p-6 font-semibold border border-[#E6E6E6]">
                      {/* 12 - 13 YEARS */}
                      {options[1].cards[0]?.table?.rows[26]?.cells[0]}
                    </td>
                    <td colSpan={2} className="p-6 text-center border border-[#E6E6E6]">
                      <div className="flex justify-between items-center">
                        <p className="text-grey-8 text-base text-left">
                          {/* Human papillomavirus (HPV2 or HPV4)*/}
                          {options[1].cards[0]?.table?.rows[26]?.cells[1]}
                        </p>
                        <p className="text-grey-dark text-[14px] font-semibold leading-[20px] px-2 py-[2px] bg-[#FFEDC4] rounded flex items-center">
                          {/* BOOSTER 2 */}
                          {options[1].cards[0]?.table?.rows[26]?.cells[2]}
                        </p>
                      </div>
                    </td>
                  </tr>
                  {/* 13 - 14 YEARS */}
                  <tr className="border border-b-grey-2">
                    <td className="p-6 font-semibold border border-[#E6E6E6]">
                      {/* 13 - 14 YEARS */}
                      {options[1].cards[0]?.table?.rows[27]?.cells[0]}
                    </td>
                    <td colSpan={2} className="p-6 text-center border border-[#E6E6E6]">
                      <div className="flex justify-between items-center">
                        <p className="text-grey-8 text-base text-left">
                          {/* Human papillomavirus (HPV2 or HPV4)*/}
                          {options[1].cards[0]?.table?.rows[27]?.cells[1]}
                        </p>
                        <p className="text-grey-dark text-[14px] font-semibold leading-[20px] px-2 py-[2px] bg-[#FEDC89] rounded flex items-center">
                          {/* BOOSTER 2 */}
                          {options[1].cards[0]?.table?.rows[27]?.cells[2]}
                        </p>
                      </div>
                    </td>
                  </tr>
                </table>
              </div>
              <div
                style={{ paddingLeft: sliderPosition, paddingRight: sliderPosition }}
                className=""
              >
                <ul className="w-full max-w-[1016px] mx-auto pr-6 list-disc pl-6 ">
                  {options[1].cards[0]?.description.map((notes: string, i: number) => (
                    <li key={i} className="text-grey-8 text-base leading-[24px]">
                      <PortableText blocks={notes} />
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="">
              <h3 className="text-grey-dark text-[20px] md:text-[26px] font-semibold leading-[24px] md:leading-[32px] text-center mb-[24px] px-6 md:px-[71px] font-montserrat">
                {options[1].cards[1]?.title}
              </h3>
              <div
                style={{ paddingLeft: sliderPosition }}
                className=" overflow-scroll slider-body pr-6 md:pr-[71px]"
              >
                <table className="w-[1016px]">
                  <tr className="bg-light-neutral-2 border-b-2 border-primary-blue">
                    <th className="w-[163px] text-base text-semibold leading-[20px] text-primary-blue p-6 text-center border border-[#E6E6E6]">
                      {options[1].cards[1]?.table?.rows[0]?.cells[0]}
                    </th>
                    <th className="w-[121px] text-base text-semibold  leading-[20px] text-primary-blue p-6 text-center border border-[#E6E6E6]">
                      {options[1].cards[1]?.table?.rows[0]?.cells[1]}
                    </th>
                    <th className="w-[121px] text-base text-semibold  leading-[20px] text-primary-blue p-6 border border-[#E6E6E6]">
                      {options[1].cards[1]?.table?.rows[0]?.cells[2]}
                    </th>
                    <th className="w-[121px] text-base text-semibold  leading-[20px] text-primary-blue p-6 border border-[#E6E6E6]">
                      {options[1].cards[1]?.table?.rows[0]?.cells[3]}
                    </th>
                    <th className="w-[121px] text-base text-semibold  leading-[20px] text-primary-blue p-6 border border-[#E6E6E6]">
                      {options[1].cards[1]?.table?.rows[0]?.cells[4]}
                    </th>
                    <th className="w-[121px] text-base text-semibold  leading-[20px] text-primary-blue p-6 border border-[#E6E6E6]">
                      {options[1].cards[1]?.table?.rows[0]?.cells[5]}
                    </th>
                    <th className="w-[121px] text-base text-semibold  leading-[20px] text-primary-blue p-6 border border-[#E6E6E6]">
                      {options[1].cards[1]?.table?.rows[0]?.cells[6]}
                    </th>
                    <th className="w-[121px] text-base text-semibold  leading-[20px] text-primary-blue p-6 border border-[#E6E6E6]">
                      {options[1].cards[1]?.table?.rows[0]?.cells[7]}
                    </th>
                  </tr>
                  <tr className="border border-b-grey-2">
                    <td className="p-6 font-semibold border border-[#E6E6E6]">
                      {options[1].cards[1]?.table?.rows[1]?.cells[0]}
                    </td>
                    <td colSpan={2} className="p-6 text-base  border border-[#E6E6E6] text-grey-8">
                      {options[1].cards[1]?.table?.rows[1]?.cells[1]}
                    </td>
                    <td colSpan={5} className="p-6 text-base  border border-[#E6E6E6] text-grey-8">
                      {options[1].cards[1]?.table?.rows[1]?.cells[3]}
                    </td>
                  </tr>
                  <tr className="border border-b-grey-2">
                    <td className=" p-6 font-semibold border border-[#E6E6E6] ">
                      {options[1].cards[1]?.table?.rows[2]?.cells[0]}
                    </td>
                    <td className=" p-6 text-center border border-[#E6E6E6]"></td>
                    <td colSpan={6} className="p-6 text-base border border-[#E6E6E6] text-grey-8">
                      {options[1].cards[1]?.table?.rows[2]?.cells[2]}
                    </td>
                  </tr>
                </table>
              </div>
            </div>
          </>
        )}
      </div>
      <FeeCaps options={options} sliderPosition={sliderPosition} />
    </>
  )
}
