import { serializers } from '@/lib/blockContent'
import { PortableText, imageUrlBuilder } from '@/sanity'
import clsx from 'clsx'
import Image from 'next/image'
import { SanityImg } from 'sanity-react-extra'

export const Table: React.FC<any> = ({ firstColumnStyle, table }) => {
  return (
    <div className="">
      {table && (
        <div className="w-full flex flex-col md:flex-row gap-6  max-w-[1014px] mx-auto mb-8 md:mb-12 overflow-scroll md:overflow-visible slider-body px-6">
          <table className="overflow-hidden w-full">
            <tbody className="article-parent-selector">
              {table?.rows.map((row: any, rowNum: any) => (
                <tr key={row._key} className='border border-b-grey-2'>
                  {row.cells.map((cell: any, cellNum: any) => (
                    <td
                      key={cellNum}
                      className={clsx(
                        'py-6 px-6 w-1/5',
                        rowNum == 0
                          ? 'text-primary-blue  leading-[20px] border-b-2 border-[#004E89] bg-[#F3F3F3] font-semibold text-center'
                          : 'text-[#292929] border-t-[1px] border-t-[#E6E6E6] bg-[#FBFBFB] text-center',
                      )}
                    >
                      {firstColumnStyle && cellNum == 0 && rowNum != 0 ? (
                        <p
                          className={clsx(
                            'px-2 py-2 rounded-[4px] text-grey-dark text-[16px] font-normal leading-[20px] w-fit ',
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
    </div>
  )
}
