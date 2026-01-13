import React from 'react'

// Shared base styles for button-like elements
const baseStyles = 'flex items-center justify-center gap-[6px] px-[12px] py-[6px] rounded-[8px] font-medium text-sm leading-5 tracking-[-0.084px] transition-colors duration-150'

const variantStyles = {
  secondary: 'bg-button-secondary text-icon-primary hover:bg-button-secondary-hover',
  ghost: 'bg-button-ghost text-text-primary hover:bg-button-ghost-hover',
}

const focusStyles = 'focus:outline-none focus-visible:border focus-visible:border-purple-7 focus-visible:shadow-[0px_0px_0px_3px_rgba(190,147,228,0.24)]'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'secondary' | 'ghost'
  children: React.ReactNode
}

export default function Button({
  variant = 'secondary',
  children,
  className = '',
  disabled = false,
  ...props
}: ButtonProps) {
  return (
    <button
      disabled={disabled}
      className={`${baseStyles} ${variantStyles[variant]} ${focusStyles} cursor-pointer disabled:cursor-not-allowed disabled:bg-button-disabled disabled:text-text-disabled ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}

// LinkButton - for anchor elements styled as buttons
interface LinkButtonProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: 'secondary' | 'ghost'
  disabled?: boolean
  children: React.ReactNode
}

export function LinkButton({
  variant = 'secondary',
  disabled = false,
  children,
  className = '',
  href,
  ...props
}: LinkButtonProps) {
  if (disabled) {
    return (
      <span className={`${baseStyles} cursor-not-allowed bg-button-disabled text-text-disabled ${className}`}>
        {children}
      </span>
    )
  }

  return (
    <a
      href={href}
      className={`${baseStyles} ${variantStyles[variant]} ${focusStyles} ${className}`}
      {...props}
    >
      {children}
    </a>
  )
}
