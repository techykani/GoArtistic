import { serializers } from '@/lib/blockContent'
import { PortableText, imageUrlBuilder } from '@/sanity'
import Image from 'next/image'
import { SanityImg } from 'sanity-react-extra'
import ReactPortableText from '../widgets/shared/reactPortableText'

export const VideoTitleDesc: React.FC<any> = ({
  videourl,
  videoDescription,
  videoCaption,
  description,
  Quote,
}) => {
  return (
    <>
      <div className="px-6 bg-[white]">
        {/* text content */}
        <div className="max-w-[808px] mx-auto mb-8 md:mb-12">
          {/* video player section */}

          {videourl && (
            <div className="flex flex-col gap-4 pb-8 md:pb-12 ">
              <div className="w-full h-full aspect-ratio-container rounded-xl overflow-hidden">
                <iframe
                  width="560"
                  height="315"
                  src={`https://www.youtube.com/embed/${videourl.split('v=')[1]}`}
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  className=""
                ></iframe>
              </div>
              <p className="text-grey-8 text-[14px] leading-[20px]">{videoCaption}</p>
            </div>
          )}

          {/* text content */}
          {videoDescription && (
            // <p className="text-base text-grey-dark pb-8 md:pb-12">
            //   <PortableText blocks={videoDescription} serializers={serializers} />
            // </p>
            <div className='mt-[-24px] pb-8 md:pb-12'>
              <ReactPortableText content={videoDescription} />
            </div>
          )}

          {/* quote */}
          {Quote && Quote.quoteAuthor && Quote.quoteDomain && Quote.quotedescription && (
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
                <PortableText blocks={Quote.quotedescription} serializers={serializers} />
              </p>
              <div className="w-full">
                <p className="text-primary-blue text-base font-semibold">{Quote.quoteAuthor}</p>
                <p className="text-[14px] leading-5 text-grey-8">{Quote.quoteDomain}</p>
              </div>
            </div>
          )}
          {description && (
            // <p className="text-base text-grey-dark leading-[24px]">
            //   <PortableText blocks={description} serializers={serializers} />
            // </p>
            <div className='mt-[-24px]'>
              <ReactPortableText content={description} />
            </div>
          )}
        </div>
      </div>
    </>
  )
}
