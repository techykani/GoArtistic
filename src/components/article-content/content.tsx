import { PortableText, imageUrlBuilder } from '@/sanity'
import { serializers } from '@/lib/blockContent'
import { useIntersection } from '@/lib/hooks'
import { useState, useRef, useEffect } from 'react'
import clsx from 'clsx'
import { SanityImg } from 'sanity-react-extra'

export const Content: React.FC<any> = ({
  description1,
  description2,
  description3,
  image1,
  textPara,
  textPara1,
  video,
  videoText,
  paragraph,
  quotes,
  quotesAuthor,
  quotesPosition,
  paragraph2,
  paragraph3,
  paragraph4,
  table,
  imageContent,
  imageHeader,
  imagePara,
  image,
  imageHeader2,
  imagePara2,
  brandsimages,
  podcast,
  firstColumnStyle,
}) => {
  const [play, setPlay] = useState(false)
  const watchonViewRef = useRef(null)
  const sectionOnview = useIntersection(watchonViewRef)

  const vidRef = useRef<HTMLVideoElement | null>(null)

  useEffect(() => {
    !sectionOnview?.isIntersecting && vidRef?.current?.pause()
  }, [sectionOnview?.isIntersecting])

  useEffect(() => {
    try {
      play && vidRef?.current?.play()
    } catch (e) {
      console.log(e)
    }
  }, [play, video])

  return (
    <>
      {/* description section */}
      <div className="bg-light-neutral-2 py-[32px] md:py-[48px] px-6 lg:px-0">
        <ul className="pl-6 max-w-[1008px] mx-auto article-desc">
          {description1 && (
            <li className="text-grey-dark text-base md:text-xl leading-[24px] ;md:leading-[28px] mb-4">
              {description1}
            </li>
          )}
          {description2 && (
            <li className="text-grey-dark text-base md:text-xl leading-[24px] ;md:leading-[28px] mb-4">
              {description2}
            </li>
          )}
          {description3 && (
            <li className="text-grey-dark text-base md:text-xl leading-[24px] ;md:leading-[28px]">
              {description3}
            </li>
          )}
        </ul>
      </div>
      {/* banner image section */}

      {image1 && (
        <div className="max-w-[1012px] mx-auto mt-[48px] px-6 lg:px-0 hidden md:block rounded-2xl overflow-hidden">
          {/* desktop banner */}
          <SanityImg
            builder={imageUrlBuilder}
            image={image1}
            alt={'image'}
            loading="eager"
            className="w-full "
          />
        </div>
      )}

      {/* content */}
      <div className="px-6 bg-[white]">
        {/* text content */}
        <div className="max-w-[808px] mx-auto mb-8 md:mb-12">
          {textPara && (
            <p className="text-base text-grey-dark leading-[24px] py-8 md:py-12">
              <PortableText blocks={textPara} serializers={serializers} />
            </p>
          )}

          {/* video player section */}

          {video && (
            <div className="flex flex-col gap-4 pb-8 md:pb-12 ">
              <div className="w-full h-full aspect-ratio-container rounded-xl overflow-hidden">
                <iframe
                  width="560"
                  height="315"
                  src={`https://www.youtube.com/embed/${video.split('v=')[1]}`}
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  className=""
                ></iframe>
              </div>
              <p className="text-grey-8 text-[14px] leading-[20px]">{videoText}</p>
            </div>
          )}

          {/* text content */}
          {paragraph && <p className="text-base text-grey-dark pb-8 md:pb-12">{paragraph}</p>}

          {/* quote */}
          {quotes && quotesAuthor && quotesPosition && (
            <div className="pl-6 md:pl-0 max-w-[600px] mx-auto flex flex-col gap-4 mb-[32px] md:mb-12">
              <div className="w-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                >
                  <path
                    d="M4.81316 25.6548L7.53937 20.9444C5.47121 20.9444 3.70388 20.2095 2.21857 18.721C0.733255 17.2325 0 15.4614 0 13.3888C0 11.3162 0.752056 9.56392 2.23737 8.09427C3.72268 6.62461 5.49001 5.87094 7.55817 5.87094C9.62632 5.87094 11.3937 6.60576 12.879 8.09427C14.3643 9.58277 15.0975 11.3539 15.0975 13.4265C15.0975 14.1425 15.0035 14.8208 14.8343 15.4237C14.6651 16.0267 14.4019 16.6296 14.0635 17.1948L8.08461 27.5578C7.9342 27.8405 7.70858 28.0666 7.42656 28.2361C7.14454 28.4057 6.82491 28.4999 6.48649 28.4999C5.77203 28.4999 5.22679 28.1796 4.86956 27.5578C4.51234 26.9361 4.49354 26.2954 4.85076 25.6737L4.81316 25.6548ZM21.7344 25.6548L24.4606 20.9444C22.3925 20.9444 20.6251 20.2095 19.1398 18.721C17.6545 17.2325 16.9213 15.4614 16.9213 13.3888C16.9213 11.3162 17.6545 9.54508 19.1398 8.05658C20.6251 6.56808 22.3925 5.83325 24.4606 5.83325C26.5288 5.83325 28.2961 6.56808 29.7814 8.05658C31.2667 9.54508 32 11.3162 32 13.3888C32 14.1048 31.906 14.7831 31.7368 15.386C31.5676 15.989 31.3043 16.5919 30.9659 17.1572L24.9871 27.5201C24.8367 27.8028 24.611 28.0289 24.329 28.1985C24.047 28.368 23.7274 28.4622 23.389 28.4622C22.6745 28.4622 22.1293 28.1419 21.772 27.5201C21.4148 26.8984 21.396 26.2577 21.7532 25.636L21.7344 25.6548Z"
                    fill="#00A854"
                  />
                </svg>
              </div>
              <p className="text-base md:text-[20px] text-grey-dark leading-[24px] md:leading-[28px]">
                {quotes}
              </p>
              <div className="w-full">
                <p className="text-primary-blue text-base font-semibold">{quotesAuthor}</p>
                <p className="text-[14px] leading-5 text-grey-8">{quotesPosition}</p>
              </div>
            </div>
          )}
          {paragraph2 && (
            <p className="text-base text-grey-dark leading-[24px]">
              <PortableText blocks={paragraph2} serializers={serializers} />
            </p>
          )}
        </div>
        {/* table section */}
        {/* {table && (
          <div className="w-full flex flex-col md:flex-row gap-6  max-w-[1014px] mx-auto mb-8 md:mb-12 rounded-xl overflow-scroll md:overflow-visible slider-body">
            <table className="rounded-lg overflow-hidden w-full">
              <tbody className="article-parent-selector">
                {table?.rows.map((row: any, rowNum: any) => (
                  <tr key={row._key}>
                    {row.cells.map((cell: any, cellNum: any) => (
                      <td
                        key={cellNum}
                        className={clsx(
                          'py-5 px-6 w-1/5',
                          rowNum == 0
                            ? 'text-primary-blue text-body-sm border-b-2 border-neutral-50 bg-neutral-5'
                            : 'text-neutral-700 text-base',
                          cellNum == row.cells.length - 1 && rowNum == 0 ? 'w-[32.29%] ' : '',
                          cellNum == row.cells.length - 1 && rowNum != 0 ? '' : 'font-medium',
                        )}
                      >
                        {cellNum == 0 && rowNum != 0 ? <p className="">{cell}</p> : cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )} */}

        {table && (
          <div className="w-full flex flex-col md:flex-row gap-6  max-w-[1014px] mx-auto mb-8 md:mb-12 rounded-lg border-[1px] border-b-[#E6E6E6] overflow-scroll md:overflow-visible slider-body ">
            <table className=" w-full ">
              <tbody className="article-parent-selector ">
                {table?.rows.map((row: any, rowNum: any) => (
                  <tr key={row._key}>
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

        <div className="max-w-[808px] mx-auto ">
          {image && imageContent && (
            <div className="w-full flex flex-col gap-4 mb-8 md:mb-12">
              {/* image */}
              <SanityImg
                builder={imageUrlBuilder}
                image={image}
                alt={'image'}
                loading="eager"
                className="w-full rounded-xl overflow-hidden"
              />
              <p className="text-grey-8 text-[14px] leading-5">{imageContent}</p>
            </div>
          )}
          <div className="flex flex-col gap-4 md:gap-6 pt-8 md:pt-0">
            {imageHeader && (
              <p className="text-primary-blue text-[20px] font-semibold leading-[28px]">
                {imageHeader}
              </p>
            )}
            {imagePara && (
              <p className="text-base text-grey-dark pb-8 md:pb-12">
                <PortableText blocks={imagePara} serializers={serializers} />
              </p>
            )}
          </div>
        </div>
        {/* cards */}
        {brandsimages && (
          <div className="w-full flex flex-col md:flex-row gap-6 max-w-[1012px] mx-auto pb-[48px]">
            {brandsimages?.map((data: any, index: any) => (
              <div
                key={data?.title}
                className="md:w-1/3 p-6 rounded-[16px] border border-grey-2  min-h-[448px] flex flex-col justify-between"
              >
                <div className="w-full">
                  <p className="text-primary-green-1 text-[14px] font-semibold leading-[24px] tracking-[2.8px] uppercase mb-2">
                    {data?.title}
                  </p>
                  <p className="text-grey-dark text-[36px] font-normal leading-[44px] tracking-[-0.36px] mb-4 flex items-center gap-1">
                    {data?.percentageNumber1}{' '}
                    <span className="text-grey-dark text-[48px] font-semibold leading-[56px] tracking-[-0.48px]">
                      {data?.percentageNumber}
                    </span>{' '}
                    {data?.percentageNumber3}
                  </p>
                  <p></p>
                  <p className="text-grey-8 text-base leading-6 mb-6">{data?.tagline}</p>
                </div>
                <div className="w-full">
                  <SanityImg
                    builder={imageUrlBuilder}
                    image={data?.brandImg}
                    alt={image?.brandImg?.alt ?? 'image'}
                    loading="eager"
                    className="w-full"
                  />
                </div>
              </div>
            ))}
          </div>
        )}

        {/* text content */}
        <div className="max-w-[808px] mx-auto flex flex-col gap-8 mb-[32px] md:mb-12">
          <div className="flex flex-col gap-4 md:gap-6">
            {imageHeader2 && (
              <p className="text-primary-blue text-[20px] font-semibold leading-[28px]">
                {imageHeader2}
              </p>
            )}
            {imagePara2 && (
              <p className="text-base text-grey-dark">
                <PortableText blocks={imagePara2} serializers={serializers} />
              </p>
            )}
          </div>

          {/* SPOTIFY */}
          {podcast && (
            <iframe
              style={{ borderRadius: '12px' }}
              src={podcast}
              width="100%"
              height="152"
              frameBorder="0"
              allowFullScreen={true}
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
            ></iframe>
          )}
        </div>
      </div>
    </>
  )
}
