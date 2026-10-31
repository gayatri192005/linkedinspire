import { ArrowUpRight, UserRound } from 'lucide-react'
import type { Speaker } from '@/lib/site-content'

export default function SpeakerCard({ speaker }: { speaker: Speaker }) {
  const initials = speaker.name.split(' ').map((part) => part[0]).slice(0, 2).join('').toUpperCase()

  return (
    <article className="flex h-full flex-col rounded-2xl border border-[#dbe5ef] bg-white p-6 shadow-sm transition duration-200 hover:-translate-y-0.5 hover:shadow-md">
      <div className="flex items-start gap-4">
        <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#eaf3fb] text-lg font-bold text-[#0A66C2]" aria-hidden="true">
          {initials || <UserRound size={22} aria-hidden="true" />}
        </div>
        <div className="min-w-0">
          <h3 className="text-lg font-bold leading-snug text-[#102a43]">{speaker.name}</h3>
          <p className="mt-1 text-sm font-medium text-[#0A66C2]">{speaker.role}</p>
        </div>
      </div>
      <p className="mt-5 text-sm leading-6 text-[#53677d]">{speaker.bio}</p>
      <div className="mt-5 flex flex-wrap gap-2">
        {speaker.expertise.map((skill) => (
          <span key={skill} className="rounded-full bg-[#f2f6fa] px-3 py-1 text-xs text-[#42566b]">{skill}</span>
        ))}
      </div>
      {speaker.linkedin ? (
        <a
          href={speaker.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-auto inline-flex items-center gap-2 pt-6 text-sm font-semibold text-[#0A66C2] underline decoration-[#0A66C2]/30 underline-offset-4 hover:text-[#004182]"
        >
          LinkedIn profile<ArrowUpRight size={15} aria-hidden="true" />
        </a>
      ) : (
        <p className="mt-auto pt-6 text-sm text-[#687b8c]">Profile link not provided.</p>
      )}
    </article>
  )
}
