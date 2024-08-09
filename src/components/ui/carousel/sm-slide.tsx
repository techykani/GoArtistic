import { imageUrlBuilder } from '@/sanity'
import clsx from 'clsx'
import { format } from 'date-fns'
import Link from 'next/link'
import { SanityImg } from 'sanity-react-extra'
import { Button } from '@/components/ui'
import { ListingPageListItemsSchedule } from '@/components/listing-and-details-pages/listing-pages-items-schedule'

interface SlideProps extends CarouselDataProps {
  index: number
  ctaTitle?: string
  endDate?: any
}

export const SmSlide: React.FC<SlideProps> = ({
  image,
  title,
  type,
  shortDes,
  startsAt,
  endsAt,
  ctaTitle,
  slug,
  path,
  endDate,
}) => {
  return (
    <div className="relative grid h-full bg-transparent rounded-l grid-cols-13">
      <div className="shadow-point absolute w-full h-full bg-white z-[-1] origin-bottom-right rounded-lg" />
      <div
        className={clsx(
          'col-span-13 lg:col-span-7 flex flex-col justify-center items-start space-y-4 my-5 mr-5 lg:ml-0 ml-5',
        )}
      >
        <div className="flex w-full ">
          <div className="flex flex-col flex-1">
            {type && (
              <span className="mb-3 font-semibold text-body-sm text-neutral-600">
                {type === 'Centres of Excellence' ? 'Centre of Excellence' : type}
              </span>
            )}

            <a className="font-medium text-copper-500 text-head-3">
              {title?.length > 22 ? `${title?.slice(0, 20)}...` : title}
            </a>
            <p className="visible block mt-1 text-neutral-700 text-body-sm">
              {shortDes && shortDes?.length > 116 ? `${shortDes.slice(0, 110)} ...` : shortDes}
            </p>
          </div>
          {image && (
            <div>
              <SanityImg
                className="object-cover !rounded-lg"
                image={image}
                builder={imageUrlBuilder}
                width={100}
                alt={title}
              />
            </div>
          )}
        </div>
        <span className="text-sm text-neutral-700">
          {/* {readTime && (
            <div className="flex space-x-2">
              <img src="/icons/clock.svg" alt="clock image" />
              <span>{readTime}</span>
            </div>
          )} */}
          {startsAt && endsAt && (
            <div className="flex items-center space-x-2 text-body-sm">
              <svg
                width="11"
                height="12"
                viewBox="0 0 11 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3.55212 6.75C3.69275 6.75 3.83337 6.63281 3.83337 6.46875V5.53125C3.83337 5.39062 3.69275 5.25 3.55212 5.25H2.61462C2.45056 5.25 2.33337 5.39062 2.33337 5.53125V6.46875C2.33337 6.63281 2.45056 6.75 2.61462 6.75H3.55212ZM6.08337 6.46875V5.53125C6.08337 5.39062 5.94275 5.25 5.80212 5.25H4.86462C4.70056 5.25 4.58337 5.39062 4.58337 5.53125V6.46875C4.58337 6.63281 4.70056 6.75 4.86462 6.75H5.80212C5.94275 6.75 6.08337 6.63281 6.08337 6.46875ZM8.33337 6.46875V5.53125C8.33337 5.39062 8.19275 5.25 8.05212 5.25H7.11462C6.95056 5.25 6.83337 5.39062 6.83337 5.53125V6.46875C6.83337 6.63281 6.95056 6.75 7.11462 6.75H8.05212C8.19275 6.75 8.33337 6.63281 8.33337 6.46875ZM6.08337 8.71875V7.78125C6.08337 7.64062 5.94275 7.5 5.80212 7.5H4.86462C4.70056 7.5 4.58337 7.64062 4.58337 7.78125V8.71875C4.58337 8.88281 4.70056 9 4.86462 9H5.80212C5.94275 9 6.08337 8.88281 6.08337 8.71875ZM3.83337 8.71875V7.78125C3.83337 7.64062 3.69275 7.5 3.55212 7.5H2.61462C2.45056 7.5 2.33337 7.64062 2.33337 7.78125V8.71875C2.33337 8.88281 2.45056 9 2.61462 9H3.55212C3.69275 9 3.83337 8.88281 3.83337 8.71875ZM8.33337 8.71875V7.78125C8.33337 7.64062 8.19275 7.5 8.05212 7.5H7.11462C6.95056 7.5 6.83337 7.64062 6.83337 7.78125V8.71875C6.83337 8.88281 6.95056 9 7.11462 9H8.05212C8.19275 9 8.33337 8.88281 8.33337 8.71875ZM10.5834 2.625C10.5834 2.01562 10.0677 1.5 9.45837 1.5H8.33337V0.28125C8.33337 0.140625 8.19275 0 8.05212 0H7.11462C6.95056 0 6.83337 0.140625 6.83337 0.28125V1.5H3.83337V0.28125C3.83337 0.140625 3.69275 0 3.55212 0H2.61462C2.45056 0 2.33337 0.140625 2.33337 0.28125V1.5H1.20837C0.575562 1.5 0.083374 2.01562 0.083374 2.625V10.875C0.083374 11.5078 0.575562 12 1.20837 12H9.45837C10.0677 12 10.5834 11.5078 10.5834 10.875V2.625ZM9.45837 10.7344C9.45837 10.8281 9.38806 10.875 9.31775 10.875H1.349C1.25525 10.875 1.20837 10.8281 1.20837 10.7344V3.75H9.45837V10.7344Z"
                  fill="#A78148"
                />
              </svg>
              <div className="">
                <b>FROM {format(new Date(startsAt), 'd LLLL YYY')}</b>
                <span> untill {format(new Date(endsAt), 'd LLLL YYY')} </span>
              </div>
            </div>
          )}
          <ListingPageListItemsSchedule endDate={endDate} />
        </span>

        {slug && (
          <Link href={`${path}/${slug.current}`} passHref>
            <Button
              size="sm"
              variant="solid"
              color="primary"
              className="px-4 py-3 font-semibold text-button-sm lg:mb-6"
            >
              {ctaTitle}
            </Button>
          </Link>
        )}
      </div>
    </div>
  )
}
