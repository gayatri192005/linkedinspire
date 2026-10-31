'use client'

import { useMemo, useState } from 'react'
import { Search } from 'lucide-react'
import SessionCard from '@/components/ui/SessionCard'
import { sessions } from '@/lib/site-content'

const statusOptions = [
  { value: 'all', label: 'All sessions' },
  { value: 'upcoming', label: 'Upcoming' },
  { value: 'past', label: 'Past sessions' },
  { value: 'recordings', label: 'Recordings' },
]

const topics = ['All topics', ...Array.from(new Set(sessions.flatMap((session) => session.topics))).sort()]

export default function SessionsDirectory() {
  const [query, setQuery] = useState('')
  const [status, setStatus] = useState('past')
  const [topic, setTopic] = useState('All topics')

  const filteredSessions = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase()
    return sessions.filter((session) => {
      const matchesStatus = status === 'all' || (status === 'recordings' ? Boolean(session.recordingUrl) : session.status === status)
      const matchesTopic = topic === 'All topics' || session.topics.includes(topic)
      const searchableText = `${session.title} ${session.speaker} ${session.description} ${session.topics.join(' ')}`.toLowerCase()
      return matchesStatus && matchesTopic && (!normalizedQuery || searchableText.includes(normalizedQuery))
    })
  }, [query, status, topic])

  const emptyMessage = status === 'upcoming'
    ? 'No upcoming sessions have been announced yet. Check back for new dates.'
    : status === 'recordings'
      ? 'There are no session recordings published yet. Recording links will appear here when available.'
      : 'No sessions match those filters. Try another topic or search term.'

  return (
    <div>
      <div className="grid gap-4 rounded-2xl border border-[#dbe5ef] bg-white p-4 shadow-sm md:grid-cols-[1fr_220px_220px] md:p-5">
        <label className="relative block">
          <span className="sr-only">Search sessions</span>
          <Search size={17} className="absolute left-4 top-1/2 -translate-y-1/2 text-[#687b8c]" aria-hidden="true" />
          <input
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search sessions or speakers"
            className="w-full rounded-xl border border-[#c9d8e6] py-3 pl-11 pr-4 text-sm text-[#102a43] placeholder:text-[#8a9aab] focus:border-[#0A66C2] focus:outline-none focus:ring-2 focus:ring-[#0A66C2]/15"
          />
        </label>
        <label className="block">
          <span className="sr-only">Filter by status</span>
          <select value={status} onChange={(event) => setStatus(event.target.value)} className="w-full rounded-xl border border-[#c9d8e6] bg-white px-3 py-3 text-sm text-[#102a43] focus:border-[#0A66C2] focus:outline-none focus:ring-2 focus:ring-[#0A66C2]/15">
            {statusOptions.map((option) => <option value={option.value} key={option.value}>{option.label}</option>)}
          </select>
        </label>
        <label className="block">
          <span className="sr-only">Filter by topic</span>
          <select value={topic} onChange={(event) => setTopic(event.target.value)} className="w-full rounded-xl border border-[#c9d8e6] bg-white px-3 py-3 text-sm text-[#102a43] focus:border-[#0A66C2] focus:outline-none focus:ring-2 focus:ring-[#0A66C2]/15">
            {topics.map((option) => <option value={option} key={option}>{option}</option>)}
          </select>
        </label>
      </div>
      <p className="mt-4 text-sm text-[#687b8c]" aria-live="polite">{filteredSessions.length}{' '}{filteredSessions.length === 1 ? 'session' : 'sessions'} shown</p>
      {filteredSessions.length ? (
        <div className="mt-4 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {filteredSessions.map((session) => <SessionCard key={session.id} session={session} />)}
        </div>
      ) : (
        <div className="mt-5 rounded-2xl border border-dashed border-[#b9cbdb] bg-white px-6 py-12 text-center">
          <p className="text-base font-semibold text-[#102a43]">Nothing to show yet</p>
          <p className="mx-auto mt-2 max-w-xl text-sm leading-6 text-[#53677d]">{emptyMessage}</p>
        </div>
      )}
    </div>
  )
}
