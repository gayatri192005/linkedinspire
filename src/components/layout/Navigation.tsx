'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'
import { cn } from '@/lib/utils'
import Button from '@/components/ui/Button'

const NAV_ITEMS = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '#about' },
  { name: 'Course', href: '#course' },
  { name: 'Curriculum', href: '#curriculum' },
  { name: 'Instructors', href: '#instructors' },
  { name: 'Testimonials', href: '#testimonials' },
  { name: 'FAQ', href: '#faq' },
]

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('')
  const pathname = usePathname()

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Track active section for hash links
  useEffect(() => {
    const handleHashChange = () => {
      setActiveSection(window.location.hash)
    }

    handleHashChange()
    window.addEventListener('hashchange', handleHashChange)
    
    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -80% 0px',
      threshold: 0,
    }

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute('id')
          if (id) {
            setActiveSection(`#${id}`)
          }
        }
      })
    }

    const observer = new IntersectionObserver(observerCallback, observerOptions)
    const sections = document.querySelectorAll('section[id]')
    sections.forEach((section) => observer.observe(section))

    return () => {
      window.removeEventListener('hashchange', handleHashChange)
      observer.disconnect()
    }
  }, [])

  // Smooth scroll handler
  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('#')) {
      e.preventDefault()
      const targetId = href.substring(1)
      const targetElement = document.getElementById(targetId)

      if (targetElement) {
        const headerOffset = 80
        const elementPosition = targetElement.getBoundingClientRect().top
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth',
        })

        window.history.pushState(null, '', href)
        setActiveSection(href)
        setIsMobileMenuOpen(false)
      }
    } else {
      setIsMobileMenuOpen(false)
    }
  }

  // Check if link is active
  const isActive = (href: string) => {
    if (href.startsWith('#')) {
      return activeSection === href
    }
    return pathname === href
  }

  return (
    <nav
      className={cn(
        'fixed top-0 w-full z-50 transition-all duration-500',
        isScrolled
          ? 'backdrop-blur-2xl bg-[#000000]/90 shadow-2xl border-b border-white/20'
          : 'backdrop-blur-xl bg-[#000000]/70 border-b border-white/10'
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link 
            href="/" 
            className="flex items-center space-x-2 group"
            onClick={(e) => {
              e.preventDefault()
              window.scrollTo({ top: 0, behavior: 'smooth' })
              window.history.pushState(null, '', '/')
            }}
          >
            <div className="w-11 h-11 bg-gradient-to-br from-[#0A66C2] via-[#0077B5] to-[#004182] rounded-2xl flex items-center justify-center shadow-lg border border-white/20 backdrop-blur-xl relative overflow-hidden group-hover:scale-110 transition-transform duration-300">
              <div className="absolute inset-0 bg-gradient-to-br from-white/30 via-transparent to-transparent pointer-events-none"></div>
              <span className="text-white font-bold text-xl relative z-10">LI</span>
            </div>
            <span className="text-white font-bold text-xl hidden sm:block">
              LinkedINspire
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={(e) => handleSmoothScroll(e, item.href)}
                className={cn(
                  'px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 relative overflow-hidden group',
                  isActive(item.href)
                    ? 'text-white backdrop-blur-xl bg-gradient-to-r from-[#0A66C2] to-[#004182] shadow-lg border border-white/20'
                    : 'text-[#DCE6F1] backdrop-blur-xl hover:text-white hover:bg-white/10 border border-transparent hover:border-white/20'
                )}
              >
                {isActive(item.href) && (
                  <div className="absolute inset-0 bg-gradient-to-r from-white/20 via-transparent to-transparent pointer-events-none"></div>
                )}
                <span className="relative z-10">{item.name}</span>
              </Link>
            ))}
          </div>

          {/* CTA Button - Desktop */}
          <div className="hidden lg:block">
            <Button
              variant="primary"
              size="md"
              onClick={() => {
                const element = document.getElementById('contact')
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth', block: 'start' })
                }
              }}
            >
              Enroll Now
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden backdrop-blur-xl bg-white/10 p-2 rounded-xl border border-white/20 hover:bg-white/20 transition-all duration-300"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} className="text-white" /> : <Menu size={24} className="text-white" />}
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-white/10 animate-fade-in">
            <div className="space-y-2">
              {NAV_ITEMS.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleSmoothScroll(e, item.href)}
                  className={cn(
                    'block px-4 py-3 rounded-xl text-base font-medium transition-all duration-300 relative overflow-hidden',
                    isActive(item.href)
                      ? 'text-white backdrop-blur-xl bg-gradient-to-r from-[#0A66C2] to-[#004182] shadow-lg border border-white/20'
                      : 'text-[#DCE6F1] backdrop-blur-xl hover:text-white hover:bg-white/10 border border-transparent hover:border-white/20'
                  )}
                >
                  {isActive(item.href) && (
                    <div className="absolute inset-0 bg-gradient-to-r from-white/20 via-transparent to-transparent pointer-events-none"></div>
                  )}
                  <span className="relative z-10">{item.name}</span>
                </Link>
              ))}
              
              {/* Mobile CTA Button */}
              <div className="pt-4">
                <Button
                  variant="primary"
                  className="w-full"
                  onClick={() => {
                    setIsMobileMenuOpen(false)
                    const element = document.getElementById('contact')
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
                    }
                  }}
                >
                  Enroll Now
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
