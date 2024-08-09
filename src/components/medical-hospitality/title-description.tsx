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
    <section className="bg-primary-blue px-6 md:px-[71px] py-[32px] md:py-[36px] flex flex-col gap-2 md:gap-4">
      <h2 className="text-light-neutral font-montserrat text-[26px] md:text-[32px] text-center font-semibold leading-[32px] md:leading-[38px] tracking-[0.32] max-w-[808px] mx-auto">
        {title}
      </h2>
      <p className="text-light-neutral text-base md:text-[16px] font-normal leading-[24px] md:leading-[24px] text-center max-w-[808px] mx-auto">
        <PortableText blocks={description} />
      </p>
    </section>
  )
}
