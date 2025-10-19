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
    <header className="fixed top-0 w-full backdrop-blur-2xl bg-[#000000]/80 border-b border-white/10 z-50 shadow-xl">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 group">
            <div className="w-11 h-11 bg-gradient-to-br from-[#0A66C2] via-[#0077B5] to-[#004182] rounded-2xl flex items-center justify-center shadow-lg border border-white/20 backdrop-blur-xl relative overflow-hidden group-hover:scale-110 transition-transform duration-300">
              <div className="absolute inset-0 bg-gradient-to-br from-white/30 via-transparent to-transparent pointer-events-none"></div>
              <span className="text-white font-bold text-xl relative z-10">LI</span>
            </div>
            <span className="text-white font-bold text-xl">LinkedINspire</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-2">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="px-4 py-2 rounded-xl text-[#DCE6F1] hover:text-white backdrop-blur-xl hover:bg-white/10 transition-all duration-300 font-medium border border-transparent hover:border-white/20"
              >
                {item.name}
              </Link>
            ))}
            <Button variant="primary" className="ml-2">Join the Community</Button>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden backdrop-blur-xl bg-white/10 p-2 rounded-xl border border-white/20 hover:bg-white/20 transition-all duration-300"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} className="text-white" /> : <Menu size={24} className="text-white" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden pb-4 border-t border-white/10 mt-2 pt-4">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block py-3 px-4 rounded-xl text-[#DCE6F1] hover:text-white backdrop-blur-xl hover:bg-white/10 transition-all duration-300 mb-2 border border-transparent hover:border-white/20"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <div className="mt-4">
              <Button variant="primary" className="w-full">Join the Community</Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
