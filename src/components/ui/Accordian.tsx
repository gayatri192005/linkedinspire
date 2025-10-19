'use client'

import { ReactNode, useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { cn } from '@/lib/utils'

interface AccordionItemProps {
  title: string
  children: ReactNode
  isOpen?: boolean
  onToggle?: () => void
}

export function AccordionItem({ title, children, isOpen, onToggle }: AccordionItemProps) {
  return (
    <div className="backdrop-blur-xl bg-white/70 border border-white/40 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
      <button
        onClick={onToggle}
        className="w-full px-6 py-5 flex items-center justify-between text-left bg-gradient-to-r from-[#0A66C2]/5 to-transparent hover:from-[#0A66C2]/10 transition-all duration-300"
      >
        <span className="font-semibold text-[#000000] text-lg">{title}</span>
        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#0A66C2] to-[#004182] flex items-center justify-center shadow-md">
          <ChevronDown
            className={cn(
              'w-5 h-5 text-white transition-transform duration-300',
              isOpen && 'transform rotate-180'
            )}
          />
        </div>
      </button>
      {isOpen && (
        <div className="px-6 py-5 bg-gradient-to-b from-white/50 to-white/30 backdrop-blur-sm border-t border-white/30">
          <div className="text-[#56687A] leading-relaxed">
            {children}
          </div>
        </div>
      )}
    </div>
  )
}

interface AccordionProps {
  children: ReactNode
  allowMultiple?: boolean
}

export default function Accordion({ children, allowMultiple = false }: AccordionProps) {
  const [openItems, setOpenItems] = useState<number[]>([0])

  const handleToggle = (index: number) => {
    if (allowMultiple) {
      setOpenItems(prev =>
        prev.includes(index)
          ? prev.filter(i => i !== index)
          : [...prev, index]
      )
    } else {
      setOpenItems(prev =>
        prev.includes(index) ? [] : [index]
      )
    }
  }

  return (
    <div className="space-y-4">
      {Array.isArray(children) &&
        children.map((child, index) =>
          child
            ? {
                ...child,
                props: {
                  ...child.props,
                  isOpen: openItems.includes(index),
                  onToggle: () => handleToggle(index),
                },
              }
            : null
        )}
    </div>
  )
}
