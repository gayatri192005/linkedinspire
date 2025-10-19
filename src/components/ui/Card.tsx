import { ReactNode } from 'react'
import { cn } from '@/lib/utils'

interface CardProps {
  children: ReactNode
  className?: string
  variant?: 'default' | 'gradient' | 'bordered'
  hoverable?: boolean
}

export default function Card({
  children,
  className,
  variant = 'default',
  hoverable = false,
}: CardProps) {
  const baseStyles = 'rounded-3xl overflow-hidden backdrop-blur-xl relative'
  
  const variants = {
    default: `
      bg-white/80 
      border border-white/40 
      shadow-xl shadow-black/5
      before:absolute before:inset-0 
      before:bg-gradient-to-br before:from-white/40 before:to-transparent 
      before:pointer-events-none
    `,
    gradient: `
      bg-gradient-to-br from-[#DCE6F1]/80 via-white/80 to-[#E9E5DF]/60 
      border border-white/50
      shadow-xl shadow-[#0A66C2]/10
      before:absolute before:inset-0 
      before:bg-gradient-to-br before:from-white/40 before:via-transparent before:to-white/20
      before:pointer-events-none
    `,
    bordered: `
      bg-white/70 
      border-2 border-[#0A66C2]/30
      shadow-lg shadow-[#0A66C2]/5
      before:absolute before:inset-0 
      before:bg-gradient-to-br before:from-[#0A66C2]/5 before:to-transparent
      before:pointer-events-none
    `
  }
  
  const hoverEffect = hoverable 
    ? 'transition-all duration-500 hover:shadow-2xl hover:shadow-[#0A66C2]/20 hover:-translate-y-2 hover:border-[#0A66C2]/50' 
    : ''

  return (
    <div className={cn(baseStyles, variants[variant], hoverEffect, className)}>
      <div className="relative z-10">
        {children}
      </div>
    </div>
  )
}
