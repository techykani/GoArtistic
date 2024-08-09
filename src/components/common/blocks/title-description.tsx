import { useWindowSize } from '@/lib/hooks'
import { PortableText } from '@/sanity'
import { FaArrowRight } from 'react-icons/fa'
import Link from 'next/link'
import { LinkAngleRight } from '@/components/ui'
import clsx from 'clsx'

export const TitleDescription: React.FC<any> = ({
  title,
  tagline,
  description,
  cta,
  classNameValues,
}) => {
  const windowWidth = useWindowSize()?.width ?? 0

  return (
    <section className="bg-secondary-deep px-6 md:px-[71px] py-[48px] md:py-[64px] flex flex-col gap-4">
      <h2 className="text-off-white text-[36px] md:text-[48px] text-center font-semibold leading-[44px] md:leading-[56px] tracking-[-0.36px] md:tracking-[-0.48px] max-w-[808px] mx-auto">
        {title}
      </h2>
      <p className="text-grey-1 text-base md:text-[20px] font-normal leading-[24px] md:leading-[28px] text-center max-w-[808px] mx-auto">
        <PortableText blocks={description} />
      </p>
    </section>
  )
}
