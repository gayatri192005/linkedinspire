import Link from 'next/link'
import type { AnchorHTMLAttributes, ReactNode } from 'react'

export type ActionLinkVariant = 'primary' | 'secondary' | 'outline'
export type ActionLinkSize = 'sm' | 'md' | 'lg'

type ActionLinkProps = {
  href: string
  children: ReactNode
  variant?: ActionLinkVariant
  size?: ActionLinkSize
  external?: boolean
  className?: string
  ariaLabel?: string
} & Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'href' | 'className' | 'children'>

const variantStyles: Record<ActionLinkVariant, string> = {
  primary: 'border border-[#0A66C2] bg-[#0A66C2] text-white shadow-sm hover:border-[#004182] hover:bg-[#004182] hover:shadow-md',
  secondary: 'border border-[#c8d8e7] bg-white text-[#0A66C2] hover:border-[#0A66C2] hover:bg-[#eef6fd]',
  outline: 'border border-slate-300 bg-transparent text-slate-700 hover:border-[#0A66C2] hover:bg-white hover:text-[#004182]',
}

const sizeStyles: Record<ActionLinkSize, string> = {
  sm: 'min-h-10 px-4 py-2 text-sm',
  md: 'min-h-11 px-5 py-2.5 text-sm',
  lg: 'min-h-12 px-6 py-3 text-base',
}

export default function ActionLink({
  href,
  children,
  variant = 'primary',
  size = 'md',
  external = false,
  className = '',
  ariaLabel,
  ...props
}: ActionLinkProps) {
  const classes = `inline-flex items-center justify-center gap-2 rounded-full font-semibold transition duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0A66C2] focus-visible:ring-offset-2 ${variantStyles[variant]} ${sizeStyles[size]} ${className}`
  const externalProps = external ? { target: '_blank' as const, rel: 'noopener noreferrer' } : {}

  if (external || href.startsWith('mailto:')) {
    return (
      <a href={href} aria-label={ariaLabel} className={classes} {...externalProps} {...props}>
        {children}
      </a>
    )
  }

  return (
    <Link href={href} aria-label={ariaLabel} className={classes} {...props}>
      {children}
    </Link>
  )
}
