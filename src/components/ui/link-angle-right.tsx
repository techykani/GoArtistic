import NextLink, { LinkProps as NextLinkProps } from 'next/link'
import clsx from 'clsx'
import { GTAEvent } from '@/lib/gtag'

export const LinkAngleRight: React.FC<
  NextLinkProps & {
    className?: string
    iconPath?: string
    color: string
    openInNewTab?: boolean
    children: React.ReactNode
    gtag_event: string
    gtag_content_name: string
    gtag_content_type: string
    gtag_cta_button: string
  }
> = ({
  href,
  children,
  gtag_event,
  gtag_content_name,
  gtag_content_type,
  gtag_cta_button,
  iconPath,
  color,
  openInNewTab = false,
  ...props
}) => {
  const handleButton = (
    gtag_event: any,
    gtag_content_name: any,
    gtag_content_type: any,
    gtag_cta_button: any,
  ) => {
    GTAEvent(gtag_event, {
      content_name: gtag_content_name !== '' ? gtag_content_name : null,
      content_type: gtag_content_type !== '' ? gtag_content_type : null,
      cta_button: gtag_cta_button !== '' ? gtag_cta_button : null,
    })
  }
  return (
    <NextLink href={href} legacyBehavior>
      <a
        target={`${openInNewTab ? '_blank' : '_self'}`}
        className={clsx(
          'flex text-copper-500 items-center font-semibold transition-colors duration-150 text-base group',
        )}
        {...props}
        onClick={() =>
          handleButton(gtag_event, gtag_content_name, gtag_content_type, gtag_cta_button)
        }
      >
        {children}
        <div
          className={clsx(
            'transform flex justify-center items-center transition-all duration-150  ml-[6px]',
            'group-hover:translate-x-1',
            color === 'newBlue' ? 'mt-[2px]' : 'mt-0',
          )}
        >
          {color == 'black' && (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
            >
              <path
                d="M3.33331 10H16.6666M16.6666 10L11.6666 5M16.6666 10L11.6666 15"
                stroke="#3C3C3C"
                stroke-width="1.2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          )}
          {color == 'white' && (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M14.8925 6.89447C15.283 6.50394 15.9162 6.50393 16.3067 6.89444L20.7052 11.2928C20.8927 11.4803 20.9981 11.7347 20.9981 11.9999C20.9981 12.2651 20.8927 12.5195 20.7052 12.707L16.3067 17.1055C15.9162 17.496 15.283 17.496 14.8925 17.1055C14.502 16.715 14.502 16.0818 14.8925 15.6913L17.5839 12.9999H3.99805C3.44576 12.9999 2.99805 12.5522 2.99805 11.9999C2.99805 11.4476 3.44576 10.9999 3.99805 10.9999H17.5838L14.8925 8.30868C14.502 7.91816 14.502 7.285 14.8925 6.89447Z"
                fill="#FEFEFE"
              />
            </svg>
          )}
          {color == 'newBlue' && (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M3.83333 10H17.1667M17.1667 10L12.1667 5M17.1667 10L12.1667 15"
                stroke="#0957CB"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          )}
        </div>
      </a>
    </NextLink>
  )
}

LinkAngleRight.displayName = 'Link'
