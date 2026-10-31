import ActionLink from '@/components/ui/ActionLink'
import SectionHeading from '@/components/ui/SectionHeading'
import SpeakerCard from '@/components/ui/SpeakerCard'
import { speakers } from '@/lib/site-content'

export default function SpeakersSection() {
  return (
    <section id="speakers" className="scroll-mt-24 bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Meet the speakers"
          title="Ideas and experience worth learning from."
          description="Meet the people featured in LinkedINspire sessions. Speaker details are limited to information already shared by the community."
        />
        <p className="mt-5 text-center text-sm text-[#687b8c]">Approved speaker portraits are not available yet, so this page does not use synthetic profile photos.</p>
        <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {speakers.slice(0, 3).map((speaker) => <SpeakerCard key={speaker.name} speaker={speaker} />)}
        </div>
        <div className="mt-8 text-center">
          <ActionLink href="/speakers" variant="secondary">Meet all speakers</ActionLink>
        </div>
      </div>
    </section>
  )
}
