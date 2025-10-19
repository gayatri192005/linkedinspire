'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import Button from '@/components/ui/Button'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '#about' },
    { name: 'Sessions', href: '#sessions' },
    { name: 'Speakers', href: '#speakers' },
    { name: 'Resources', href: '#resources' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Join Us', href: '#contact' },
  ]

  return (
    <header className="fixed top-0 w-full backdrop-blur-3xl bg-white/5 border-b border-white/10 z-50 shadow-2xl before:absolute before:inset-0 before:bg-gradient-to-br before:from-white/10 before:via-transparent before:to-transparent before:pointer-events-none">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 group">
            <div className="w-11 h-11 bg-gradient-to-br from-[#0A66C2]/90 via-[#0077B5]/80 to-[#004182]/90 rounded-2xl flex items-center justify-center shadow-[0_8px_32px_rgba(10,102,194,0.4)] border border-white/30 backdrop-blur-xl relative overflow-hidden group-hover:scale-110 group-hover:shadow-[0_12px_48px_rgba(10,102,194,0.6)] transition-all duration-500">
              <div className="absolute inset-0 bg-gradient-to-br from-white/40 via-white/10 to-transparent pointer-events-none"></div>
              <div className="absolute inset-0 bg-gradient-to-tl from-white/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <span className="text-white font-bold text-xl relative z-10 drop-shadow-lg">LI</span>
            </div>
            <span className="text-white font-bold text-xl drop-shadow-lg">LinkedINspire</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-2">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="px-4 py-2 rounded-xl text-white/80 hover:text-white backdrop-blur-xl bg-white/5 hover:bg-white/15 transition-all duration-500 font-medium border border-white/10 hover:border-white/30 hover:shadow-[0_4px_24px_rgba(255,255,255,0.1)] relative overflow-hidden group"
              >
                <span className="relative z-10">{item.name}</span>
                <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </Link>
            ))}
            <Button variant="primary" className="ml-2 backdrop-blur-xl bg-gradient-to-r from-[#0A66C2]/80 to-[#0077B5]/80 hover:from-[#0A66C2] hover:to-[#0077B5] border border-white/20 shadow-[0_8px_32px_rgba(10,102,194,0.3)] hover:shadow-[0_12px_48px_rgba(10,102,194,0.5)] transition-all duration-500">
              Join the Community
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden backdrop-blur-xl bg-white/10 hover:bg-white/20 p-2 rounded-xl border border-white/20 hover:border-white/40 transition-all duration-500 shadow-lg hover:shadow-xl"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X size={24} className="text-white drop-shadow-lg" />
            ) : (
              <Menu size={24} className="text-white drop-shadow-lg" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden pb-4 border-t border-white/10 mt-2 pt-4 backdrop-blur-2xl">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block py-3 px-4 rounded-xl text-white/80 hover:text-white backdrop-blur-xl bg-white/5 hover:bg-white/15 transition-all duration-500 mb-2 border border-white/10 hover:border-white/30 hover:shadow-[0_4px_24px_rgba(255,255,255,0.1)] relative overflow-hidden group"
                onClick={() => setIsMenuOpen(false)}
              >
                <span className="relative z-10">{item.name}</span>
                <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </Link>
            ))}
            <div className="mt-4">
              <Button variant="primary" className="w-full backdrop-blur-xl bg-gradient-to-r from-[#0A66C2]/80 to-[#0077B5]/80 hover:from-[#0A66C2] hover:to-[#0077B5] border border-white/20 shadow-[0_8px_32px_rgba(10,102,194,0.3)] hover:shadow-[0_12px_48px_rgba(10,102,194,0.5)] transition-all duration-500">
                Join the Community
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
