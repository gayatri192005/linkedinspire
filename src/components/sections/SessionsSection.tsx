import ActionLink from '@/components/ui/ActionLink'
import SectionHeading from '@/components/ui/SectionHeading'
import SessionCard from '@/components/ui/SessionCard'
import { sessions } from '@/lib/site-content'

export default function SessionsSection() {
  return (
    <section id="sessions" className="scroll-mt-24 bg-[#f7f9fc] py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="LinkedINspire Live"
          title="Learn from people doing the work."
          description="Browse past sessions and the topics shared by the community. Registration and recording links appear only when they are available."
        />
        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {sessions.slice(0, 3).map((session) => <SessionCard key={session.id} session={session} />)}
        </div>
        <div className="mt-8 text-center">
          <ActionLink href="/sessions" variant="secondary">Browse all sessions</ActionLink>
        </div>
      </div>
    </section>
  )
}
