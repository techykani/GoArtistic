import Title from '../widgets/shared/title'

import { TabView, TabPanel } from 'primereact/tabview'
import { useState } from 'react'
import clsx from 'clsx'

export const TreatmentCostEstimation: React.FC<any> = ({ title, tagline, tabs }) => {
  const [activeIndex, setActiveIndex] = useState(0)

  console.log(tabs)

  return (
    <div className="py-10 sm:py-20">
      <div className="container mx-auto">
        <div className="max-w-[800px] mx-auto text-center mb-6 px-6">
          <Title headingType="h2" className="mb-4" theme="light" tagline={title} />
          <p className="text-[#6E6E6E] text-base">{tagline}</p>
        </div>

        <div className="max-w-[1100px] mx-auto">
          <TabView
            scrollable
            activeIndex={activeIndex}
            onTabChange={(e: any) => {
              setActiveIndex(e.index)
            }}
            className="cc-tab"
          >
            {tabs?.map((tab: any, index: any) => {
              return (
                <TabPanel key={index} header={<div>{tab?.tabName}</div>}>
                  <div className="pl-6 sm:px-16 my-5">
                    {tab?.table && (
                      <div className="cc-table cc-rounded">
                        <table>
                          <thead>
                            {tab?.table?.rows.map((row: any, rowNum: any, index: number) => {
                              if (rowNum === 0)
                                return (
                                  <tr key={row._key}>
                                    {row.cells.map((cell: any, cellNum: any) => (
                                      <th key={cellNum}>{cell}</th>
                                    ))}
                                  </tr>
                                )

                              return null
                            })}
                          </thead>

                          <tbody>
                            {tab?.table?.rows.map((row: any, rowNum: any, index: number) => {
                              if (rowNum !== 0)
                                return (
                                  <tr key={row._key}>
                                    {row.cells.map((cell: any, cellNum: any) => (
                                      <td className="min-w-[200px] sm:min-w-[190px]" key={cellNum}>
                                        {cell}
                                      </td>
                                    ))}
                                  </tr>
                                )

                              return null
                            })}
                          </tbody>
                        </table>
                      </div>
                    )}
                  </div>
                </TabPanel>
              )
            })}
          </TabView>
        </div>
      </div>
    </div>
  )
}
