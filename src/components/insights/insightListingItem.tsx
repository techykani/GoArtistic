import { useWindowSize } from '@/lib/hooks'
import Link from 'next/link'
import Image from 'next/image'
import { PortableText } from '@/sanity'
import { urlForImage } from '@/studio/lib/image'
import { GTAEvent } from '@/lib/gtag'

export const InsightListingItem: React.FC<any> = ({ _id, props, slug }) => {
  let formattedDate = ' '
  if (props?.publishedAt) {
    const createdAt = new Date(props?.publishedAt)
    if (!isNaN(createdAt.getTime())) {
      // Check if the date is valid
      formattedDate = `${createdAt.toLocaleDateString('en-US', {
        day: '2-digit',
      })} ${createdAt.toLocaleDateString('en-US', {
        month: 'short',
      })}, ${createdAt.toLocaleDateString('en-US', { year: 'numeric' })}`
    }
  }
  const windowWidth = useWindowSize()?.width ?? 0
  const handleButton = (gtag_event: any, listing_name: any, content_name: any) => {
    GTAEvent(gtag_event, {
      listing_name: listing_name !== '' ? listing_name : null,
      content_name: content_name !== '' ? content_name : null,
    })
  }
  return (
    <>
      <Link
        href={`/insights/${props?.slug?.current}`}
        className="w-full"
        onClick={() => handleButton('select_listing', 'Health Screening Packages', props?.title)}
      >
        <div className="w-full h-full rounded-[12px] bg-[white] overflow-hidden shadow-megaMenu border-[1px] border-[#E6E6E6]">
          <div className="w-full relative aspect-[16/9]">
            {props?.primaryImg && (
              <Image
                src={urlForImage(props?.primaryImg).url()}
                width={392}
                height={221}
                alt={props?.primaryImg?.alt}
                className="object-cover w-full aspect-[16/9]"
              />
            )}
            {/* <p className="px-2 h-[24px] bg-ember-100 rounded-l-[4px] absolute top-[16px] right-0 flex justify-center items-center text-grey-dark text-[14px] font-semibold leading-[20px]">
              {props.tag}
            </p> */}
          </div>
          <div className="p-4 md:p-6 flex flex-col gap-1">
            <p className="text-grey-8 text-[14px] leading-[20px]">{formattedDate}</p>
            <h3 className="text-grey-dark text-[16px] font-semibold leading-[20px] truncate-overflow">
              {props.title}
            </h3>

            {/* <h3 className="text-grey-dark text-[16px] font-semibold leading-[20px] ">
                  {title.substring(0, 74) + '...'}
                </h3> */}
          </div>
        </div>
      </Link>
    </>
  )
}
