import NextLink, { LinkProps as NextLinkProps } from 'next/link'
import clsx from 'clsx'
import { GTAEvent } from '@/lib/gtag'

export const LinkArrowUp: React.FC<
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
            'transform flex justify-content items-center transition-all duration-150 group-hover:translate-x-1 ml-[6px]',
          )}
        >
          {color == 'black' ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="17"
              height="16"
              viewBox="0 0 17 16"
              fill="none"
            >
              <mask
                id="mask0_2383_7408"
                style={{ maskType: 'alpha' }}
                maskUnits="userSpaceOnUse"
                x="0"
                y="0"
                width="17"
                height="16"
              >
                <rect x="0.5" width="16" height="16" fill="#D9D9D9" />
              </mask>
              <g mask="url(#mask0_2383_7408)">
                <path
                  d="M4.49984 13.3333C4.13317 13.3333 3.81928 13.2028 3.55817 12.9417C3.29706 12.6806 3.1665 12.3667 3.1665 12V5.33333C3.1665 4.96667 3.29706 4.65278 3.55817 4.39167C3.81928 4.13056 4.13317 4 4.49984 4H7.1665C7.35539 4 7.51373 4.06389 7.6415 4.19167C7.76928 4.31944 7.83317 4.47778 7.83317 4.66667C7.83317 4.85556 7.76928 5.01389 7.6415 5.14167C7.51373 5.26944 7.35539 5.33333 7.1665 5.33333H4.49984V12H11.1665V9.33333C11.1665 9.14444 11.2304 8.98611 11.3582 8.85833C11.4859 8.73056 11.6443 8.66667 11.8332 8.66667C12.0221 8.66667 12.1804 8.73056 12.3082 8.85833C12.4359 8.98611 12.4998 9.14444 12.4998 9.33333V12C12.4998 12.3667 12.3693 12.6806 12.1082 12.9417C11.8471 13.2028 11.5332 13.3333 11.1665 13.3333H4.49984ZM13.1665 4.26667L8.7665 8.66667C8.64428 8.78889 8.48873 8.85 8.29984 8.85C8.11095 8.85 7.95539 8.78889 7.83317 8.66667C7.71095 8.54444 7.64984 8.38889 7.64984 8.2C7.64984 8.01111 7.71095 7.85556 7.83317 7.73333L12.2332 3.33333H10.4998C10.3109 3.33333 10.1526 3.26944 10.0248 3.14167C9.89706 3.01389 9.83317 2.85556 9.83317 2.66667C9.83317 2.47778 9.89706 2.31944 10.0248 2.19167C10.1526 2.06389 10.3109 2 10.4998 2H13.4998C14.0521 2 14.4998 2.44772 14.4998 3V6C14.4998 6.18889 14.4359 6.34722 14.3082 6.475C14.1804 6.60278 14.0221 6.66667 13.8332 6.66667C13.6443 6.66667 13.4859 6.60278 13.3582 6.475C13.2304 6.34722 13.1665 6.18889 13.1665 6V4.26667Z"
                  fill="#6E6E6E"
                />
              </g>
            </svg>
          ) : (
            <svg
              width="25"
              height="24"
              viewBox="0 0 25 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M15.1662 4.84766C14.8404 4.44523 14.2501 4.38309 13.8477 4.70886C13.4452 5.03464 13.3831 5.62497 13.7089 6.0274L17.7414 11.0088C17.7033 11.003 17.6645 11 17.625 11L5.375 11C4.89175 11 4.5 11.4477 4.5 12C4.5 12.5523 4.89175 13 5.375 13L17.625 13C17.6645 13 17.7033 12.997 17.7414 12.9912L13.7089 17.9726C13.3831 18.375 13.4452 18.9654 13.8477 19.2911C14.2501 19.6169 14.8404 19.5548 15.1662 19.1523L19.5236 13.7696C20.359 12.7377 20.359 11.2623 19.5236 10.2304L15.1662 4.84766Z"
                fill="white"
              />
            </svg>
          )}
        </div>
      </a>
    </NextLink>
  )
}

LinkArrowUp.displayName = 'Link'
