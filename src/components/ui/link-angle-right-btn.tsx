import NextLink, { LinkProps as NextLinkProps } from 'next/link'
import clsx from 'clsx'
import { GTAEvent } from '@/lib/gtag'

export const LinkAngleRightBtn: React.FC<
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
  gtag_event,
  gtag_content_name,
  gtag_content_type,
  gtag_cta_button,
  children,
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
          'flex text-copper-500 items-center font-semibold transition-colors duration-150 text-base group gap-2',
        )}
        {...props}
        onClick={() =>
          handleButton(gtag_event, gtag_content_name, gtag_content_type, gtag_cta_button)
        }
      >
        {children}
        <div
          className={clsx(
            'transform flex justify-content items-center transition-all duration-150 group-hover:translate-x-1',
          )}
        >
          {color == 'black' || color == 'white' ? (
            <>
              {color == 'black' ? (
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M14.8925 6.89459C15.283 6.50406 15.9162 6.50405 16.3067 6.89457L20.7052 11.2929C20.8927 11.4804 20.9981 11.7348 20.9981 12C20.9981 12.2652 20.8927 12.5196 20.7052 12.7071L16.3067 17.1056C15.9162 17.4961 15.283 17.4961 14.8925 17.1056C14.502 16.7151 14.502 16.0819 14.8925 15.6914L17.5839 13H3.99805C3.44576 13 2.99805 12.5523 2.99805 12C2.99805 11.4477 3.44576 11 3.99805 11H17.5838L14.8925 8.3088C14.502 7.91829 14.502 7.28512 14.8925 6.89459Z"
                    fill="#3C3C3C"
                  />
                </svg>
              ) : (
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
            </>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M4 12H20M20 12L14 6M20 12L14 18"
                stroke="#0957CB"
                stroke-width="2"
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

LinkAngleRightBtn.displayName = 'Link'
