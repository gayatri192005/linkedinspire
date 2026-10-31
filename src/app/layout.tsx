import type { Metadata } from 'next'
import { Rethink_Sans } from 'next/font/google'
import './globals.css'
import Navigation from '@/components/layout/Navigation'
import Footer from '@/components/layout/Footer'
import ErrorBoundary from '@/components/ui/ErrorBoundary'
import { AuthProvider } from '@/context/authContext'

const rethinkSans = Rethink_Sans({ 
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  style: ['normal', 'italic'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'LinkedINspire - Connecting Learners with LinkedIn Leaders',
  description: 'A community driven initiative to help students & professionals build their LinkedIn presence, grow their network & get inspired',
  metadataBase: new URL('https://linkedinspire.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'LinkedINspire - Connecting Learners with LinkedIn Leaders',
    description: 'A community driven initiative to help students & professionals build their LinkedIn presence, grow their network & get inspired',
    url: 'https://linkedinspire.com',
    siteName: 'LinkedINspire',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'LinkedINspire - Connecting Learners with LinkedIn Leaders',
    description: 'A community driven initiative to help students & professionals build their LinkedIn presence, grow their network & get inspired',
  },
  robots: {
    index: true,
    follow: true,
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'LinkedINspire',
  description: 'A community driven initiative to help students & professionals build their LinkedIn presence, grow their network & get inspired',
  url: 'https://linkedinspire.com',
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
      <body className={`${rethinkSans.className} overflow-x-hidden`}>
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
