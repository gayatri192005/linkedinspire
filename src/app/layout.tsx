import type { Metadata, Viewport } from 'next'
import { Rethink_Sans } from 'next/font/google'
import './globals.css'
import Navigation from '@/components/layout/Navigation'
import Footer from '@/components/layout/Footer'
import ErrorBoundary from '@/components/ui/ErrorBoundary'
import { AuthProvider } from '@/context/authContext'

const rethinkSans = Rethink_Sans({
  variable: '--font-rethink',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  style: ['normal', 'italic'],
  display: 'swap',
})

const siteDescription = 'A community-driven initiative helping students and professionals build their personal brands, grow their networks, and discover opportunities through LinkedIn.'
const logoUrl = 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/LINKEDINSPIRE%20logo-oBsZN5cVkzuUkqMl7WSsBYCm92T0NX.jpeg'

export const metadata: Metadata = {
  metadataBase: new URL('https://linkedinspire.com'),
  title: {
    default: 'LinkedINspire | Your LinkedIn Growth Starts Here',
    template: '%s | LinkedINspire',
  },
  description: siteDescription,
  keywords: ['LinkedIn', 'personal branding', 'professional growth', 'community', 'campus network'],
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'LinkedINspire | Your LinkedIn Growth Starts Here',
    description: siteDescription,
    url: 'https://linkedinspire.com',
    siteName: 'LinkedINspire',
    locale: 'en_US',
    type: 'website',
    images: [{ url: logoUrl, alt: 'LinkedINspire logo' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'LinkedINspire | Your LinkedIn Growth Starts Here',
    description: siteDescription,
    images: [logoUrl],
  },
  robots: {
    index: true,
    follow: true,
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#0A66C2',
  colorScheme: 'light',
  userScalable: true,
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'LinkedINspire',
  description: siteDescription,
  url: 'https://linkedinspire.com',
  logo: logoUrl,
  sameAs: ['https://www.linkedin.com/company/linkedinspiregm/'],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth" data-scroll-behavior="smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${rethinkSans.variable} ${rethinkSans.className} overflow-x-hidden`}>
        <ErrorBoundary>
          <AuthProvider>
            <Navigation />
            <main className="min-h-screen">{children}</main>
            <Footer />
          </AuthProvider>
        </ErrorBoundary>
      </body>
    </html>
  )
}
