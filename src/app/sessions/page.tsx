import type { Metadata } from 'next'
import PageIntro from '@/components/ui/PageIntro'
import SessionsDirectory from '@/components/sections/SessionsDirectory'
import { createPageMetadata } from '@/lib/seo'

export const metadata: Metadata = createPageMetadata(
  'Sessions and recordings',
  'Search LinkedINspire sessions by topic and status. Historical 2025 sessions are listed as past sessions.',
  '/sessions',
)

export default function SessionsPage() {
  return (
    <>
      <PageIntro
        eyebrow="LinkedINspire Live"
        title="Sessions, ideas, and learning in one place."
        description="Explore past sessions by topic. Dates from 2025 are shown as completed, and registration or recording actions appear only when a real link is available."
        align="center"
      />
      <section className="bg-[#f7f9fc] py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SessionsDirectory />
        </div>
      </section>
    </>
  )
}
