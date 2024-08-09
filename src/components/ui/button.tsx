import clsx from 'clsx'
import React, { forwardRef, ButtonHTMLAttributes } from 'react'

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string
  variant?: 'solid' | 'outline' | 'none'
  active?: boolean
  type?: 'submit' | 'reset' | 'button'
  loading?: boolean
  disabled?: boolean
  size?: 'xl' | 'lg' | 'base' | 'sm' | 'xs'
  color?: 'primary' | 'secondary' | 'none'
  icon?: {
    position?: 'left' | 'right'
    component: any
  }
}

const styles = {
  variant: (color: 'primary' | 'secondary' | 'none') => ({
    outline: `!border-[1px] ${
      color === 'primary' &&
      'border-[#A78148] text-[#A78148] hover:border-[#967441] hover:text-[#A78148]'
    } ${
      color === 'secondary' &&
      'Sborder-green-500 text-green-500 text-green-600 border-green-600 hover:bg-[#E6E6E6] hover:text-green-600'
    }`,
    solid: `${color === 'primary' && '!text-white bg-[#004E89] hover:bg-[#004E89]'} ${
      color === 'secondary' && '!text-white bg-green-500 hover:bg-[#E6E6E6]'
    }`,
    none: 'text-neutral-400 bg-white',
  }),

  disabled: (variant: 'solid' | 'outline' | 'none') =>
    `cursor-not-allowed hover:cursor-not-allowed ${
      variant === 'outline' && '!border-[#D3D4D6] !text-[#D3D4D6] '
    } ${variant === 'solid' && '!bg-[#D3D4D6]'} ${
      variant === 'none' && 'bg-white text-neutral-400'
    }`,

  size: {
    xl: 'xl:text-[20px] text-[14px] p-5',
    lg: 'xl:text-[20px] text-[14px] py-4 px-5',
    base: 'text-sm py-[13px] px-4',
    sm: 'text-xs p-3',
    xs: 'text-[10px] py-[9px] px-[8px]',
  },
  loading: 'cursor-not-allowed',
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
  const {
    className,
    variant = 'solid',
    children,
    active,
    color = 'primary',
    loading = false,
    disabled = false,
    icon,
    size = 'base',
    ...rest
  } = props

  const _icon = {
    ...icon,
    position: icon?.position ?? 'right',
  }

  const rootClassName = clsx(
    'rounded-[4px] inline-flex font-semibold items-center cursor-pointer transition ease-in-out duration-300 text-center justify-center  focus-visible:outline-none focus:outline-none',
    disabled && styles.disabled(variant),
    variant && styles.variant(color)[variant],
    size && styles.size[size],
    loading && styles.disabled,
    className,
  )

  return (
    <button
      aria-pressed={active}
      data-variant={variant}
      ref={ref}
      className={rootClassName}
      disabled={disabled}
      {...rest}
    >
      {_icon?.component && (
        <span className="mx-1">
          {_icon?.component && _icon?.position === 'left' && _icon?.component}
        </span>
      )}
      {children}
      {_icon?.component && (
        <span className="mx-1">
          {_icon?.component && _icon?.position === 'right' && _icon?.component}
        </span>
      )}
    </button>
  )
})
Button.displayName = 'Button'
