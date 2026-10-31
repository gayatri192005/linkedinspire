import type { Metadata } from 'next'
import { LOGO_URL, SITE_URL } from '@/lib/site-content'

export function createPageMetadata(title: string, description: string, path: string): Metadata {
  const url = `${SITE_URL}${path}`
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title: `${title} | LinkedINspire`,
      description,
      type: 'website',
      url,
      siteName: 'LinkedINspire',
      images: [{ url: LOGO_URL, alt: 'LinkedINspire logo' }],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${title} | LinkedINspire`,
      description,
      images: [LOGO_URL],
    },
  }
}
