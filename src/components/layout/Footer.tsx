import Link from 'next/link'
import BrandMark from '@/components/layout/BrandMark'
import { CONTACT_EMAIL, LINKEDIN_COMPANY_URL, LINKTREE_URL } from '@/lib/site-content'

const linkGroups = [
  {
    title: 'Company',
    links: [
      { label: 'About us', href: '/about' },
      { label: 'Our team', href: '/team' },
      { label: 'Contact', href: '/contact' },
    ],
  },
  {
    title: 'Programs',
    links: [
      { label: 'LinkedINspire Live', href: '/sessions' },
      { label: 'Campus Connect', href: '/campus-connect' },
      { label: 'Creator Community', href: '/community' },
      { label: 'Mentorship & feedback', href: '/programs#mentorship' },
    ],
  },
  {
    title: 'Explore',
    links: [
      { label: 'Learning resources', href: '/learn' },
      { label: 'Blog & insights', href: '/blog' },
      { label: 'Speakers', href: '/speakers' },
      { label: 'FAQ', href: '/faq' },
    ],
  },
  {
    title: 'Legal',
    links: [
      { label: 'Privacy', href: '/privacy' },
      { label: 'Terms', href: '/terms' },
    ],
  },
]

export default function Footer() {
  return (
    <footer className="bg-[#102a43] text-white">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-14">
        <div className="grid gap-10 border-b border-white/15 pb-10 sm:grid-cols-2 lg:grid-cols-[1.4fr_repeat(4,minmax(0,1fr))]">
          <div className="max-w-sm">
            <BrandMark />
            <p className="mt-5 text-sm leading-6 text-[#d8e3ed]">
              A community helping students and professionals build their personal brands, grow their networks, and discover opportunities through LinkedIn.
            </p>
            <div className="mt-5 flex flex-col items-start gap-2 text-sm">
              <a href={`mailto:${CONTACT_EMAIL}`} className="text-[#d8e3ed] underline decoration-white/30 underline-offset-4 transition hover:text-white">
                {CONTACT_EMAIL}
              </a>
              <a href={LINKTREE_URL} target="_blank" rel="noopener noreferrer" className="text-[#d8e3ed] underline decoration-white/30 underline-offset-4 transition hover:text-white">
                Linktree community
              </a>
              <a href={LINKEDIN_COMPANY_URL} target="_blank" rel="noopener noreferrer" className="text-[#d8e3ed] underline decoration-white/30 underline-offset-4 transition hover:text-white">
                LinkedIn company page
              </a>
            </div>
          </div>

          {linkGroups.map((group) => (
            <div key={group.title}>
              <h2 className="text-sm font-semibold tracking-wide text-white">{group.title}</h2>
              <ul className="mt-4 space-y-3">
                {group.links.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-sm text-[#d8e3ed] transition hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex flex-col gap-3 pt-6 text-sm text-[#d8e3ed] sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 LinkedINspire Community.</p>
          <p>Learn. Connect. Grow.</p>
        </div>
      </div>
    </footer>
  )
}
