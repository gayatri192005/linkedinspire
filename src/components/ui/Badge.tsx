import { ReactNode } from 'react'
import { cn } from '@/lib/utils'

interface BadgeProps {
  children: ReactNode
  variant?: 'default' | 'success' | 'warning' | 'error' | 'info'
  size?: 'sm' | 'md' | 'lg'
  className?: string
}

export default function Badge({
  children,
  variant = 'default',
  size = 'md',
  className,
}: BadgeProps) {
  const baseStyles = 'inline-flex items-center justify-center rounded-full font-semibold backdrop-blur-xl border shadow-lg transition-all duration-300 hover:scale-105'
  
  const variants = {
    default: 'bg-gradient-to-r from-[#DCE6F1]/90 to-[#DCE6F1]/70 text-[#0A66C2] border-white/50 hover:shadow-[#0A66C2]/20',
    success: 'bg-gradient-to-r from-emerald-100/90 to-emerald-50/70 text-emerald-700 border-white/50 hover:shadow-emerald-500/20',
    warning: 'bg-gradient-to-r from-amber-100/90 to-amber-50/70 text-amber-700 border-white/50 hover:shadow-amber-500/20',
    error: 'bg-gradient-to-r from-rose-100/90 to-rose-50/70 text-rose-700 border-white/50 hover:shadow-rose-500/20',
    info: 'bg-gradient-to-r from-sky-100/90 to-sky-50/70 text-sky-700 border-white/50 hover:shadow-sky-500/20',
  }
  
  const sizes = {
    sm: 'px-3 py-1 text-xs',
    md: 'px-4 py-2 text-sm',
    lg: 'px-6 py-2.5 text-base',
  }

  return (
    <span className={cn(baseStyles, variants[variant], sizes[size], className)}>
      {children}
    </span>
  )
}
