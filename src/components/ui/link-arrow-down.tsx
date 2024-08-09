import NextLink, { LinkProps as NextLinkProps } from 'next/link'
import clsx from 'clsx'

export const LinkArrowDown: React.FC<
  NextLinkProps & {
    className?: string
    iconPath?: string
    color: string
    openInNewTab?: boolean
    children: React.ReactNode
  }
> = ({ href, children, iconPath, color, openInNewTab = false, ...props }) => {
  return (
    <NextLink href={href} legacyBehavior>
      <a
        target={`${openInNewTab ? '_blank' : '_self'}`}
        className={clsx(
          'flex text-copper-500 items-center font-semibold transition-colors duration-150 text-base group',
        )}
        {...props}
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
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M18.0145 9.63361C18.362 10.0629 18.2957 10.6926 17.8665 11.04L14.1249 14.069C13.0242 14.96 11.4503 14.96 10.3497 14.069L6.60807 11.04C6.17881 10.6926 6.11253 10.0629 6.46003 9.63361C6.80752 9.20435 7.43721 9.13806 7.86647 9.48556L11.6081 12.5145C11.975 12.8115 12.4996 12.8115 12.8665 12.5145L16.6081 9.48556C17.0373 9.13806 17.667 9.20435 18.0145 9.63361Z"
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
                d="M18.0145 9.63361C18.362 10.0629 18.2957 10.6926 17.8665 11.04L14.1249 14.069C13.0242 14.96 11.4503 14.96 10.3497 14.069L6.60807 11.04C6.17881 10.6926 6.11253 10.0629 6.46003 9.63361C6.80752 9.20435 7.43721 9.13806 7.86647 9.48556L11.6081 12.5145C11.975 12.8115 12.4996 12.8115 12.8665 12.5145L16.6081 9.48556C17.0373 9.13806 17.667 9.20435 18.0145 9.63361Z"
                fill="#3C3C3C"
              />
            </svg>
          )}
        </div>
      </a>
    </NextLink>
  )
}

LinkArrowDown.displayName = 'Link'
