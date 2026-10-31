import { ArrowUpRight, CalendarDays, Clock3 } from 'lucide-react'
import ActionLink from '@/components/ui/ActionLink'
import type { Session } from '@/lib/site-content'

export default function SessionCard({ session }: { session: Session }) {
  const actionHref = session.status === 'upcoming' ? session.registrationUrl : session.recordingUrl
  const actionLabel = session.status === 'upcoming' ? 'Register' : 'Watch recording'

  return (
    <article className="flex h-full flex-col rounded-2xl border border-[#dbe5ef] bg-white p-6 shadow-sm transition duration-200 hover:-translate-y-0.5 hover:shadow-md">
      <div className="flex flex-wrap items-center gap-2 text-xs font-semibold uppercase tracking-wide text-[#0A66C2]">
        <span className="rounded-full bg-[#eef6fd] px-3 py-1">{session.status === 'upcoming' ? 'Upcoming' : 'Past session'}</span>
        <span className="rounded-full bg-[#f2f5f8] px-3 py-1">LinkedINspire Live</span>
      </div>
      <h3 className="mt-5 text-xl font-bold leading-snug text-[#102a43]">{session.title}</h3>
      <p className="mt-3 text-sm leading-6 text-[#53677d]">{session.description}</p>
      <div className="mt-5 flex flex-wrap gap-x-5 gap-y-2 text-sm text-[#53677d]">
        <span className="inline-flex items-center gap-2"><CalendarDays size={16} aria-hidden="true" />{session.dateLabel}</span>
        <span className="inline-flex items-center gap-2"><Clock3 size={16} aria-hidden="true" />{session.duration}</span>
      </div>
      <p className="mt-4 text-sm font-semibold text-[#102a43]">With {session.speaker}</p>
      <div className="mt-4 flex flex-wrap gap-2">
        {session.topics.map((topic) => (
          <span key={topic} className="rounded-full border border-[#dbe5ef] px-3 py-1 text-xs text-[#53677d]">{topic}</span>
        ))}
      </div>
      <div className="mt-auto pt-6">
        {actionHref ? (
          <ActionLink href={actionHref} external variant="secondary" size="sm">
            {actionLabel}<ArrowUpRight size={15} aria-hidden="true" />
          </ActionLink>
        ) : (
          <p className="text-sm text-[#687b8c]">
            {session.status === 'upcoming' ? 'Registration details are not published yet.' : 'A recording link is not available yet.'}
          </p>
        )}
      </div>
    </article>
  )
}
