import type { Metadata } from 'next'
import { ArrowRight } from 'lucide-react'
import ActionLink from '@/components/ui/ActionLink'
import PageIntro from '@/components/ui/PageIntro'
import SpeakerCard from '@/components/ui/SpeakerCard'
import { speakers } from '@/lib/site-content'
import { createPageMetadata } from '@/lib/seo'

export const metadata: Metadata = createPageMetadata(
  'Speakers',
  'Meet the LinkedINspire session speakers and find out how to apply or nominate a speaker.',
  '/speakers',
)

export default function SpeakersPage() {
  return (
    <>
      <PageIntro
        eyebrow="Speakers"
        title="Learn from people sharing their experience."
        description="Explore the speakers named in LinkedINspire session information. Profiles contain no follower counts or claims that are not needed to introduce their work."
        align="center"
      />
      <section className="bg-white py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="mb-7 rounded-xl border border-[#dbe5ef] bg-[#f7f9fc] px-4 py-3 text-sm leading-6 text-[#53677d]">
            Approved speaker portraits are not available yet. Initials are used instead of synthetic profile photos.
          </p>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {speakers.map((speaker) => <SpeakerCard key={speaker.name} speaker={speaker} />)}
          </div>
          <div className="mt-12 rounded-2xl bg-[#102a43] p-7 text-white sm:p-9">
            <h2 className="text-2xl font-bold">Share what you know—or nominate someone who should.</h2>
            <p className="mt-3 max-w-2xl text-sm leading-6 text-[#d8e3ed]">The team will review your note by email. This site does not store applications or nominations.</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <ActionLink href="/contact?topic=speaker-application" variant="secondary">Apply to speak<ArrowRight size={15} aria-hidden="true" /></ActionLink>
              <ActionLink href="/contact?topic=speaker-nomination" variant="outline" className="border-white/50 text-white hover:bg-white hover:text-[#102a43]">Nominate a speaker</ActionLink>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
