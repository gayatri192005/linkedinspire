'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X, User, LogOut } from 'lucide-react'
import { cn } from '@/lib/utils'
import Button from '@/components/ui/Button'
import { apiService } from '@/lib/api'

const NAV_ITEMS = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '#about' },
  { name: 'Sessions', href: '#sessions' },
  { name: 'Speakers', href: '#speakers' },
  { name: 'Campus Connect', href: '#campus-connect' },
  { name: 'Team', href: '#team' },
  { name: 'Contact', href: '#contact' },
]

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('')
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [currentUser, setCurrentUser] = useState<any>(null)
  const pathname = usePathname()

  // Enhanced scroll effect with threshold
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Check authentication status
  useEffect(() => {
    const checkAuth = () => {
      const authenticated = apiService.isAuthenticated()
      setIsAuthenticated(authenticated)
      if (authenticated) {
        setCurrentUser(apiService.getCurrentUser())
      }
    }

    checkAuth()

    // Listen for storage changes (for cross-tab sync)
    const handleStorageChange = () => {
      checkAuth()
    }

    window.addEventListener('storage', handleStorageChange)
    return () => window.removeEventListener('storage', handleStorageChange)
  }, [])

  // Track active section with Intersection Observer
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

  // Handle logout
  const handleLogout = async () => {
    try {
      await apiService.logout()
      window.location.href = '/'
    } catch (error) {
      console.error('Logout error:', error)
      // Even if logout fails, clear local storage and redirect
      localStorage.removeItem('token')
      localStorage.removeItem('user')
      localStorage.removeItem('isLoggedIn')
      window.location.href = '/'
    }
  }

  return (
    <nav
      className={cn(
        'fixed top-0 w-full z-50 transition-all duration-500',
        isScrolled
          ? 'backdrop-blur-2xl bg-white/95 shadow-[0_8px_32px_rgba(0,0,0,0.15)] border-b border-gray-200/50'
          : 'backdrop-blur-xl bg-gradient-to-r from-gray-900/95 via-gray-800/95 to-gray-900/95 border-b border-white/10'
      )}
    >
      {/* Gradient overlay for enhanced glass effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
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
            <div className="w-11 h-11 bg-gradient-to-br from-amber-400/90 via-yellow-500/80 to-orange-500/90 rounded-2xl flex items-center justify-center shadow-[0_8px_32px_rgba(251,191,36,0.4)] border border-white/30 backdrop-blur-xl relative overflow-hidden group-hover:scale-110 group-hover:shadow-[0_12px_48px_rgba(251,191,36,0.6)] transition-all duration-500">
              <div className="absolute inset-0 bg-gradient-to-br from-white/40 via-white/10 to-transparent pointer-events-none"></div>
              <div className="absolute inset-0 bg-gradient-to-tl from-white/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <svg className="w-6 h-6 text-white relative z-10 drop-shadow-lg" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>
            <span className={cn(
              "font-bold text-xl hidden sm:block drop-shadow-lg rethink-sans-bold transition-colors duration-500",
              isScrolled ? "text-gray-900" : "text-white"
            )}>
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
                  'px-4 py-2 rounded-xl text-sm rethink-sans-medium transition-all duration-500 relative overflow-hidden group',
                  isActive(item.href)
                    ? isScrolled
                      ? 'text-white backdrop-blur-xl bg-gradient-to-r from-[#0A66C2]/90 to-[#004182]/90 shadow-[0_4px_24px_rgba(10,102,194,0.3)] border border-white/30'
                      : 'text-white backdrop-blur-xl bg-gradient-to-r from-[#0A66C2]/80 to-[#004182]/80 shadow-[0_4px_24px_rgba(10,102,194,0.3)] border border-white/30'
                    : isScrolled
                      ? 'text-gray-700 backdrop-blur-xl hover:text-gray-900 bg-white/60 hover:bg-white/80 border border-gray-200/50 hover:border-gray-300/70 hover:shadow-[0_4px_24px_rgba(0,0,0,0.1)]'
                      : 'text-white/90 backdrop-blur-xl hover:text-white bg-white/10 hover:bg-white/20 border border-white/20 hover:border-white/40 hover:shadow-[0_4px_24px_rgba(255,255,255,0.1)]'
                )}
              >
                {isActive(item.href) && (
                  <div className="absolute inset-0 bg-gradient-to-r from-white/30 via-white/10 to-transparent pointer-events-none"></div>
                )}
                <span className="relative z-10">{item.name}</span>
                <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </Link>
            ))}
          </div>

          {/* Auth Buttons - Desktop */}
          <div className="hidden lg:flex items-center space-x-3">
            {isAuthenticated ? (
              <>
                {/* User Menu */}
                <div className="flex items-center space-x-3">
                  <div className="flex items-center space-x-2 px-3 py-2 rounded-xl bg-white/10 backdrop-blur-xl border border-white/20">
                    <User size={16} className={cn("drop-shadow-lg", isScrolled ? "text-gray-700" : "text-white")} />
                    <span className={cn("text-sm font-medium rethink-sans-medium", isScrolled ? "text-gray-700" : "text-white")}>
                      {currentUser?.name?.split(' ')[0] || 'User'}
                    </span>
                  </div>
                  <Button
                    variant="outline"
                    size="md"
                    className={cn(
                      "backdrop-blur-xl transition-all duration-500",
                      isScrolled
                        ? "bg-gray-100/80 hover:bg-gray-200/80 text-gray-700 border-gray-300/50 hover:border-gray-400/70 shadow-[0_4px_16px_rgba(0,0,0,0.1)] hover:shadow-[0_8px_32px_rgba(0,0,0,0.15)]"
                        : "bg-white/10 hover:bg-white/20 text-white border-white/30 hover:border-white/50 shadow-[0_4px_16px_rgba(255,255,255,0.1)] hover:shadow-[0_8px_32px_rgba(255,255,255,0.2)]"
                    )}
                    onClick={() => window.location.href = '/dashboard'}
                  >
                    Dashboard
                  </Button>
                  <Button
                    variant="outline"
                    size="md"
                    className={cn(
                      "backdrop-blur-xl transition-all duration-500 flex items-center space-x-2",
                      isScrolled
                        ? "bg-red-100/80 hover:bg-red-200/80 text-red-700 border-red-300/50 hover:border-red-400/70 shadow-[0_4px_16px_rgba(0,0,0,0.1)] hover:shadow-[0_8px_32px_rgba(0,0,0,0.15)]"
                        : "bg-red-500/20 hover:bg-red-500/30 text-white border-red-400/30 hover:border-red-400/50 shadow-[0_4px_16px_rgba(255,255,255,0.1)] hover:shadow-[0_8px_32px_rgba(255,255,255,0.2)]"
                    )}
                    onClick={handleLogout}
                  >
                    <LogOut size={16} />
                    <span>Logout</span>
                  </Button>
                </div>
              </>
            ) : (
              <>
                <Button
                  variant="outline"
                  size="md"
                  className={cn(
                    "backdrop-blur-xl transition-all duration-500",
                    isScrolled
                      ? "bg-gray-100/80 hover:bg-gray-200/80 text-gray-700 border-gray-300/50 hover:border-gray-400/70 shadow-[0_4px_16px_rgba(0,0,0,0.1)] hover:shadow-[0_8px_32px_rgba(0,0,0,0.15)]"
                      : "bg-white/10 hover:bg-white/20 text-white border-white/30 hover:border-white/50 shadow-[0_4px_16px_rgba(255,255,255,0.1)] hover:shadow-[0_8px_32px_rgba(255,255,255,0.2)]"
                  )}
                  onClick={() => window.location.href = '/login'}
                >
                  Login
                </Button>
                <Button
                  variant="primary"
                  size="md"
                  className="backdrop-blur-xl bg-gradient-to-r from-[#0A66C2]/90 to-[#0077B5]/90 hover:from-[#0A66C2] hover:to-[#0077B5] border border-white/20 shadow-[0_8px_32px_rgba(10,102,194,0.3)] hover:shadow-[0_12px_48px_rgba(10,102,194,0.5)] transition-all duration-500"
                  onClick={() => window.location.href = '/signup'}
                >
                  Sign Up
                </Button>
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            className={cn(
              "lg:hidden backdrop-blur-xl p-2 rounded-xl border transition-all duration-500 shadow-lg hover:shadow-xl",
              isScrolled
                ? "bg-gray-100/80 hover:bg-gray-200/80 text-gray-700 border-gray-300/50 hover:border-gray-400/70"
                : "bg-white/10 hover:bg-white/20 text-white border-white/20 hover:border-white/40"
            )}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X size={24} className={cn("drop-shadow-lg", isScrolled ? "text-gray-700" : "text-white")} />
            ) : (
              <Menu size={24} className={cn("drop-shadow-lg", isScrolled ? "text-gray-700" : "text-white")} />
            )}
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <div className={cn(
            "lg:hidden py-4 border-t animate-fade-in backdrop-blur-2xl",
            isScrolled
              ? "border-gray-200/50 bg-white/95"
              : "border-white/10 bg-gray-900/95"
          )}>
            <div className="space-y-2">
              {NAV_ITEMS.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleSmoothScroll(e, item.href)}
                  className={cn(
                    'block px-4 py-3 rounded-xl text-base font-medium transition-all duration-500 relative overflow-hidden group',
                    isActive(item.href)
                      ? 'text-white backdrop-blur-xl bg-gradient-to-r from-[#0A66C2]/80 to-[#004182]/80 shadow-[0_4px_24px_rgba(10,102,194,0.3)] border border-white/30'
                      : isScrolled
                        ? 'text-gray-700 backdrop-blur-xl hover:text-gray-900 bg-white/60 hover:bg-white/80 border border-gray-200/50 hover:border-gray-300/70 hover:shadow-[0_4px_24px_rgba(0,0,0,0.1)]'
                        : 'text-white/90 backdrop-blur-xl hover:text-white bg-white/10 hover:bg-white/20 border border-white/20 hover:border-white/40 hover:shadow-[0_4px_24px_rgba(255,255,255,0.1)]'
                  )}
                >
                  {isActive(item.href) && (
                    <div className="absolute inset-0 bg-gradient-to-r from-white/30 via-white/10 to-transparent pointer-events-none"></div>
                  )}
                  <span className="relative z-10">{item.name}</span>
                  <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </Link>
              ))}
              
              {/* Mobile Auth Buttons */}
              <div className="pt-4 space-y-3">
                {isAuthenticated ? (
                  <>
                    {/* User Info */}
                    <div className="px-4 py-3 rounded-xl bg-white/10 backdrop-blur-xl border border-white/20">
                      <div className="flex items-center space-x-3">
                        <User size={20} className="text-white" />
                        <div>
                          <p className="text-white font-medium">{currentUser?.name || 'User'}</p>
                          <p className="text-white/80 text-sm">{currentUser?.email}</p>
                        </div>
                      </div>
                    </div>
                    
                    <Button
                      variant="outline"
                      className="w-full backdrop-blur-xl bg-white/10 hover:bg-white/20 text-white border-white/30 hover:border-white/50 shadow-[0_4px_16px_rgba(255,255,255,0.1)] hover:shadow-[0_8px_32px_rgba(255,255,255,0.2)] transition-all duration-500"
                      onClick={() => {
                        setIsMobileMenuOpen(false)
                        window.location.href = '/dashboard'
                      }}
                    >
                      Dashboard
                    </Button>
                    <Button
                      variant="outline"
                      className="w-full backdrop-blur-xl bg-red-500/20 hover:bg-red-500/30 text-white border-red-400/30 hover:border-red-400/50 shadow-[0_4px_16px_rgba(255,255,255,0.1)] hover:shadow-[0_8px_32px_rgba(255,255,255,0.2)] transition-all duration-500 flex items-center justify-center space-x-2"
                      onClick={() => {
                        setIsMobileMenuOpen(false)
                        handleLogout()
                      }}
                    >
                      <LogOut size={16} />
                      <span>Logout</span>
                    </Button>
                  </>
                ) : (
                  <>
                    <Button
                      variant="outline"
                      className="w-full backdrop-blur-xl bg-white/10 hover:bg-white/20 text-white border-white/30 hover:border-white/50 shadow-[0_4px_16px_rgba(255,255,255,0.1)] hover:shadow-[0_8px_32px_rgba(255,255,255,0.2)] transition-all duration-500"
                      onClick={() => {
                        setIsMobileMenuOpen(false)
                        window.location.href = '/login'
                      }}
                    >
                      Login
                    </Button>
                    <Button
                      variant="primary"
                      className="w-full backdrop-blur-xl bg-gradient-to-r from-[#0A66C2]/90 to-[#0077B5]/90 hover:from-[#0A66C2] hover:to-[#0077B5] border border-white/20 shadow-[0_8px_32px_rgba(10,102,194,0.3)] hover:shadow-[0_12px_48px_rgba(10,102,194,0.5)] transition-all duration-500"
                      onClick={() => {
                        setIsMobileMenuOpen(false)
                        window.location.href = '/signup'
                      }}
                    >
                      Sign Up
                    </Button>
                  </>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
