import React, { useState } from 'react'
import { CorporateTabContent } from './corporateTabContent'
import { LinkSections } from './linkSections'

interface TabContentProps {
  selectedOption: any
  selectedIndex: number
  classnameValue?: string
}

export const InspirationTabContent: React.FC<TabContentProps> = ({
  selectedOption: { links, singleImageQuickLink },
  classnameValue
}) => {
  return (
    <>
    {links &&
     <LinkSections links={links} />
    }
      {singleImageQuickLink.map((option: any, idx: any) =>
          <CorporateTabContent options={option} links={links} key={idx} classnameValue={classnameValue}/>
        )}
    </>
  )
}
