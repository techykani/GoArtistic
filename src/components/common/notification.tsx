import clsx from 'clsx'
import { SanityImg } from 'sanity-react-extra'
import { imageUrlBuilder } from '@/sanity'
import { PortableText } from '@/sanity'
import { serializers } from '@/lib/blockContent'

interface NotificationProps {
  data: NotificationBar
}

export const Notification: React.FC<NotificationProps> = ({ data }) => {
  return (
    <div className="w-full bg-warning-350 z-10 relative">
      <div className="container mx-auto flex justify-center items-center py-2">
        {data && (
          <>
            <SanityImg
              className="h-[18px] w-[18px]"
              builder={imageUrlBuilder}
              image={data.icon}
              height={5}
              alt={'icon'}
            />
            <div className="text-body-mn text-neutral-700 ml-3 flex lg:flex-row flex-col items-start lg:items-center justify-center">
              <PortableText blocks={data.text} serializers={serializers} />
              {/* {data.title}
              <div className="font-semibold transition-colors duration-150 group lg:ml-1 text-button-mn mt-1 lg:mt-0">
                {data.button.title}
                <div
                  className={clsx(
                    'transform inline-block transition-all duration-150 group-hover:translate-x-1 ',
                  )}
                >
                  <svg
                    className="ml-[6px] fill-neutral-700"
                    width="4"
                    height="7"
                    viewBox="0 0 8 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7.84252 7.37129C8.05249 7.15289 8.05249 6.84711 7.84252 6.62871L1.71129 0.163807C1.50131 -0.0546022 1.16535 -0.0546022 0.997375 0.163807L0.15748 1.03744C-0.0524934 1.21217 -0.0524934 1.56162 0.15748 1.78003L5.11286 6.97816L0.15748 12.22C-0.0524934 12.4384 -0.0524934 12.7441 0.15748 12.9626L0.997375 13.8362C1.16535 14.0546 1.50131 14.0546 1.71129 13.8362L7.84252 7.37129Z"
                      fill="#212932"
                    />
                  </svg>
                </div>
              </div> */}
            </div>
          </>
        )}
      </div>
    </div>
  )
}
