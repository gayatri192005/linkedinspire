import type { Metadata } from 'next'
import { Rethink_Sans } from 'next/font/google'
import './globals.css'
import Navigation from '@/components/layout/Navigation'
import Footer from '@/components/layout/Footer'

const rethinkSans = Rethink_Sans({ 
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  style: ['normal', 'italic'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'LinkedINspire - Connecting Learners with LinkedIn Leaders',
  description: 'A community driven initiative to help students & professionals build their LinkedIn presence, grow their network & get inspired',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${rethinkSans.className} overflow-x-hidden`}>
        <Navigation />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
