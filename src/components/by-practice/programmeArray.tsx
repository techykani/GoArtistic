import Image from 'next/image'
import { LinkArrowUp } from '../ui/link-arrow-up'
import clsx from 'clsx'
import { urlForImage } from '@/studio/lib/image'
import { useWindowSize } from '@/lib/hooks'

export const ProgrammeArray: React.FC<any> = (options) => {
  const windowWidth = useWindowSize()?.width ?? 0
  return (
    <>
      {options?.options?.map((option: any, idx: any) => (
        <div className="w-[148px] pb-2 md:pb-4 md:min-w-[184px] bg-[white] rounded-xl" key={idx}>
          <div className="w-full flex flex-col items-center md:mx-auto">
            {option?.image && (
              <div className="w-[96px] md:w-[150px] md:h-[100px] h-[64px] flex justify-center items-center mx-auto">
                {/* <SanityImg
                builder={imageUrlBuilder}
                image={option?.image}
                alt={option?.image?.alt ?? 'image'}
                loading="eager"
                className="w-full"
              /> */}
                <Image
                  src={urlForImage(option?.image).url()}
                  alt={option?.image?.alt ?? 'image'}
                  loading="lazy"
                  width={150}
                  height={100}
                  className="w-full"
                />
                {/* <Image src="/practice/logos/med.png" height={100} width={100} alt="" /> */}
              </div>
            )}
            <div className="max-w-[96px] md:max-w-[124px] flex justify-center">
              <LinkArrowUp
                href={''}
                className={clsx(
                  'flex text-grey-dark rounded-lg align-baseline font-semibold justify-center items-center transition-colors duration-150 text-[12px] leading-[16px] group md:whitespace-nowrap text-center',
                )}
                color="black"
                gtag_event="select_content"
                gtag_content_name={''}
                gtag_content_type={''}
                gtag_cta_button={option?.entryName?.text}
              >
                {option?.entryName?.text}{' '}
              </LinkArrowUp>
            </div>
          </div>
        </div>
      ))}
    </>
  )
}
