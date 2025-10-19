import { ButtonHTMLAttributes, ReactNode } from 'react'
import { cn } from '@/lib/utils'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline'
  size?: 'sm' | 'md' | 'lg'
  children: ReactNode
}

export default function Button({
  variant = 'primary',
  size = 'md',
  className,
  children,
  ...props
}: ButtonProps) {
  const baseStyles = 'font-semibold rounded-full transition-all duration-300 inline-flex items-center justify-center backdrop-blur-xl relative overflow-hidden group'
  
  const variants = {
    primary: `
      bg-gradient-to-r from-[#0A66C2] via-[#0077B5] to-[#0A66C2] 
      text-white shadow-lg shadow-[#0A66C2]/30 
      hover:shadow-2xl hover:shadow-[#0A66C2]/40 
      hover:scale-105 active:scale-95
      before:absolute before:inset-0 
      before:bg-gradient-to-r before:from-transparent before:via-white/20 before:to-transparent
      before:-translate-x-full hover:before:translate-x-full
      before:transition-transform before:duration-700
    `,
    secondary: `
      bg-gradient-to-r from-white/90 to-white/70 
      text-[#0A66C2] border-2 border-white/50
      shadow-lg hover:shadow-xl 
      hover:scale-105 active:scale-95
      backdrop-blur-xl
    `,
    outline: `
      border-2 border-[#0A66C2]/50 
      bg-white/40 backdrop-blur-xl
      text-[#0A66C2] 
      shadow-md hover:shadow-lg hover:shadow-[#0A66C2]/20
      hover:bg-[#0A66C2]/5 hover:border-[#0A66C2]
      hover:scale-105 active:scale-95
    `
  }
  
  const sizes = {
    sm: 'px-5 py-2.5 text-sm',
    md: 'px-7 py-3.5 text-base',
    lg: 'px-10 py-4 text-lg'
  }

  return (
    <button
      className={cn(baseStyles, variants[variant], sizes[size], className)}
      {...props}
    >
      <span className="relative z-10">{children}</span>
    </button>
  )
}
