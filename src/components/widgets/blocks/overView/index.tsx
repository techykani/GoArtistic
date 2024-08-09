import Title from '@/components/widgets/shared/title'
import { RefObject } from 'react'

export interface OverviewComponentProps {
  title: string
  description: string
  theme: 'light' | 'dark'
  headingRef?: RefObject<HTMLHeadingElement>
  contentWidth: string
}

const OverView = ({
  title,
  description,
  theme,
  headingRef,
  contentWidth,
}: OverviewComponentProps) => {
  return (
    <div className="px-6 md:px-[71px]">
      <div ref={headingRef} className={`${contentWidth} mx-auto`}>
        <div className="max-w-[808px] mx-auto flex flex-col gap-2 md:gap-4">
          {title && (
            <Title
              headingType="h2"
              className={`text-center font-montserrat ${theme == 'dark' && "!font-semibold"}`}
              theme={theme}
              tagline={title}
            />
          )}
          {description && (
            <p
              className={`${theme == 'dark' ? 'text-[#FBFBFB]' : 'text-[#5A5A5A]'
                } text-[16px] leading-[24px] text-center`}
            >
              {description}
            </p>
          )}
        </div>
      </div>
    </div>
  )
}

export default OverView
