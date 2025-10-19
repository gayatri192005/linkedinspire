'use client'

import { useEffect } from 'react'
import { X } from 'lucide-react'

interface ModalProps {
  children: React.ReactNode
  onClose: () => void
}

export default function Modal({ children, onClose }: ModalProps) {
  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [])

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Glassmorphic backdrop */}
      <div 
        className="absolute inset-0 bg-gradient-to-br from-[#0A66C2]/20 via-black/40 to-[#000000]/60 backdrop-blur-2xl"
        onClick={onClose}
      ></div>
      
      {/* Modal content with glossy effect */}
      <div className="relative w-full max-w-5xl bg-white/90 backdrop-blur-2xl rounded-3xl overflow-hidden shadow-2xl border border-white/40">
        {/* Glossy overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/40 via-transparent to-transparent pointer-events-none"></div>
        
        {/* Close button with glossy effect */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 z-20 p-3 bg-gradient-to-br from-[#0A66C2] to-[#004182] hover:from-[#004182] hover:to-[#0A66C2] rounded-full text-white transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-110 active:scale-95 backdrop-blur-xl"
          aria-label="Close modal"
        >
          <X size={20} />
        </button>
        
        <div className="relative z-10">
          {children}
        </div>
      </div>
    </div>
  )
}
