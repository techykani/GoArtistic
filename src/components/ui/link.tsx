import NextLink, { LinkProps as NextLinkProps } from 'next/link'
import React from 'react'

export const Link: React.FC<
  NextLinkProps & { className?: string; children: React.ReactNode; onClick?: () => void }
> = ({ href, children, ...props }) => {
  return (
    <NextLink href={href} {...props} className={props.className}>
      <>{children}</>
    </NextLink>
  )
}
