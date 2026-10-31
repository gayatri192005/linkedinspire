'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { ChevronDown, LogOut, Menu, X } from 'lucide-react'
import ActionLink from '@/components/ui/ActionLink'
import BrandMark from '@/components/layout/BrandMark'
import { useAuth } from '@/context/authContext'
import { LINKTREE_URL } from '@/lib/site-content'

const primaryLinks = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about' },
  { label: 'Contact', href: '/contact' },
]

const navigationGroups = [
  {
    label: 'Programs',
    links: [
      { label: 'All programs', href: '/programs' },
      { label: 'LinkedINspire Live', href: '/sessions' },
      { label: 'Campus Connect', href: '/campus-connect' },
    ],
  },
  {
    label: 'Learn',
    links: [
      { label: 'Learning resources', href: '/learn' },
      { label: 'Sessions & recordings', href: '/sessions' },
      { label: 'Blog & insights', href: '/blog' },
      { label: 'Meet the speakers', href: '/speakers' },
    ],
  },
  {
    label: 'Community',
    links: [
      { label: 'Join the community', href: '/community' },
      { label: 'Our team', href: '/team' },
      { label: 'Frequently asked questions', href: '/faq' },
    ],
  },
  {
    label: 'Collaborate',
    links: [
      { label: 'Partner with us', href: '/collaborate' },
      { label: 'For colleges', href: '/campus-connect' },
      { label: 'Become a speaker', href: '/speakers' },
    ],
  },
]

function pathIsActive(pathname: string, href: string) {
  return href === '/' ? pathname === '/' : pathname === href || pathname.startsWith(`${href}/`)
}

export default function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [openGroup, setOpenGroup] = useState<string | null>(null)
  const pathname = usePathname()
  const router = useRouter()
  const { user, signOut, loading } = useAuth()

  useEffect(() => {
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsMobileMenuOpen(false)
        setOpenGroup(null)
      }
    }
    window.addEventListener('keydown', closeOnEscape)
    return () => window.removeEventListener('keydown', closeOnEscape)
  }, [])

  const closeNavigation = () => {
    setIsMobileMenuOpen(false)
    setOpenGroup(null)
  }

  const handleSignOut = async () => {
    await signOut()
    closeNavigation()
    router.push('/')
  }

  const renderGroupLink = (link: { label: string; href: string }) => (
    <Link
      key={`${link.label}-${link.href}`}
      href={link.href}
      onClick={closeNavigation}
      aria-current={pathIsActive(pathname, link.href) ? 'page' : undefined}
      className="block rounded-lg px-3 py-2 text-sm text-[#42566b] transition hover:bg-[#eef6fd] hover:text-[#004182] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0A66C2]"
    >
      {link.label}
    </Link>
  )

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-[#dbe5ef] bg-white/95 shadow-sm backdrop-blur-md">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-[76px] items-center justify-between gap-4">
          <BrandMark priority compact />

          <nav aria-label="Primary navigation" className="hidden items-center gap-0.5 min-[900px]:flex">
            {primaryLinks.slice(1, 2).map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={closeNavigation}
                aria-current={pathIsActive(pathname, item.href) ? 'page' : undefined}
                className={`rounded-full px-2 py-2 text-[13px] font-medium transition hover:bg-[#eef6fd] hover:text-[#004182] ${pathIsActive(pathname, item.href) ? 'text-[#0A66C2]' : 'text-[#42566b]'}`}
              >
                {item.label}
              </Link>
            ))}
            {navigationGroups.map((group) => {
              const isOpen = openGroup === group.label
              const groupIsActive = group.links.some((item) => pathIsActive(pathname, item.href))
              const menuId = `desktop-${group.label.toLowerCase()}-menu`
              return (
                <div className="relative" key={group.label}>
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={menuId}
                    onClick={() => setOpenGroup(isOpen ? null : group.label)}
                    className={`inline-flex items-center gap-1 rounded-full px-2 py-2 text-[13px] font-medium transition hover:bg-[#eef6fd] hover:text-[#004182] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0A66C2] ${groupIsActive ? 'text-[#0A66C2]' : 'text-[#42566b]'}`}
                  >
                    {group.label}
                    <ChevronDown size={15} aria-hidden="true" />
                  </button>
                  {isOpen ? (
                    <div id={menuId} className="absolute left-0 top-full z-20 mt-2 w-60 rounded-2xl border border-[#dbe5ef] bg-white p-2 shadow-xl">
                      {group.links.map((link) => renderGroupLink(link))}
                    </div>
                  ) : null}
                </div>
              )
            })}
            <Link
              href={primaryLinks[2].href}
              onClick={closeNavigation}
              aria-current={pathIsActive(pathname, primaryLinks[2].href) ? 'page' : undefined}
              className={`rounded-full px-2 py-2 text-[13px] font-medium transition hover:bg-[#eef6fd] hover:text-[#004182] ${pathIsActive(pathname, primaryLinks[2].href) ? 'text-[#0A66C2]' : 'text-[#42566b]'}`}
            >
              Contact
            </Link>
          </nav>

          <div className="hidden shrink-0 items-center gap-3 min-[900px]:flex">
            {loading ? null : user ? (
              <>
                <Link href="/home" className="hidden text-sm font-semibold text-[#42566b] hover:text-[#0A66C2] 2xl:block">Dashboard</Link>
                <button type="button" onClick={handleSignOut} className="hidden items-center gap-1 text-sm font-semibold text-[#42566b] hover:text-[#0A66C2] 2xl:inline-flex">
                  <LogOut size={15} aria-hidden="true" />
                  Sign out
                </button>
              </>
            ) : (
              <Link href="/login" className="hidden text-sm font-semibold text-[#42566b] hover:text-[#0A66C2] 2xl:block">Sign in</Link>
            )}
            <ActionLink href={LINKTREE_URL} external size="sm">Join our community</ActionLink>
          </div>

          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[#dbe5ef] bg-white text-[#102a43] transition hover:bg-[#eef6fd] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0A66C2] min-[900px]:hidden"
            onClick={() => setIsMobileMenuOpen((open) => !open)}
            aria-label={isMobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-navigation"
          >
            {isMobileMenuOpen ? <X size={21} aria-hidden="true" /> : <Menu size={21} aria-hidden="true" />}
          </button>
        </div>

        {isMobileMenuOpen ? (
          <nav id="mobile-navigation" aria-label="Mobile navigation" className="max-h-[calc(100dvh-76px)] overflow-y-auto border-t border-[#e5edf4] py-4 min-[900px]:hidden">
            <div className="space-y-1">
              {primaryLinks.slice(0, 2).map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={closeNavigation}
                  aria-current={pathIsActive(pathname, item.href) ? 'page' : undefined}
                  className="block rounded-xl px-3 py-3 text-sm font-semibold text-[#42566b] hover:bg-[#eef6fd] hover:text-[#004182]"
                >
                  {item.label}
                </Link>
              ))}
              {navigationGroups.map((group) => {
                const isOpen = openGroup === group.label
                const menuId = `mobile-${group.label.toLowerCase()}-menu`
                return (
                  <div className="rounded-xl" key={group.label}>
                    <button
                      type="button"
                      onClick={() => setOpenGroup(isOpen ? null : group.label)}
                      aria-expanded={isOpen}
                      aria-controls={menuId}
                      className="flex w-full items-center justify-between rounded-xl px-3 py-3 text-left text-sm font-semibold text-[#42566b] hover:bg-[#eef6fd] hover:text-[#004182]"
                    >
                      {group.label}
                      <ChevronDown size={16} className={`transition-transform ${isOpen ? 'rotate-180' : ''}`} aria-hidden="true" />
                    </button>
                    {isOpen ? <div id={menuId} className="space-y-1 pb-2 pl-3">{group.links.map((link) => renderGroupLink(link))}</div> : null}
                  </div>
                )
              })}
              <Link
                href="/contact"
                onClick={closeNavigation}
                aria-current={pathIsActive(pathname, '/contact') ? 'page' : undefined}
                className="block rounded-xl px-3 py-3 text-sm font-semibold text-[#42566b] hover:bg-[#eef6fd] hover:text-[#004182]"
              >
                Contact
              </Link>
              <div className="grid gap-3 border-t border-[#e5edf4] pt-4">
                {loading ? null : user ? (
                  <>
                    <Link href="/home" onClick={closeNavigation} className="rounded-xl px-3 py-3 text-sm font-semibold text-[#42566b] hover:bg-[#eef6fd]">Dashboard</Link>
                    <button type="button" onClick={handleSignOut} className="flex items-center gap-2 rounded-xl px-3 py-3 text-left text-sm font-semibold text-[#42566b] hover:bg-[#eef6fd]">
                      <LogOut size={16} aria-hidden="true" /> Sign out
                    </button>
                  </>
                ) : (
                  <>
                    <Link href="/login" onClick={closeNavigation} className="rounded-xl px-3 py-3 text-sm font-semibold text-[#42566b] hover:bg-[#eef6fd]">Sign in</Link>
                    <Link href="/signup" onClick={closeNavigation} className="rounded-xl px-3 py-3 text-sm font-semibold text-[#42566b] hover:bg-[#eef6fd]">Create an account</Link>
                  </>
                )}
                <ActionLink href={LINKTREE_URL} external size="md" className="w-full" onClick={closeNavigation}>Join our community</ActionLink>
              </div>
            </div>
          </nav>
        ) : null}
      </div>
    </header>
  )
}
